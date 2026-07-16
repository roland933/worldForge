import { BackgroundType } from "../../../shared/types/BackgroundType";
import  { RoadType } from "./RoadType";
import { Connection } from "../../../shared/types/Graph/Connection";
import { GraphNode } from "../../../shared/types/Graph/GraphNode";
import { getRoadTile } from "../../../../helper/roadTile";
type RoadProps = {
    type:BackgroundType | null,
    connections: Connection[],
    nodes: GraphNode[]
}


export function Road({ connections, nodes, type }: RoadProps) {

    if(!type) {
        return null;
    }

   
    
    const roadType = RoadType[type as BackgroundType];
    const TILE_SIZE = 64;
    const STEP = 60;
    
        

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
                      
                            
                          
                           const dx = toNode.x - fromNode.x;
                           const dy = toNode.y - fromNode.y;
                         
                         

                           const length = Math.sqrt(dx * dx + dy * dy);

                           

                          const tileCount = Math.ceil(length / STEP);
                           
                           const ux = dx / length;
                           const uy = dy / length;
                           const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                           const startX = fromNode.x + ux 
                           const startY = fromNode.y + uy 
       
                           const endX = toNode.x - ux 



                return (


                      <>
        {Array.from({ length: tileCount }).map((_, index) => {
                           const x = startX + ux * STEP * index;
                            const y = startY + uy * STEP * index;
            
               return (

                <img
                        src={roadType}
                        className="absolute pointer-events-none"
                        style={{
                            width: TILE_SIZE,
                            height: TILE_SIZE,
                            left: x,
                            top: y,
                            transform: `
                                translate(-50%, -50%)
                                
                            `
                        }}
                    />


                );
            

        })}
    </>


          
                );

            })}
        </>
    );

}


