
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


export function GraphCanvas({
    nodes,
    connections,
    player,
}: GraphCanvasProps) {
    
    const currentNode = nodes.find( node => node.id === player?.currentNode);
   
    return (
        <div className="relative w-full h-[700px] rounded-xl border border-slate-700 bg-slate-950 overflow-hidden">

            {player &&  (
                <div
                   
                    className="absolute w-10 h-10 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-sm text-white"
                    style={{
                        left: currentNode?.x ,
                        top: currentNode?.y,
                        transform: "translate(-50%, -120%)"
                    }}
                >
                    P
                </div>
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
                            stroke="#64748b"
                            strokeWidth={4}
                        />
                    );

                })}

            </svg>

            {/* Nodes */}

            {nodes.map(node => (
                <div
                    key={node.id}
                    className="absolute w-10 h-10 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-sm text-white"
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