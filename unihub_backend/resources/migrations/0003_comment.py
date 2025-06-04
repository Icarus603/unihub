from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion

class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0002_resource_attachment'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(verbose_name='內容')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='建立時間')),
                ('parent_comment', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='replies', to='resources.comment', verbose_name='父評論')),
                ('resource', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='resources.resource', verbose_name='資源')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='用戶')),
            ],
            options={
                'verbose_name': '評論',
                'verbose_name_plural': '評論',
                'ordering': ['-created_at'],
            },
        ),
    ]
