import { BackgroundType } from "../../shared/types/BackgroundType";
import { Connection } from "../../shared/types/Graph/Connection";
import { GraphNode } from "../../shared/types/Graph/GraphNode";
import {Player} from  "../../shared/types/Player/Player";


export type GraphCanvasProps = {
    nodes: GraphNode[];
    connections: Connection[];
    player?: Player;
    handleSelectedNode: (id:number) => void;
    handleSelectedConnection: (id:number) => void;
    selectedNode?:GraphNode;
    selectedConnection?:number,
    children?: React.ReactNode;
    showGrid?:boolean,
    showNodes?:boolean,
    showConnections?:boolean,
    showPlayer?:boolean,
    background?:BackgroundType,
    camera?:{x:number,y:number}
}