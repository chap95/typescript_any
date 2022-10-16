type TAnyAnd = any & string;
type TAnyOr = any | string;

type TUnknownAnd = unknown & string;
type TUnknownOr = unknown | string;

let x: unknown;
x = () => {};

function throwError() {
  throw new Error("there is no coloe");
}

function getHEXColor(color: string) {
  switch (color) {
    case "red":
      return "#FF0000";
    case "blue":
      return "#0000FF";
    default:
      return throwError();
  }
}

function getColorHEXCode(colorText: string) {
  switch (colorText) {
    case "red":
      return "#FF0000";
    case "blue":
      return "0000FF";
    // ...add all of color
    default:
      return "none";
  }
}
