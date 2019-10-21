export function isBuiltInExtension (extension: string): boolean {
  return ['chart', 'colorSyntax'.toLowerCase(), 'scrollSync'.toLowerCase(), 'table', 'uml'].includes(extension.toLowerCase())
}
