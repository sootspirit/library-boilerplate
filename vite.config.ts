import { defineConfig } from 'vite';
import { resolve, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import dts from 'unplugin-dts/vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { globSync } from 'glob';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/lib'],
      tsconfigPath: './tsconfig.lib.json',
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
    libInjectCss(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/lib/main.ts'),
      formats: ['es'],
    },
    rolldownOptions: {
      input: Object.fromEntries(
        globSync(['src/lib/main.ts', 'src/lib/**/**/*.{ts,scss}', 'src/lib/**/*.{ts}']).map((file: string) => [
          relative('src/lib', file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});