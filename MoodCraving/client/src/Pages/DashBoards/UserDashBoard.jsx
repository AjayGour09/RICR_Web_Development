import React from "react";
import UserSideBar from "../../Components/userDashBoard/UserSideBar";
import { useState } from "react";
import UserOverView from "../../Components/userDashBoard/UserOverView";
import UserProfile from "../../Components/userDashBoard/UserProfile";
import UserOrders from "../../Components/userDashBoard/UserOrders";
import UserTransaction from "../../Components/userDashBoard/UserTransaction";
import UserHelpDesk from "../../Components/userDashBoard/UserHelpDesk";

const UserDashBoard = () => {
  const [active, setActive] = useState("overview");

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className="border border-green-600 w-1/7 bg-(--color-background)">
          <UserSideBar active={active} setActive={setActive} />
        </div>

        {active == "overview" && <UserOverView />}
        {active == "profile" && <UserProfile />}
        {active == "orders" && <UserOrders />}
        {active == "transaction" && <UserTransaction />}
        {active == "helpdesk" && <UserHelpDesk />}
      </div>
    </>
  );
};

export default UserDashBoard;
