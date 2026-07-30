# Guia Completa para Publicar FastTools en Vercel

Esta guia esta pensada para que puedas publicar FastTools aunque no tengas experiencia previa con Vercel.

La idea es llevarte desde:

- tener el proyecto en tu PC
- subirlo a GitHub
- conectarlo con Vercel
- configurar variables de entorno
- hacer el deploy
- conectar dominio
- revisar analytics y anuncios

## 1. Que necesitas antes de empezar

Antes de tocar Vercel, asegurate de tener esto:

- El proyecto funcionando en tu PC.
- Una cuenta de GitHub.
- Una cuenta de Vercel.
- Opcional: una cuenta de Google Analytics.
- Opcional: una cuenta de Google AdSense.
- Opcional: un dominio propio.

## 2. Confirmar que el proyecto esta listo

Antes de publicar, conviene revisar que el proyecto compile bien localmente.

En la terminal, parado en la carpeta del proyecto:

```powershell
npm install
npm run build
```

Si el build termina sin errores, estas en una buena base para publicar.

En este proyecto ya dejamos preparado:

- SEO base
- sitemap
- robots
- analytics por variable de entorno
- anuncios por variable de entorno
- placeholders de anuncios

## 3. Subir el proyecto a GitHub

Vercel trabaja mucho mejor si conectas un repositorio de GitHub.

Si tu proyecto todavia no esta subido, hace esto:

```powershell
git init
git add .
git commit -m "Primer deploy"
git branch -M main
git remote add origin TU_URL_DEL_REPO
git push -u origin main
```

### Como obtener `TU_URL_DEL_REPO`

1. Entra a GitHub
2. Crea un repositorio nuevo
3. Copia la URL que GitHub te muestra

Ejemplo:

```text
https://github.com/tuusuario/fasttools.git
```

Si ya tenes el repo subido, no hace falta repetir esto.

## 4. Crear cuenta o entrar a Vercel

1. Entra a `https://vercel.com`
2. Inicia sesion
3. Lo mas recomendable es entrar con GitHub

Ventaja:

- Vercel queda conectado al repo automaticamente
- cada `git push` puede generar un deploy nuevo

## 5. Importar el proyecto en Vercel

Una vez dentro de Vercel:

1. Hace clic en `Add New...`
2. Elegi `Project`
3. Busca tu repositorio `fasttools`
4. Toca `Import`

Vercel va a analizar el repo y tratar de detectar la tecnologia.

## 6. Verificar la configuracion del proyecto en Vercel

Cuando importes el repo, Vercel te va a mostrar una pantalla de configuracion.

Revisa esto:

- Framework Preset: `Next.js`
- Root Directory: vacio
- Build Command: dejar por defecto
- Output Directory: dejar por defecto
- Install Command: dejar por defecto

En este proyecto no deberias tener que cambiar nada raro.

## 7. Entender las variables de entorno

Las variables de entorno son valores que la app usa sin escribirlos directo en el codigo.

En este proyecto sirven para:

- conectar Google Analytics
- conectar Google AdSense
- indicar que slot de anuncio va en cada espacio

### Dondelas ves en este proyecto

Mira este archivo:

- [.env.example](c:/Users/facun/OneDrive/Desktop/fasttools/.env.example)

Ahi ya estan todos los nombres listos.

## 8. Variables de entorno que usa FastTools

### Analytics

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Esto sirve para Google Analytics 4.

### AdSense

```env
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

Esto identifica tu cuenta de AdSense.

### Slots de anuncios

```env
NEXT_PUBLIC_AD_SLOT_TOP=0000000000
NEXT_PUBLIC_AD_SLOT_CONTENT=0000000000
NEXT_PUBLIC_AD_SLOT_BOTTOM=0000000000
NEXT_PUBLIC_AD_SLOT_TOOL_TOP=0000000000
NEXT_PUBLIC_AD_SLOT_TOOL_MID=0000000000
NEXT_PUBLIC_AD_SLOT_TOOL_SIDE=0000000000
NEXT_PUBLIC_AD_SLOT_TOOL_BOTTOM=0000000000
```

Cada uno corresponde a una ubicacion distinta del sitio.

## 9. Como cargar variables en Vercel

En Vercel no se crea un archivo `.env.local` manualmente.

Se hace desde la interfaz web.

Paso a paso:

1. Entra a tu proyecto en Vercel
2. Ve a `Settings`
3. Entra en `Environment Variables`
4. Agrega una por una

Ejemplo:

- Name: `NEXT_PUBLIC_GA_ID`
- Value: `G-ABCD123456`

Despues tocas `Save`

Y repetis con las demas.

## 10. Mi recomendacion para el primer deploy

No intentes salir con todo junto si todavia no lo configuraste.

Orden recomendado:

### Opcion simple

Publicar primero solo con analytics:

- cargar `NEXT_PUBLIC_GA_ID`
- no cargar AdSense todavia

### Opcion completa

Publicar con analytics y anuncios:

- cargar `NEXT_PUBLIC_GA_ID`
- cargar `NEXT_PUBLIC_ADSENSE_CLIENT`
- cargar todos los `NEXT_PUBLIC_AD_SLOT_*`

## 11. Primer deploy en Vercel

Una vez que cargaste las variables necesarias:

1. Vuelve a la pantalla principal del proyecto
2. Toca `Deploy`
3. Espera que termine el build

Si sale bien, Vercel te va a dar una URL parecida a:

```text
https://fasttools-xxxx.vercel.app
```

Esa ya es una version online del sitio.

## 12. Que revisar cuando termina el deploy

Abri la URL y revisa:

- Home
- `/herramientas`
- `/texto`
- `/generadores`
- `/calculadoras`
- varias herramientas nuevas
- `/sitemap.xml`
- `/robots.txt`

Tambien proba:

- copiar resultados
- limpiar campos
- links entre herramientas
- landings individuales

## 13. Si cambias variables despues del deploy

Si agregas o cambias variables de entorno en Vercel:

1. guarda la variable
2. hace un redeploy

Esto se puede hacer desde:

- `Deployments`
- elegir el ultimo deploy
- `Redeploy`

## 14. Como conectar Google Analytics 4

Si todavia no lo tenes:

1. Entra a Google Analytics
2. Crea una propiedad GA4
3. Crea un flujo web
4. Copia el `Measurement ID`

Ejemplo:

```text
G-ABCD123456
```

Ese valor va en Vercel como:

- Name: `NEXT_PUBLIC_GA_ID`
- Value: `G-ABCD123456`

### Como comprobar que funciona

Despues del deploy:

1. entra a tu sitio publicado
2. navega varias paginas
3. abre Google Analytics
4. entra en `Realtime`

Si todo esta bien, deberias verte ahi.

## 15. Como conectar Google AdSense

Esto solo si ya tenes una cuenta aprobada o estas listo para configurarla.

### Paso 1. Obtener el client ID

En AdSense vas a ver algo parecido a:

```text
ca-pub-XXXXXXXXXXXXXXXX
```

Ese valor va en:

- Name: `NEXT_PUBLIC_ADSENSE_CLIENT`

### Paso 2. Crear bloques o slots

Dentro de AdSense:

1. crea los bloques de anuncio
2. copia los `slot IDs`

Esos valores van en:

- `NEXT_PUBLIC_AD_SLOT_TOP`
- `NEXT_PUBLIC_AD_SLOT_CONTENT`
- `NEXT_PUBLIC_AD_SLOT_BOTTOM`
- `NEXT_PUBLIC_AD_SLOT_TOOL_TOP`
- `NEXT_PUBLIC_AD_SLOT_TOOL_MID`
- `NEXT_PUBLIC_AD_SLOT_TOOL_SIDE`
- `NEXT_PUBLIC_AD_SLOT_TOOL_BOTTOM`

### Paso 3. Redeploy

Despues de guardar esas variables en Vercel:

1. hace `Redeploy`
2. revisa si aparecen anuncios en produccion

## 16. Que pasa si no configuras AdSense

No pasa nada grave.

El proyecto esta preparado para que:

- en desarrollo se vean placeholders
- en produccion no se rendericen anuncios vacios si faltan variables

O sea:

- podes publicar sin AdSense
- activar anuncios despues

## 17. Conectar un dominio propio

Si quieres usar un dominio real:

1. entra al proyecto en Vercel
2. ve a `Settings`
3. entra en `Domains`
4. agrega tu dominio

Ejemplos:

- `fasttools.app`
- `www.fasttools.app`

Vercel te va a mostrar que registros DNS agregar.

## 18. Donde configurar el DNS

El DNS se configura donde compraste el dominio.

Por ejemplo:

- Namecheap
- GoDaddy
- Cloudflare
- Hostinger
- DonWeb

En el panel de tu proveedor:

1. copias el registro que te pide Vercel
2. lo pegas
3. guardas cambios

Despues esperas la propagacion.

## 19. Como saber si el dominio quedo bien

Vercel te va a marcar el dominio como:

- configurado
- pendiente
- error

Cuando quede bien:

- tu dominio va a abrir el sitio
- deberia responder en `https`

## 20. Configuracion recomendada del dominio

Si usas dominio propio, conviene:

- elegir una version principal
- redirigir el resto a esa version

Ejemplo:

- principal: `https://fasttools.app`
- secundaria: `https://www.fasttools.app` redirige a la principal

## 21. Que pasa en los siguientes cambios

Despues del primer deploy, el flujo normal es este:

1. haces cambios en tu PC
2. guardas todo
3. haces commit
4. haces push a GitHub

Ejemplo:

```powershell
git add .
git commit -m "Nuevas mejoras"
git push
```

Cuando haces eso:

- Vercel detecta el cambio
- genera un deploy nuevo automaticamente

## 22. Deploys de preview

Una ventaja fuerte de Vercel es que cada cambio puede generar una preview.

Eso te sirve para:

- probar antes de tocar produccion
- compartir una URL de prueba
- ver si algo se rompio

## 23. Verificaciones despues de publicar

Cuando el sitio ya este online, revisa:

### Tecnico

- home carga bien
- herramientas cargan bien
- no hay errores visibles
- `sitemap.xml` funciona
- `robots.txt` funciona
- el dominio responde en `https`

### Analytics

- GA4 muestra trafico realtime

### Monetizacion

- anuncios aparecen solo si realmente los configuraste

### SEO

- Search Console reconoce el dominio
- sitemap enviado correctamente

## 24. Alta en Google Search Console

Una vez publicado:

1. entra a Google Search Console
2. agrega tu dominio o prefijo de URL
3. verifica la propiedad
4. envia:

```text
https://tu-dominio.com/sitemap.xml
```

Esto ayuda a indexar el sitio.

## 25. Lighthouse y revision final

Despues de publicar, conviene hacer una ronda final:

### Revisar mobile

- diseño
- tamaños
- botones
- espaciados

### Revisar desktop

- home
- indice general
- categorias
- landings de herramientas

### Revisar performance

- correr Lighthouse
- revisar que no haya recursos extraños lentos

## 26. Orden ideal para no complicarte

Si quieres el camino mas limpio:

1. subir repo a GitHub
2. importar en Vercel
3. cargar solo `NEXT_PUBLIC_GA_ID`
4. deploy
5. revisar que todo ande
6. conectar dominio
7. dar de alta Search Console
8. activar anuncios despues

## 27. Errores comunes

### Error 1. El sitio publica pero no hay analytics

Causa:

- faltó `NEXT_PUBLIC_GA_ID`
- o cambiaste la variable y no hiciste redeploy

### Error 2. No aparecen anuncios

Causa posible:

- falta `NEXT_PUBLIC_ADSENSE_CLIENT`
- faltan `slot IDs`
- AdSense todavia no aprobo el sitio
- faltó redeploy

### Error 3. El dominio no abre

Causa posible:

- DNS mal cargado
- propagacion incompleta
- dominio sin verificar

### Error 4. El deploy falla

Causa posible:

- repo con cambios incompletos
- variables necesarias faltantes
- error nuevo introducido en codigo

## 28. Archivos utiles dentro de este proyecto

Te conviene tener a mano:

- [.env.example](c:/Users/facun/OneDrive/Desktop/fasttools/.env.example)
- [PREPUBLICACION.md](c:/Users/facun/OneDrive/Desktop/fasttools/docs/PREPUBLICACION.md)
- [DEPLOY_VERCEL.md](c:/Users/facun/OneDrive/Desktop/fasttools/docs/DEPLOY_VERCEL.md)

## 29. Resumen corto

Si quisieras hacerlo rapido, seria:

1. subir repo a GitHub
2. importarlo en Vercel
3. agregar `NEXT_PUBLIC_GA_ID`
4. deploy
5. probar la URL
6. conectar dominio
7. enviar sitemap a Search Console
8. agregar AdSense despues

## 30. Recomendacion mia para vos

No intentes salir con todo configurado el mismo dia si es tu primera publicacion.

Hace esto:

1. Vercel
2. GA4
3. dominio
4. Search Console
5. AdSense despues

Ese orden te va a dar menos friccion y menos puntos de falla.
