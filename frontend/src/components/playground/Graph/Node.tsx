import { GraphNode } from "../../shared/types/Graph/GraphNode";
import { nodeConfig } from "./Node/nodeConfig";

type NodeProps = {
    nodes: GraphNode[],
    handleSelectedNode: (id:number) => void;
    selectedNode:GraphNode;

}

export function Node({nodes,handleSelectedNode,selectedNode}:NodeProps) {

    return (
        <div >
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
    )

}