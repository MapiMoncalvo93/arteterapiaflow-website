# Wireframes — ArteterapiaFlow

> Documento de diseño UX/UI conceptual.  
> Versión 1.0 · Abril 2026  
> Autor: Claude (arquitecto UX) · Para: Paz Moncalvo

---

## Introducción

### Propósito del documento

Este documento describe la estructura visual y funcional de cada página del sitio ArteterapiaFlow. No es un diseño de alta fidelidad, sino una guía de referencia para el desarrollo y la toma de decisiones de diseño. Cada sección documenta:

- Qué contenido se muestra
- Qué componentes UI se usan
- Qué objetivo UX o de conversión persigue
- Cómo se adapta el layout en mobile vs desktop

### Principios de diseño

| Principio | Descripción |
|-----------|-------------|
| **Calidez antes que frialdad** | El sitio debe sentirse como una invitación, no una venta. Copys en primera persona, imágenes orgánicas, formas fluidas. |
| **Jerarquía clara** | Una sola acción principal por sección. El usuario nunca debe dudar qué hacer. |
| **Mobile-first** | El 70%+ del tráfico llegará desde mobile. El diseño se construye desde la pantalla más pequeña hacia arriba. |
| **Confianza como conversión** | La terapeuta ES el producto. Foto real, testimonios reales, bio auténtica. |
| **Velocidad de carga** | Imágenes optimizadas, fonts cargadas con `display=swap`, animaciones no bloqueantes. |

### Convenciones de este documento

```
[ COMPONENTE ]     →  Elemento de UI
{ contenido }      →  Texto o media real
|---|---|---|       →  Layout en columnas (desktop)
↕                  →  Orden vertical (mobile)
⭐ CTA principal   →  Acción más importante de la sección
```

---

## HOME (`/`)

> **Objetivo de la página:** Convertir visitantes nuevos en leads o compradores.  
> **KPI principal:** Click en "Reservá tu sesión" o "Ver talleres".

---

### Sección 1 — Navbar

```
┌─────────────────────────────────────────────────────────────────┐
│  ArteterapiaFlow        Talleres  Tienda  Blog  Sobre Mí  [Reservar] │
└─────────────────────────────────────────────────────────────────┘
```

**Contenido:**
- Logo texto "ArteterapiaFlow" (Playfair Display, color terracota)
- Links de navegación: Talleres (con dropdown), Tienda, Blog, Sobre Mí
- Botón CTA "Reservar" en terracota con bordes redondeados

**Componentes UI:**
- `<nav>` fijo (`position: sticky`, `top: 0`, `z-index: 100`)
- Fondo transparente que se vuelve blanco roto (`#FAF7F2`) al hacer scroll (`scrollY > 50`)
- Dropdown en "Talleres" → Adultos / Niños
- Transición suave de opacidad y sombra al scroll

**Objetivo UX:**
Dar acceso rápido a los destinos principales y mantener el CTA de reserva siempre visible sin importar dónde esté el usuario en la página.

**Responsive:**

| Mobile | Desktop |
|--------|---------|
| Logo + ícono hamburguesa (☰) | Logo + todos los links + botón CTA |
| Al tap hamburguesa: menú full-screen con links apilados y CTA grande | — |
| El botón CTA desaparece del nav; aparece como primer ítem del menú mobile | — |

---

### Sección 2 — Hero

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│   Badge: "Psicoterapia & Arte Expresivo"                        │
│                                                                  │
│   H1: Descubrí el arte          ┌──────────────────────┐        │
│       de sanar                  │                      │        │
│                                 │    [Foto de Paz]     │        │
│   P: Acompañamiento creativo    │                      │        │
│   para reconectarte con         │   ╔══════════════╗   │        │
│   tu mundo emocional.           │   ║ Espacio      ║   │        │
│                                 │   ║ seguro ♥     ║   │        │
│   [Reservá tu sesión] [Talleres]│   ╚══════════════╝   │        │
│                                 └──────────────────────┘        │
│                          ↓ scroll                               │
└─────────────────────────────────────────────────────────────────┘
```

**Contenido:**
- Badge pequeño: "Psicoterapia & Arte Expresivo"
- H1: "Descubrí el arte de sanar" (Playfair Display, ~56px desktop)
- Subtítulo: 2 líneas explicando la propuesta de valor
- CTA primario: "Reservá tu sesión" → `/contacto`
- CTA secundario: "Ver talleres" → `/talleres`
- Imagen de Paz (`/paz.jpg`) con forma orgánica (border-radius asimétrico)
- Floating badge: "Espacio seguro y confidencial" con ícono corazón
- Blobs decorativos de acuarela (CSS, opacidad 10–15%)
- Flecha de scroll al pie

**Componentes UI:**
- Layout 2 columnas (texto izq | imagen der) en desktop
- Blobs: `<div>` absolutos con `border-radius` orgánico + `filter: blur(40px)`
- Floating badge: card con sombra, animado con Framer Motion (`delay: 1s`)
- Animación de entrada: stagger fade-in-up en texto, scale-in en imagen

**Objetivo UX:**
Impacto visual inmediato + claridad de propuesta de valor en menos de 5 segundos. El CTA primario debe capturar a quien ya está listo; el secundario retiene a quien necesita explorar más.

**Responsive:**

| Mobile | Desktop |
|--------|---------|
| Imagen arriba (orden 1), texto abajo (orden 2) | Texto izquierda, imagen derecha |
| H1 ~36px | H1 ~56px |
| Los 2 CTAs apilados verticalmente, full-width | CTAs en fila horizontal |
| Floating badge oculto en mobile pequeño | Visible |

---

### Sección 3 — ¿Qué es Arteterapia?

```
┌─────────────────────────────────────────────────────────────────┐
│              ¿Qué es la Arteterapia?                            │
│   La arteterapia es una forma de psicoterapia que...            │
│                                                                  │
│   ┌────────────┐  ┌────────────┐  ┌────────────┐               │
│   │  🎨        │  │  🧠        │  │  🌿        │               │
│   │ Expresión  │  │ Proceso    │  │ Bienestar  │               │
│   │ sin juicio │  │ consciente │  │ integral   │               │
│   └────────────┘  └────────────┘  └────────────┘               │
└─────────────────────────────────────────────────────────────────┘
```

**Contenido:**
- Label badge: "El proceso"
- H2: "¿Qué es la Arteterapia?"
- Párrafo introductorio (2–3 líneas, claro y accesible)
- 3 cards de beneficios con ícono SVG, título y descripción corta:
  1. 🎨 **Expresión sin juicio** — No se necesita saber dibujar
  2. 🧠 **Acceso al mundo emocional** — El arte llega donde las palabras no alcanzan
  3. 🌿 **Bienestar integral** — Mente, cuerpo y emoción en equilibrio

**Componentes UI:**
- Grid 3 columnas de cards (icono + título + texto)
- Cards con borde superior de color (terracota / ocre / salvia respectivamente)
- Animación: fade-in-up staggered al entrar en viewport (`useInView`)
- Fondo: blanco roto (`#FAF7F2`)

**Objetivo UX:**
Educar al visitante que no conoce la arteterapia. Reducir la barrera de entrada ("no necesito saber dibujar"). Generar interés antes de mostrar los servicios.

**Responsive:**

| Mobile | Desktop |
|--------|---------|
| Cards apiladas en 1 columna | Grid 3 columnas |
| Icono centrado, texto centrado | Icono arriba-izquierda, texto alineado izquierda |

---

### Sección 4 — Servicios

```
┌─────────────────────────────────────────────────────────────────┐
│                      Mis Servicios                              │
│                                                                  │
│   ┌──────────────────────────┐  ┌──────────────────────────┐   │
│   │  🧑 Talleres para        │  │  👧 Talleres para         │   │
│   │     Adultos              │  │     Niños                 │   │
│   │                          │  │                           │   │
│   │  Descripción corta...    │  │  Descripción corta...     │   │
│   │                          │  │                           │   │
│   │  [Ver talleres →]        │  │  [Ver talleres →]         │   │
│   └──────────────────────────┘  └──────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

**Contenido:**
- Label: "Lo que ofrezco"
- H2: "Mis Servicios"
- 2 cards grandes:
  - **Talleres para Adultos**: descripción del enfoque, modalidad (presencial/online), CTA "Ver talleres →" → `/talleres/adultos`
  - **Talleres para Niños**: enfoque lúdico y edades, CTA "Ver talleres →" → `/talleres/ninos`
- Cada card con imagen de fondo sutil o color diferenciado

**Componentes UI:**
- Grid 2 columnas (desktop), 1 columna (mobile)
- Cards con `hover: scale(1.02)` y sombra progresiva
- Borde superior terracota (adultos) y salvia (niños)
- Link con flecha animada al hover

**Objetivo UX:**
Segmentar al visitante según su necesidad inmediata y enviarlo al catálogo correcto. Reducir fricción con solo 2 opciones claras.

**Responsive:**

| Mobile | Desktop |
|--------|---------|
| Cards apiladas, full-width | Grid 2 columnas lado a lado |
| Imagen de fondo visible | Imagen de fondo más prominente |

---

### Sección 5 — Productos Destacados

```
┌─────────────────────────────────────────────────────────────────┐
│                   Recursos para llevar                          │
│         E-books de arteterapia para explorar desde casa         │
│                                                                  │
│  ┌───────────┐      ┌───────────┐      ┌───────────┐           │
│  │ [cover]   │      │ [cover]   │      │ [cover]   │           │
│  │           │      │           │      │           │           │
│  │ Título    │      │ Título    │      │ Título    │           │
│  │ ebook 1   │      │ ebook 2   │      │ ebook 3   │           │
│  │           │      │           │      │           │           │
│  │ $XX USD   │      │ $XX USD   │      │ $XX USD   │           │
│  │ [Comprar] │      │ [Comprar] │      │ [Comprar] │           │
│  └───────────┘      └───────────┘      └───────────┘           │
│                                                                  │
│                   [ Ver toda la tienda → ]                      │
└─────────────────────────────────────────────────────────────────┘
```

**Contenido:**
- Label: "Tienda"
- H2: "Recursos para llevar"
- Subtítulo: "E-books de arteterapia para explorar desde casa"
- 3 EbookCards con: cover, título, precio, botón "Comprar"
- Link secundario "Ver toda la tienda →" → `/tienda`

**Componentes UI:**
- Grid 3 columnas (desktop), scroll horizontal snap en mobile
- `EbookCard`: imagen, título, precio destacado en terracota, botón con ícono de descarga
- Hover: leve elevación con sombra
- Fondo: ocre al 8% para diferenciar de la sección anterior

**Objetivo UX:**
Introducir el canal de ingresos pasivos (tienda) sin interrumpir el flujo principal. El CTA "Comprar" en cada card permite conversión inmediata; "Ver tienda" captura a quien quiere explorar más.

**Responsive:**

| Mobile | Desktop |
|--------|---------|
| Cards en scroll horizontal (tipo carrusel snap) | Grid 3 columnas fijo |
| Se ven 1.3 cards para indicar que hay más → swipe | — |
| Botón "Ver tienda" full-width debajo del carrusel | Centrado debajo del grid |

---

### Sección 6 — Testimonios

```
┌─────────────────────────────────────────────────────────────────┐
│                  Lo que dicen mis clientes                      │
│                                                                  │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │ "Pasaron precioso !!!   │  │ "A mi me encantó. Un    │      │
│  │  Salieron súper         │  │  espacio con calma.     │      │
│  │  contentos ambos !!!"   │  │  Como un suspiro en     │      │
│  │                         │  │  medio de la rutina."   │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │ "Muchísimas gracias     │  │ "Queria agradecerte tu  │      │
│  │  vino súper contento    │  │  excelente atención,    │      │
│  │  Le re gustó 😍"        │  │  con mucha calidez..."  │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
└─────────────────────────────────────────────────────────────────┘
```

**Contenido:**
- Label: "Testimonios"
- H2: "Lo que dicen mis clientes"
- Subtítulo: "Cada historia es única..."
- 4 cards con texto real de clientes (sin nombre, sin foto, sin estrellas)

**Componentes UI:**
- Grid 2×2 (desktop), 1 columna (mobile)
- Cards con fondo blanco, esquinas redondeadas, sombra suave
- Texto en cursiva entre comillas tipográficas (`"…"`)
- Animación staggered fade-in-up al entrar en viewport
- Fondo de sección: ocre al 8%

**Objetivo UX:**
Generar prueba social mediante testimonios auténticos. El lenguaje coloquial y real ("¡¡¡") genera más confianza que textos pulidos. Reduce objeciones antes del CTA final.

**Responsive:**

| Mobile | Desktop |
|--------|---------|
| 1 columna, cards apiladas | Grid 2 columnas |
| Texto ligeramente más pequeño (0.9rem) | 1rem |

---

### Sección 7 — Sobre Mí (preview)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│   ┌────────────────┐    Label: "Sobre Mí"                       │
│   │                │    H2: "Hola, soy Paz Moncalvo"            │
│   │  [Foto Paz]    │    Subtítulo: "Arteterapeuta Certificada"   │
│   │                │                                            │
│   │  Blob salvia   │    Párrafo corto de bio (2-3 líneas)        │
│   │  detrás        │                                            │
│   └────────────────┘    [ Conocé más sobre mí → ]               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Contenido:**
- Label: "Sobre Mí"
- H2: "Hola, soy Paz Moncalvo"
- Subtítulo small-caps: "Arteterapeuta Certificada"
- Bio resumida (primeras 2 líneas del texto completo)
- Link "Conocé más sobre mí →" → `/sobre-mi`
- Foto de Paz con blob decorativo de salvia detrás

**Componentes UI:**
- Layout 2 columnas: imagen izquierda, texto derecha
- Blob salvia: `div` absoluto con `border-radius` orgánico y `opacity: 0.15`
- Imagen con `border-radius` orgánico asimétrico + sombra
- Animación: slide-in desde izquierda (imagen), fade-in-up (texto)
- Fondo: blanco

**Objetivo UX:**
La humanización del servicio es clave en salud mental. Ver la cara de la terapeuta antes de contactar reduce la barrera de entrada significativamente. El link invita a quienes quieren saber más sin obligarlos.

**Responsive:**

| Mobile | Desktop |
|--------|---------|
| Imagen arriba centrada, texto abajo | 2 columnas lado a lado |
| Imagen más pequeña (240px) | Imagen más grande (384px) |
| Link "Conocé más" centrado | Alineado a la izquierda |

---

### Sección 8 — CTA Final

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│          "El primer paso es el más importante."                 │
│                                                                  │
│     ¿Lista para comenzar tu proceso creativo?                   │
│                                                                  │
│              [ Reservá tu sesión gratuita ]                     │
│                                                                  │
│         Blob decorativo terracota detrás del texto              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Contenido:**
- Frase destacada en Playfair Display italic: *"El primer paso es el más importante."*
- H2: "¿Lista para comenzar tu proceso creativo?"
- Subtexto pequeño: "Primera consulta gratuita · Sin compromiso"
- CTA único: "Reservá tu sesión gratuita" → `/contacto`
- Blob decorativo terracota de fondo (CSS, baja opacidad)

**Componentes UI:**
- Sección centrada, padding generoso (py-32)
- Fondo: terracota al 6% sobre crema
- Botón grande (`px-12 py-5`), terracota sólido, `border-radius: 100px`
- Animación: scale-in del botón al entrar en viewport
- Sin distracciones: esta sección no compite con nada

**Objetivo UX:**
Última oportunidad de conversión antes del footer. El visitante que llegó hasta aquí tiene alta intención. Un solo CTA claro maximiza la conversión. La frase "primera consulta gratuita" elimina la objeción del costo.

**Responsive:**

| Mobile | Desktop |
|--------|---------|
| Todo centrado, botón full-width | Todo centrado, botón ancho fijo (320px) |
| Frase principal en 2 líneas | En una sola línea |

---

### Sección 9 — Footer

```
┌─────────────────────────────────────────────────────────────────┐
│  ArteterapiaFlow          Explorar        Información           │
│  Psicoterapia Creativa    · Adultos       · Sobre Mí            │
│                           · Niños         · FAQ                 │
│  Un espacio de sanación   · Tienda        · Contacto            │
│  a través del arte...     · Blog                                │
│                                           Legal                 │
│  [IG] [WA] [FB]           · Privacidad · Términos · Cookies     │
│ ─────────────────────────────────────────────────────────────── │
│  © 2026 ArteterapiaFlow · Montevideo, Uruguay                   │
└─────────────────────────────────────────────────────────────────┘
```

**Contenido:**
- Columna 1: Logo + tagline + bio de 1 línea + íconos de redes sociales (Instagram, WhatsApp)
- Columna 2: "Explorar" → Talleres Adultos, Talleres Niños, Tienda, Blog
- Columna 3: "Información" → Sobre Mí, FAQ, Contacto + subsección Legal
- Barra inferior: copyright + ciudad

**Componentes UI:**
- Fondo negro suave (`#2C2C2C`), texto crema
- Grid 3 columnas (desktop), apilado en mobile
- Borde superior terracota (2px)
- Íconos sociales: círculos con hover terracota
- Links: crema/60% → terracota al hover, transición 200ms

**Objetivo UX:**
Navegación secundaria y cierre de confianza. El footer no convierte directamente pero retiene al usuario que busca info adicional (legales, redes, contacto alternativo) evitando que abandone el sitio.

**Responsive:**

| Mobile | Desktop |
|--------|---------|
| Columnas apiladas verticalmente | Grid 3 columnas |
| Redes sociales centradas | Alineadas a la izquierda bajo el logo |
| Links legales en fila horizontal centrada | En columna bajo "Información" |

---

> _Continuación en próxima versión: wireframes de `/talleres/adultos`, `/talleres/ninos`, `/talleres/[slug]`, `/tienda`, `/tienda/[slug]`, `/sobre-mi`, `/contacto`, `/faq` + Sistema de Diseño._
