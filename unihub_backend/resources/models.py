from django.db import models
from django.utils.text import slugify
from django.conf import settings

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name="分類名稱")
    slug = models.SlugField(max_length=120, unique=True, blank=True, verbose_name="Slug")
    description = models.TextField(blank=True, null=True, verbose_name="描述")
    parent_category = models.ForeignKey(
        'self',
        null=True,
        blank=True,
        related_name='subcategories',
        on_delete=models.SET_NULL, # Or models.CASCADE if subcategories should be deleted
        verbose_name="父分類"
    )

    class Meta:
        verbose_name = "資源分類"
        verbose_name_plural = "資源分類"
        ordering = ['name']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name) # Consider a more robust slugification for Chinese
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name="標籤名稱")
    slug = models.SlugField(max_length=120, unique=True, blank=True, verbose_name="Slug")

    class Meta:
        verbose_name = "資源標籤"
        verbose_name_plural = "資源標籤"
        ordering = ['name']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name) # Consider a more robust slugification for Chinese
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

# Define a helper function for attachment upload path
def resource_attachment_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/resource_<id>/<filename>
    return f'resource_{instance.resource.id}/{filename}'

class Resource(models.Model):
    STATUS_CHOICES = (
        ('pending_review', '待審核'),
        ('approved', '已批准'),
        ('rejected', '已拒絕'),
    )

    title = models.CharField(max_length=255, verbose_name="資源標題")
    description = models.TextField(verbose_name="描述")
    uploader = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.SET_NULL, # Or models.CASCADE if resources should be deleted with user
        null=True, # Allow anonymous uploads if desired, or set to False
        related_name='uploaded_resources',
        verbose_name="上傳者"
    )
    category = models.ForeignKey(
        Category, 
        on_delete=models.SET_NULL,
        null=True, # Or False if category is mandatory
        related_name='resources',
        verbose_name="分類"
    )
    tags = models.ManyToManyField(Tag, blank=True, related_name='resources', verbose_name="標籤")
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending_review',
        verbose_name="狀態"
    )
    upload_date = models.DateTimeField(auto_now_add=True, verbose_name="上傳日期")
    last_modified_date = models.DateTimeField(auto_now=True, verbose_name="最後修改日期")
    view_count = models.PositiveIntegerField(default=0, verbose_name="瀏覽次數")
    download_count = models.PositiveIntegerField(default=0, verbose_name="下載次數")
    # average_rating can be calculated dynamically or updated via signals/tasks
    # For now, we can omit it or add it as a simple FloatField if manual input is expected initially
    # average_rating = models.FloatField(default=0.0, verbose_name="平均評分")

    class Meta:
        verbose_name = "資源"
        verbose_name_plural = "資源"
        ordering = ['-upload_date']

    def __str__(self):
        return self.title

class Attachment(models.Model):
    resource = models.ForeignKey(Resource, related_name='attachments', on_delete=models.CASCADE, verbose_name="所屬資源")
    file = models.FileField(upload_to=resource_attachment_path, verbose_name="文件")
    # filename can be derived from file.name if needed, or stored if you want to allow custom display names
    # filename = models.CharField(max_length=255, blank=True, verbose_name="文件名") 
    file_type = models.CharField(max_length=50, blank=True, verbose_name="文件類型") # e.g., PDF, DOCX, IMAGE, VIDEO
    upload_date = models.DateTimeField(auto_now_add=True, verbose_name="上傳日期")

    class Meta:
        verbose_name = "附件"
        verbose_name_plural = "附件"
        ordering = ['upload_date']

    def __str__(self):
        return f"{self.resource.title} - {self.file.name.split('/')[-1]}"

class Rating(models.Model):
    resource = models.ForeignKey(Resource, related_name='ratings', on_delete=models.CASCADE, verbose_name="資源")
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='ratings', on_delete=models.CASCADE, verbose_name="用戶")
    score = models.PositiveSmallIntegerField(default=1, verbose_name="評分")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="創建時間")

    class Meta:
        verbose_name = "評分"
        verbose_name_plural = "評分"
        unique_together = ('resource', 'user')
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user.username} -> {self.resource.title}: {self.score}"

    # Potentially add a method to automatically set filename and file_type on save
    # def save(self, *args, **kwargs):
    #     if not self.filename and self.file:
    #         self.filename = self.file.name.split('/')[-1]
    #     # Logic to determine file_type can be added here based on file extension
    #     super().save(*args, **kwargs)
