# Checklist de Deploy en Vercel

Este checklist esta pensado para publicar FastTools en Vercel sin olvidarte de configuraciones clave.

## 1. Preparar el repositorio

- Confirmar que el proyecto compila localmente con `npm run build`.
- Revisar que `.env.example` tenga todas las variables esperadas.
- Verificar que no se suban secretos reales al repo.

## 2. Crear el proyecto en Vercel

- Entrar a Vercel y crear un nuevo proyecto.
- Importar el repositorio de FastTools.
- Confirmar que detecte `Next.js` automaticamente.

## 3. Configurar variables de entorno

Copiar estas variables en `Project Settings > Environment Variables`:

- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_ADSENSE_CLIENT`
- `NEXT_PUBLIC_AD_SLOT_TOP`
- `NEXT_PUBLIC_AD_SLOT_CONTENT`
- `NEXT_PUBLIC_AD_SLOT_BOTTOM`
- `NEXT_PUBLIC_AD_SLOT_TOOL_TOP`
- `NEXT_PUBLIC_AD_SLOT_TOOL_MID`
- `NEXT_PUBLIC_AD_SLOT_TOOL_SIDE`
- `NEXT_PUBLIC_AD_SLOT_TOOL_BOTTOM`

Sugerencia:

- Si aun no vas a activar anuncios, puedes publicar solo con `NEXT_PUBLIC_GA_ID`.
- Los slots de anuncios pueden agregarse despues.

## 4. Lanzar el primer deploy

- Ejecutar el deploy inicial desde Vercel.
- Esperar a que el build termine sin errores.
- Abrir la URL de preview y revisar home, categorias y varias herramientas.

## 5. Conectar dominio

- Ir a `Project Settings > Domains`.
- Agregar tu dominio principal.
- Configurar DNS segun las instrucciones de Vercel.
- Confirmar que `https://fasttools.app` o tu dominio elegido responda bien.

## 6. Verificaciones despues de publicar

- Revisar que cargue la home.
- Revisar que `/sitemap.xml` y `/robots.txt` respondan bien.
- Probar varias herramientas de texto, generadores y calculadoras.
- Confirmar que GA4 reciba visitas en tiempo real.
- Confirmar que los anuncios solo aparezcan si configuraste AdSense.

## 7. SEO y consola

- Dar de alta el sitio en Google Search Console.
- Enviar `https://tu-dominio.com/sitemap.xml`.
- Revisar indexacion inicial y cobertura.

## 8. Ronda final recomendada

- Correr Lighthouse en mobile y desktop.
- Revisar que no haya errores visuales en responsive.
- Confirmar favicon, metadata y previews sociales.
- Hacer una pasada manual por las herramientas nuevas mas importantes.

## Orden recomendado

1. Publicar con analytics.
2. Revisar trafico y comportamiento.
3. Activar anuncios despues.
4. Ajustar slots segun paginas mas visitadas.
