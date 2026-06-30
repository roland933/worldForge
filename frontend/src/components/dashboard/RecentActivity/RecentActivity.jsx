import { Card } from "../../ui/Card/Card";
import { ActivityItem } from "./ActivityItem";

export function RecentActivity({activities}) {

    return (

       <Card className="w-full">
             <h2 className="text-xl font-semibold mb-6">
                Recent Activity
            </h2>

            {activities.map(activity => (
                    <ActivityItem  
                    key={activity.id} 
                    activity={activity}
                    />

            ))}

       </Card>
    )
}