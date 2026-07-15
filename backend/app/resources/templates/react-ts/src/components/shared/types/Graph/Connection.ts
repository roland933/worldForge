import { ConnectionType } from "./ConntionType";
import { Directions} from "../../../shared/types/Direction"
export type Connection = {
    id: number;
    from:number;
    to:number;
    type:ConnectionType,
    directions?:Directions
    bidirectional:boolean

    
};