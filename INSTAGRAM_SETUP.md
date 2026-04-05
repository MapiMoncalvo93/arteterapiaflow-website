# Configuración del Feed de Instagram

Esta guía te explica paso a paso cómo obtener tu token de acceso de Instagram para mostrar tus publicaciones en el sitio.

## Requisitos previos

- Una cuenta de Instagram (personal o profesional/creadora)
- Una cuenta de Facebook asociada a tu Instagram
- Acceso a [Meta for Developers](https://developers.facebook.com/)

---

## Paso 1: Crear una app en Meta for Developers

1. Ingresá a [https://developers.facebook.com/apps](https://developers.facebook.com/apps)
2. Hacé clic en **"Crear app"**
3. Seleccioná el tipo **"Consumer"** o **"Ninguno"**
4. Completá el nombre de la app (ej: `ArteterapiaFlow Web`) y tu email de contacto
5. Hacé clic en **"Crear app"**

---

## Paso 2: Agregar Instagram Basic Display

1. Dentro del panel de tu app, buscá el producto **"Instagram Basic Display"**
2. Hacé clic en **"Configurar"** o **"Agregar producto"**
3. En la sección **"Instagram Basic Display"**, hacé clic en **"Crear nueva app"**

---

## Paso 3: Configurar OAuth Redirect URIs

1. En la configuración de Instagram Basic Display, encontrarás:
   - **Valid OAuth Redirect URIs**: agregá `https://localhost/` (para pruebas locales)
   - **Deauthorize Callback URL**: podés usar `https://arteterapiaflow.com/`
   - **Data Deletion Request URL**: idem anterior
2. Guardá los cambios

---

## Paso 4: Agregar tu cuenta de Instagram como usuario de prueba

1. Andá a **Roles → Usuarios de prueba de Instagram**
2. Hacé clic en **"Agregar usuarios de prueba de Instagram"**
3. Escribí tu nombre de usuario de Instagram y confirmá

---

## Paso 5: Obtener el token de acceso de corta duración

1. Andá a **Instagram Basic Display → Generación de tokens de acceso de usuario**
2. Seleccioná tu usuario de Instagram de la lista
3. Hacé clic en **"Generar token"**
4. Autorizá los permisos solicitados
5. Copiá el token generado (válido por 1 hora)

---

## Paso 6: Convertirlo en token de larga duración (60 días)

Ejecutá esta solicitud con tu token de corta duración:

```bash
curl -X GET \
  "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=TU_APP_SECRET&access_token=TOKEN_DE_CORTA_DURACION"
```

Reemplazá:
- `TU_APP_SECRET`: lo encontrás en **Configuración → Básico** en el panel de tu app
- `TOKEN_DE_CORTA_DURACION`: el token del paso anterior

La respuesta incluirá el nuevo token con una validez de **60 días**.

---

## Paso 7: Renovar el token antes de que expire

Los tokens de larga duración se pueden renovar mientras estén vigentes:

```bash
curl -X GET \
  "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=TU_TOKEN_LARGO"
```

> **Tip:** Configura un recordatorio mensual para renovar el token.

---

## Paso 8: Configurar la variable de entorno

1. Copiá el archivo de ejemplo:
   ```bash
   cp .env.local.example .env.local
   ```

2. Editá `.env.local` y reemplazá el valor de `NEXT_PUBLIC_INSTAGRAM_TOKEN`:
   ```
   NEXT_PUBLIC_INSTAGRAM_TOKEN=EAAxxxxxxxxxxxxxxxxxx...
   ```

3. Reiniciá el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## Permisos necesarios

La app necesita los siguientes permisos de Instagram Basic Display:
- `instagram_graph_user_profile`
- `instagram_graph_user_media`

---

## Publicación en producción

Antes de lanzar el sitio al público, necesitás **publicar tu app de Meta**:

1. En el panel de tu app, activá el **"Modo activo"** (switch de Desarrollo → Activo)
2. Completá la revisión de la app si Meta te lo solicita

Hasta entonces, el token solo funcionará con los usuarios de prueba que hayas agregado.

---

## Solución de problemas comunes

| Error | Solución |
|-------|----------|
| `Error validating access token` | El token expiró. Seguí el Paso 6 para renovarlo. |
| Las fotos no aparecen | Verificá que el token tiene permisos de `instagram_graph_user_media` |
| Solo aparecen placeholders | El token no está configurado en `.env.local` o hay un error de API |
| `OAuthException` | Verificá que tu cuenta de Instagram está agregada como usuario de prueba |

---

## ¿Necesitás ayuda?

Si encontrás problemas durante la configuración, podés consultar la documentación oficial:
- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Meta for Developers - Soporte](https://developers.facebook.com/support/)
