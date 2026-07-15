
import { GraphCanvas } from "../components/ui/Canvas/GraphCanvas";
import { useEffect, useState } from "react";
import { GraphViewPort } from "../components/playground/Graph/GraphViewPort.tsx";
import { usePlayerMovement } from "../hooks/usePlayerMovement.ts";
import { useKeyboard } from "../hooks/useKeyboard.ts";
import map from "../game/map.json";
import type { Connection } from "../components/shared/types/Graph/Connection.ts";

export function PlaygroundPage() {

    const [setPressedkey,setPressedKey] = useState<Set<string>>(new Set());

    const {player,movePlayer} = usePlayerMovement(map.connections as Connection[]);

    useKeyboard(movePlayer,setPressedKey)

 
    return (
    
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-8">

                    <div className="w-full max-w-7xl rounded-2xl border border-zinc-700 bg-zinc-800/80 shadow-2xl p-6">

                        <div className="rounded-xl overflow-hidden border border-zinc-600 bg-black">

                            <GraphCanvas>

                                <GraphViewPort
                                    nodes={map.nodes}
                                    background={map?.background}
                                    showGrid={false}
                                    showNodes={true}
                                    showConnections={true}
                                    showPlayer={true}
                                    connections={map.connections}
                                    player={player}
                                />

                            </GraphCanvas>

                        </div>

                    </div>

                </div>


    );
}