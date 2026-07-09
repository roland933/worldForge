import { useEffect } from "react";
import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Select } from "../../ui/Form/Select/Select";
import Input from "../../ui/Input/Input";
import { Panel } from "../../ui/Panel/Panel";
import { PanelHeader } from "../../ui/Panel/PanelHeader";
import { nodeConfig } from "../Graph/Node/nodeConfig";

type SelectedNode = {
    id: number;
    x: number;
    y: number;
    type: string;
}

type NodePanelProps={
  selectedNode?:SelectedNode,
}

export function NodePanel({selectedNode}) {

  return (
  <Panel>
    <PanelHeader title="Nodes" subtitle="Create and edit graph nodes."/>
      
        
     <div className="text-sm text-violet-200">
       Id: <b>#{selectedNode?.id}</b>
     </div>
    <Form>

      <div className="flex gap-2">
        <FormField label="x:">
            <Input value={selectedNode?.x} className="!py-2 text-sm"/>
        </FormField>

          <FormField label="y:">
            <Input value={selectedNode?.y} className="!py-2 text-sm"/>
        </FormField>
    </div>
       <FormField label="Type:" className="text-sm">
        <Select  className="!py-1 !px-2 text-sm !h-[38px]  ">
          {Object.entries(nodeConfig)
              .filter(([, config]) => config.selectable)
              .map(([key, config]) => (
                  <option key={key} value={key}>
                      {config.label}
                  </option>
          ))}
          </Select>
      </FormField>

    </Form>
  </Panel>
  )
}