import {
    generateDefaultObjectLiteralFromPropertyDescriptors,
    PrimitiveType,
    PropertyDescriptor,
    TypeDefaultMap,
} from "./object-literal"
import {expect} from "chai"
import ts from "typescript"

describe(generateDefaultObjectLiteralFromPropertyDescriptors.name, () => {

    it("creates object literals from property descriptors and default values", () => {
        const propDescriptors: ReadonlyArray<PropertyDescriptor> = [
            {key: "foo", types: [PrimitiveType.String] },
            {key: "bar", types: [PrimitiveType.Number] },
            {key: "baz", types: [PrimitiveType.Boolean] },
        ]

        const typeDefaultsMaps: TypeDefaultMap = {
            [PrimitiveType.String]: "",
            [PrimitiveType.Number]: 0,
            [PrimitiveType.Boolean]: false,
        }

        const actual = generateDefaultObjectLiteralFromPropertyDescriptors(propDescriptors, typeDefaultsMaps)

        const expected =
            ts.createObjectLiteral([
                ts.createPropertyAssignment("foo", ts.createLiteral("")),
                ts.createPropertyAssignment("bar", ts.createLiteral(0)),
                ts.createPropertyAssignment("baz", ts.createLiteral(false)),
            ], true)

        expect(actual).to.deep.equal(expected)
    })

})
