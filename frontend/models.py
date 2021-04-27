# from django.db import models
from django.contrib.gis.db import models
from django.contrib.gis.geos import Point
# Create your models here.


class Baseny(models.Model):
    id = models.BigIntegerField(primary_key=True)
    nazwa = models.CharField(max_length=80, blank=True, null=True)
    # geom = models.PointField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Baseny'


class Cmentarze(models.Model):
    id = models.BigIntegerField(primary_key=True)
    nazwa = models.CharField(max_length=80, blank=True, null=True)
    geom = models.PointField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Cmentarze'


class Kina(models.Model):
    id = models.BigIntegerField(primary_key=True)
    geom = models.PointField(blank=True, null=True)
    nazwa = models.CharField(max_length=80, blank=True, null=True)
    godzina_otwarcia = models.CharField(max_length=100, blank=True, null=True)
    # Field name made lowercase. Field renamed to remove unsuitable characters.
    link_do_repertuaru = models.CharField(
        db_column='link_do_repertuaru', max_length=200, blank=True, null=True)
    # Field name made lowercase.
    cena = models.CharField(
        db_column='cena', max_length=300, blank=True, null=True)
    # Field name made lowercase.
    telefon = models.CharField(
        db_column='telefon', max_length=20, blank=True, null=True)
    adres = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Kina'


class Kluby(models.Model):
    id = models.BigIntegerField(primary_key=True)
    geom = models.PointField(blank=True, null=True)
    nazwa = models.CharField(max_length=80, blank=True, null=True)
    # Field name made lowercase. Field renamed to remove unsuitable characters.
    strona_internetowa = models.CharField(
        db_column='strona internetowa', max_length=200, blank=True, null=True)
    # Field name made lowercase.
    adres = models.CharField(
        db_column='adres', max_length=150, blank=True, null=True)
    # Field name made lowercase.
    telefon = models.CharField(
        db_column='telefon', max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Kluby'


class Silownie(models.Model):
    id = models.BigIntegerField(primary_key=True)
    geom = models.PointField(blank=True, null=True)
    nazwa = models.CharField(max_length=80, blank=True, null=True)
    adres = models.CharField(max_length=200, blank=True, null=True)
    cena = models.CharField(max_length=200, blank=True, null=True)
    # Field renamed to remove unsuitable characters.
    godziny_otwarcia = models.CharField(
        db_column='godziny otwarcia', max_length=200, blank=True, null=True)
    telefon = models.CharField(max_length=20, blank=True, null=True)
    strona_internetowa = models.CharField(
        db_column='strona internetowa', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Silownie'


class Teatry(models.Model):
    gid = models.AutoField(primary_key=True)
    id = models.BigIntegerField(blank=True, null=True)
    nazwa = models.CharField(max_length=80, blank=True, null=True)
    geom = models.PointField(srid=4326, blank=True, null=True)
    # Field name made lowercase.
    adres = models.CharField(
        db_column='adres', max_length=254, blank=True, null=True)
    # Field name made lowercase.
    cennik = models.CharField(
        db_column='cennik', max_length=254, blank=True, null=True)
    # Field name made lowercase. Field renamed to remove unsuitable characters.
    strona_internetowa = models.CharField(
        db_column='strona internetowa', max_length=254, blank=True, null=True)
    telefon = models.CharField(max_length=20, blank=True, null=True)
    # Field renamed to remove unsuitable characters.
    link_do_repertuaru = models.CharField(
        db_column='link do repertuaru', max_length=254, blank=True, null=True)
    # Field renamed to remove unsuitable characters.
    godziny_otwarcia = models.CharField(
        db_column='godziny otwarcia', max_length=254, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Teatry'


class Zabytki(models.Model):
    gid = models.AutoField(primary_key=True)
    id = models.BigIntegerField(blank=True, null=True)
    id_zabytek = models.BigIntegerField(blank=True, null=True)
    nazwa = models.CharField(max_length=100, blank=True, null=True)
    godziny_otwarcia = models.CharField(max_length=100, blank=True, null=True)
    cena = models.CharField(max_length=100, blank=True, null=True)
    adres = models.CharField(max_length=50, blank=True, null=True)
    telefon = models.CharField(max_length=20, blank=True, null=True)
    geom = models.PointField(srid=4326, blank=True, null=True)
    typ = models.CharField(max_length=40, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Zabytki'


class Srodowisko(models.Model):
    gid = models.AutoField(primary_key=True)
    id = models.BigIntegerField(blank=True, null=True)
    nazwa = models.CharField(max_length=80, blank=True, null=True)
    geom = models.PointField(srid=4326, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Srodowisko'


class Festiwale(models.Model):
    gid = models.AutoField(primary_key=True)
    id = models.DecimalField(
        max_digits=65535, decimal_places=65535, blank=True, null=True)
    nazwa = models.CharField(max_length=80, blank=True, null=True)
    Informacje = models.CharField(max_length=254, blank=True, null=True)
    # Field renamed to remove unsuitable characters.
    czas_trwania = models.CharField(
        db_column='Czas trwania', max_length=254, blank=True, null=True)
    # Field renamed to remove unsuitable characters.
    strona_internetowa = models.CharField(
        db_column='Strona internetowa', max_length=254, blank=True, null=True)
    geom = models.PointField(srid=4326, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Festiwale'


class Muzea(models.Model):
    gid = models.AutoField(primary_key=True)
    id = models.DecimalField(
        max_digits=65535, decimal_places=65535, blank=True, null=True)
    nazwa = models.CharField(max_length=100, blank=True, null=True)
    godziny_otwarcia = models.CharField(
        db_column='godziny otwarcia', max_length=100, blank=True, null=True)
    cena = models.CharField(max_length=100, blank=True, null=True)
    adres = models.CharField(max_length=50, blank=True, null=True)
    telefon = models.CharField(max_length=20, blank=True, null=True)
    geom = models.PointField(srid=4326, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Muzea'


class Pomniki(models.Model):
    id = models.DecimalField(
        primary_key=True, max_digits=65535, decimal_places=65535, blank=True, null=False)
    nazwa = models.CharField(
        db_column='nazwa', max_length=254, blank=True, null=True)
    imie_i_nazwisko_autora = models.CharField(
        db_column='imię i nazwisko autora', max_length=254, blank=True, null=True)
    typ = models.CharField(max_length=254, blank=True, null=True)
    geom = models.MultiPointField(srid=4326, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Pomniki'


class Propozycja(models.Model):
    szerokosc = models.CharField(max_length=100)
    dlugosc = models.CharField(max_length=100)
    nazwa = models.CharField(max_length=100)
    opis = models.CharField(max_length=256)


class PropozycjePkt(models.Model):
    szerokosc = models.CharField(max_length=100)
    dlugosc = models.CharField(max_length=100)
    nazwa = models.CharField(max_length=100)
    opis = models.CharField(max_length=256)
