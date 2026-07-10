import Button from "../../../ui/Button/Button";
import { ButtonVariants } from "../../../ui/Button/buttonVariants";
type DeleteButtonProp = {
    onDelete?:() => void,
    title:string,
    className?:string,
    
}

export function DeleteButton({onDelete,title,className,...props}:DeleteButtonProp) {

    return (
       <Button onClick={onDelete} variant={ButtonVariants.DANGER} {...props}  className={` ${className}`}>{title}</Button>
    )

}