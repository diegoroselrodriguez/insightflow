import DashboardHeader from "../../components/dashboard/DashboardHeader";
import MetricsGrid from "../../components/dashboard/MetricsGrid";
import RecentTasks from "../../components/dashboard/RecentTasks";

export default function Dashboard() {
    return (
        <>
            <DashboardHeader />
            <MetricsGrid />
            <RecentTasks />
        </>
    );
}