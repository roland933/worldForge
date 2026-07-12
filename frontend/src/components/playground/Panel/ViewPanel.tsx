
import { Panel } from "../../ui/Panel/Panel";
import { PanelHeader } from "../../ui/Panel/PanelHeader";


import { Checkbox } from "../../ui/Form/Checkbox/Checkbox";
import { Select } from "../../ui/Form/Select/Select";
import { ViewButton } from "../ViewButton";
import { BackgroundType } from "../../shared/types/BackgroundType";
import { Background } from "../Graph/Background";
import { Backgrounds } from "../../../data/Background";


type ViewPanelProps={
  
  showGrid?:boolean
  showNode?:boolean,
  showConnection?:boolean,
  showPlayer?:boolean,
  background?:BackgroundType,
  setShowGrid: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNodes: React.Dispatch<React.SetStateAction<boolean>>;
  setShowConnections: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  setBackground: React.Dispatch<React.SetStateAction<BackgroundType>>;
}

export function ViewPanel({
    showGrid,
    showNode,
    showConnection,
    showPlayer,
    setShowGrid,
    setShowNodes,
    setShowConnections,
    setShowPlayer,
    background,
    setBackground}:ViewPanelProps) {

    return (
        <Panel>

            <PanelHeader title="View" />

            <div className="space-y-6">

                {/* Display */}

                <section>

                    <h3 className="text-xs uppercase tracking-wider text-white/40 mb-3">
                        Display
                    </h3>

                    <div className="space-y-2">

                        <Checkbox label="Show Grid" checked={showGrid} onChange={() => setShowGrid(prev => !prev)}  />

                        <Checkbox label="Show Nodes" checked={showNode} onChange={() => setShowNodes(prev => !prev)} />

                        <Checkbox label="Show Connections" checked={showConnection} onChange={() => setShowConnections(prev => !prev)} />

                        <Checkbox label="Show Player"  checked={showPlayer}  onChange={() => setShowPlayer(prev => !prev)}/>

                    </div>

                </section>

                {/* Background */}

                <section>

                    <h3 className="text-xs uppercase tracking-wider text-white/40 mb-3">
                        Background
                    </h3>
                    
                    <div className="flex gap-2 mb-10">

                            {Object.entries(Backgrounds).map(([key, value]) => {
                                return <ViewButton className="relative h-15 w-25" key={key} active={background === key} label={key} onClick={() => setBackground(key as BackgroundType)}>
                                            <Background  type={key as BackgroundType} />
                                      </ViewButton>
                                
                            })}
                   </div>


                  <div className="text-sm tracking-wider rounded-xl text-violet-200 mb-3 bg-white/5 w-50 border border-white/15 py-1 px-3">
                        Current theme: {background ? background : '-'}
                    </div>

              

                </section>
            </div>

        </Panel>
    );

}