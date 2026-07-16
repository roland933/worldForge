
import { PlayerMarker } from "./PlayerMarker";
import { GraphCanvasProps } from "../../ui/Canvas/GraphCanvasProps";
import { Grid } from "./Grid";
import { Node } from "./Node";
import { Connection } from "./Connection/Connection";
import { Background } from "./Background";
import { Road } from "./Road/Road";
import { Player } from "./Player";
import { getRoadTile } from "../../../helper/roadTile";

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
    background,
    
}: GraphCanvasProps) {

    
    
    const currentNode = nodes.find( node => node.id === player?.currentNode);

    const camera = {
        x: currentNode.x - 1500 / 2,
        y: currentNode.y - 800 / 2,
    };

     {nodes.map(node => {
             const tile = getRoadTile(node.id,connections)
            })}
    
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

                <div className="world relative"  style={{
        transform: `translate(${-camera.x}px, ${-camera.y}px)`,
        width: 1500,
        height: 2000
    }}>        
                   

            {background && (
                 <Background type={background}/>
            )}

            {showGrid && (
                <Grid />   
            )}            
                   
            <Road  connections={connections} type={background} nodes={nodes}/>
            {player && showPlayer && (
               <PlayerMarker label="You" x={currentNode.x} y={currentNode.y} />
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
        </div>
    );
}