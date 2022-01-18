import babel from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import visualizer from 'rollup-plugin-visualizer';


export default {
  input: 'src/CalendarIcon.js',
  output: [
    {
      file: 'dist/react-calendar-icon.min.js',
      format: 'umd',
      globals: {
        'react': 'React',
        '@emotion/styled': 'emotionStyled',
      },
      name: 'ReactCalendarIcon',
      exports: 'named',
      plugins: [uglify(), visualizer({ filename: './bundle-stats.html' })],
    },
    {
      file: 'dist/react-calendar-icon.esm.js',
      format: 'es',
    },
    {
      file: 'dist/react-calendar-icon.cjs.js',
      format: 'cjs',
      exports: 'named'
    },
  ],
  external: ['react', '@emotion/styled'],
  plugins: [ babel() ],
}
