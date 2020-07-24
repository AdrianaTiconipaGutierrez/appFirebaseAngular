# APLICACION WEB CON ANGULAR Y FIREBASE

En este proyecto implementaremos las siguientes herramientas de Firebase:  Firestore, Firebase Storage, Cloud Functions and Hosting

Consulte: https://firebase.google.com/docs para obtener más información.

### Este proyecto se generó con [Angular CLI] (https://github.com/angular/angular-cli) versión 9.1.11.

# EMPECEMOS!!!!

![Firebase Study Jam DIA 1](https://user-images.githubusercontent.com/39227411/87808661-197b9d00-c828-11ea-8d35-f73133c0c367.jpg)

## App Web

![Captura](https://user-images.githubusercontent.com/39227411/87821591-168ba700-c83e-11ea-9f7e-efb08cca2f3d.PNG)

### http://localhost:4200/home

TRABAJAREMOS CON FIRESTORE, STORAGE, FUNCTIONS Y HOSTING

https://github.com/AdrianaTiconipaGutierrez/firebaseFunctions

# CREAR PROYECTO EN ANGULAR

##  Instale el nodo node.js org: instale la última versión estable

Node.JS es JavaScript en el lado del servidor. NPM es un gestor de paquetes para este entorno.

-  ### https://nodejs.org/en/download/
-  ### nodo –versión
  
 En este proyecto usamos NODE 10 (Necesitamos una versión mínima que sea 6.9 para construir una aplicación angular).
 
##  Necesitamos una herramienta NODE PACKAGE MANAGER NPM
(NPM)  para instalar bibliotecas de terceros, una de estas bibliotecas es ANGULAR/CLI, que significa interfaz de línea de comandos, es una herramienta de línea de comandos que usamos para crear un nuevo proyecto angular o generar algún código repetitivo, así como crear paquetes desplegables

 - ### npm install -g @ angular / cli
 - ### npm install -g @angular/cli@9.x.x 
 - ### ng –version
 
#  ESTRUCTURA ANGULAR

El módulo es un contenedor de un grupo de componentes relacionados

![STRUCTURE PROJECT](https://user-images.githubusercontent.com/39227411/87810756-7af13b00-c82b-11ea-969a-a97d5e868cb0.jpg)

¿Cómo funciona Angular?

![esquema](https://user-images.githubusercontent.com/39227411/87809518-85aad080-c829-11ea-9fac-e95f316ea58f.gif)

# CREACION DE UN NUEVO PROYECTO EN ANGULAR  

##  Crear un proyecto, componentes, modelos y servicios.

- ### ng new nombreProyecto
- ### ng g c nameComponent
- ### ng g s nameService
  
##  Verificar el proyecto funciona en Angular

Tenemos un servidor de desarrollo en vivo que escucha en localhotsport 4200

- ###   ng serve -o

##  En este proyecto utilizamos material angular:

- ###   ng add @ angular / material
 
 Para mas informacion visitar: https://material.angular.io/
 
# ESTRUCTURA DE UN PROYECTO EN ANGULAR

Visual Studio Code

# CONEXION CON FIREBASE

- Requisito Instalar Node.js con nvm (Node Version Manager).

- Cuando lo hagas, se instalarán automáticamente las herramientas de comando de npm.

## Creación de un Proyecto de Firebase

  - Consola de Firebase
  
  - Dasboard de Firebase
  
  - Agregar Proyecto
  
  ![AGREGAR PROYECTO](https://user-images.githubusercontent.com/39227411/87821025-2060da80-c83d-11ea-836b-4ed5d090139f.PNG)
  
![21](https://user-images.githubusercontent.com/39227411/87821729-56528e80-c83e-11ea-8d92-5cd3cf20fcb5.PNG)

![23](https://user-images.githubusercontent.com/39227411/87821734-581c5200-c83e-11ea-848f-5f46edd6efdc.PNG)

  - HABILITAMOS HERRAMIENTAS: DATABASE Y STORAGE EN LA CONSOLA
  

![24](https://user-images.githubusercontent.com/39227411/87821775-666a6e00-c83e-11ea-8f98-e14acfcc7a96.PNG)

![25](https://user-images.githubusercontent.com/39227411/87821783-679b9b00-c83e-11ea-9b65-ebc25d8aa256.PNG)

![26](https://user-images.githubusercontent.com/39227411/87821787-68ccc800-c83e-11ea-8363-3c9a810651f8.PNG)

  
  - Agregamos Firebase a la app WEB
  
 ![27](https://user-images.githubusercontent.com/39227411/87821809-72eec680-c83e-11ea-8c76-4041aa3cfb79.PNG)
![28](https://user-images.githubusercontent.com/39227411/87821810-73875d00-c83e-11ea-9565-e7df1cfa5719.PNG)
![29](https://user-images.githubusercontent.com/39227411/87821815-75512080-c83e-11ea-9342-257bdb5e3fea.PNG)

  - Copiamos la variable config  y lo copiamos en environment.ts
  
  ![32](https://user-images.githubusercontent.com/39227411/87821825-77b37a80-c83e-11ea-94b5-8e423f56975b.PNG)
  
  
   #### src/app/environments/environment.ts
   
   ![wd](https://user-images.githubusercontent.com/39227411/87822006-c4975100-c83e-11ea-850d-d69b7cf87824.PNG)

    

# INSTALAMOS FIRESTORE Y STORAGE  EN ANGULAR
 
Para esto necesitamos  el paquete angular fire 2

## ANgular Fire 2

AngularFire2 es la librería que se usa en angular para acceder a bases de datos firebase, posee una serie de objetos para acceder a tus documentos de FireStore o RealTime Data Base.

https://github.com/angular/angularfire

## Como instalamos? 


### npm install firebase @angular/fire --save

### ng add @angular/fire

Escogemos nuestro Proyecto

#### Instala la version "@angular/fire": "^6.0.2"


## Y empezamos las importaciones en app.module.ts

Modificamos el Archivo 

### src/app/app.module.ts

INYECTAMOS LAS 3 DEPENDENCIAS  DE FIRESTORE EN IMPORTS
//IMPORTACIONES DE ANGULAR FIRE

import {AngularFirestoreModule } from '@angular/fire/firestore';
//OJO EN VERSION FIRE 6 VAMBIO DE STORAGE BUCKET A BUCKET StorageBucket
import { AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {AngularFireModule } from '@angular/fire';



### Import {AngualrFireModule} from @angular/fire/
###//OJO EN VERSION FIRE 6 VAMBIO DE STORAGE BUCKET A BUCKET

![IMPORTS](https://user-images.githubusercontent.com/39227411/87819837-e989c500-c83a-11ea-98f0-d029e6790663.PNG)


## En Imports

- AngularFireModule.initializeApp(environment.firebaseConfig)

- AngularFireStorageModule

- AngularFirestoreModule

En imports tenemos:

![IMPORET](https://user-images.githubusercontent.com/39227411/87819908-11792880-c83b-11ea-9e24-ae37ac949e9b.PNG)

## Para Storage

PARA EL BUCKET EN PROVIDERS:  CONGIGURAMOS NUESTRO BUCKET EN FIREBASE

  Provide: StorageBucket, useValue ‘URL DE STORAGE’
  
  ![storage](https://user-images.githubusercontent.com/39227411/87820030-4d13f280-c83b-11ea-81fa-827947bb48b5.PNG)

### Ojo importamos environment

![imagen](https://user-images.githubusercontent.com/39227411/87822776-0d033e80-c840-11ea-9240-c6304bac36dc.png)


# CONTINUAMOS CON STORAGE
Cloud Storage para Firebase es un servicio de almacenamiento de objetos potente, simple y rentable construido para la escala de Google.
## 1.  Firebase console
selecciona Storage y, luego, haz clic en Comenzar
## 2. Agrega la URL del depósito a la app
1. Ve a tu panel de Storage en Firebase console.

2. Haz clic en la pestaña Archivos y, luego, busca en el encabezado del visor de archivos.

3. Copia la URL al portapapeles. Por lo general, tiene el formato project-id.appspot.com.

4. Agrega el atributo firebaseConfig con la URL del depósito al objeto storageBucket de tu app de la siguiente manera:

Inicializar firebase
```
  firebaseConfig : {
    apiKey: "AIzaSyA2Whqyf42ZcSWgfj_R5KaOuTcUU2Pfn9E",
    authDomain: "fir-angular-94580.firebaseapp.com",
    databaseURL: "https://fir-angular-94580.firebaseio.com",
    projectId: "fir-angular-94580",
    storageBucket: "fir-angular-94580.appspot.com",
    messagingSenderId: "548074631601",
    appId: "1:548074631601:web:9a4f57a23e987e98980d90",
    measurementId: "G-2K0KMRT5XY"
  }
```
app.module.ts
// Obtener archivo
usamos eventos(change) cuando a cambaido el input 
let file= e.target.files[0];
//Create a storage ref: Creamos uan referencia de alamacenamiento 
let storageRef = firebase.storage().ref('folder_name/'+file.name');
// Subir el archivo a firebase storage
let task = storageRef.put(file); ///PUT SUBIRA EL ARCHIVO A STORAGE


# Crea una referencia
A fin de subir o descargar archivos, borrar archivos, obtener o actualizar metadatos, debes crear una referencia al archivo con el que deseas trabajar.

```
Obtenga una referencia al servicio de almacenamiento, que se utiliza para crear referencias en su depósito de almacenamiento
var storage = firebase.storage();
// Crea una referencia de almacenamiento desde nuestro servicio de almacenamiento
var storageRef = storage.ref();
```
# Propiedades de las referencias
```
// La ruta de referencia es: 'images / space.jpg'
// Esto es análogo a una ruta de archivo en el disco

spaceRef.fullPath;

// El nombre de referencia es el último segmento de la ruta completa: 'space.jpg'
// Esto es análogo al nombre del archivo

spaceRef.name;

// El depósito de referencia es el nombre del depósito de almacenamiento donde se almacenan los archivos

spaceRef.bucket;
```

