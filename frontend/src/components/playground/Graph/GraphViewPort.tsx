
import { PlayerMarker } from "./PlayerMarker";
import { GraphCanvasProps } from "../../ui/Canvas/GraphCanvasProps";
import { Grid } from "./Grid";
import { Node } from "./Node";
import { Connection } from "./Connection/Connection";
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
    showConnections
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

            {showGrid && (
                <Grid />   
            )}            
                   

            {player && showPlayer && (
               <PlayerMarker label="You" x={currentNode.x} y={currentNode.y} />
            )}

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