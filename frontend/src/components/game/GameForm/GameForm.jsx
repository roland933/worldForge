import { getWorlds } from "../../../services/worldService";
import Button from "../../ui/Button/Button";
import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Input } from "../../ui/Form/Input/Input";
import { Select } from "../../ui/Form/Select/Select";
import { Textarea } from "../../ui/Form/Textarea/Textarea";

export function GameForm({onSubmit}) {
  const worlds = getWorlds();
    return (
    
     <Form>
       <FormField label="Game name" >

         <Input placeholder=""/>

       </FormField>

       <FormField label="Choose a world" >

         <Select>
                {worlds.map(world => (

                <option
                    key={world.id}
                    value={world.id}
                >

                    {world.name}

                </option>

            ))}
         </Select>

       </FormField>

       <FormField label="Description" >

         <Textarea />

       </FormField>

       


     </Form>

)


}