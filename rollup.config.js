import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import visualizer from 'rollup-plugin-visualizer'

const prod = process.env.NODE_ENV === 'production'
const mode = prod ? 'production' : 'development'

console.log(`Bundling for ${mode}...`)

const plugins = [
  nodeResolve(),
  commonjs({
    ignoreGlobal: true,
  }),
  babel(),
  json()
]

if (prod) {
  plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }))
}

const globals = {
  react: 'React',
  '@emotion/styled': 'emotionStyled',
}

export default {
  input: 'lib/module.js',
  output: [
    {
      file: `dist/react-calendar-icon${prod ? '.min' : ''}.js`,
      format: 'umd',
      globals,
      name: 'ReactCalendarIcon',
      exports: 'named'
    },
    ...prod ? [{
      file: 'dist/react-calendar-icon.cjs.js',
      format: 'cjs',
      exports: 'named'
    }] : [],
  ],
  external: ['react', '@emotion/styled'],
  plugins,
}
