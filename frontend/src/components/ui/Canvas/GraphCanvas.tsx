
import { GraphViewPort } from "../../playground/Graph/GraphViewPort";
import { GraphCanvasProps } from "./GraphCanvasProps";

export function GraphCanvas({
    nodes,
    connections,
    player,
    handleSelectedNode,
    handleSelectedConnection,
    selectedNode,
    selectedConnection,
    children,
    showGrid,
    showNodes,
    showConnections,
    showPlayer,
    background,
}: GraphCanvasProps) {
    


    return (
         <section
            className="
                rounded-3xl
                 shadow-[0_0_30px_rgba(0,0,0,.15)]
                overflow-hidden
                border 
                border-white/10
                bg-white/[0.03]
                backdrop-blur-3xl
                w-full
                
            "
        >


           {children}

            <GraphViewPort selectedNode={selectedNode} 
                           handleSelectedNode={handleSelectedNode}
                           handleSelectedConnection={handleSelectedConnection}  
                           selectedConnection={selectedConnection}
                           nodes={nodes}
                           background={background}
                           showGrid={showGrid} 
                           showNodes={showNodes}
                           showConnections={showConnections}
                           showPlayer={showPlayer}
                           connections={connections} 
                           player={player}/>

        </section>
    );
}