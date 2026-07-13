import { Connection } from "../components/shared/types/Graph/Connection";

export const mockConnections: Connection[] = [

    {
        id: 1,
        from: 1,
        to: 2,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up",
            to: "down"
        }
    },

    {
        id: 2,
        from: 2,
        to: 3,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "left",
            to: "right"
        }
    },

    {
        id: 3,
        from: 2,
        to: 4,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "right",
            to: "left"
        }
    },

    {
        id: 4,
        from: 2,
        to: 5,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up",
            to: "down"
        }
    },

    {
        id: 5,
        from: 3,
        to: 6,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up",
            to: "down"
        }
    },

    {
        id: 6,
        from: 5,
        to: 6,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "left",
            to: "right"
        }
    },

    {
        id: 7,
        from: 5,
        to: 9,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up",
            to: "down"
        }
    },

    {
        id: 8,
        from: 6,
        to: 7,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up",
            to: "down"
        }
    },

    {
        id: 9,
        from: 9,
        to: 8,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "right",
            to: "left"
        }
    },

    {
        id: 10,
        from: 9,
        to: 11,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up",
            to: "down"
        }
    }

];