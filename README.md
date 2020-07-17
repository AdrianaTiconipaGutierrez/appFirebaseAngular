# APLICACION WEB CON ANGULAR Y FIREBASE

En este proyecto implementaremos las siguientes herramientas de Firebase:  Firestore, Firebase Storage, Cloud Functions and Hosting

Consulte: https://firebase.google.com/docs para obtener más información.

### Este proyecto se generó con [Angular CLI] (https://github.com/angular/angular-cli) versión 9.1.11.

# EMPECEMOS!!!!

![Firebase Study Jam DIA 1](https://user-images.githubusercontent.com/39227411/87808661-197b9d00-c828-11ea-8d35-f73133c0c367.jpg)

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
  
  -Agrgar Proyecto
  
  ![AGREGAR PROYECTO](https://user-images.githubusercontent.com/39227411/87821025-2060da80-c83d-11ea-836b-4ed5d090139f.PNG)

  
  - HABILITAMOS HERRAMIENTAS: DATABASE Y STORAGE EN LA CONSOLA
  
  ![21](https://user-images.githubusercontent.com/39227411/87821497-f4922480-c83d-11ea-84d4-0341fdca2c97.PNG)
![23](https://user-images.githubusercontent.com/39227411/87821501-f5c35180-c83d-11ea-8948-7a64162e8af6.PNG)
![24](https://user-images.githubusercontent.com/39227411/87821509-f78d1500-c83d-11ea-96c9-f40424e0cd5b.PNG)
![25](https://user-images.githubusercontent.com/39227411/87821517-f8be4200-c83d-11ea-8e0a-28ef08a9c3d4.PNG)
![26](https://user-images.githubusercontent.com/39227411/87821522-fa880580-c83d-11ea-915e-7cb3adb6f29f.PNG)
![27](https://user-images.githubusercontent.com/39227411/87821527-fbb93280-c83d-11ea-9271-4cf06edaa246.PNG)
![28](https://user-images.githubusercontent.com/39227411/87821535-fe1b8c80-c83d-11ea-9e8b-7ffc7f8bf62c.PNG)
![29](https://user-images.githubusercontent.com/39227411/87821538-ff4cb980-c83d-11ea-8936-c72dfc8f9c50.PNG)
![30](https://user-images.githubusercontent.com/39227411/87821541-007de680-c83e-11ea-97bf-f98d68cee6d0.PNG)
![32](https://user-images.githubusercontent.com/39227411/87821547-01af1380-c83e-11ea-88d1-7175c57c9e01.PNG)

  
  - Agregamos Firebase a la app WEB
  
  - Copiamos la variable config  y lo copiamos en environment.ts
  
   #### src/app/environments/environment.ts
    
    ![environes](https://user-images.githubusercontent.com/39227411/87818632-e2fa4e00-c838-11ea-9f1e-7aa75597fcdc.PNG)


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

## Importamos  firestore module fire storage module

INYECTAMOS LAS 3 DEPENDENCIAS  DE FIRESTORE EN IMPORTS

Import {AngualrFirestoreModule} from @angualr/fire/firestore

Import {AngualrFireStorageModule, StorageBuckket} from @angualr/fire/storage
###//OJO EN VERSION FIRE 6 VAMBIO DE STORAGE BUCKET A BUCKET

Import {AngualrFireModule} from @angular/fire/


## En Imports

AngularFireModule.initializeApp(environment.firebaseConfig)

AngularFireStorageModule

AngularFirestoreModule

![IMPORTS](https://user-images.githubusercontent.com/39227411/87819837-e989c500-c83a-11ea-98f0-d029e6790663.PNG)

En imports 

![IMPORET](https://user-images.githubusercontent.com/39227411/87819908-11792880-c83b-11ea-9e24-ae37ac949e9b.PNG)

## Para Storage

PARA EL BUCKET EN PROVIDERS:  CONGIGURAMOS NUESTRO BUCKET EN FIREBASE

  Provide: StorageBucket, useValue ‘URL DE STORAGE’
  
  ![storage](https://user-images.githubusercontent.com/39227411/87820030-4d13f280-c83b-11ea-81fa-827947bb48b5.PNG)

### Ojo importamos environment

#  FIREBASE TOOLS

CONEXION CON FIREBASE


npm install -g firebase-tools
inicio de sesión de firebase
https://firebase.google.com/docs/cli#mac-linux-npm
## Instalar fuego angular

ng add @ angular / fuego
## 1 Crear un proyecto en firebase
## 2 aplicación registramos en firebase
## 3 Agregamos en Medio Ambiente
## Firebase CLI

## Toma tu configuración web de Firebase
NECESITAMOS instalar el nodo js
## Ayuda adicional
## Ayuda adicional
## Ayuda adicional
## Ayuda adicional
## Ayuda adicional
