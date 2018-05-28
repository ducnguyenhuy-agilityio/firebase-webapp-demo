1. Authorize HTTP v1 send requests:
curl -X POST -H "Authorization: Beare <server_key>" -H "Content-Type: application/json" -d '{
"message":{
  "notification": {
    "title": "FCM Message",
    "body": "This is an FCM Message",
  },
  "token": "<client_app_token>"
  }
}' https://fcm.googleapis.com/v1/projects/my-project-test-1054/messages:send

2. Authorize legacy protocol send requests (work for this demo):
curl -X POST -H "Authorization: key=<server_key>" -H "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d '{
"notification": {
    "title": "Hi Duc",
    "body": "How are you?",
  },
  "to": "<client_app_token (messaging.getToken())>"
  }
'

3. References:
- https://firebase.google.com/docs/cloud-messaging/js/client
- https://github.com/firebase/quickstart-js/blob/master/messaging/README.md
