
import type { RoadTile } from "../components/playground/Graph/Road/RoadTile";
import type { Connection } from "../components/shared/types/Graph/Connection";
import { GraphNode } from "../components/shared/types/Graph/GraphNode";

export  function getRoadTile( node: GraphNode, connections: Connection[]) {

    const directions = {
    up: false,
    down: false,
    left: false,
    right: false,
};

   
   const nodeConnections = connections.filter(c =>
        c.from === node.id || c.to === node.id
    );


    nodeConnections.forEach(connection => {

            const direction =
                connection.from === node.id
                    ? connection.directions?.from
                    : connection.directions?.to;


        if (direction === "up") {
                directions.up = true;
            }

            if (direction === "down") {
                directions.down = true;
            }

            if (direction === "left") {
                directions.left = true;
            }

            if (direction === "right") {
                directions.right = true;
            }

        });


console.log(node.id, directions);
   

}

