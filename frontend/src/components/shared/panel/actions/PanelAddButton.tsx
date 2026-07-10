import Button from "../../../ui/Button/Button";
import { ButtonSizes, ButtonVariants } from "../../../ui/Button/buttonVariants";
type ButtonProp = {
    onAdd:() => void,
    title:string,
    className?:string,
    
    
}

export function PanelAddButton({onAdd,title,className,...props}:ButtonProp) {

    return (
       <Button onClick={onAdd} variant={ButtonVariants.PRIMARY} {...props} size={ButtonSizes.SM} className={`w-full ${className}`}>{title}</Button>
    )

}