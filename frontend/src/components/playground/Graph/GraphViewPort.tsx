import { useState } from "react";
import { PlayerMarker } from "./PlayerMarker";
import { nodeConfig } from "./Node/nodeConfig";
import {connectionConfig} from "./Connection/ConnectionConfig";
import { GraphCanvasProps } from "../../ui/Canvas/GraphCanvasProps";
import { Fragment } from "react";
export function GraphViewPort({
    nodes,
    connections,
    player,
    selectedNode,
    selectedConnection,
    handleSelectedNode,
    handleSelectedConnection
}: GraphCanvasProps) {
    
    const currentNode = nodes.find( node => node.id === player?.currentNode);
    
    return (
        <div className="
                    viewport
                    relative
                    w-full 
                    h-[600px]
                    border 
                    
                  border-white/15
                    backdrop-blur-xl 
                    overflow-hidden"
                      >

            {player &&  (
               <PlayerMarker label="You" x={currentNode.x} y={currentNode.y} />
            )}

            {/* Connections */}

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

                    return (
                         <Fragment key={connection.id}>

                             <line
                                x1={fromNode.x}
                                y1={fromNode.y}
                                x2={toNode.x}
                                y2={toNode.y}
                                stroke="transparent"
                                strokeWidth={20}
                                onClick={() => handleSelectedConnection(connection.id)}
                            />

                        <line
                           
                            key={`${connection.from}-${connection.to}`}
                            
                            x1={fromNode.x}
                            y1={fromNode.y}
                            x2={toNode.x}
                            y2={toNode.y}
                            stroke={isSelected ? '#000' : config.stroke}
                            strokeDasharray={config.dash}
                            strokeOpacity={config.opacity}
                            strokeWidth={config.width}
                        />
                        </Fragment>
                        
                    );

                })}

            </svg>

            {/* Nodes */}

            {nodes.map(node => {
              const config = nodeConfig[node.type];
              
             return   <div
                    onClick={() => handleSelectedNode(node.id) }
                    key={node.id}
                    className={`
                    absolute 
                    w-11 
                    h-11 
                    rounded-full
                    cursor-pointer
                    ${selectedNode === node.id ? 'shadow-[0_0_25px_rgba(139,92,246,.75)] !border-violet-400' : ''}
                    ${config.style}
                     flex 
                     items-center 
                     justify-center 
                     text-sm 
                     text-white
                    `}
                    style={{
                        left: node.x -20,
                        top: node.y - 20,
                    }}
                >
                    {node.id}
                </div>
})}

        </div>
    );
}