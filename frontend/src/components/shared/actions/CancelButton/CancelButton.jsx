import Button from "../../../ui/Button/Button";
import { ButtonVariants } from "../../../ui/Button/buttonVariants";

export function CancelButton({onClose}) {

    return (
       <Button onClick={onClose} variant={ButtonVariants.SECONDARY}>Cancel</Button>
    )

}