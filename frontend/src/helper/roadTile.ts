
import type { RoadTile } from "../components/playground/Graph/Road/RoadTile";
import type { Connection } from "../components/shared/types/Graph/Connection";

export  function getRoadTile( nodeId: number, connections: Connection[]) {

   
  return connections.filter(c => c.from === nodeId || c.to === nodeId);


   

}

