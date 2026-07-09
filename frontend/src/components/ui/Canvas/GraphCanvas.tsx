import { useState } from "react";
import { GraphToolbar } from "../../playground/Graph/GraphToolbar";
import { GraphViewPort } from "../../playground/Graph/GraphViewPort";

type GraphNode = {
    id: number;
    x: number;
    y: number;
    type: string;
};

type Connection = {
    from: number;
    to: number;
};

type Player = {
    currentNode: number;
};

type GraphCanvasProps = {
    nodes: GraphNode[];
    connections: Connection[];
    player?: Player;
    handleSelectedNode: (node: GraphNode) => void;
};


export function GraphCanvas({
    nodes,
    connections,
    player,
    handleSelectedNode,
    children,
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

            <GraphViewPort handleSelectedNode={handleSelectedNode}  nodes={nodes} connections={connections} player={player}/>

        </section>
    );
}