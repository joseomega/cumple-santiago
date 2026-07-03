# Invitación de cumpleaños — Santiago (10 años) 🤖

Tarjeta digital animada con tema Baymax (Big Hero 6).

## Estructura
```
├── index.html                  ← página principal (ligera, ~10 KB)
├── css/
│   └── styles.css              ← todos los estilos
├── js/
│   └── main.js                 ← cuenta regresiva, música y modal
└── assets/
    ├── audio/
    │   └── musica.mp3          ← música de fondo
    └── img/
        ├── mapa-estacionamiento.png   ← mapa de estacionamiento (modal)
        └── og-image.png               ← imagen de vista previa (WhatsApp)
```

## Publicar en GitHub Pages
1. Crea un repositorio **público** (ej. `cumple-santiago`).
2. Sube **todo el contenido de esta carpeta** manteniendo las subcarpetas
   (arrastra `index.html`, `css/`, `js/` y `assets/` juntos).
3. Ve a **Settings → Pages**, elige la rama `main` y carpeta `/ (root)`, y guarda.
4. En ~1 minuto tendrás tu enlace: `https://TU-USUARIO.github.io/cumple-santiago/`

## Importante
- Si tu repositorio NO se llama `cumple-santiago`, edita en `index.html` las
  etiquetas `og:url`, `og:image` y `twitter:image` para que apunten a tu URL real.
- La música empieza con el primer toque en la tarjeta (los navegadores bloquean
  el audio automático). El botón de arriba a la derecha activa/silencia.
- Para refrescar la vista previa en WhatsApp, comparte con `?v=2` (o `?v=3`) al final.
