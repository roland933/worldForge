import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import ActiveGameCard from "../components/dashboard/ActiveGameCard";
import { getGames} from "../services/gameServices";
import StatCard from "../components/dashboard/StatCard";
import { mockStats } from "../data/mockStats"

import { StatsSection } from "../components/dashboard/StatsSection";
import { RecentActivity } from "../components/dashboard/RecentActivity/RecentActivity";
import { mockActivities } from "../data/mockActivities";


export default function Dashboard() {
    const games = getGames();
    
    const activeGame = games[0];
    const stats = mockStats;
    const activities = mockActivities;

    return (
        <DashboardLayout>

            <PageHeader
                title="My forge"
                subtitle="Welcome back, Roland 👋"
            />

        <div className="grid grid-cols-12 gap-6">

    <div className="col-span-8">

        <ActiveGameCard project={activeGame}/>

    </div>

    <div className="col-span-4">

        <StatsSection  stats={stats}/>
     
    </div>

    <div className="col-span-6">
        <RecentActivity activities={activities}/>
      

    </div>

    <div className="col-span-6">

      

    </div>

</div>
           

        </DashboardLayout>
    );
}