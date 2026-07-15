import type { BackgroundType } from "../../../shared/types/BackgroundType";
import { RoadType } from "./RoadType";
import type { Connection } from "../../../shared/types/Graph/Connection";
import type { GraphNode } from "../../../shared/types/Graph/GraphNode";
type RoadProps = {
    type:BackgroundType | null,
    connections: Connection[],
    nodes: GraphNode[]
}

export function Road({ connections, nodes, type }: RoadProps) {

    const image = RoadType[type as BackgroundType];

    return (
        <>
            {connections.map(connection => {

                               const fromNode = nodes.find(
                               node => node.id === connection.from
                           );
       
                           const toNode = nodes.find(
                               node => node.id === connection.to
                           );
       
                           
                           if (!fromNode || !toNode) {
                               return null;
                           }
                           const radius = 20
                          
                          
                           const dx = toNode.x - fromNode.x;
                           const dy = toNode.y - fromNode.y;
                           const length = Math.sqrt(dx * dx + dy * dy);
       
                           const ux = dx / length;
                           const uy = dy / length;
                           const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                           const startX = fromNode.x + ux * radius;
                           const startY = fromNode.y + uy * radius;
       
                           const endX = toNode.x - ux * radius;
                           const endY = toNode.y - uy * radius;

                return (
                    <div
                        key={connection.id}
                        className="absolute"
                        style={{
                            left: startX,
                            top: startY,
                            width: length,
                            height: 24,

                            backgroundImage: `url(${image})`,
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "repeat-x",

                            transformOrigin: "left center",
                            transform: `rotate(${angle}deg)`
                        }}
                    />
                );

            })}
        </>
    );

}


