from django.contrib import admin
from .models import Category, Tag, Resource, Attachment

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'parent_category', 'description')
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}
    list_filter = ('parent_category',)

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}

class AttachmentInline(admin.TabularInline):
    model = Attachment
    extra = 1 # Number of empty forms to display
    readonly_fields = ('upload_date',)

@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploader', 'category', 'status', 'upload_date', 'view_count', 'download_count')
    search_fields = ('title', 'description', 'uploader__username') # Search by uploader's username
    list_filter = ('status', 'category', 'upload_date', 'tags')
    filter_horizontal = ('tags',) # Use a more user-friendly widget for ManyToManyField
    readonly_fields = ('upload_date', 'last_modified_date', 'view_count', 'download_count')
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'uploader', 'category', 'tags')
        }),
        ('狀態與統計', {
            'fields': ('status', 'upload_date', 'last_modified_date', 'view_count', 'download_count'),
            'classes': ('collapse',) # Make this section collapsible
        }),
    )
    inlines = [AttachmentInline]

# Alternatively, for simpler registration:
# admin.site.register(Category, CategoryAdmin)
# admin.site.register(Tag, TagAdmin)
# admin.site.register(Resource, ResourceAdmin)
# admin.site.register(Attachment) # Attachment can be managed inline with Resource
