import ts from 'rollup-plugin-ts'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const output = {
  format: 'cjs',
  file: './build/index.cjs',
  exports: 'default'
}

if (process.env.NODE_ENV === 'test') output.sourcemap = true

export default {
  input: './lib/cjs.ts',
  output,
  plugins: [
    ts({ /* options */ }),
    nodeResolve(),
    commonjs({
      include: [
        'node_modules/emoji-regex/index.js',
        'node_modules/eastasianwidth/eastasianwidth.js'
      ]
    })
  ]
}
