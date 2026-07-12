import { GraphNode } from "../components/shared/types/Graph/GraphNode";

const CENTER = 750;

const LEFT = 620;
const RIGHT = 880;

const ROW1 = 540;
const ROW2 = 460;
const ROW3 = 380;
const ROW4 = 300;
const ROW5 = 220;
const ROW6 = 140;
const ROW7 = 60;


export const mockNodes: GraphNode[] = [

    { id: 1, x: CENTER, y: ROW1, type: "start" },

    { id: 2, x: CENTER, y: ROW2, type: "empty" },

    { id: 3, x: LEFT, y: ROW3, type: "empty" },
    { id: 4, x: RIGHT, y: ROW3, type: "empty" },

    { id: 5, x: CENTER, y: ROW4, type: "empty" },
{ id: 6, x: LEFT, y: ROW4, type: "empty" },
    { id: 7, x: LEFT, y: ROW5, type: "empty" },
    { id: 8, x: RIGHT, y: ROW5, type: "empty" },

    { id: 9, x: CENTER, y: ROW6, type: "empty" },

    { id: 11, x: LEFT, y: ROW7, type: "empty" },
    { id: 12, x: RIGHT, y: ROW7, type: "boss" },

];
