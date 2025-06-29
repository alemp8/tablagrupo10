import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  base: '/tablagrupo10/', 
  plugins: [
    handlebars({
      partialDirectory: './src/partials'
    })
  ]
})
