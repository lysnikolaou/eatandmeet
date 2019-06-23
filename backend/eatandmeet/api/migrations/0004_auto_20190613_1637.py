# Generated by Django 2.2.2 on 2019-06-13 16:37

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20190613_1637'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_admins',
            field=models.ManyToManyField(related_name='event_admins', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='event',
            name='event_members',
            field=models.ManyToManyField(related_name='event_members', to=settings.AUTH_USER_MODEL),
        ),
    ]