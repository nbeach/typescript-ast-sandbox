
// const additionExpression = ts.createAdd(ts.createLiteral(42), ts.createLiteral("foo"))
// const inf = ts.createInterfaceDeclaration(
//     [],
//     [ts.createToken(ts.SyntaxKind.ExportKeyword)],
//     "FooInterface",
//     [],
//     [],
//     [ts.createType],
//
// )








// hardcode our input file
// const filePath = "./src/model/view/AircraftFilterView.ts"
//
// // create a program instance, which is a collection of source files
// // in this case we only have one source file
// const program = ts.createProgram([filePath], {})
//
// // pull off the typechecker instance from our program
// // const checker = program.getTypeChecker()
//
// // get our models.ts source file AST
// const source = program.getSourceFile(filePath)!
//
// // create TS printer instance which gives us utilities to pretty print our final AST
// // const printer = ts.createPrinter()
//
// // // helper to give us Node string type given kind
// // const syntaxToKind = (kind: ts.Node["kind"]) => {
// //     return ts.SyntaxKind[kind]
// // }
//
// // visit each node in the root AST and log its kind
// ts.forEachChild(source, node => {
//     // console.log(node)
//     // node.forEachChild(node => syntaxToKind(node.kind))
// })
