import { useEffect, useState } from "react";
import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Select } from "../../ui/Form/Select/Select";
import {Input} from "../../ui/Form/Input/Input";
import { Panel } from "../../ui/Panel/Panel";
import { PanelHeader } from "../../ui/Panel/PanelHeader";
import { nodeConfig, NodeType } from "../Graph/Node/nodeConfig";
import Button from "../../ui/Button/Button"
import { GraphNode } from "../../shared/types/Graph/GraphNode";
import { DeletePanelButton, PanelDeleteButton } from "../../shared/panel/actions/PanelDeleteButton";
import { PanelAddButton } from "../../shared/panel/actions/PanelAddButton";
import { PanelActions } from "../../ui/Panel/PanelActions";

type NodePanelProps={
  selectedNode?:GraphNode,
  onAdd:(selectedType:string) => void,
  onDelete?:() => void,
  handleNodeTypeChange:(type:string) => void,
  nodeType:NodeType 
}

export function NodePanel({selectedNode,onAdd,onDelete,handleNodeTypeChange,nodeType}:NodePanelProps) {


  return (
  <Panel>
    <PanelHeader title="Nodes" subtitle="Create and edit graph nodes."/>

     {selectedNode && (
      <div className="text-sm text-violet-200">
       Id: <b>#{selectedNode?.id}</b>
     </div>
     )} 
     

    <Form>

      <div className="flex gap-2">
        <FormField label="x:">
            <Input value={selectedNode?.x ?? ""} className="!py-2 text-sm !h-[38px]" disabled={!selectedNode}/>
        </FormField>

          <FormField label="y:">
            <Input value={selectedNode?.y ?? ""} className="!py-2 text-sm !h-[38px]" disabled={!selectedNode}/>
        </FormField>
    </div>
       <FormField label="Type:" className="text-sm">
        <Select  className="!py-1 !px-2 text-sm !h-[38px]" disabled={!selectedNode} value={nodeType} onChange={(e) => handleNodeTypeChange(e.target.value as NodeType)}>
           
          {Object.entries(nodeConfig)
              
              .map(([key, config]) => (
                  <option key={key} value={key}>
                      {config.label}
                  </option>
          ))}
          </Select>
      </FormField>
    </Form>

     <PanelActions>

        <PanelAddButton onAdd={onAdd}  title="Place node"/>
        <PanelDeleteButton title="Delete node" onDelete={onDelete} disabled={!selectedNode}  />

      </PanelActions>     
   
     

  </Panel>
  )
}