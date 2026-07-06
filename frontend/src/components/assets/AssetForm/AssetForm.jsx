import { getWorlds } from "../../../services/worldService";
import Button from "../../ui/Button/Button";
import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Input } from "../../ui/Form/Input/Input";
import { Select } from "../../ui/Form/Select/Select";
import { Textarea } from "../../ui/Form/Textarea/Textarea";
import { AssetCategorySelect } from "../AssetCategorySelect/AssetCategorySelect";
import { AssetTypeSelect } from "../AssetCategoryType/AssetTypeSelect";

export function AssetForm({onSubmit}) {

    return (
    
     <Form>
       <FormField label="Asset name" >

         <Input placeholder=""/>

       </FormField> 

       <FormField label="Category">

          <AssetCategorySelect />

       </FormField>

        <FormField label="Type">

          <AssetTypeSelect />

       </FormField>



       <FormField label="Description" >

         <Textarea />

       </FormField>

       


     </Form>

)


}