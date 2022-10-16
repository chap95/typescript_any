type TAnyAnd = any & string;
type TAnyOr = any | string;

type TUnknownAnd = unknown & string;
type TUnknownOr = unknown | string;

let x: unknown;
x = () => {};
