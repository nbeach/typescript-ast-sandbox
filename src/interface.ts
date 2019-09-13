import {PrimitiveType, PropertyDescriptor} from "./object-literal"
import ts, {InterfaceDeclaration, Identifier} from "typescript"

const kindToPrimitiveMap = {
    [ts.SyntaxKind.StringKeyword]: PrimitiveType.String,
    [ts.SyntaxKind.NumberKeyword]: PrimitiveType.Number,
    [ts.SyntaxKind.BooleanKeyword]: PrimitiveType.Boolean,
}

export const readInterfaceProperties = (interfaceDeclaration: InterfaceDeclaration): ReadonlyArray<PropertyDescriptor> => {
    return interfaceDeclaration.members.map(member => {
        if (!ts.isPropertySignature(member)) { throw new Error("Expected a property signature") }
        if (!ts.isIdentifier(member.name)) { throw new Error("Expected an identifier") }

        return { key: member.name.escapedText.toString(), types: [kindToPrimitiveMap[member.type!.kind]] }
    })
}
