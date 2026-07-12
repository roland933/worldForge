import { Fragment } from "react/jsx-runtime";
import { Connection } from "../../../shared/types/Graph/Connection";
import { connectionConfig } from "./ConnectionConfig";
import { GraphNode } from "../../../shared/types/Graph/GraphNode";

type ConnectionProps = {
    connections: Connection[],
    nodes: GraphNode[]
    handleSelectedConnection: (id:number) => void;
    selectedConnection?:number,

}

export function Connection({connections,handleSelectedConnection,selectedConnection,nodes}:ConnectionProps) {

    return (
        <svg
                       className="absolute inset-0 w-full h-full"
                   >
       
                       {connections.map(connection => {
                           const config = connectionConfig[connection.type]
                           const isSelected  = selectedConnection === connection.id;
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
       
                           const startX = fromNode.x + ux * radius;
                           const startY = fromNode.y + uy * radius;
       
                           const endX = toNode.x - ux * radius;
                           const endY = toNode.y - uy * radius;
       
                           return (
                                <Fragment key={connection.id}>
       
                                    <line
                                        x1={startX}
                                       y1={startY}
                                       x2={endX}
                                       y2={endY}
                                       stroke="transparent"
                                       strokeWidth={20}
                                       onClick={() => handleSelectedConnection(connection.id)}
                                   />
       
                               <line
                                  
                                   key={`${connection.from}-${connection.to}`}
                                   
                                   x1={startX}
                                   y1={startY}
                                   x2={endX}
                                   y2={endY}
                                   stroke={isSelected ? 'rgba(255,255,255,0.5)' : config.stroke}
                                   strokeDasharray={config.dash}
                                   strokeOpacity={config.opacity}
                                   strokeWidth={config.width}
                               />
                               </Fragment>
                               
                           );
       
                       })}
       
                   </svg>
    )

}