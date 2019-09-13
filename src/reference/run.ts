import ts, { InterfaceDeclaration } from "typescript"
import {readInterfaceProperties} from "../interface";
import {generateDefaultObjectLiteralFromPropertyDescriptors, PrimitiveType, TypeDefaultMap} from "../object-literal";
import {stringifyAst} from "../stringify";

const filePath = "./src/reference/example-interface.ts"
const program = ts.createProgram([filePath], {})
const source = program.getSourceFile(filePath)!


const propDescriptors = readInterfaceProperties(source.statements[0] as InterfaceDeclaration)

const typeDefaultsMaps: TypeDefaultMap = {
    [PrimitiveType.String]: "",
    [PrimitiveType.Number]: 0,
    [PrimitiveType.Boolean]: false,
}

const defaultObject = generateDefaultObjectLiteralFromPropertyDescriptors(propDescriptors, typeDefaultsMaps)

console.log(stringifyAst(defaultObject))
