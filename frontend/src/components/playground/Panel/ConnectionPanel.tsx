import { useEffect, useState } from "react";
import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Select } from "../../ui/Form/Select/Select";
import {Input} from "../../ui/Form/Input/Input";
import { Panel } from "../../ui/Panel/Panel";
import { PanelHeader } from "../../ui/Panel/PanelHeader";
import { nodeConfig, NodeType } from "../Graph/Node/nodeConfig";
import { GraphNode } from "../../shared/types/Graph/GraphNode";
import {  PanelDeleteButton } from "../../shared/panel/actions/PanelDeleteButton";
import { PanelAddButton } from "../../shared/panel/actions/PanelAddButton";
import { PanelActions } from "../../ui/Panel/PanelActions";
import { Connection } from "../../shared/types/Graph/Connection";

type ConnectionPanelProps={
  selectedConnection:Connection,
  onAdd:() => void,
  onDelete?:() => void,

}

export function ConnectionPanel({selectedConnection,onAdd,onDelete}:ConnectionPanelProps) {


  return (
  <Panel>
    <PanelHeader title="Connections" subtitle="Create and edit connection."/>

     {selectedConnection && (
      <div className="text-sm text-violet-200">
       Id: <b>#{selectedConnection?.id}</b>
     </div>
     )} 
     

    <Form>

      <div className="flex gap-2">
        <FormField label="From:">
            <Input value={selectedConnection?.from ?? ""} className="!py-2 text-sm !h-[38px]" disabled={!selectedConnection}/>
        </FormField>

          <FormField label="To:">
            <Input value={selectedConnection?.to ?? ""} className="!py-2 text-sm !h-[38px]" disabled={!selectedConnection}/>
        </FormField>
    </div>
       
    </Form>

     <PanelActions>

        <PanelAddButton onAdd={onAdd}  title="Place connection"/>
        <PanelDeleteButton title="Delete connection" onDelete={onDelete} disabled={!selectedConnection}  />

      </PanelActions>     
   
     

  </Panel>
  )
}