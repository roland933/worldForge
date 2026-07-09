import { useState } from "react";
import { PlayerMarker } from "./PlayerMarker";

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
};


export function GraphViewPort({
    nodes,
    connections,
    player,
}: GraphCanvasProps) {
    
    const currentNode = nodes.find( node => node.id === player?.currentNode);
   
    return (
        <div className="
                    relative
                    w-full 
                    h-[600px] 
                    rounded-xl 
                    bg-gradient-to-br
                    from-slate-900
                    via-slate-950
                    to-black 
                    backdrop-blur-3xl 
                    overflow-hidden">

            {player &&  (
               <PlayerMarker label="You" x={currentNode.x} y={currentNode.y} />
            )}

            {/* Connections */}

         <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
            >

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

                    return (
                        <line
                            key={`${connection.from}-${connection.to}`}

                            x1={fromNode.x}
                            y1={fromNode.y}
                            x2={toNode.x}
                            y2={toNode.y}
                            stroke="#818cf8"
                            opacity=".35"
                            strokeWidth={4}
                        />
                    );

                })}

            </svg>

            {/* Nodes */}

            {nodes.map(node => (
                <div
                    key={node.id}
                    className="
                    absolute 
                    w-11 
                    h-11 
                    rounded-full
                    bg-violet-500 
                    shadow-[0_0_25px_rgba(139,92,246,.35)]

                     border-2 
                     border-white/20 
                     flex 
                     items-center 
                     justify-center 
                     text-sm 
                     text-white"
                    style={{
                        left: node.x -20,
                        top: node.y - 20,
                    }}
                >
                    {node.id}
                </div>
            ))}

        </div>
    );
}