Proyecto Final: Aplicación BackEnd.
 
El proyecto desarrollado consiste en el desarrollo backend de una aplicación para un ecommerce.
En la terminal el servidor se levanta usando: node src/server.js prod mongo.
El enlace: http://localhost:8080/docs/ lo dirige a Swagger donde encontrará los endpoints solicitados.
También puede acceder al registro para un usuario desde : http://localhost:8080/api/views/register
Y al login desde: http://localhost:8080/api/views/login

Además, adjunto los datos de los archivos.env

.env.dev

NODE_ENV=dev
MONGO_URL="mongodb://localhost:27017"
PORT=3005
SECRET_KEY="986"
CLIENT_ID= "Iv23lixixehE9fpD7PnZ"
CLIENT_SECRET= "0e99ea2c21158ce8d6111edaa6dc08c9d501092b"
CALLBACK_URL='http://localhost:8080/api/users/access'

.env.prod

NODE_ENV=prod
MONGO_URL="mongodb+srv://omarpf86:1234@cluster0.an7me.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
PORT=8080
SECRET_KEY="986"
CLIENT_ID= "Iv23lixixehE9fpD7PnZ"
CLIENT_SECRET= "0e99ea2c21158ce8d6111edaa6dc08c9d501092b"
CALLBACK_URL='http://localhost:8080/api/users/access'
PORT_GMAIL=465
EMAIL_GMAIL="omarpf86@gmail.com"
PASS_GMAIL="ssjh hayn skoz phqi" 

