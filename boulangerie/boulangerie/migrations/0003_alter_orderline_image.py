# Generated by Django 4.0.5 on 2022-07-27 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boulangerie', '0002_alter_order_date_order_alter_order_date_takeaway_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderline',
            name='image',
            field=models.CharField(blank=True, default='5', max_length=50, null=True, verbose_name='image'),
        ),
    ]
