import { ForgeSelect } from "../../shared/forge/ForgeSelect";
import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Input } from "../../ui/Form/Input/Input";
import { Select } from "../../ui/Form/Select/Select";
import { Textarea } from "../../ui/Form/Textarea/Textarea";
import { TaskPrioritySelect } from "../TaskPrioritySelect/TaskPrioritySelect";
import { TaskStatusSelect } from "../TaskStatusSelect/TaskStatusSelect";
export function TaskForm({onSubmit}) {
    return(
          
    
     <Form>
       <FormField label="Task name" >

         <Input placeholder="Task name"/>

       </FormField> 

         <FormField label="Forges">
            <ForgeSelect />
         
        </FormField>

       <FormField label="Priority">
            <TaskPrioritySelect />
         
       </FormField>


        <FormField label="Status">
            <TaskStatusSelect />
         
        </FormField>


       <FormField label="Description" >

         <Textarea />

       </FormField>



     </Form>



    )


}