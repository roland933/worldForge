import { ConnectionType } from "./ConntionType";

export type Connection = {
    id: number;
    from:number;
    to:number;
    type:ConnectionType,
    bidirectional:boolean

    
};