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
  useEffect(() => {
    console.log(4444,selectedNode)
  },[selectedNode])
  return (
  <Panel>
    <PanelHeader title="Nodes" subtitle="Create and edit graph nodes."/>  
    <Form>
      
      <FormField label="x:">
          <Input value={selectedNode?.x}/>
      </FormField>

        <FormField label="y:">
          <Input value={selectedNode?.y}/>
      </FormField>

       <FormField label="Type:">
        <Select>
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