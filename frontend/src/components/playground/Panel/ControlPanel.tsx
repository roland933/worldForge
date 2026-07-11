import { RotateCcw, Download, WandSparkles } from "lucide-react";;
import { KeyButton } from "../KeyButton";
import { Panel } from "../../ui/Panel/Panel";
import { PanelHeader } from "../../ui/Panel/PanelHeader";
type ControlPanelProps = {
    currentNode:[],
    connections:[],
    pressedKeys:Set<string>
}

export function ControlPanel({currentNode,connections,pressedKeys}:ControlPanelProps) {
   

    return (
        <Panel>
            
            <PanelHeader title="Controls" 
                         subtitle="Use WASD to move the player."
                         
                         />

            
            <section>
                 <div className="mt-2 flex flex-col items-center gap-2">

                    <KeyButton label="W" active={pressedKeys.has("KeyW")}/>

                    <div className="flex gap-2">

                      <KeyButton label="A" active={pressedKeys.has("KeyA")}/>

                         <KeyButton label="S" active={pressedKeys.has("KeyS")}/>

                        <KeyButton label="D" active={pressedKeys.has("KeyD")}/>

                    </div>

                </div>
            </section>

            {/* Information */}

            <section>

                <h3 className="text-lg font-semibold text-white">
                    Information
                </h3>

                <div className="mt-4 space-y-3 text-sm">

                    <InfoRow
                        label="Current Node"
                        value={currentNode.length}
                    />

                    <InfoRow
                        label="Connections"
                        value={connections.length}
                    />

                    <InfoRow
                        label="Map Size"
                        value="Medium"
                    />

                </div>

            </section>

            {/* Actions */}

            <section className="space-y-3 mt-auto">

                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 hover:bg-violet-500 transition">

                    <WandSparkles size={18} />

                    Auto Generate

                </button>

                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3">

                    <RotateCcw size={18} />

                    Reset

                </button>

                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3">

                    <Download size={18} />

                    Export JSON

                </button>

            </section>

        </Panel>
       
           

   

    );
}

function InfoRow({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between">

            <span className="text-slate-400">

                {label}

            </span>

            <span className="text-white font-medium">

                {value}

            </span>

        </div>
    );
}