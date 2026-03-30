# Checklist de Prepublicacion

Este archivo deja preparado lo minimo para publicar FastTools con analitica, monetizacion y una pasada tecnica final.

Tambien tienes una plantilla en `.env.example` con todas las variables listas para completar.

## Analytics

FastTools ya quedo preparado para GA4 desde codigo.

Variable necesaria:

- `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

Que hace:

- Carga `gtag.js` desde el layout global.
- Registra vistas de pagina en navegacion cliente.
- No depende de instalar paquetes externos.

## Monetizacion

Los espacios publicitarios ya quedaron listos para AdSense por slot.

Variables necesarias:

- `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX`
- `NEXT_PUBLIC_AD_SLOT_TOP=...`
- `NEXT_PUBLIC_AD_SLOT_CONTENT=...`
- `NEXT_PUBLIC_AD_SLOT_BOTTOM=...`
- `NEXT_PUBLIC_AD_SLOT_TOOL_TOP=...`
- `NEXT_PUBLIC_AD_SLOT_TOOL_MID=...`
- `NEXT_PUBLIC_AD_SLOT_TOOL_SIDE=...`
- `NEXT_PUBLIC_AD_SLOT_TOOL_BOTTOM=...`

Comportamiento actual:

- En desarrollo, si no configuras slots, se muestran placeholders para revisar ubicaciones.
- En produccion, si faltan variables, no se renderizan bloques vacios.
- Si configuras AdSense, el script carga con `lazyOnload` para reducir impacto inicial.

## Performance basica

Ya quedaron aplicadas estas mejoras:

- `compress: true` en Next.
- `poweredByHeader: false`.
- Carga diferida para AdSense.
- Analytics cargado con `afterInteractive`.

## Antes de publicar

Conviene revisar estos puntos fuera del repo:

- Dar de alta la propiedad de GA4 y copiar el ID real.
- Crear los slots reales de AdSense y pegar sus IDs.
- Ejecutar `npm run build` en el entorno final.
- Verificar Search Console y enviar `sitemap.xml`.
- Probar mobile y desktop con Lighthouse.

## Recomendacion final

Si quieres una salida prolija, el orden recomendado es:

1. Configurar `GA4`.
2. Publicar sin anuncios o con pocos slots.
3. Medir paginas mas vistas.
4. Ajustar los anuncios despues de ver comportamiento real.
