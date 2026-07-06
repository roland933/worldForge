import { getWorlds } from "../../../services/worldService";
import Button from "../../ui/Button/Button";
import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Input } from "../../ui/Form/Input/Input";
import { Select } from "../../ui/Form/Select/Select";
import { Textarea } from "../../ui/Form/Textarea/Textarea";
import { ModalContent } from "../../ui/Modal/ModalContent";
import { ModalFooter } from "../../ui/Modal/ModalFooter";
import { WorldSelect } from "../../shared/world/WorldSelect";
import { CancelButton } from "../../shared/actions/CancelButton/CancelButton";


export function GameForm({
    values,
    onChange,
    onClose,
    onSubmit,
    onCancel,
    errors
}) {

    return (

        <form onSubmit={onSubmit}>

            <ModalContent>

                <FormField label="Name" error={errors.name}>

                    <Input
                        value={values.name}
                        onChange={e => onChange("name", e.target.value)}
                    />

                </FormField>

                <FormField label="World">

                    <WorldSelect
                        value={values.world_id}
                        onChange={e => onChange("world_id", e.target.value)}
                    />

                </FormField>

                <FormField label="Description">

                    <Textarea
                        value={values.description}
                        onChange={e => onChange("description", e.target.value)}
                    />

                </FormField>

            </ModalContent>

            <ModalFooter>

                <CancelButton
                    onClose={onClose}
                />

                <Button type="submit">

                    Start Forging

                </Button>

            </ModalFooter>

        </form>

    );

}