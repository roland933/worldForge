import Button from "../../../ui/Button/Button";
import { ButtonSizes, ButtonVariants } from "../../../ui/Button/buttonVariants";
type DeleteButtonProp = {
    onDelete?:() => void,
    title:string,
    className?:string,
    
    
}

export function PanelDeleteButton({onDelete,title,className,...props}:DeleteButtonProp) {

    return (
       <Button onClick={onDelete} variant={ButtonVariants.DANGER} {...props} size={ButtonSizes.SM} className={`w-full ${className}`}>{title}</Button>
    )

}