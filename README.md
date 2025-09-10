# Órtesis3D — Sitio Web

Este repositorio contiene el código del sitio **Órtesis3D**, proyecto educativo del Liceo Bicentenario de San Nicolás.  
El sitio presenta la iniciativa de diseño y fabricación de una órtesis 3D inclusiva.  Desarrollado por el Ingeniero en Informatica Francisco
Desarrollado por:
Francisco Pinto-Ingeniero en Informatica
junto a 
Víctor Gallegos — Kinesiólogo
Isaías Uro — Terapeuta Ocupacional

---

## 🔐 Medidas de protección aplicadas
- **Minificación** de HTML y CSS para dificultar la copia directa del código.
- **Ofuscación de JavaScript** (cargado con `eval(atob(...))`).
- **Trabas anti-copia**:
  - Bloqueo de clic derecho, arrastrar, copiar/cortar.
  - Bloqueo de atajos comunes (`Ctrl+S`, `Ctrl+U`, `F12`, etc.).
- **Banner legal en el footer**, con licencia explícita:
  > © Órtesis3D · Contenido protegido bajo [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
  > Uso educativo y no comercial. Reproducción solo con atribución.
- **Hash de build**: cada versión incluye un identificador único que se inserta como meta en `<head>` y visible en el banner legal.

---

## 🏷️ Hash de build actual
`b24eae5b0c36`

Puedes verificarlo en el código fuente de cualquier página (`<meta name="build-hash" ...>`).

---

## 📂 Estructura
- `index.html` — página principal.
- `about.html` — información del proyecto.
- `gallery.html` — galería de imágenes.
- `contact.html` — formulario de contacto.
- `css/styles.css` — estilos del sitio (incluye clase `.legal-banner`).
- `js/main.js` — funcionalidad JS (ofuscado).
- `img/` — carpeta de imágenes (no incluida en este build para reducir peso).

---

## ⚖️ Licencia
Este proyecto está bajo licencia [Creative Commons BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
Esto significa:
- ✅ Puedes compartirlo con atribución.
- ❌ No puedes usarlo con fines comerciales.
- ❌ No puedes hacer obras derivadas sin autorización expresa.

---

## 👨‍💻 Créditos
Proyecto desarrollado por **Francisco Pinto** — Ingeniero en Informática y Profesor.  
Colaboración interdisciplinaria con kinesiólogo, terapeuta ocupacional y estudiantes del **Liceo Bicentenario de San Nicolás**.
