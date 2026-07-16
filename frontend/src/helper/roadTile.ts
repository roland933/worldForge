import type { RoadTile } from "../components/playground/Graph/Road/RoadTile";
import type { Connection } from "../components/shared/types/Graph/Connection";

export  function getRoadTile( nodeId: number, connections: Connection[]): RoadTile {

   
    console.log(nodeId)
    console.log(connections[nodeId])

}

