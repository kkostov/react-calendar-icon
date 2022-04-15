import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import visualizer from 'rollup-plugin-visualizer'
import styles from 'rollup-plugin-styles';


const prod = process.env.NODE_ENV === 'production'
const mode = prod ? 'production' : 'development'

console.log(`Bundling for ${mode}...`)

const plugins = [
  nodeResolve(),
  babel({
    extensions: ['.js'],
  }),
  commonjs({
    ignoreGlobal: true,
  }),
  styles({
    mode: 'inject'
  }),
  json()
]

if (prod) {
  plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }))
}

const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: `dist/react-calendar-icon${prod ? '.min' : ''}.js`,
      format: 'umd',
      globals,
      name: 'ReactCalendarIcon',
      exports: 'named'
    },
    {
      file: `dist/react-calendar-icon.esm.js`,
      format: 'es',
    },
    ...prod ? [{
      file: 'dist/react-calendar-icon.cjs.js',
      format: 'cjs',
      exports: 'named'
    }] : [],
  ],
  external: ['react', 'prop-types'],
  plugins,
}
