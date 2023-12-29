import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  // 因为这里可以拿到env的环境文件，不过后缀是 development
  const viteEnv = loadEnv(configEnv.mode, process.cwd())
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src") // 别名

      },
    },
    server: {
      port: viteEnv.VITE_PORT,
    },
    plugins: [vue()],
  }
})


