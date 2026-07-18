import { Connection } from "../components/shared/types/Graph/Connection";
import { GraphNode } from "../components/shared/types/Graph/GraphNode";
import { getRoadTile } from "./roadTile";

export function buildRoadTiles(
    nodes: GraphNode[],
    connections: Connection[]
) {

    return nodes.map(node => {

        const road = getRoadTile(node, connections);

        return {
            x: node.x,
            y: node.y,
            tile: road.tile,
            rotation: road.rotation,
        };

    });

}