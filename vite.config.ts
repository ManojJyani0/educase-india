import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    nitroV2Plugin(),
    devtools(),
    tailwindcss(),
    tanstackStart(),
    viteReact({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
  base: process.env.VERCEL ? '/' : (process.env.VITE_BASE_PATH || '/educase-india'),
})

export default config
