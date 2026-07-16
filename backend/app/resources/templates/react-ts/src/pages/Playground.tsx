
import { GraphCanvas } from "../components/ui/Canvas/GraphCanvas";
import { useEffect, useState,useRef } from "react";
import { GraphViewPort } from "../components/playground/Graph/GraphViewPort.tsx";
import { usePlayerMovement } from "../hooks/usePlayerMovement.ts";
import { useKeyboard } from "../hooks/useKeyboard.ts";
import map from "../game/map.json";
import type { Connection } from "../components/shared/types/Graph/Connection.ts";
import { createLayout } from "../helper/createLayout.ts";

export function PlaygroundPage() {

    const [setPressedkey,setPressedKey] = useState<Set<string>>(new Set());

    const {player,movePlayer} = usePlayerMovement(map.connections as Connection[]);

    useKeyboard(movePlayer,setPressedKey)

       const viewportRef = useRef<HTMLDivElement>(null);
     
             const [viewportSize, setViewportSize] = useState({
                 width: 0,
                 height: 0,
             });
     
             useEffect(() => {
                 if (!viewportRef.current) return;
     
                 const observer = new ResizeObserver(([entry]) => {
                     setViewportSize({
                         width: entry.contentRect.width,
                         height: entry.contentRect.height,
                     });
                 });
     
                 observer.observe(viewportRef.current);
     
                 return () => observer.disconnect();
             }, []);


               const layout = createLayout(viewportSize.width,viewportSize.height);


                const renderNodes = map.nodes.map(node => ({
                    ...node,
                    x: node.x * layout.scaleX,
                    y: node.y * layout.scaleY,
            }));  

 
    return (
    
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-8">

                    <div className="w-full max-w-7xl rounded-2xl border border-zinc-700 bg-zinc-800/80 shadow-2xl p-6">

                        <div className="h-[700px]  rounded-xl overflow-hidden border border-zinc-600 bg-black">

                            <GraphCanvas>

                                <GraphViewPort
                                    viewportRef={viewportRef}
                                    nodes={renderNodes}
                                    background={map?.background}
                                   showGrid={map?.background === null}
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