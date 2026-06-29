import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";

export default function Dashboard() {
    return (
        <DashboardLayout>

            <PageHeader
                title="Dashboard"
                subtitle="Welcome back, Roland 👋"
            />

            {/* Dashboard Widgets */}

        </DashboardLayout>
    );
}