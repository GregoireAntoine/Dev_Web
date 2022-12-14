# Generated by Django 4.0.5 on 2022-07-24 08:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ref', models.CharField(max_length=25, verbose_name='Reference')),
                ('date_order', models.DateField(verbose_name='Date de commande')),
                ('date_takeaway', models.DateField(verbose_name="Date d'enlèvement")),
                ('total_quantity', models.FloatField(verbose_name='Quantité total')),
                ('total_price', models.FloatField(verbose_name='Prix total')),
                ('user_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25, verbose_name='Nom')),
                ('available_on_website', models.BooleanField(default=True)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25, verbose_name='Nom')),
                ('price', models.FloatField()),
                ('image', models.ImageField(blank=True, upload_to='upload/')),
                ('count_sold', models.IntegerField(default=0)),
                ('available_on_website', models.BooleanField(default=True)),
                ('product_category_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='boulangerie.productcategory')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='OrderLine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.FloatField()),
                ('quantity', models.FloatField()),
                ('image', models.CharField(default='5', max_length=50, verbose_name='image')),
                ('order_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='boulangerie.order')),
                ('product_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='boulangerie.product')),
            ],
        ),
    ]
