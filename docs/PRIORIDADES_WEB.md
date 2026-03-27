# Prioridades de Correccion - FastTools

Este documento ordena que corregir primero en la web para mejorar percepcion de calidad, utilidad real, SEO y base tecnica.

## Prioridad 1 - Corregir lo que hoy rompe confianza

### 1. Arreglar promesas que la interfaz no cumple
- Implementar descarga y copia real del QR.
- Revisar todos los textos de herramientas para que no prometan funciones inexistentes.
- Verificar que cada CTA haga exactamente lo que dice.

Impacto:
- Evita frustracion inmediata.
- Mejora credibilidad del producto.

### 2. Resolver problemas visibles de texto y codificacion
- Corregir caracteres rotos o inconsistentes en textos, labels y contenido SEO.
- Unificar tildes, simbolos y microcopy en toda la app.

Impacto:
- La web se ve mas profesional.
- Reduce sensacion de sitio "incompleto".

### 3. Pasar el proyecto a estado tecnico limpio
- Corregir errores actuales de lint.
- Hacer una pasada de consistencia en componentes repetidos.
- Confirmar que no queden warnings evitables en las rutas principales.

Impacto:
- Base mas segura para seguir iterando.
- Menor riesgo de romper cosas al mejorar el sitio.

## Prioridad 2 - Mejorar descubrimiento y cobertura de herramientas

### 4. Mostrar todas las herramientas que ya existen
- Agregar a la home las herramientas faltantes.
- Agregar a /herramientas las tools que no estan listadas.
- Revisar que categorias, home y listados generales esten sincronizados.

Herramientas hoy subexpuestas:
- Contador de lineas
- Generador de Lorem Ipsum
- Calculadora de IMC
- Conversor de temperatura

Impacto:
- Aumenta el valor percibido sin crear features nuevas.
- Mejora navegacion interna y descubrimiento.

### 5. Mejorar enlaces internos entre herramientas
- Ampliar "Herramientas relacionadas".
- Conectar mejor las herramientas por caso de uso.
- Evitar paginas que terminan en callejon sin salida.

Impacto:
- Mas paginas por sesion.
- Mejor SEO interno.

## Prioridad 3 - SEO tecnico y posicionamiento

### 6. Completar sitemap y metadata global
- Incluir todas las paginas reales en el sitemap.
- Agregar canonical.
- Agregar Open Graph y Twitter cards.
- Revisar titles y descriptions para evitar repeticiones flojas.

Impacto:
- Mejor indexacion.
- Mejor apariencia al compartir links.

### 7. Fortalecer SEO por pagina
- Revisar cada landing de herramienta para asegurar keyword principal clara.
- Validar que el contenido coincida con la funcionalidad real.
- Mantener FAQ y HowTo solo cuando aporten valor real.

Impacto:
- Mejor potencial de trafico organico.
- Menos contenido generico o inconsistente.

## Prioridad 4 - UX y accesibilidad

### 8. Mejorar formularios y feedback
- Agregar labels correctos a inputs y textareas.
- Mostrar confirmacion al copiar.
- Mejorar estados vacios y mensajes de ayuda.
- Revisar foco visible y navegacion por teclado.

Impacto:
- La web se siente mas cuidada.
- Mejora uso en mobile y accesibilidad.

### 9. Hacer la navegacion mas util
- Evaluar agregar categorias en navbar o acceso rapido a herramientas populares.
- Destacar mejor las rutas principales desde home.
- Revisar si "Home" y "Herramientas" alcanza o queda corto.

Impacto:
- Menos friccion para encontrar utilidad.
- Mejor experiencia para usuarios nuevos.

## Prioridad 5 - Confianza, marca y monetizacion futura

### 10. Completar footer y paginas institucionales
- Agregar Privacidad.
- Agregar Terminos.
- Agregar Contacto o una forma minima de soporte.
- Agregar una breve descripcion del proyecto o de quien lo mantiene.

Impacto:
- Mejora confianza del usuario.
- Prepara la web para ads, partnerships o crecimiento.

### 11. Definir mejor identidad visual y de producto
- Afinar tono de marca.
- Dar mas personalidad a home y categorias.
- Revisar si el sitio se ve demasiado generico para competir.

Impacto:
- Mayor recordacion.
- Mejor diferenciacion frente a otras webs de herramientas.

## Orden recomendado de ejecucion

1. Corregir funciones prometidas pero no implementadas.
2. Arreglar textos, codificacion y errores de lint.
3. Exponer todas las herramientas en home, listados y sitemap.
4. Mejorar SEO tecnico base.
5. Mejorar UX de formularios, feedback y accesibilidad.
6. Completar footer y paginas de confianza.
7. Refinar identidad visual y conversion.

## Alcance sugerido para la proxima etapa

Primera tanda recomendada:
- QR: descarga y copia real.
- Limpieza de textos y caracteres.
- Fix de lint.
- Home y /herramientas sincronizadas con todas las tools.
- Sitemap completo.

Segunda tanda recomendada:
- Labels, feedback al copiar y mejoras de accesibilidad.
- Footer con privacidad, terminos y contacto.
- Mejora de metadata social y canonical.
