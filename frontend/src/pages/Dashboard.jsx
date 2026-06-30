import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import ActiveProjectCard from "../components/dashboard/ActiveProjectCard";
export default function Dashboard() {
    return (
        <DashboardLayout>

            <PageHeader
                title="Dashboard"
                subtitle="Welcome back, Roland 👋"
            />

        <div className="grid grid-cols-12 gap-6">

    <div className="col-span-8">

        <ActiveProjectCard />

    </div>

    <div className="col-span-4">

     
    </div>

    <div className="col-span-6">

      

    </div>

    <div className="col-span-6">

      

    </div>

</div>
           

        </DashboardLayout>
    );
}