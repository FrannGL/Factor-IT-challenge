# 🛒 Factor IT Challenge

Proyecto de e-commerce moderno desarrollado en **React 19 + Vite**, con enfoque en rendimiento, diseño responsive, y una arquitectura mantenible basada en componentes y estados globales.

## 🚀 Tech Stack

| Herramienta            | Descripción                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| **React 19**           | Biblioteca principal para construir la UI                                          |
| **Vite 7**             | Empaquetador ultra rápido con soporte moderno                                      |
| **TypeScript**         | Tipado estático para mayor robustez y autocompletado                               |
| **Tailwind CSS 4**     | Framework de estilos utilitario con soporte para dark mode                         |
| **shadcn/ui**          | Componentes UI accesibles y estilizados, construidos sobre Radix UI y Tailwind CSS |
| **Zustand**            | Manejo de estado global simple y escalable                                         |
| **React Router DOM 7** | Enrutamiento declarativo para SPAs                                                 |
| **Framer Motion**      | Animaciones suaves y accesibles                                                    |
| **Radix UI**           | Componentes accesibles de bajo nivel (Dialog, ScrollArea, Switch, etc.)            |
| **Iconify + Lucide**   | Sistema flexible de íconos                                                         |
| **Sonner**             | Notificaciones modernas y configurables                                            |

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

Primero, clona el repositorio desde GitHub utilizando el siguiente comando:

```
git clone https://github.com/FrannGL/Factor-IT-challenge
```

### 2. Navegar al directorio del proyecto

Accede al directorio del proyecto clonado:

```
cd Factor-IT-challenge
```

### 3. Instalar dependencias

Instala las dependencias necesarias ejecutando:

```
pnpm install
```

### 4. Ejecutar en modo desarrollo

Inicia el servidor de desarrollo con el siguiente comando:

```
npm run dev
```

La aplicación estará disponible en http://localhost:5173.

# Docker

Si prefieres ejecutar el proyecto en un contenedor Docker, puedes usar la configuración proporcionada.

### Construir la imagen Docker

1. Primero, asegúrate de tener Docker instalado en tu sistema.

2. En el directorio raíz del proyecto, ejecuta el siguiente comando para construir la imagen:

```
docker build -t factor-it-challenge .
```

### Ejecutar el contenedor

Después de construir la imagen, ejecuta el contenedor con:

```
docker run -p 3000:80 factor-it-challenge
```

La aplicación estará disponible en http://localhost:3000.

## Ejecutar tests 🧪

El proyecto está preparado para testing unitarios con:

- **Vitest** – Framework de testeo rápido y compatible con Jest.
- **Testing Library** – Utilidades para testear componentes React desde la perspectiva del usuario.
- **Cypress** - Framework para pruebas end-to-end (E2E) que simula la experiencia real del usuario en el navegador.
- **JSDOM** – Entorno simulado para pruebas en Node.
- **Husky** – Ganchos de Git para asegurar calidad (como correr tests o linting antes de hacer push).

### Comandos para correr test unitarios:

- `npm run test`  
  Ejecuta todos los tests en modo _headless_ (sin interfaz gráfica), ideal para integración continua o para correr en la terminal.

- `npm run test:ui`  
  Ejecuta los tests en modo interactivo con interfaz gráfica, permitiendo ver resultados en tiempo real y hacer debugging más fácil.

### Comandos para correr test e2e:

- `npm run cy:open`  
  Abre la interfaz gráfica de Cypress para ejecutar tests interactivos y hacer debugging visual.

- `npm run cy:run`  
  Ejecuta los tests E2E en modo headless (sin interfaz gráfica), útil para integración continua.
