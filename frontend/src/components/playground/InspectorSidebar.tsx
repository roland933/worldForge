
import { Card } from "../ui/Card/Card"

export function InspectorSidebar({children}) {

    return (
        <Card className="col-span-3 !p-5">
            {children}
        </Card>
    )
   


}