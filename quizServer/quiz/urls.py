from django.urls import include, path

from rest_framework import routers

from quiz.views import QuestionViewSet

router = routers.DefaultRouter()
router.register(r'question', QuestionViewSet)

urlpatterns = [
   path('', include(router.urls)),
]