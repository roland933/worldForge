import Button from "../../ui/Button/Button";

export function QuickActionButton({action}) {

    return (
        
        <Button  onClick={action.onClick}>

            {action.label}

        </Button>
        

    )


}