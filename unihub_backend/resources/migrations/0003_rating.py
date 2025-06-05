from django.db import migrations, models
import django.db.models.deletion
from django.conf import settings

class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0002_resource_attachment'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.PositiveSmallIntegerField(default=1, verbose_name='評分')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='創建時間')),
                ('resource', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ratings', to='resources.resource', verbose_name='資源')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ratings', to=settings.AUTH_USER_MODEL, verbose_name='用戶')),
            ],
            options={
                'verbose_name': '評分',
                'verbose_name_plural': '評分',
                'ordering': ['-created_at'],
                'unique_together': {('resource', 'user')},
            },
        ),
    ]
