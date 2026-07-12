
export type Direction =
  | "up"
  | "down"
  | "left"
  | "right"
  | "up-left"
  | "up-right"
  | "down-left"
  | "down-right";
export type Directions = {
     "from" : Direction,
     "to" : Direction
}