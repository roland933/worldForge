import { GraphNode } from "../components/shared/types/Graph/GraphNode";

const CENTER = 750;

const LEFT = 350;
const RIGHT = 1150;

// Jó nagy függőleges távolságok
const ROW1  = 1800;
const ROW2  = 1550;
const ROW3  = 1300;
const ROW4  = 1050;
const ROW5  = 800;
const ROW6  = 550;
const ROW7  = 300;

export const mockNodes: GraphNode[] = [

    { id: 1, x: CENTER, y: ROW1, type: "start" },

    { id: 2, x: CENTER, y: ROW2, type: "empty" },

    { id: 3, x: LEFT,  y: ROW2, type: "empty" },
    { id: 4, x: RIGHT, y: ROW2, type: "empty" },

    { id: 5, x: CENTER, y: ROW3, type: "empty" },

    { id: 6, x: LEFT,  y: ROW3, type: "empty" },

    { id: 7, x: LEFT,  y: ROW4, type: "empty" },

    { id: 8, x: RIGHT, y: ROW4, type: "empty" },

    { id: 9, x: CENTER, y: ROW4, type: "empty" },

    { id: 10, x: CENTER, y: ROW5, type: "empty" },

    { id: 11, x: LEFT,  y: ROW5, type: "empty" },

    { id: 12, x: RIGHT, y: ROW5, type: "empty" },

    { id: 13, x: CENTER, y: ROW6, type: "empty" },

    { id: 14, x: LEFT,  y: ROW6, type: "empty" },

    { id: 15, x: RIGHT, y: ROW6, type: "empty" },

    { id: 16, x: CENTER, y: ROW7, type: "boss" },
];