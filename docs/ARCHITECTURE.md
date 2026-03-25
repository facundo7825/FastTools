# Architecture

## Routing

Each tool must have its own route.

Example:

/texto/contador-caracteres
/generadores/password
/calculadoras/porcentaje

---

## Folder structure

src/app

/app/page.tsx
/app/layout.tsx

/app/herramientas/page.tsx

/app/texto
/app/generadores
/app/calculadoras

/components
/lib
/utils
/styles

---

## Component rules

Use reusable components

Navbar
Footer
Container
ToolLayout
ToolCard

---

## Layout

Global layout in layout.tsx

Must contain:

Navbar
Main container
Footer

---

## SEO

Each page must have:

title
description
metadata

Use Next.js metadata API
