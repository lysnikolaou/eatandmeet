from rest_framework import serializers, fields

from .models import Event, Comment, TOPIC_CHOICES


class EventSerializer(serializers.ModelSerializer):
    topics = fields.MultipleChoiceField(choices = TOPIC_CHOICES)

    class Meta:
        model = Event
        fields = ('id', 'event_creator', 'title', 'date', 'topics', 'location', 'event_members', 'event_admins','slots','description')
        read_only_fields = ('event_creator', 'id')
    

    def update(self, instance, validated_data):
        event_members = validated_data.get('event_members', instance.event_members)
        # instance.description = validated_data.get('description,instance.id')
        # instance.date  = validated_data.get('date',instance.date)
        # event_to_check = events.get(id=id)
        # remaining_slots = event_to_check.slots
        isTypeOf = type(event_members)
        members_number = ''.join(event_members)
        instance.title = f'test {isTypeOf} and the number is '

        instance.save() 
        return instance


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('event', 'user', 'date', 'text', 'id')
        read_only_fields = ('event', 'user', 'date', 'id')
