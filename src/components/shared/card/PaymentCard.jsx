import React from "react";

export const PaymentCard = ({ payments }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full min-w-[1000px] border-collapse text-left">
        {/* Table Header */}
        <div
          className="bg-[#444] text-white grid 
                  grid-cols-7
                  px-4 py-3 text-center font-bold"
        >
          <div>No</div>
          <div>Name</div>
          <div>Email</div>
          <div>TrX ID</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Date</div>
        </div>
        {/* Table Body */}
        {payments?.map((payment, index) => (
          <div
            key={payment._id}
            className="grid grid-cols-7
             items-center text-center border-b-[1px] border-[#DDD] hover:bg-white px-4 py-2"
          >
            <div>{index + 1}.</div>

            <div>{payment?.name}</div>
            <div>
              {payment?.email.length > 18
                ? `${payment?.email.slice(0, 10)}...`
                : payment?.email}
            </div>
            {/* <div>{payment?.email}</div> */}

            <div>
              {payment?.transID.length > 15
                ? `${payment?.transID.slice(0, 12)}...`
                : payment?.transID}
            </div>
            <div>${payment?.totalPrice}</div>
            <div className="text-green-500 underline">succeeded</div>
            {new Date(payment?.paymentDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "numeric",
              year: "numeric",
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
