import { AdminStatistics } from "../../components/satisfy/AdminStatistics";
import { AgentStatistics } from "../../components/satisfy/AgentStatistics";
import { UserStatistics } from "../../components/satisfy/UserStatistics";
import { useRole } from "../../hooks/useRole";

export const DashboardOverviewPage = () => {
  const [role] = useRole();
  return (
    <>
      {role === "admin" && <AdminStatistics />}
      {role === "user" && <UserStatistics />}
      {role === "agent" && <AgentStatistics />}
    </>
  );
};
