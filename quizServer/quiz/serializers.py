from rest_framework import serializers

from quiz.models import Question

class QuestionSerializer(serializers.ModelSerializer):
   class Meta:
       model = Question
       fields = ('question_text', 'answer_text')
