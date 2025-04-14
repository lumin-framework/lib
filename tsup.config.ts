// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ["src/shared/*.ts", "src/client/*.ts", "src/server/*.ts"],
  outDir: 'dist',
  target: 'es2020',
  format: ['esm'],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: false,
  outExtension({ format }) {
    return { js: `.js` };
  },
});