import React from "react";
import  {
  UserSideBar,
  UserSideBarLogo,
} from "../../Components/userDashBoard/UserSideBar";
import { useState } from "react";
import UserOverView from "../../Components/userDashBoard/UserOverView";
import UserProfile from "../../Components/userDashBoard/UserProfile";
import UserOrders from "../../Components/userDashBoard/UserOrders";
import UserTransaction from "../../Components/userDashBoard/UserTransaction";
import UserHelpDesk from "../../Components/userDashBoard/UserHelpDesk";

const UserDashBoard = () => {
  const [active, setActive] = useState("overview");
  const [SideBar, setSideBar] = useState(false);

  return (
    <>
      {SideBar ? (
        <div className="w-full h-[90vh] flex duration-300">
          <div className=" border border-green-600 w-1/7 bg-(--color-background)">
            <UserSideBar active={active} setActive={setActive} SideBar={SideBar} setSideBar={setSideBar} />
          </div>

          <div>
            {active == "overview" && <UserOverView />}
            {active == "profile" && <UserProfile />}
            {active == "orders" && <UserOrders />}
            {active == "transaction" && <UserTransaction />}
            {active == "helpdesk" && <UserHelpDesk />}
          </div>
        </div>
      ) : (
        <div className="w-80 h-[90vh] flex duration-400">
          <div className="border border-green-600 w-2/10 bg-(--color-background)">
            <UserSideBarLogo
              active={active}
              setActive={setActive}
              SideBar={SideBar}
              setSideBar={setSideBar}
            />
          </div>

          <div className="w-8/10 ">
            {active == "overview" && <UserOverView />}
            {active == "profile" && <UserProfile />}
            {active == "orders" && <UserOrders />}
            {active == "transaction" && <UserTransaction />}
            {active == "helpdesk" && <UserHelpDesk />}
          </div>
        </div>
      )}
    </>
  );
};

export default UserDashBoard;
