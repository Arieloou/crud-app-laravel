# Sistema de Gestión de Dispositivos (CRUD App)

Un sistema web moderno y eficiente para la gestión de inventario de dispositivos tecnológicos, construido con Laravel, React e Inertia.js. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de forma intuitiva y segura.
<img width="1366" height="655" alt="image" src="https://github.com/user-attachments/assets/be702916-9122-41fe-8d31-ca9b1b6e0e38" />

---

## Índice

*[Descripción](#Descripción)

*[Funcionalidades-principales](#Funcionalidades-principales)

*[Acceso al proyecto](#Acceso-proyecto)

*[Estructura del proyecto](#Estructura-del-proyecto)

*[Tecnologías utilizadas](#Tecnologías-utilizadas)

*[Autor](#Autor)

*[Licencia](#Licencia)

---

## Descripción

**crud-app-laravel** es una aplicación diseñada para simplificar la administración del inventario tecnológico de una organización. Permite registrar, editar, listar y clasificar dispositivos por modelo, categoría y estado a través de una interfaz amigable, segura y fácil de usar.

---

## Funcionalidades Principales

* **Gestión Completa de Dispositivos:** Registro, edición y eliminación de equipos.
* **Visualización Avanzada:** Tablas con filtros dinámicos y paginación para una navegación fluida.
* **Validación en Tiempo Real:** Formularios interactivos que validan los datos al instante.
* **Clasificación por Estado:** Asigna estados predefinidos como **Activo**, **En Reparación** u **Obsoleto**.
* **Integración SPA:** Experiencia de aplicación de una sola página (SPA) gracias a Inertia.js y React.
* **Rutas Dinámicas:** Uso de Ziggy para acceder a las rutas de Laravel directamente desde el frontend.

---

## Instalación y Puesta en Marcha

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

### Requisitos Previos
* PHP >= 8.2
* Composer
* Node.js & npm
* Una base de datos (MySQL, PostgreSQL, etc.)

### Pasos de Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/device-management-system.git](https://github.com/tu-usuario/device-management-system.git)
    cd device-management-system
    ```

2.  **Instalar dependencias:**
    ```bash
    # Backend (PHP)
    composer install

    # Frontend (JavaScript)
    npm install
    ```

3.  **Configurar el entorno:**
    Crea tu archivo de configuración y genera la clave de la aplicación.
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```
    *No olvides actualizar las credenciales de la base de datos (`DB_*`) y la `APP_URL` en tu archivo `.env`.*

4.  **Preparar la base de datos:**
    Ejecuta las migraciones para crear las tablas y los seeders para poblarlas con datos de prueba.
    ```bash
    php artisan migrate --seed
    ```

5.  **Ejecutar el proyecto:**
    Abre dos terminales y ejecuta los siguientes comandos:
    ```bash
    # Terminal 1: Servidor de Laravel
    php artisan serve

    # Terminal 2: Compilador de Vite
    npm run dev
    ```

¡Listo! Ahora puedes acceder a la aplicación desde `http://localhost:8000`.

---

## Tecnologías Utilizadas

Este proyecto combina un robusto backend en PHP con un frontend moderno y reactivo.

| Tecnología | Rol |
| :--- | :--- |
| **Laravel 12** | Framework backend para la lógica de negocio, rutas y seguridad. |
| **React + TypeScript** | Biblioteca para construir la interfaz de usuario con tipado estático. |
| **Inertia.js** | Conector que permite crear una SPA sin necesidad de una API REST. |
| **Tailwind CSS** | Framework CSS para un diseño rápido, moderno y personalizable. |
| **Ziggy** | Permite el uso de las rutas nombradas de Laravel en JavaScript. |
| **Sanctum** | Proporciona un sistema de autenticación ligero para SPAs. |

---

## Estructura del Proyecto

La estructura del código está organizada para separar claramente las responsabilidades del backend y el frontend.

```bash
device-management-system/
├── app/                # Lógica del backend (Modelos, Controladores)
├── resources/
│   ├── js/             # Código fuente del frontend (React)
│   │   ├── Pages/      # Componentes de página (vistas)
│   │   └── Layouts/    # Plantillas de diseño
│   └── views/          # Vista raíz de Blade para Inertia
└── routes/             # Definición de rutas web
```

---

## Autor

<img src="https://github.com/Arieloou.png" width="100" alt="Foto de Arielo">

**Arieloou** — Ingeniero de Software

---

## Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Eres libre de usarlo, modificarlo y compartirlo.
