import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import { resolve } from 'path'

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
}
// vite.config.js
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    // dynamicImportVars(),
    createVuePlugin({
      vueTemplateOptions: {},
      jsx:true
    }),
  ],
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      // vue2项目别名一般都是@，vue3中一般使用/@/, 为方便使用
      '@': resolve('src')
    }
  }
})
