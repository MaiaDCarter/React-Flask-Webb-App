from django.shortcuts import render
from rest_framework import viewsets

from quiz.serializers import QuestionSerializer
from quiz.models import Question

class QuestionViewSet(viewsets.ModelViewSet):
   queryset = Question.objects.all()
   serializer_class = QuestionSerializer
   
   