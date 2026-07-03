import { ForgeSelect } from "../../shared/forge/ForgeSelect";
import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Input } from "../../ui/Form/Input/Input";
import { Select } from "../../ui/Form/Select/Select";
import { Textarea } from "../../ui/Form/Textarea/Textarea";
export function NoteForm({onSubmit}) {
    return(
          
    
     <Form>
    
         <FormField label="Forges">
            <ForgeSelect />
         
        </FormField>


       <FormField label="Note" >

         <Textarea rows={10}/>

       </FormField>

     </Form>



    )


}