import {readInterfaceProperties} from "./interface"
import {PrimitiveType, PropertyDescriptor} from "./object-literal"
import {expect} from "chai"
import ts from "typescript"

describe(readInterfaceProperties.name, () => {

    describe("extracts the interface properties that are", () => {

        it("primitive types", () => {
            const interfaceDeclaration = `
            export interface TestInterface {
                a: string
                b: number
                c: boolean
            }
        `
            const source = ts.createSourceFile("file.ts", interfaceDeclaration, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS)

            const actual = readInterfaceProperties(source.statements[0] as any)

            const expected: ReadonlyArray<PropertyDescriptor> = [
                {key: "a", types: [PrimitiveType.String] },
                {key: "b", types: [PrimitiveType.Number] },
                {key: "c", types: [PrimitiveType.Boolean] },
            ]

            expect(actual).to.deep.equal(expected)
        })

        it("union types of a single primitive with null", () => {
            const interfaceDeclaration = `
            export interface TestInterface {
                a: string | null
            }
        `
            const source = ts.createSourceFile("file.ts", interfaceDeclaration, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS)

            const actual = readInterfaceProperties(source.statements[0] as any)

            const expected: ReadonlyArray<PropertyDescriptor> = [
                {key: "d", types: [PrimitiveType.String, PrimitiveType.Null] },
            ]

            expect(actual).to.deep.equal(expected)
        })

    })

})
