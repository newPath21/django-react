# Generated by Django 3.2.9 on 2021-11-28 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='isDelivered',
            field=models.BooleanField(default=False),
        ),
    ]
