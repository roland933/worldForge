import type { GraphNode } from "../components/shared/types/Graph/GraphNode";

type Props = {
    width: number;
    height: number;
};

export function createMockNodes({
    width,
    height,
}: Props): GraphNode[] {

    const center = width / 2;

    const left = center - width * 0.10;
    const right = center + width * 0.10;

    const rows = 10;
    const topPadding = 40;
    const bottomPadding = 40;

    const rowGap =
        (height - topPadding - bottomPadding) / (rows - 1);

    const row = (index: number) =>
        height - bottomPadding - index * rowGap;

    return [

        { id: 1, x: center, y: row(0), type: "start" },

        { id: 2, x: center, y: row(1), type: "empty" },

        { id: 3, x: left, y: row(2), type: "empty" },
        { id: 4, x: right, y: row(2), type: "empty" },

        { id: 5, x: center, y: row(3), type: "empty" },

        { id: 6, x: left, y: row(4), type: "empty" },
        { id: 7, x: right, y: row(4), type: "empty" },

        { id: 8, x: center, y: row(5), type: "empty" },

        { id: 9, x: left, y: row(6), type: "empty" },
        { id: 10, x: center, y: row(6), type: "empty" },
        { id: 11, x: right, y: row(6), type: "empty" },

        { id: 12, x: left, y: row(7), type: "empty" },
        { id: 13, x: right, y: row(7), type: "empty" },

        { id: 14, x: center, y: row(8), type: "empty" },

        { id: 15, x: center, y: row(9), type: "boss" },

    ];
}