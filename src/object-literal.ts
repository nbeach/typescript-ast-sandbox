import ts, { PropertyAssignment, ObjectLiteralExpression } from "typescript"

export enum PrimitiveType {
    String,
    Number,
    Boolean,
}

export interface PropertyDescriptor {
    readonly key: string
    readonly type: PrimitiveType
}

export interface TypeDefaultMap {
    readonly [key: number]: any
}

const generatePropertyAssignment = (key: string, value: any): PropertyAssignment => {
    return ts.createPropertyAssignment(key, ts.createLiteral(value))
}

export const generateDefaultObjectLiteralFromPropertyDescriptors = (propDescriptions: ReadonlyArray<PropertyDescriptor>, defaults: TypeDefaultMap): ObjectLiteralExpression => {
    const defaultAssignments = propDescriptions
        .map(({key, type}) => ({ key, value: defaults[type] }))
        .map(({key, value}) => generatePropertyAssignment(key, value))

    return ts.createObjectLiteral(defaultAssignments, true)
}
