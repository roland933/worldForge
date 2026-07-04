import { ForgeSelect } from "../../shared/forge/ForgeSelect";
import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Input } from "../../ui/Form/Input/Input";
import { Select } from "../../ui/Form/Select/Select";
import { Textarea } from "../../ui/Form/Textarea/Textarea";
import { PromptCategorySelect } from "../PromptCategorySelect/PromptCategorySelect";


export function PromptLibraryForm({onSubmit}) {
    return(
          
    
     <Form>
       <FormField label="Title" >

         <Input placeholder="Prompt title"/>

       </FormField> 


       <FormField label="Category">

            <PromptCategorySelect />

       </FormField>


         <FormField label="Prompt" >

             <Textarea rows={10}/>

        </FormField>
      



     </Form>



    )


}