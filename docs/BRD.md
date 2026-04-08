# Business Requirements Document (BRD)
## ArteterapiaFlow — Plataforma de Talleres y Productos Digitales

| Campo | Detalle |
|---|---|
| **Versión** | 1.0 |
| **Fecha** | 2026-04-08 |
| **Estado** | Borrador |
| **Autor** | ArteterapiaFlow |

---

## Tabla de Contenidos

1. [Visión General](#1-visión-general)
2. [Roles de Usuario](#2-roles-de-usuario)
3. [Características Clave](#3-características-clave)
4. [Flujos de Trabajo Detallados](#4-flujos-de-trabajo-detallados)
5. [Reglas de Negocio](#5-reglas-de-negocio)
6. [Casos Extremos](#6-casos-extremos)
7. [Requisitos No Funcionales](#7-requisitos-no-funcionales)
8. [Glosario](#8-glosario)

---

## 1. Visión General

### 1.1 Propósito

ArteterapiaFlow es una plataforma web que permite a la terapeuta gestionar y ofrecer sus servicios de arteterapia de forma digital: reservas de talleres (presenciales y online), venta de productos digitales (e-books y guías), y publicación de contenido en un blog. El objetivo es reducir la fricción administrativa y ofrecer a los clientes una experiencia de compra y reserva autónoma, accesible y segura.

### 1.2 Alcance

| Incluido | Excluido |
|---|---|
| Sistema de reservas de talleres | App móvil nativa |
| Pasarela de pago (tarjeta / transferencia) | Videollamadas integradas (usa link externo) |
| Descarga de productos digitales | Foro / comunidad |
| Blog con categorías y etiquetas | Programa de afiliados |
| Panel de administración | Integración con ERP / contabilidad |

### 1.3 Partes Interesadas

| Parte | Rol |
|---|---|
| Terapeuta (administradora) | Crea y gestiona talleres, productos y blog |
| Clientes | Reservan talleres y compran/descargan productos |
| Pasarela de pagos (ej. MercadoPago / Stripe) | Procesa transacciones |
| Proveedor de videollamadas (ej. Zoom / Meet) | Entrega el link para talleres online |

---

## 2. Roles de Usuario

### 2.1 Administrador

La terapeuta tiene acceso completo al sistema a través de un panel privado.

**Capacidades:**

- Crear, editar, publicar y eliminar talleres
- Definir cupos máximos, precio, modalidad (presencial / online) y fecha de cada taller
- Ver y exportar la lista de inscriptos por taller
- Cancelar talleres y notificar a los participantes automáticamente
- Cargar, editar y eliminar productos digitales (e-books, guías en PDF)
- Crear, editar y publicar entradas de blog con categorías y etiquetas
- Gestionar usuarios registrados
- Ver el historial de transacciones y descargas
- Configurar la política de cancelación y el umbral mínimo de cupos para activar un taller

---

### 2.2 Cliente Invitado

Usuario no autenticado que navega el sitio públicamente.

**Capacidades:**

- Ver la lista de talleres disponibles y su detalle
- Ver los productos digitales disponibles y sus previsualizaciones
- Leer el blog
- Iniciar el proceso de reserva o compra (se le solicitará registro o login al confirmar)

**Restricciones:**

- No puede completar una reserva ni compra sin crear una cuenta
- No puede descargar productos digitales
- No puede ver su historial

---

### 2.3 Cliente Registrado

Usuario autenticado con cuenta activa.

**Capacidades:**

- Reservar talleres (presenciales y online)
- Comprar y descargar productos digitales
- Ver su historial de reservas y compras
- Cancelar su propia reserva (sujeto a política de cancelación)
- Recibir notificaciones por email (confirmación, recordatorio, cancelación)
- Actualizar sus datos personales y contraseña

---

## 3. Características Clave

### 3.1 Sistema de Reservas de Talleres

#### 3.1.1 Listado de Talleres

- Cada taller expone: título, descripción, fecha, duración, modalidad (presencial / online), precio, cupos disponibles y una imagen de portada.
- Los talleres se pueden filtrar por modalidad, fecha y categoría temática.
- Un taller con cupos = 0 se muestra como "Sin cupos" y desactiva el botón de reserva (no se oculta).
- Un taller con fecha pasada se muestra como "Finalizado".

#### 3.1.2 Detalle de Taller

- Descripción completa, requisitos previos, qué incluye y qué materiales traer (presencial) o qué necesitar (online).
- Sección de preguntas frecuentes por taller.
- Botón "Reservar" que inicia el flujo de reserva.

#### 3.1.3 Calendario de Reservas

- Vista de calendario mensual que muestra la disponibilidad de todos los talleres.
- Al hacer click en un taller del calendario se abre su detalle.
- Integración con Calendly o sistema propio según la implementación.

#### 3.1.4 Modalidades

| Modalidad | Detalle |
|---|---|
| **Presencial** | Dirección del lugar, mapa y restricciones de capacidad física |
| **Online** | Link de videollamada (Zoom/Meet) enviado por email 30 min antes del inicio |

#### 3.1.5 Confirmación y Recordatorio

- Email de confirmación inmediato al completar la reserva con: detalle del taller, fecha, modalidad y, si es online, indicación de que el link se enviará antes del inicio.
- Email recordatorio 24 horas antes del taller.
- Email con el link de videollamada 30 minutos antes (solo talleres online).

---

### 3.2 Pasarela de Pago

#### 3.2.1 Métodos Aceptados

| Método | Descripción |
|---|---|
| **Tarjeta de crédito / débito** | Procesado vía MercadoPago o Stripe en tiempo real |
| **Transferencia bancaria** | El sistema genera una orden pendiente; el administrador confirma el pago manualmente o mediante webhook |

#### 3.2.2 Estados de Pago

```
PENDIENTE → PROCESANDO → CONFIRMADO
                       ↘ FALLIDO
                       ↘ REEMBOLSADO
```

- **PENDIENTE**: orden creada, pago no iniciado (transferencia bancaria en espera).
- **PROCESANDO**: transacción enviada a la pasarela, esperando respuesta.
- **CONFIRMADO**: pago aprobado; se activa el acceso al taller o la descarga del producto.
- **FALLIDO**: la pasarela rechazó el pago; el cupo reservado se libera automáticamente.
- **REEMBOLSADO**: devolución procesada por cancelación de taller o solicitud válida.

#### 3.2.3 Seguridad

- Todos los datos de tarjeta son manejados exclusivamente por la pasarela (sin almacenamiento propio — PCI DSS compliance delegado).
- Comunicación exclusivamente por HTTPS.
- Tokens de sesión con expiración y rotación.

---

### 3.3 Gestión y Descarga de Productos Digitales

#### 3.3.1 Catálogo

- Listado de e-books y guías con: título, descripción, precio, número de páginas, imagen de portada y previsualización (primeras páginas en PDF).
- Filtros por categoría temática (autoconocimiento, duelo, creatividad, etc.).

#### 3.3.2 Entrega Digital

- Tras pago confirmado, el sistema genera un **link de descarga firmado temporalmente** (válido por 48 horas, máximo 3 descargas por compra).
- El link se envía por email y queda disponible en el panel del cliente.
- Los archivos se sirven desde almacenamiento privado (no accesibles públicamente sin token).

#### 3.3.3 Acceso al Historial

- El cliente puede ver todos sus productos comprados en "Mi cuenta → Mis descargas".
- Puede solicitar un nuevo link si el anterior expiró (máximo 2 re-envíos por producto).

---

### 3.4 Blog

#### 3.4.1 Gestión de Contenido

- El administrador puede crear entradas con: título, cuerpo (editor rich text), imagen destacada, categorías (múltiples) y etiquetas (múltiples).
- Estados posibles: `Borrador`, `Programado`, `Publicado`.
- Soporte para programar la publicación en fecha y hora futuras.

#### 3.4.2 Navegación

- Listado paginado de entradas ordenadas por fecha descendente.
- Filtrado por categoría y por etiqueta.
- Buscador de texto en título y cuerpo.
- Sidebar con entradas recientes, categorías y nube de etiquetas.

#### 3.4.3 SEO

- Campos editables: meta título, meta descripción, slug de URL.
- Open Graph tags generados automáticamente desde los campos del artículo.
- Sitemap XML actualizado automáticamente al publicar.

---

## 4. Flujos de Trabajo Detallados

### 4.1 Reserva de Taller Online — Flujo Completo

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLIENTE (INVITADO)                           │
└─────────────────────────────────────────────────────────────────┘

  1. Cliente navega al listado de talleres
  2. Selecciona un taller online con cupos disponibles
  3. Hace click en "Reservar"
        │
        ▼
  ¿Está autenticado?
     NO → 4a. Se muestra modal de Login / Registro
              → Cliente crea cuenta o inicia sesión
              → Redirige al paso 5
     SÍ → 5. Sistema verifica cupos en tiempo real (lock optimista)
              │
              ▼
        ¿Hay cupos?
           NO → Mensaje "Sin cupos disponibles" — fin del flujo
           SÍ → 6. Sistema reserva el cupo temporalmente (hold de 15 min)
                    7. Cliente ve resumen: taller, fecha, modalidad, precio
                    8. Cliente elige método de pago

┌─────────────────────────────────────────────────────────────────┐
│                   FLUJO DE PAGO                                 │
└─────────────────────────────────────────────────────────────────┘

  9a. TARJETA DE CRÉDITO / DÉBITO
      → Cliente ingresa datos en formulario de la pasarela (iframe seguro)
      → Sistema envía solicitud a pasarela
      → Pasarela responde:
            APROBADO → paso 10
            RECHAZADO → paso 11

  9b. TRANSFERENCIA BANCARIA
      → Sistema genera orden PENDIENTE
      → Muestra CBU/alias y monto a transferir
      → Cliente realiza la transferencia externamente
      → Administrador confirma el pago manualmente (o webhook bancario)
      → Sistema actualiza a CONFIRMADO → paso 10

┌─────────────────────────────────────────────────────────────────┐
│                  CONFIRMACIÓN                                   │
└─────────────────────────────────────────────────────────────────┘

  10. Pago CONFIRMADO:
      → Cupo temporal se convierte en reserva definitiva
      → Se descuenta 1 cupo del taller
      → Email de confirmación enviado al cliente:
            - Detalle del taller (nombre, fecha, duración)
            - Modalidad: Online
            - "El link de videollamada será enviado 30 min antes del inicio"
      → Reserva visible en "Mi cuenta → Mis talleres"
      → Administrador ve nueva inscripción en su panel

  11. Pago FALLIDO:
      → Cupo temporal se libera (ver sección 6.1)
      → Mensaje de error al cliente con motivo (si la pasarela lo provee)
      → Opción de reintentar o cambiar método de pago
      → Email opcional notificando el intento fallido

  12. [T-30 min] Sistema envía email automático con link de videollamada
  13. Taller se realiza
```

---

### 4.2 Compra y Descarga de E-book — Flujo Completo

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLIENTE                                      │
└─────────────────────────────────────────────────────────────────┘

  1. Cliente navega al catálogo de productos digitales
  2. Selecciona un e-book y hace click en "Comprar"
        │
        ▼
  ¿Está autenticado?
     NO → 3a. Modal de Login / Registro → autenticación → paso 4
     SÍ → 4. Sistema muestra resumen: título, precio, formato (PDF)

  5. Cliente elige método de pago (tarjeta o transferencia)
  6. Pago procesado (mismo flujo que §4.1 pasos 9a / 9b)

┌─────────────────────────────────────────────────────────────────┐
│                  POST-PAGO CONFIRMADO                           │
└─────────────────────────────────────────────────────────────────┘

  7. Sistema registra la compra en la cuenta del cliente
  8. Sistema genera link de descarga firmado:
        - Token único de 256 bits
        - Expira en: 48 horas
        - Descargas máximas: 3
  9. Email enviado al cliente con:
        - Título del e-book comprado
        - Botón "Descargar ahora" (link firmado)
        - Aviso de expiración y límite de descargas
        - Link a "Mi cuenta → Mis descargas" para acceso futuro

  10. Cliente hace click en "Descargar":
        → Sistema valida token:
              VÁLIDO + descargas < 3 → sirve el archivo PDF
                                     → incrementa contador de descargas
              EXPIRADO → mensaje de error + botón "Solicitar nuevo link"
              LÍMITE ALCANZADO → mensaje de error + botón "Solicitar nuevo link"
              SIN PAGO → acceso denegado (ver sección 6.3)

  11. Cliente puede volver a descargar desde "Mi cuenta → Mis descargas"
        → Si el link expiró o se agotaron las descargas:
              → Botón "Solicitar nuevo link" (máximo 2 re-envíos totales por compra)
              → Pasado ese límite, debe contactar a la administradora
```

---

## 5. Reglas de Negocio

### 5.1 Política de Cancelación de Talleres (por el cliente)

| Tiempo antes del taller | Reembolso |
|---|---|
| Más de 72 horas | 100% reembolso |
| Entre 24 y 72 horas | 50% reembolso |
| Menos de 24 horas | Sin reembolso |
| No presentarse (no-show) | Sin reembolso |

- El cliente puede cancelar desde "Mi cuenta → Mis talleres" siempre que la ventana lo permita.
- Si la ventana de cancelación ya no permite reembolso, el sistema informa el monto a recuperar antes de confirmar la cancelación.
- Al cancelar, el cupo se libera inmediatamente y queda disponible para otros clientes.
- El reembolso se procesa en el mismo método de pago original dentro de 5 a 10 días hábiles.

### 5.2 Cupos Limitados por Taller

- Cada taller tiene un campo `cupos_maximos` definido por el administrador al crearlo.
- El sistema mantiene un conteo en tiempo real de `cupos_confirmados` (reservas con pago confirmado) y `cupos_en_hold` (reservas temporales con pago en proceso, hold de 15 minutos).
- **Cupos visibles** = `cupos_maximos - cupos_confirmados - cupos_en_hold`
- Un taller solo puede activarse si `cupos_confirmados >= cupo_minimo_para_activar` (configurable por el administrador, default: 1).
- Cuando `cupos_disponibles = 0`, el botón "Reservar" se desactiva y se muestra "Sin cupos".
- El administrador puede ampliar los cupos máximos en cualquier momento antes del taller.

### 5.3 Entrega Automática de Producto Digital Tras Pago Confirmado

- La entrega del link de descarga es **automática e inmediata** al recibir confirmación de pago de la pasarela (webhook).
- Para transferencias bancarias, la entrega se activa en el momento en que el administrador marca el pago como confirmado (o cuando llega el webhook bancario).
- No existe intervención manual en el proceso de entrega para pagos con tarjeta.
- El sistema registra fecha y hora de cada descarga junto con la IP del cliente (para auditoría).

### 5.4 Taller Online — Entrega del Link

- El link de videollamada se genera o carga en el panel del administrador al crear el taller.
- El envío automático se dispara exactamente 30 minutos antes del horario de inicio definido.
- Si el administrador actualiza el link (ej. cambio de plataforma), el sistema re-envía el email a todos los inscriptos confirmados.

### 5.5 Blog

- Solo el administrador puede crear, editar y eliminar entradas.
- Los clientes (y visitantes) pueden leer el blog sin autenticación.
- Las entradas en estado `Borrador` son invisibles para clientes e invitados.

---

## 6. Casos Extremos

### 6.1 Pago Fallido

**Escenario:** El cliente ingresa datos de tarjeta y la pasarela rechaza la transacción.

**Comportamiento esperado:**

1. El cupo en hold (reservado temporalmente) se libera de forma inmediata.
2. Se muestra al cliente un mensaje de error claro con el motivo provisto por la pasarela (ej. "Fondos insuficientes", "Tarjeta rechazada", "Datos inválidos").
3. El cliente tiene la opción de:
   - Reintentar con los mismos datos.
   - Ingresar una tarjeta diferente.
   - Cambiar a pago por transferencia bancaria.
4. Se permite un máximo de **5 intentos fallidos consecutivos** para el mismo usuario en un período de 1 hora; al superarse, se bloquea el intento y se muestra un mensaje para contactar a soporte (protección contra fraude).
5. No se realiza ningún cargo al cliente.
6. El administrador puede ver el intento fallido en el historial de transacciones (estado: FALLIDO).

---

### 6.2 Taller Cancelado por el Administrador

**Escenario:** La terapeuta cancela un taller que ya tiene inscriptos con pago confirmado.

**Comportamiento esperado:**

1. El administrador accede al panel, selecciona el taller y hace click en "Cancelar taller".
2. El sistema solicita confirmación mostrando: número de inscriptos, monto total a reembolsar y acción a tomar.
3. Al confirmar la cancelación:
   a. El estado del taller cambia a `CANCELADO`.
   b. El sistema genera órdenes de reembolso del **100%** para todos los inscriptos con pago confirmado, independientemente de la antelación.
   c. Se envía un email automático a cada inscripto con:
      - Notificación de la cancelación.
      - Motivo (campo opcional que el administrador puede completar).
      - Confirmación de que el reembolso se procesará en 5 a 10 días hábiles.
   d. Los clientes con pago por transferencia bancaria reciben instrucciones para coordinar la devolución manualmente.
4. El taller cancelado permanece visible en el historial del administrador pero no aparece en el listado público.
5. Los inscriptos ven el taller como `CANCELADO` en "Mi cuenta → Mis talleres".

---

### 6.3 Intento de Descarga Sin Pago

**Escenario:** Un usuario intenta acceder directamente a la URL de descarga de un e-book sin haberlo comprado (manipulación de URL, link compartido, etc.).

**Comportamiento esperado:**

1. El sistema valida el token de la URL contra la base de datos:
   - Token inexistente → `404 Not Found`.
   - Token válido pero sin compra asociada al usuario autenticado → `403 Forbidden`.
   - Token válido pero usuario no autenticado → redirección a login; tras autenticación, nueva validación.
2. Nunca se expone la URL real del archivo en almacenamiento privado; el sistema actúa como proxy firmante.
3. El intento se registra en los logs de seguridad con IP, timestamp y token utilizado.
4. Tras 3 intentos fallidos de acceso sin autorización desde la misma IP en 10 minutos, se bloquea temporalmente la IP y se notifica al administrador.

---

### 6.4 Conflicto de Último Cupo — Reserva Simultánea

**Escenario:** Dos usuarios hacen click en "Reservar" exactamente al mismo tiempo cuando solo queda 1 cupo disponible.

**Comportamiento esperado:**

1. El sistema utiliza un mecanismo de **bloqueo optimista** a nivel de base de datos (transacción atómica con `SELECT FOR UPDATE` o equivalente ORM).
2. El primer usuario en completar la verificación obtiene el hold del cupo:
   - Su cupo queda en estado `EN_HOLD` por 15 minutos.
   - Puede avanzar al paso de pago normalmente.
3. El segundo usuario, al verificar disponibilidad en la misma transacción, recibe `cupos_disponibles = 0`:
   - Se le muestra el mensaje: *"Lo sentimos, este taller acaba de completar sus cupos. Podés contactarnos para anotarte en lista de espera."*
   - Se ofrece un botón "Anotarme en lista de espera" que registra su email.
4. Si el primer usuario **no completa el pago en 15 minutos**, el hold expira automáticamente (job programado cada 5 minutos):
   - El cupo vuelve a estar disponible.
   - El segundo usuario en lista de espera recibe un email automático: *"¡Hay un cupo disponible! Reservá antes de que se agote."* con link directo al taller.
5. Toda la lógica de hold ocurre del lado del servidor; el cliente nunca puede manipular el estado del cupo desde el frontend.

---

## 7. Requisitos No Funcionales

### 7.1 Rendimiento

- Tiempo de carga inicial de la home page: < 2 segundos en conexión 4G.
- Respuesta de la API de reservas: < 500 ms en el percentil 95.
- El calendario de talleres debe cargar sin bloquear el hilo principal (lazy load).

### 7.2 Disponibilidad

- Uptime objetivo: 99.5% mensual.
- Mantenimiento planificado comunicado con 24 horas de anticipación.

### 7.3 Seguridad

- Autenticación con JWT + refresh tokens (o sesiones con cookies HttpOnly SameSite=Strict).
- Contraseñas hasheadas con bcrypt (cost factor ≥ 12).
- Rate limiting en endpoints de login, reserva y descarga.
- Validación y sanitización de todos los inputs del usuario (prevención de XSS, SQL Injection).
- Logs de auditoría para operaciones sensibles (pagos, descargas, cambios de cuenta).

### 7.4 Accesibilidad

- Cumplimiento WCAG 2.1 nivel AA.
- Contraste de colores conforme a estándares AA.
- Navegación por teclado funcional en todos los flujos críticos.
- Atributos `aria-*` en componentes interactivos.

### 7.5 Compatibilidad

- Browsers: Chrome, Firefox, Safari y Edge — últimas 2 versiones.
- Dispositivos: mobile-first; breakpoints para mobile (< 768px), tablet (768–1024px) y desktop (> 1024px).

### 7.6 Escalabilidad

- La arquitectura debe soportar hasta 500 usuarios concurrentes sin degradación.
- El almacenamiento de archivos digitales debe estar en un servicio de object storage (ej. S3, Cloudflare R2) separado de la aplicación.

---

## 8. Glosario

| Término | Definición |
|---|---|
| **Taller** | Actividad terapéutica grupal con cupos limitados, fecha y precio definidos |
| **Cupo** | Lugar disponible en un taller para un participante |
| **Hold** | Reserva temporal de un cupo durante el proceso de pago (máx. 15 min) |
| **Producto digital** | Archivo descargable (e-book, guía) vendido en la plataforma |
| **Link firmado** | URL de descarga con token de autenticación temporal e intransferible |
| **Webhook** | Notificación automática enviada por la pasarela de pago al confirmar o rechazar una transacción |
| **Reembolso** | Devolución del importe pagado al método de pago original |
| **Lista de espera** | Registro de usuarios que quieren ser notificados si se libera un cupo |
| **BRD** | Business Requirements Document — documento que describe los requisitos de negocio del sistema |
