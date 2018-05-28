1. Authorize HTTP v1 send requests:
curl -X POST -H "Authorization: Beare AAAACnGjUfY:APA91bEqWPvvKL047X_heqKdicHUy83-SJimyD7i16vGxb2CXSw1F7eUZ-aVFMlF4UK-FjhCwjiyIKQPQiYFPl-Qt_WpdQetZQ1ZikHU5XTIsWc65T8_yT-btU7oWq2XUhGe8diyXWjm4BJQgNFe87tTUUdXTlbSgw" -H "Content-Type: application/json" -d '{
"message":{
  "notification": {
    "title": "FCM Message",
    "body": "This is an FCM Message",
  },
  "token": "dUQJNo9o2lw:APA91bGXgOGsRa1wxeQCp4WuAvv9UzQYknluVMydGV_C-Sa76xwU8_Oc1-hgfDEockpBIIZqwP9pjzGkq9BCFyehVenHoHcXZ5dd1wVPlNCgFDh1QwdLOnnpi7skMh0s3MebKfHERUNX"
  }
}' https://fcm.googleapis.com/v1/projects/my-project-test-1054/messages:send

2. Authorize legacy protocol send requests (work for this demo):
curl -X POST -H "Authorization: key=AAAACnGjUfY:APA91bEqWPvvKL047X_heqKdicHUy83-SJimyD7i16vGxb2CXSw1F7eUZ-aVFMlF4UK-FjhCwjiyIKQPQiYFPl-Qt_WpdQetZQ1ZikHU5XTIsWc65T8_yT-btU7oWq2XUhGe8diyXWjm4BJQgNFe87tTUUdXTlbSgw" -H "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d '{
"notification": {
    "title": "Hi Duc",
    "body": "How are you?",
  },
  "to": "dUQJNo9o2lw:APA91bGXgOGsRa1wxeQCp4WuAvv9UzQYknluVMydGV_C-Sa76xwU8_Oc1-hgfDEockpBIIZqwP9pjzGkq9BCFyehVenHoHcXZ5dd1wVPlNCgFDh1QwdLOnnpi7skMh0s3MebKfHERUNX"
  }
'

3. References:
- https://firebase.google.com/docs/cloud-messaging/js/client
- https://github.com/firebase/quickstart-js/blob/master/messaging/README.md
