export type TUINuxtEditorBuiltInExtensions = 'chart' | 'colorSyntax' | 'scrollSync' | 'table' | 'uml'

export type TUINuxtEditorStyleSheetOptions = {
  editor?: string,
  contents?: string,

  codemirror?: string,
  highlightJs?: string,
  tuiColorPicker?: string
}

/**
 * TOAST UI Editor IEditorOptions subset
 */
export interface IEditorOptionsSubset {
  stylesheet?: TUINuxtEditorStyleSheetOptions,
  height?: string;
  minHeight?: string;
  initialValue?: string;
  previewStyle?: string;
  initialEditType?: string;
  events?: tuiEditor.IEvent[];
  hooks?: tuiEditor.IEvent[];
  language?: string;
  useCommandShortcut?: boolean;
  useDefaultHTMLSanitizer?: boolean;
  codeBlockLanguages?: string[];
  usageStatistics?: boolean;
  toolbarItems?: string[];
  hideModeSwitch?: boolean;
  exts?: TUINuxtEditorBuiltInExtensions[] | string[];
  customConvertor?: tuiEditor.IConvertor;
  placeholder?: string;
  viewer?: boolean
}

export type TUINuxtEditorOptions = IEditorOptionsSubset | false
