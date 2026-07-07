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
    const playerPos = nodes.find(n => n.id === player?.currentNode)
    return (
        <div className="relative w-full h-[700px] rounded-xl border border-slate-700 bg-slate-950 overflow-hidden">

            {player &&  (
                <div
                   
                    className="absolute w-10 h-10 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-sm text-white"
                    style={{
                        left: playerPos?.x ,
                        top: playerPos?.y,
                        transform: "translate(-50%, -120%)"
                    }}
                >
                    P
                </div>
            )}

            {/* Connections */}

            {connections.map(connection => (
                <div key={`${connection.from}-${connection.to}`}>
                    {/* később SVG vonal */}
                </div>
            ))}

            {/* Nodes */}

            {nodes.map(node => (
                <div
                    key={node.id}
                    className="absolute w-10 h-10 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-sm text-white"
                    style={{
                        left: node.x,
                        top: node.y,
                    }}
                >
                    {node.id}
                </div>
            ))}

        </div>
    );
}