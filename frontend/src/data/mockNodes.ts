import { GraphNode } from "../components/shared/types/Graph/GraphNode";

const CENTER = 750;



const LEFT = 400;
const RIGHT = 1100;

const ROW1 = 560;
const ROW2 = 420;
const ROW3 = 280;
const ROW4 = 140;
const ROW5 = 220;
const ROW6 = 40;

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

    { id: 11, x: CENTER, y: ROW6, type: "empty" },

];
