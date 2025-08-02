# SaveApp Landing Page

Landing page para SaveApp construida con Next.js y Tailwind CSS.

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Configuración Automática

1. **Habilitar GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - En "Source", selecciona "GitHub Actions"

2. **El despliegue es automático:**
   - Cada vez que hagas push a la rama `main`, se desplegará automáticamente
   - El workflow está configurado en `.github/workflows/deploy.yml`

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Servir build localmente
npm run serve
```

### Estructura del Proyecto

- `/app` - Páginas y componentes de Next.js 13+
- `/components` - Componentes reutilizables
- `/public` - Archivos estáticos
- `/out` - Build estático (generado automáticamente)

### Tecnologías

- Next.js 15
- React 19
- Tailwind CSS
- TypeScript
- Radix UI

## 📝 Notas

- El proyecto usa `output: 'export'` para generar archivos estáticos
- Las imágenes están configuradas como `unoptimized: true` para compatibilidad
- El build se genera en la carpeta `/out`