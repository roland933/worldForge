

import type { GraphCanvasProps } from "../../ui/Canvas/GraphCanvasProps";
import { Grid } from "./Grid";
import { Node } from "./Node";
import { Connection } from "./Connection/Connection";
import { Background } from "./Background";
import { Road } from "./Road/Road";
import { Player } from "./Player";
export function GraphViewPort({
    nodes,
    connections,
    player,
    selectedNode,
    selectedConnection,
    handleSelectedNode,
    handleSelectedConnection,
    showGrid,
    showNodes,
    showPlayer,
    showConnections,
    background
}: GraphCanvasProps) {
    
    const currentNode = nodes.find( node => node.id === player?.currentNode);
    
    return (
        <div className="
                    relative
                    w-full 
                    h-[600px]
                    border 
                  border-white/15
                    backdrop-blur-xl 
                    overflow-hidden"
                      >

            {background && (
                 <Background type={background}/>
            )}

            {showGrid && (
                <Grid />   
            )}            
                   


            <Player  x={currentNode.x} y={currentNode.y} direction={player?.direction}/>

            {/* Connections */}

            {showConnections && (
               <Connection nodes={nodes} connections={connections} handleSelectedConnection={handleSelectedConnection} selectedConnection={selectedConnection}/>
            )}

          

            {showNodes && (
                    <Node selectedNode={selectedNode} 
                        handleSelectedNode={handleSelectedNode} 
                        nodes={nodes}/>  
            )}     

        </div>
    );
}