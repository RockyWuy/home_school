
import pageRoutes from './router.config';

export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: {
        hmr: true
      },
      dynamicImport: true,
      title: 'newSchool',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  targets: {
    ie: 9,
  },
  routes: pageRoutes
}
