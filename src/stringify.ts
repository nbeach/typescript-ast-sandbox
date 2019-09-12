import ts from "typescript"

export const stringifyAst = (ast: any) => {
    const sourceFile: ts.SourceFile = ts.createSourceFile("file.ts", "", ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS)
    const printer: ts.Printer = ts.createPrinter()

    return printer.printNode(ts.EmitHint.Unspecified, ast, sourceFile)
}
