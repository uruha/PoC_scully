import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "dev-scully",
  outDir: './dist/static',
  routes: {
    '/foo/:title': {
      type: 'contentFolder',
      title: {
        folder: "./foo"
      }
    },
    '/hoge/:title': {
      type: 'contentFolder',
      title: {
        folder: "./hoge"
      }
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};