import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import visualizer from 'rollup-plugin-visualizer'
import json from 'rollup-plugin-json'
import pkg from './package.json'

const prod = process.env.NODE_ENV === 'production'
const mode = prod ? 'production' : 'development'

console.log(`Bundling for ${mode}...`)

const plugins = [
  nodeResolve(),
  commonjs({
    ignoreGlobal: true,
    namedExports: {
      'node_modules/react-is/index.js': [
        'isElement',
        'isValidElementType',
        'ForwardRef'
      ]
    }
  }),
  babel({
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false, loose: true }], '@babel/preset-react']
  }),
  json()
]

if (prod) {
  plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }))
}

const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
  'styled-components': 'styled'
}

export default {
  input: 'lib/index.js',
  moduleName: 'ReactCalendarIcon',
  external: ['react'].concat(Object.keys(pkg.dependencies)),
  exports: 'named',
  output: prod
    ? [{ file: 'dist/react-calendar-icon.min.js', format: 'umd', globals, name: 'ReactCalendarIcon' }]
    : [
      { file: 'dist/react-calendar-icon.js', format: 'umd', globals, name: 'ReactCalendarIcon' },
      { file: 'dist/react-calendar-icon.es.js', format: 'es' }
    ],
  plugins,
}
