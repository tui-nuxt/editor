import { resolve } from 'path'

import log from 'consola'
import merge from 'lodash.merge'
import { Module, ModuleThis } from '@nuxt/types/config/module'

import { TUINuxtEditorOptions } from './options'
import { defaultOptions } from './constant'
import { isBuiltInExtension } from './helper'

const tuiEditorModule: Module<TUINuxtEditorOptions> = function (this: ModuleThis, innerOption?: TUINuxtEditorOptions): void {
  const options: TUINuxtEditorOptions = merge(
    defaultOptions,
    (this.options.tui || {}).editor,
    innerOption
  )

  if (options === false) {
    log.debug('@tui-nuxt/editor is disabled')
    return
  }

  /* add stylesheet */
  const stylesheet = options.stylesheet!
  this.options.css!.push(
    stylesheet.editor!,
    stylesheet.contents!,
    stylesheet.codemirror!,
    stylesheet.highlightJs!,
    stylesheet.tuiColorPicker!
  )

  /* add tui-editor extension */
  const exts = []
  for (const extension of options.exts!) {
    if (isBuiltInExtension(extension)) {
      exts.push(`tui-editor/dist/tui-editor-ext${extension.toLowerCase()}`)
    } else {
      exts.push(extension)
    }
  }

  /* add plugin */
  this.addPlugin({
    mode: 'client',
    src: resolve(__dirname, '..', 'plugins', 'tui-editor.ejs.js'),
    fileName: 'tui/editor.client.js',
    options: {
      exts,
      options: JSON.stringify(options)
    }
  })
}

export default tuiEditorModule
