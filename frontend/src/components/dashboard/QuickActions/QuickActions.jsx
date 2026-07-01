import { Card } from "../../ui/Card/Card";
import { QuickActionButton } from "./QuickActionButton";

export function QuickActions({actions}) {

    return (
        <Card >

            <h2 className="mb-4">Quick Actions</h2>

            <div className="flex gap-4">
                {actions.map(action => (
                    <QuickActionButton  
                        key={action.id}
                        action={action} 
                    
                    
                    />

                ))}
          </div>
        </Card>

    )


}