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
            from: "up",
            to: "down"
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
        from: 3,
        to: 5,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up-right",
            to: "down-left"
        }
    },

    {
        id: 5,
        from: 4,
        to: 5,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up-left",
            to: "down-right"
        }
    },

    {
        id: 6,
        from: 5,
        to: 7,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up-left",
            to: "down-right"
        }
    },

    {
        id: 7,
        from: 5,
        to: 8,
        type: "empty",
        bidirectional: true,
        directions: {
            from: "up-right",
            to: "down-left"
        }
    },

    {
        id: 8,
        from: 7,
        to: 9,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up-right",
            to: "down-left"
        }
    },

    {
        id: 9,
        from: 8,
        to: 9,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up-left",
            to: "down-right"
        }
    },

    {
        id: 10,
        from: 9,
        to: 11,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up-left",
            to: "down-right"
        }
    },

    {
        id: 11,
        from: 9,
        to: 12,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up",
            to: "down"
        }
    },

    {
        id: 12,
        from: 9,
        to: 13,
        type: "normal",
        bidirectional: true,
        directions: {
            from: "up-right",
            to: "down-left"
        }
    }

];