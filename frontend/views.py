from django.shortcuts import render
from rest_framework.decorators import api_view
from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse,HttpResponseNotFound
from .models import Baseny,Kina,Silownie,Kluby,Baseny,Cmentarze,Teatry,Zabytki,Festiwale,Srodowisko,Muzea,Pomniki
from django.core.serializers import serialize
from .serializers import PropozycjeSerializer,PropozycjePktSerializer
from rest_framework.response import Response
#def post_list(request):


 #   punkty=Punkty.objects.all()
  #  pkt=Punkty.objects.filter().values('geom')[1]
   # return render(request,'strona/base.html',{'punkty': punkty,'pkt':pkt})
def test(request,warstwa):
    return HttpResponse(warstwa)
def geojson(request,warstwa):
	if warstwa=='Kina':
		model=Kina
	if warstwa=='Silownie':
		model=Silownie
	if warstwa=='Teatry':
		model=Teatry
	if warstwa=='Baseny':
		model=Baseny
	if warstwa=='Cmentarze':
		model=Cmentarze
	if warstwa=='Zabytki':
		model=Zabytki
	if warstwa=='Kluby':
		model=Kluby
	if warstwa=='Muzea':
		model=Muzea
	if warstwa=='Srodowisko':
		model=Srodowisko
	if warstwa=='Festiwale':
		model=Festiwale
	if warstwa=='Pomniki':
		model=Pomniki	
	obiekty=model.objects.all()
	dane=serialize('geojson',obiekty,geometry_field='geom')
	return HttpResponse(dane,content_type='application/vnd.geo+json')
# Create your views here.
def index(request):
    return render(request,'frontend/index.html')
@api_view(['POST'])
def sendtoadmin(request):
	if request.method == 'POST':
		serializer = PropozycjePktSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return HttpResponse("Wysłano")
		else:
			return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
