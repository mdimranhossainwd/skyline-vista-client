import { useQuery } from "@tanstack/react-query";
import { PaymentCard } from "../../components/shared/card/PaymentCard";
import { Heading } from "../../components/shared/heading/Heading";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";
import { useRole } from "../../hooks/useRole";

export const PaymentHistoryPage = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [role] = useRole();

  //   Load users Payment Data
  const getData = async () => {
    const { data } = await axios.get(`/get-room-payments?email=${user?.email}`);
    return data;
  };

  //   Fetch user's Payments data
  const { data: getUserPaymentHistory } = useQuery({
    queryKey: ["getUserPaymentHistory"],
    queryFn: getData,
  });
  console.log(getUserPaymentHistory);

  //   Load Payment Data
  const getDataAdmin = async () => {
    const { data } = await axios.get("/get-all-payments");
    return data?.data;
  };

  //   Fetch user's Payment History data all
  const { data: getAdminPaymentHistory } = useQuery({
    queryKey: ["getAdminPaymentHistory"],
    queryFn: getDataAdmin,
  });
  console.log(getAdminPaymentHistory);

  return (
    <div>
      <Heading
        heading={role === "admin" ? "All Payment History" : "Payment History"}
      />
      <PaymentCard
        payments={
          role === "admin"
            ? getAdminPaymentHistory
            : getUserPaymentHistory?.payments
        }
      />
    </div>
  );
};
