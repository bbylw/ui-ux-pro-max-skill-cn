// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ui.cod.ndjp.net',
  // 保持输出 HTML 与原静态页面一致（不压缩 <pre> 与注释等内容）
  compressHTML: false,
});
