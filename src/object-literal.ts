import ts, { PropertyAssignment, ObjectLiteralExpression } from "typescript"

export enum PrimitiveType {
    String,
    Number,
    Boolean,
    Null,
}

export interface PropertyDescriptor {
    readonly key: string
    readonly types: ReadonlyArray<PrimitiveType>
}

export interface TypeDefaultMap {
    readonly [key: number]: any
}

const generatePropertyAssignment = (key: string, value: any): PropertyAssignment => {
    return ts.createPropertyAssignment(key, ts.createLiteral(value))
}

export const generateDefaultObjectLiteralFromPropertyDescriptors = (propDescriptions: ReadonlyArray<PropertyDescriptor>, defaults: TypeDefaultMap): ObjectLiteralExpression => {
    const defaultAssignments = propDescriptions
        .map(({key, types}) => ({ key, value: defaults[types[0]] }))
        .map(({key, value}) => generatePropertyAssignment(key, value))

    return ts.createObjectLiteral(defaultAssignments, true)
}
