from rest_framework import serializers
from .models import Banner

class BannerModelSerializer(serializers.ModelSerializer):
    '''轮播广告的序列化器'''
    # 模型序列化字段声明
    class Meta:
        model = Banner
        fields = ["image_url", "link"]


from .models import Nav
class NavModelSerializer(serializers.ModelSerializer):
    """导航菜单序列化器"""
    class Meta:
        model = Nav
        fields = ["title","link","is_site"]
