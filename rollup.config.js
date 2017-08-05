import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import visualizer from 'rollup-plugin-visualizer'
import json from 'rollup-plugin-json'
import pkg from './package.json'

const prod = process.env.NODE_ENV === 'production'
const mode = prod ? 'production' : 'development'

console.log(`Bundling for ${mode}...`)

const targets = prod
  ? [{ dest: 'dist/react-calendar-icon.min.js', format: 'umd' }]
  : [
    { dest: 'dist/react-calendar-icon.js', format: 'umd' },
    { dest: 'dist/react-calendar-icon.es.js', format: 'es' }
  ]

const plugins = [
  nodeResolve(),
  commonjs({
    ignoreGlobal: true
  }),
  babel({
    babelrc: false,
    presets: [['env', { modules: false, loose: true }], 'react'],
    plugins: [
      'add-module-exports',
      'transform-object-rest-spread',
      'transform-class-properties',
      'external-helpers'
    ].filter(Boolean)
  }),
  json()
]

if (prod) {
  plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }))
}

export default {
  entry: 'lib/index.js',
  moduleName: 'ReactCalendarIcon',
  external: ['react'].concat(Object.keys(pkg.dependencies)),
  exports: 'named',
  targets,
  plugins,
  globals: {
    react: 'React',
    'prop-types': 'PropTypes',
    'styled-components': 'styled'
  }
}
