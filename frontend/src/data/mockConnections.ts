import { Connection } from "../components/shared/types/Graph/Connection";

export const mockConnections: Connection[] = [

    {
        id: 1,
        from: 1,
        to: 3,
        type: "normal",
        bidirectional: true
    },

    {
        id: 2,
        from: 3,
        to: 2,
        type: "normal",
        bidirectional: true
    },

    {
        id: 3,
        from: 3,
        to: 4,
        type: "normal",
        bidirectional: true
    },

    {
        id: 4,
        from: 3,
        to: 5,
        type: "normal",
        bidirectional: true
    },

    {
        id: 5,
        from: 5,
        to: 6,
        type: "empty",
        bidirectional: true
    },

    {
        id: 6,
        from: 5,
        to: 7,
        type: "normal",
        bidirectional: true
    },

    {
        id: 7,
        from: 5,
        to: 8,
        type: "empty",
        bidirectional: true
    },

    {
        id: 8,
        from: 7,
        to: 9,
        type: "normal",
        bidirectional: true
    }

];