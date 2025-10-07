## Índice
*[Descripción del proyecto](#Descripción-del-proyecto)
*[Funcionalidades-principales](#Funcionalidades-principales)
*[Acceso al proyecto](#Acceso-proyecto)
*[Estructura del proyecto](#Estructura-del-proyecto)
*[Tecnologías utilizadas](#Tecnologías-utilizadas)
*[Autor](#Autor)
*[Licencia](#Licencia)

## Descripción del proyecto

crud-app-laravel es un sistema web creado para la **gestión de dispositivos tecnológicos**, desarrollado con **Laravel 12**, **Inertia.js**, **React** y **TypeScript**.  
Permite registrar, editar, listar y clasificar dispositivos por modelo, categoría y estado.  
El objetivo es ofrecer una interfaz amigable, segura y fácil de usar para la administración del inventario tecnológico de una organización.

---

## Funcionalidades principales

- Registro, edición y eliminación de dispositivos.
- Filtros y paginación en las tablas de visualización.
- Formulario con validación en tiempo real.
- Estados predefinidos: **Activo**, **En Reparación**, **Obsoleto**.
- Integración con Inertia y Ziggy para rutas dinámicas.

---

## Acceso al proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/device-management-system.git
cd device-management-system
```

### 2. Instalar dependencias del backend

```bash
composer install
```

### 3. Instalar dependencias del frontend

```bash
npm install
```

### 4. Configurar el entorno
Copia el archivo .env.example y actualiza tus credenciales de base de datos y APP_URL:

```bash
cp .env.example .env
php artisan key:generate
```

### 5. Configurar la base de datos
Ejecuta las migraciones y los seeders:

```bash
php artisan migrate --seed
```

### 6. Ejecutar el proyecto
En terminales separadas:

```bash
# Servidor de Laravel
php artisan serve

# Compilador de React/Vite
npm run dev
```

---

## Estructura del proyecto

A breves rasgos, esta es la forma en la que se encuentra estructurado la aplicación:

device-management-system/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── DeviceController.php
│   └── Models/
│       ├── Device.php
│       ├── Category.php
│       └── DeviceModel.php
├── resources/
│   ├── js/
│   │   ├── Pages/
│   │   │   ├── Devices/
│   │   │   │   ├── Index.tsx
│   │   │   │   ├── Create.tsx
│   │   │   │   └── Edit.tsx
│   │   └── layouts/
│   │       └── app-layout.tsx
│   └── views/
│       └── app.blade.php
└── routes/
    └── web.php

---

## Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|-------------|
| **Laravel 12** | Framework backend en PHP para la gestión de rutas, controladores y autenticación. |
| **Inertia.js** | Conector que integra React con Laravel sin necesidad de API REST. |
| **React + TypeScript** | Frontend moderno con tipado estático y componentes reutilizables. |
| **Ziggy** | Permite acceder a las rutas de Laravel desde el frontend en React. |
| **Sanctum** | Middleware de autenticación para proteger rutas y peticiones HTTP. |
| **Tailwind CSS** | Framework CSS para estilos rápidos y consistentes. |

---

## Autor
Arielo — Ingeniero de Software
📧 [Tu correo o enlace profesional opcional]
🎧 También conocido como Noetr

---

## Licencia
Este proyecto se distribuye bajo la licencia MIT.
Puedes usarlo, modificarlo y compartirlo libremente.
