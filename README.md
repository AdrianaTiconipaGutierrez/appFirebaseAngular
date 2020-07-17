# Aplicación web con Angular y firebase
En este proyecto implementaremos las siguientes herramientas de Firebase:  Firestore, Firebase Storage, Cloud Functions and Hosting

Consulte: https://firebase.google.com/docs para obtener más información.

Este proyecto se generó con [Angular CLI] (https://github.com/angular/angular-cli) versión 9.1.11.

# Empecemos!!

![Firebase Study Jam DIA 1](https://user-images.githubusercontent.com/39227411/87808661-197b9d00-c828-11ea-8d35-f73133c0c367.jpg)
# Crear un proyecto en Angular
## 1. Instale el nodo node.js org: instale la última versión estable

Node.JS es JavaScript en el lado del servidor. NPM es un gestor de paquetes para este entorno.

  ### https://nodejs.org/en/download/
  ### nodo –versión
  
 En este proyecto usamos NODE 10 (Necesitamos una versión mínima que sea 6.9 para construir una aplicación angular).
 
## 2. Necesitamos una herramienta NODE PACKAGE MANAGER NPM
(NPM)  para instalar bibliotecas de terceros, una de estas bibliotecas es ANGULAR/CLI, que significa interfaz de línea de comandos, es una herramienta de línea de comandos que usamos para crear un nuevo proyecto angular o generar algún código repetitivo, así como crear paquetes desplegables

  ### npm install -g @ angular / cli
  ### npm install -g @angular/cli@9.x.x 
  ### ng –version
 
# 3. ESTRUCTURA ANGULAR
El módulo es un contenedor de un grupo de componentes relacionados

![STRUCTURE PROJECT](https://user-images.githubusercontent.com/39227411/87810756-7af13b00-c82b-11ea-969a-a97d5e868cb0.jpg)

¿Cómo funciona Angular?

![esquema](https://user-images.githubusercontent.com/39227411/87809518-85aad080-c829-11ea-9fac-e95f316ea58f.gif)

# CREACION DE UN NUEVO PROYECTO EN ANGULAR  

## 4. Crear un proyecto, componentes, modelos y servicios.

 ### ng new nombreProyecto
 ### ng g c nameComponent
 ### ng g s nameService
  
## 5. Asegúrese de que nuestro proyecto funcione: tenemos un servidor de desarrollo en vivo que escucha en localhotsport 4200

 ###   ng serve -o

## 6. En este proyecto utilizamos material angular:

 ###   ng add @ angular / material
 
 Para mas informacion visitar: https://material.angular.io/
 
# ESTRUCTURA DE UN PROYECTO EN ANGULAR

Visual Studio Code

# CONEXION CON FIREBASE

Requisito Instalar Node.js con nvm (Node Version Manager).

Cuando lo hagas, se instalarán automáticamente las herramientas de comando de npm.

## Creacion de un Proyecto de Firebase

  Consola de Firebase
  
  Dasboard de Firebase
  
  Agregamos Firebase a la app WEB
  
  Copiamos la variable config  y lo copiamos en environment.ts
  
    src/app/environments/environment.ts
    
    ![environes](https://user-images.githubusercontent.com/39227411/87818632-e2fa4e00-c838-11ea-9f1e-7aa75597fcdc.PNG)


# INSTALAMOS FIRESTORE Y STORAGE  EN ANGULAR
 
Para esto necesitamos  el paquete angular fire 2

## ANgular Fire 2

AngularFire2 es la librería que se usa en angular para acceder a bases de datos firebase, posee una serie de objetos para acceder a tus documentos de FireStore o RealTime Data Base.

https://github.com/angular/angularfire

## Como instalamos? 


npm install firebase @angular/fire --save

ng add @angular/fire

Escogemos nuestro Proyecto

### Instala la version "@angular/fire": "^6.0.2"


## Y empezamos las importaciones en app.module.ts

Modificamos el Archivo 

src/app/app.module.ts

## Importamos  firestore module fire storage module

INYECTAMOS LAS 3 DEPENDENCIAS  DE FIRESTORE EN IMPORTS

Import {AngualrFirestoreModule} from @angualr/fire/firestore

Import {AngualrFireStorageModule, StorageBuckket} from @angualr/fire/storage
###//OJO EN VERSION FIRE 6 VAMBIO DE STORAGE BUCKET A BUCKET

Import {AngualrFireModule} from @angular/fire/

## En Imports

AngularFireModule.initializeApp(environment.firebaseConfig)

AngularFireStorageModule

AngularFirestoreModule,

## Para Storage

PARA EL BUCKET EN PROVIDERS:  CONGIGURAMOS NUESTRO BUCKET EN FIREBASE

  Provide: StorageBucket, useValue ‘URL DE STORAGE’

###Ojo importamos environment


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
