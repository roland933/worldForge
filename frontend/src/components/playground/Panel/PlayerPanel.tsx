
import { Panel } from "../../ui/Panel/Panel";
import { PanelHeader } from "../../ui/Panel/PanelHeader";




type ViewPanelProps={
  
  showGrid?:boolean
  showNode?:boolean,
  showConnection?:boolean,
  showPlayer?:boolean,

}

export function PlayerPanel({}:ViewPanelProps) {

    return (
        <Panel>

            <PanelHeader title="Player" />

            <div className="space-y-6">


                <section>

                    <h3 className="text-xs uppercase tracking-wider text-white/40 mb-3">
                        Player
                    </h3>
                    

                </section>
            </div>

        </Panel>
    );

}