from .models import Lead
from .serializers import LeadSerializer
from rest_framework import generics

#look at the documentation for django rest framework generics
#look for the ListCreateAPIView.
# you will see that it needs a queryset and a serializer_class
# and thats all you need to GET and POST requests.
#from the docs itself:
"""
ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.

Provides get and post method handlers."""
class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
