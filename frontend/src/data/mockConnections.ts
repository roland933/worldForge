import { Connection } from "../components/shared/types/Graph/Connection";

export const mockConnections:Connection[] = [
    {
        id: 1,
        from: 1,
        to: 2,
        type: "normal",
         bidirectional: true
    },

    {
        id: 2,
        from: 2,
        to: 3,
        type: "normal",
        bidirectional: true
    },

     {
        id: 3,
        from: 3,
        to: 7,
        type: "normal",
        bidirectional: true
    },

     {
        id: 4,
        from: 3,
        to: 8,
        type: "empty",
        bidirectional: true
    },

     {
        id: 5,
        from: 7,
        to: 13,
        type: "empty",
        bidirectional: true
    },

     {
        id: 6,
        from: 7,
        to: 12,
        type: "empty",
        bidirectional: true
    },


     {
        id: 7,
        from: 12,
        to: 6,
        type: "empty",
        bidirectional: true
    },


     {
        id: 8,
        from: 2,
        to: 4,
        type: "empty",
        bidirectional: true
    },


     {
        id: 9,
        from: 4,
        to: 10,
        type: "empty",
        bidirectional: true
    },

      {
        id: 10,
        from: 2,
        to: 9,
        type: "empty",
        bidirectional: true
    },

     {
        id: 11,
        from: 1,
        to: 5,
        type: "empty",
        bidirectional: true
    },

    {
        id: 12,
        from: 5,
        to: 11,
        type: "empty",
        bidirectional: true
    }

];