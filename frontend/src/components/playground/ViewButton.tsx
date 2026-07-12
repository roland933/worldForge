import Button from "../ui/Button/Button";
import { ButtonSizes, ButtonVariants } from "../ui/Button/buttonVariants";

type ViewButtonProps = {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

export function ViewButton({label,active,onClick}:ViewButtonProps) {

    return (
        <Button  onClick={onClick} 
                 variant={active ? ButtonVariants.PRIMARY : ButtonVariants.SECONDARY} 
                 size="" 
                 className={`
                 py-1 
                 rounded-xl 
                 px-3 
                 text-sm
                
                `}
                 
                 >
                    
                    {label}
                 
        </Button>
    )


}