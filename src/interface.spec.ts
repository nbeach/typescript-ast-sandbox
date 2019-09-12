import {readInterfaceProperties} from "./interface"
import {PrimitiveType, PropertyDescriptor} from "./object-literal"
import {expect} from "chai"
import ts from "typescript"

describe(readInterfaceProperties.name, () => {

    it("extracts the interface properties as descriptors ", () => {
        const interfaceDeclaration = `
            export interface TestInterface {
                foo: string
                bar: number
                baz: boolean
            }
        `
        const source = ts.createSourceFile("file.ts", interfaceDeclaration, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS)

        const actual = readInterfaceProperties(source.statements[0] as any)

        const expected: ReadonlyArray<PropertyDescriptor> = [
            {key: "foo", type: PrimitiveType.String },
            {key: "bar", type: PrimitiveType.Number },
            {key: "baz", type: PrimitiveType.Boolean },
        ]

        expect(actual).to.deep.equal(expected)
    })

})
