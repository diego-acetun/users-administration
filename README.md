# Users Administration

## [Ver](https://users-administration.vercel.app/login)

Esta aplicación permite gestionar usuarios (CRUD de usuarios)

## Requerimientos

- Instalar [Node Js](https://nodejs.org/en/download/)

- Instalar [Ionic Cli](https://ionicframework.com/)

## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/diego-acetun/users-administration.git
```

Ir al directorio del proyecto

```bash
  cd users-administration
```

Instalar dependencias

```bash
  npm install
```

Iniciar servidor

```bash
  ionic serve
```

## División de directorios

### Components

- app
  - components
    - card
    - form-users
    - table

#### card

Este componente se utiliza para mostrar la
información de cada usuario. Se utiliza en la
pagina [user](https://github.com/diego-acetun/users-administration/blob/main/src/app/pages/users/user/user.page.html)

#### form-users

Este formulario se utiliza para crear y
actualizar los usuarios. Se utiliza en las
páginas [create-user](https://github.com/diego-acetun/users-administration/blob/main/src/app/pages/users/create-user/create-user.page.ts) y
[update-user](https://github.com/diego-acetun/users-administration/blob/main/src/app/pages/users/update-user/update-user.page.ts)

#### table

Este componente se utiliza para mostrar
a todos los usuarios en una tabla. Se utiliza en la
pagina [users](https://github.com/diego-acetun/users-administration/blob/main/src/app/pages/users/users.page.html)

### Guards

- app
  - guards
    - auth.guard.ts

#### auth.guard.ts

En este fichero se implementan los guards para
proteger las rutas, es utilizado en el archivo
[app-routing.module.ts](https://github.com/diego-acetun/users-administration/blob/main/src/app/app-routing.module.ts)

### Services

- app
  - services
    - alerts
      - alerts.service.ts
    - auth
      - auth.service.ts
    - users
      - users.service.ts

#### alerts.service.ts

En este fichero se implementan las alertas y
toasts para ser mostrados y notificar al usuario
de algun cambio. Se utiliza en los archivos
[auth.service.ts](https://github.com/diego-acetun/users-administration/blob/main/src/app/services/auth.service.ts)
y [users.service.ts](https://github.com/diego-acetun/users-administration/blob/main/src/app/services/users.service.ts)

#### auth.service.ts

En este fichero se maneja la autenticacion
de los usuarios, comprobando las credenciales
con la api. Se utilza en la pagina
[login.page.ts](https://github.com/diego-acetun/users-administration/blob/main/src/app/pages/login/login.page.ts)

#### users.service.ts

En este fichero se realiza el crud de usuarios.
Se utiliza en las páginas [create-user](https://github.com/diego-acetun/users-administration/blob/main/src/app/pages/users/create-user/create-user.page.ts),
[update-user](https://github.com/diego-acetun/users-administration/blob/main/src/app/pages/users/update-user/update-user.page.ts)
y [users](https://github.com/diego-acetun/users-administration/blob/main/src/app/pages/users/users.page.ts)
