# Reto Biblioteca
CRUD para una biblioteca

#Programas que se necesitan instalados

Postman: https://www.postman.com/downloads/

Docker: https://docs.docker.com/desktop/windows/install/

Node: https://nodejs.org/es/download/


#Pasos a seguir para hacer funcionar el programa

-Iniciar Docker

###Correr en la terminal del proyecto los siguientes comandos

-npm i. Instalara todas las dependencias necesarias para el proyecto

-docker-compose up -d postgres. Levantara la base de datos de postgres

-docker-compose up -d pgadmin. Nos permitira tener la interfaz grafica de postgres

-Entrar al http://localhost:5050/

#Las siguientes credenciales se encuentran en la carpeta docker-compose.yml

-Ingresar la cuenta admin@mail.com y la contrasena root

-En la opcion servers le damos click derecho, register, server

![image](https://user-images.githubusercontent.com/53787821/172740451-d4813cb4-ed60-453e-a379-e47046ecca79.png)

-Ponemos cualquier nombre al servidor

![image](https://user-images.githubusercontent.com/53787821/172740490-40a210a2-285b-4dfd-8249-11ce78b18c3e.png)

-ahora pasamos a Connection

#para conocer el HOST name/address debemos hacer lo siguiente en nuestra terminal

![image](https://user-images.githubusercontent.com/53787821/172740593-38c33be6-56a9-4fe5-a31f-3fc22f97f880.png)

-Debemos colocar el CONTAINER ID de esta opcion en el HOST name

-En username ponemos 'nico'

-en contrasena ponemos 'admin123'

-en Maintenance database ponemos 'my_store'

![image](https://user-images.githubusercontent.com/53787821/172740827-152c26a6-f601-48ee-a754-fa996ca1a277.png)

-Luego correremos el comando npm run dev en nuestra terminal del proyecto y este empezara a correr y ya podremos insertar los datos con SQL o con peticiones HTTP desde postman
