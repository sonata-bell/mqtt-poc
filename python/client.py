import paho.mqtt.client as mqtt


def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))


def on_publish(client, userdata, mid):
    print("In on_pub callback mid= ", mid)


def on_message(client, userdata, msg):
    print(msg.topic + " " + str(msg.payload))


client = mqtt.Client()
client.on_connect = on_connect
client.on_publish = on_publish
client.on_message = on_message

client.connect("sblabs.iptime.org", 1883)

client.subscribe("topic")

client.publish("topic", 'payload')

client.loop_forever()
