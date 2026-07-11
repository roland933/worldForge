import { GraphNode } from "../components/shared/types/Graph/GraphNode";

export const mockNodes: GraphNode[] = [
    { id: 1, x: 120, y: 300, type: "start" },

    { id: 2, x: 300, y: 150, type: "empty" },
    { id: 3, x: 300, y: 300, type: "empty" },
    { id: 4, x: 300, y: 450, type: "empty" },

    { id: 5, x: 520, y: 300, type: "empty" },

    { id: 6, x: 740, y: 150, type: "empty" },
    { id: 7, x: 740, y: 300, type: "empty" },
    { id: 8, x: 740, y: 450, type: "empty" },

    { id: 9, x: 940, y: 300, type: "boss" },
];