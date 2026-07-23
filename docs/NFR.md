# Requisitos No Funcionales (NFR)
## ArteterapiaFlow — Plataforma de Talleres y Productos Digitales

| Campo | Detalle |
|---|---|
| **Versión** | 1.0 |
| **Fecha** | 2026-07-23 |
| **Estado** | Borrador |
| **Relacionado con** | BRD v1.0 |

---

## Tabla de Contenidos

1. [Disponibilidad](#1-disponibilidad)
2. [Rendimiento](#2-rendimiento)
3. [Escalabilidad](#3-escalabilidad)
4. [Seguridad](#4-seguridad)
5. [SEO](#5-seo)
6. [Accesibilidad](#6-accesibilidad)
7. [Costo](#7-costo)
8. [Resumen de Métricas Clave](#8-resumen-de-métricas-clave)

---

## 1. Disponibilidad

### 1.1 Objetivos de Uptime

| Entorno | Uptime mínimo mensual | Tiempo de caída máximo permitido/mes |
|---|---|---|
| Producción | **99,5 %** | ~3 h 39 min |
| Staging | 95,0 % | ~36 h |

> **Justificación:** Un servicio de reservas de talleres no opera 24/7 con demanda crítica, pero las ventanas de inscripción (lanzamientos) concentran tráfico intenso. Un SLA de 99,5 % cubre ese riesgo sin requerir arquitectura de alta disponibilidad costosa.

### 1.2 Estrategia ante Caídas

#### Niveles de incidente

| Severidad | Descripción | Tiempo máximo de respuesta | Tiempo máximo de resolución |
|---|---|---|---|
| **P1 — Crítico** | Sitio completamente inaccesible o pagos caídos | 15 min | 2 h |
| **P2 — Alto** | Flujo de reservas degradado, errores intermitentes | 30 min | 4 h |
| **P3 — Medio** | Funcionalidad no crítica afectada (blog, feed IG) | 2 h | 24 h |
| **P4 — Bajo** | Problema cosmético o de rendimiento menor | 24 h | 72 h |

#### Mecanismos de resiliencia

- **Página de mantenimiento estática** servida desde CDN cuando el origen está caído, con mensaje y tiempo estimado de restauración.
- **Health checks automáticos** cada 60 segundos sobre los endpoints `/api/health` y `/`. Alerta por email y/o Slack al administrador si falla 2 checks consecutivos.
- **Reintentos automáticos** con backoff exponencial (1 s → 2 s → 4 s) para llamadas a APIs externas (pasarela de pago, Instagram, Calendly).
- **Circuit breaker** en integraciones externas: si una API externa falla más de 5 veces en 30 segundos, el sistema desactiva temporalmente ese bloque (muestra placeholder) en lugar de bloquear el renderizado.
- **Backups de base de datos** diarios automáticos con retención mínima de 30 días y prueba de restauración mensual.
- **Rollback en menos de 10 minutos** mediante despliegue de la versión anterior en el proveedor de hosting (Vercel / Railway / Render).

---

## 2. Rendimiento

### 2.1 Tiempos de Carga

| Métrica | Objetivo | Límite máximo aceptable | Condición de medición |
|---|---|---|---|
| Carga completa — móvil 3G | **< 2,0 s** | < 3,5 s | Throttling 3G (40 Mbps down / 3G slow: 1,6 Mbps) |
| Carga completa — desktop | **< 1,2 s** | < 2,0 s | Cable / fibra simulada |
| Time to First Byte (TTFB) | **< 200 ms** | < 600 ms | Desde servidor más cercano al usuario |
| Time to Interactive (TTI) | **< 3,5 s** | < 5,0 s | Móvil mid-range, 3G |

### 2.2 Core Web Vitals

| Métrica | Descripción | Objetivo (Good) | Límite (Needs Improvement) |
|---|---|---|---|
| **LCP** — Largest Contentful Paint | Tiempo hasta que el elemento más grande es visible | **≤ 2,5 s** | ≤ 4,0 s |
| **INP** — Interaction to Next Paint *(reemplaza FID desde 2024)* | Latencia de respuesta a interacciones del usuario | **≤ 200 ms** | ≤ 500 ms |
| **CLS** — Cumulative Layout Shift | Estabilidad visual — desplazamiento inesperado de elementos | **≤ 0,1** | ≤ 0,25 |
| **FCP** — First Contentful Paint | Tiempo al primer pixel de contenido | **≤ 1,8 s** | ≤ 3,0 s |

> Medición: Google PageSpeed Insights + Lighthouse CI en cada deploy. Se bloquea el merge si el score de Performance en móvil cae por debajo de **75/100**.

### 2.3 API y Backend

| Endpoint | Percentil 95 | Percentil 99 |
|---|---|---|
| `GET /api/talleres` | < 300 ms | < 600 ms |
| `POST /api/reservas` (reserva + validación cupo) | < 500 ms | < 1 000 ms |
| `POST /api/pagos` (inicio de transacción) | < 800 ms | < 1 500 ms |
| `GET /api/descargas/:token` (validación + redirect) | < 200 ms | < 400 ms |

### 2.4 Estrategias de Optimización

- **Static Site Generation (SSG)** para páginas de blog y landing; **ISR** (Incremental Static Regeneration) con revalidación cada 60 s para listado de talleres.
- **Imágenes** servidas en formato WebP/AVIF, redimensionadas por `next/image`, con `loading="lazy"` excepto en above-the-fold.
- **Fuentes web** cargadas con `font-display: swap` y preconectadas al origen de Google Fonts.
- **Code splitting** automático por ruta; chunks de terceros (Framer Motion, Calendly) cargados de forma diferida.
- **CDN** global (Vercel Edge Network o Cloudflare) con caché de assets estáticos mínimo 1 año (`Cache-Control: public, max-age=31536000, immutable`).

---

## 3. Escalabilidad

### 3.1 Escenarios de Carga

| Escenario | Usuarios concurrentes estimados | RPM estimados |
|---|---|---|
| Tráfico normal (día entre semana) | 20–50 | 200–500 |
| Publicación de blog / Instagram | 100–200 | 1 000–2 000 |
| **Lanzamiento de taller** (pico) | **300–500** | **3 000–5 000** |
| Máximo histórico proyectado (año 1) | 800 | 8 000 |

### 3.2 Requisitos de Escalabilidad

- El sistema debe soportar **500 usuarios concurrentes** sin degradación observable (tiempo de respuesta de API < 2× el valor nominal del §2.3).
- La capa de frontend (Next.js) debe escalar horizontalmente de forma automática vía el proveedor serverless (Vercel / Netlify) sin intervención manual.
- La base de datos debe soportar hasta **200 conexiones concurrentes**; configurar connection pooling (ej. PgBouncer) si se usa PostgreSQL.
- El almacenamiento de archivos digitales (PDFs) debe estar desacoplado de la aplicación en un object storage (Cloudflare R2 / AWS S3), sin límite de ancho de banda que bloquee la aplicación principal.

### 3.3 Estrategia ante Picos de Lanzamiento

1. **Pre-calentamiento de caché CDN**: desplegar y pre-renderizar páginas de taller 24 h antes del lanzamiento.
2. **Cola de reservas** (job queue): en picos extremos, las solicitudes de reserva que excedan la capacidad de la DB se encolan (ej. con BullMQ / Redis) y se procesan en orden FIFO, notificando al usuario con un "Estás en cola, tu lugar está reservado temporalmente".
3. **Rate limiting por usuario**: máximo 10 requests/segundo por IP en endpoints de reserva y pago.
4. **Monitoreo reactivo**: alertas automáticas si el error rate supera el 1 % durante más de 2 minutos, con escalado manual o automático del servicio de base de datos.

---

## 4. Seguridad

### 4.1 Pagos — Cumplimiento PCI-DSS

| Requisito | Implementación |
|---|---|
| No almacenar datos de tarjeta | Todos los datos de tarjeta son manejados exclusivamente por la pasarela (MercadoPago / Stripe). La aplicación nunca los recibe ni los almacena. |
| Comunicación cifrada | TLS 1.2 mínimo (TLS 1.3 preferido) en todas las comunicaciones. HSTS habilitado con `max-age` ≥ 1 año. |
| Tokenización | La pasarela devuelve un token de pago; la aplicación solo almacena ese token, nunca el PAN (número de tarjeta). |
| Certificación | Uso de pasarelas ya certificadas PCI-DSS SAQ A (Stripe) o SAQ A-EP (MercadoPago Checkout Pro). |
| Auditoría | Logs de todas las transacciones con timestamp, estado y ID de orden; retención mínima 12 meses. |

### 4.2 Protección de Datos Personales (GDPR / Ley 25.326 Argentina)

| Requisito | Implementación |
|---|---|
| Consentimiento explícito | Checkbox obligatorio en el formulario de registro aceptando la política de privacidad. No pre-tildado. |
| Política de privacidad | Documento accesible desde el footer con: datos recopilados, finalidad, plazo de retención, derechos del usuario y datos de contacto. |
| Derecho al olvido | El usuario puede solicitar la eliminación de su cuenta y datos desde "Mi cuenta" o vía email. Eliminación efectiva en ≤ 30 días. |
| Portabilidad | El usuario puede exportar sus datos personales en formato JSON desde su perfil. |
| Minimización de datos | Solo se recopilan los datos estrictamente necesarios (nombre, email, historial de compras). No se almacena IP de forma permanente (solo en logs de auditoría con TTL de 90 días). |
| Cookies | Banner de consentimiento de cookies en la primera visita. Las cookies de análisis son opt-in. Las cookies funcionales (sesión) son estrictamente necesarias y no requieren consentimiento. |
| Notificación de brecha | En caso de brecha de seguridad que afecte datos personales, notificación a los usuarios afectados en ≤ 72 horas. |

### 4.3 Autenticación

| Aspecto | Especificación |
|---|---|
| **Tokens JWT** | Access token con expiración de **15 minutos**. Refresh token con expiración de **7 días**. |
| **Almacenamiento de tokens** | Access token en memoria (no en localStorage). Refresh token en cookie `HttpOnly`, `Secure`, `SameSite=Strict`. |
| **Rotación de refresh token** | Cada vez que se usa el refresh token se emite uno nuevo (rotation). El token anterior queda inválido (previene replay attacks). |
| **Contraseñas** | Hash con **bcrypt**, cost factor ≥ 12. Longitud mínima: 8 caracteres. |
| **Bloqueo por intentos fallidos** | Cuenta bloqueada temporalmente (5 min) tras 5 intentos fallidos de login consecutivos. |
| **Recuperación de contraseña** | Token de un solo uso (TOTP) con expiración de 30 minutos, enviado al email registrado. |
| **HTTPS obligatorio** | Redirección HTTP → HTTPS automática. Certificado SSL renovado automáticamente (Let's Encrypt / proveedor de hosting). |

### 4.4 Protección contra Ataques Web

| Vulnerabilidad | Mitigación |
|---|---|
| **XSS (Cross-Site Scripting)** | React escapa el output por defecto. Prohibido uso de `dangerouslySetInnerHTML` sin sanitización explícita (DOMPurify). Content Security Policy (CSP) configurada en headers. |
| **CSRF (Cross-Site Request Forgery)** | Cookies con `SameSite=Strict`. En formularios críticos, token CSRF adicional en el header `X-CSRF-Token`. |
| **SQL Injection** | ORM con queries parametrizadas (Prisma / Drizzle). Prohibidas las queries raw con interpolación de strings de usuario. |
| **Clickjacking** | Header `X-Frame-Options: DENY` y CSP `frame-ancestors 'none'`. |
| **Enumeración de usuarios** | El endpoint de login y de recuperación de contraseña devuelven el mismo mensaje genérico independientemente de si el email existe. |
| **Rate limiting general** | 100 requests/min por IP en rutas públicas. 20 requests/min por IP en rutas de autenticación y pago. |
| **Dependencias vulnerables** | `npm audit` ejecutado en cada CI/CD build. Alertas de Dependabot habilitadas en el repositorio. |
| **Headers de seguridad** | `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`. |

---

## 5. SEO

### 5.1 Estructura Semántica HTML

- Uso correcto de jerarquía de encabezados: un único `<h1>` por página, `<h2>` para secciones principales, `<h3>` para subsecciones.
- Landmarks semánticos: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`.
- Imágenes con atributo `alt` descriptivo obligatorio en todas las imágenes de contenido; `alt=""` solo en imágenes decorativas.
- Links con texto descriptivo; prohibidos los "Click aquí" sin contexto.

### 5.2 Metadata Dinámica

- Cada página genera su propio `<title>` y `<meta name="description">` únicos mediante `generateMetadata()` de Next.js 14.
- Open Graph tags obligatorios: `og:title`, `og:description`, `og:image` (1200×630 px mínimo), `og:url`, `og:type`.
- Twitter Card tags: `twitter:card: summary_large_image`.
- URLs canónicas (`<link rel="canonical">`) en todas las páginas.
- Metadata para páginas de talleres incluye: nombre del evento, fecha, precio y disponibilidad (Schema.org `Event`).
- Productos digitales usan Schema.org `Product` con precio, descripción y disponibilidad.
- Artículos de blog usan Schema.org `Article` con autor, fecha de publicación y fecha de modificación.

### 5.3 Sitemap y Rastreo

| Archivo | Contenido | Actualización |
|---|---|---|
| `/sitemap.xml` | Landing, servicios, contacto, blog (todas las entradas publicadas), talleres activos | Automática en cada build / ISR |
| `/robots.txt` | `Allow: /` para todos los bots. `Disallow: /api/, /admin/, /mi-cuenta/`. | Manual |

- Sitemap enviado a Google Search Console y Bing Webmaster Tools tras el deploy inicial.
- Paginación del blog implementada con `rel="next"` y `rel="prev"` (o `rel="canonical"` a la primera página si se prefiere).

### 5.4 Rendimiento como Factor SEO

- Core Web Vitals en rango "Good" (ver §2.2) — impacto directo en el ranking de Google.
- URLs limpias y descriptivas: `/talleres/taller-de-acuarela-enero-2026` en lugar de `/talleres?id=42`.
- Sin contenido duplicado: páginas de taller con cupos agotados mantienen su URL con estado actualizado, no se eliminan.

---

## 6. Accesibilidad

### 6.1 Estándar Objetivo

**WCAG 2.1 Nivel AA** — verificado con herramientas automatizadas (axe-core, Lighthouse) y revisión manual.

### 6.2 Requisitos por Principio POUR

#### Perceptible

| Criterio | Requisito |
|---|---|
| **1.1.1** Texto alternativo | Todas las imágenes de contenido tienen `alt` descriptivo. |
| **1.3.1** Información y relaciones | Estructura HTML semántica; formularios con `<label>` asociado a cada input. |
| **1.4.3** Contraste (mínimo) | Relación de contraste ≥ **4,5:1** para texto normal, ≥ **3:1** para texto grande (≥ 18 pt o 14 pt negrita). |
| **1.4.4** Cambio de tamaño | El contenido es legible y funcional al 200 % de zoom sin scroll horizontal. |
| **1.4.10** Reflow | Contenido legible en viewport de 320 px de ancho sin scroll horizontal. |
| **1.4.11** Contraste de componentes | Contraste ≥ 3:1 para bordes de inputs, botones e íconos funcionales. |

#### Operable

| Criterio | Requisito |
|---|---|
| **2.1.1** Teclado | Toda funcionalidad accesible sin ratón: navegación, modales, formularios, reservas. |
| **2.1.2** Sin trampa de teclado | Los modales y dropdowns atrapan el foco correctamente y lo liberan al cerrar. |
| **2.4.3** Orden del foco | Orden de tabulación lógico y coherente con el layout visual. |
| **2.4.4** Propósito del link | El texto de cada link es descriptivo por sí solo, sin depender del contexto visual. |
| **2.4.7** Foco visible | El indicador de foco del teclado es claramente visible (outline con contraste ≥ 3:1). |
| **2.5.3** Etiqueta en nombre | El nombre accesible de cada control incluye el texto visible. |

#### Comprensible

| Criterio | Requisito |
|---|---|
| **3.1.1** Idioma de la página | `<html lang="es">` declarado. |
| **3.2.1** Al recibir el foco | Ningún componente cambia el contexto solo por recibir foco. |
| **3.3.1** Identificación de errores | Los errores de formulario se identifican en texto, no solo por color. |
| **3.3.2** Etiquetas o instrucciones | Todos los campos de formulario tienen etiquetas visibles o instrucciones claras. |
| **3.3.3** Sugerencias de error | Los mensajes de error sugieren cómo corregir el problema. |

#### Robusto

| Criterio | Requisito |
|---|---|
| **4.1.2** Nombre, rol, valor | Componentes interactivos personalizados usan roles ARIA apropiados (`role`, `aria-label`, `aria-expanded`, `aria-live`, etc.). |
| **4.1.3** Mensajes de estado | Las notificaciones de éxito/error son anunciadas por lectores de pantalla vía `aria-live="polite"`. |

### 6.3 Herramientas de Verificación

| Herramienta | Uso | Frecuencia |
|---|---|---|
| **axe-core** (via jest-axe) | Tests automatizados de accesibilidad en CI | Cada PR |
| **Lighthouse CI** | Score de Accessibility ≥ **90/100** | Cada deploy |
| **NVDA + Firefox** | Prueba manual con lector de pantalla | Por release |
| **Contrast Checker** (WebAIM) | Verificación de paleta de colores | Al modificar estilos |

---

## 7. Costo

### 7.1 Restricciones Presupuestarias

| Categoría | Límite mensual (USD) | Notas |
|---|---|---|
| **Total infraestructura** | **≤ USD 80** | Umbral de alerta a los USD 60 |
| Hosting frontend (Next.js) | ≤ USD 20 | Vercel Pro o Railway Starter |
| Base de datos | ≤ USD 15 | PostgreSQL en Railway / Supabase free-mid tier |
| Almacenamiento archivos (PDFs) | ≤ USD 10 | Cloudflare R2 (~10 GB, egress gratuito) |
| Email transaccional | ≤ USD 10 | Resend / SendGrid Essentials (hasta 50k emails/mes) |
| Monitoreo y alertas | ≤ USD 10 | Sentry (plan Developer) + UptimeRobot free |
| Dominio | ≤ USD 2 | Amortizado mensualmente (~USD 20/año) |
| CDN / DDoS | USD 0 | Incluido en Vercel / Cloudflare free tier |
| **Pasarela de pagos** | **Variable** | Comisión por transacción (~2,9 % + USD 0,30 en Stripe; no es costo fijo de infraestructura) |

### 7.2 Alertas de Costo

- Configurar alertas de billing en el proveedor de hosting al superar USD 60/mes.
- Revisar el costo mensual el primer día de cada mes; escalar el plan solo si el crecimiento de ingresos lo justifica.

### 7.3 Estrategia de Optimización de Costos

| Palanca | Acción |
|---|---|
| Caché agresiva | SSG + ISR reduce las invocaciones serverless y el cómputo |
| Egress de archivos | Cloudflare R2 tiene egress gratuito (a diferencia de S3) — ideal para PDFs |
| Imágenes | Optimización con `next/image` reduce el ancho de banda servido |
| Emails | Usar plantillas HTML simples; evitar adjuntos en emails transaccionales |
| Monitoreo | UptimeRobot free cubre checks básicos; Sentry plan gratuito cubre hasta 5k errores/mes |

---

## 8. Resumen de Métricas Clave

| Categoría | Métrica | Objetivo |
|---|---|---|
| Disponibilidad | Uptime mensual | ≥ 99,5 % |
| Rendimiento | LCP móvil | ≤ 2,5 s |
| Rendimiento | INP | ≤ 200 ms |
| Rendimiento | CLS | ≤ 0,1 |
| Rendimiento | Carga total móvil 3G | < 2,0 s |
| Rendimiento | Lighthouse Performance (móvil) | ≥ 75 / 100 |
| Escalabilidad | Usuarios concurrentes soportados | 500 |
| Seguridad | JWT access token TTL | 15 min |
| Seguridad | Refresh token TTL | 7 días |
| Seguridad | Intentos de login antes de bloqueo | 5 |
| Seguridad | TLS mínimo | 1.2 |
| Accesibilidad | Estándar | WCAG 2.1 AA |
| Accesibilidad | Lighthouse Accessibility | ≥ 90 / 100 |
| SEO | Open Graph en todas las páginas | 100 % |
| Costo | Infraestructura mensual | ≤ USD 80 |
