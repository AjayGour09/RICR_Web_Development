import React from "react";
import { TbChartDonut4 } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { FaBoxTissue } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { LuHandHelping } from "react-icons/lu";
import { FaHamburger } from "react-icons/fa";

const UserSideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold flex justify-center items-center gap-2"> <FaHamburger />User DashBoard</div>
        <hr />
        <div className="grid gap-3 p-6 font-semibold">
          <button
            onClick={() => setActive("overview")}
            className={`flex gap-3 items-center  hover:bg-gray-100 p-3 rounded-xl ${
              active === "overview"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
          >
            {" "}
            <MdOutlineAttachMoney /> Overview
          </button>
          <button
              className={`flex gap-3 items-center  hover:bg-gray-100 p-3 rounded-xl ${
              active === "orders"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("orders")}
          >
            <TbChartDonut4 /> Orders
          </button>
          <button
            onClick={() => setActive("profile")}
              className={`flex gap-3 items-center  hover:bg-gray-100 p-3 rounded-xl ${
              active === "profile"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
          >
            <ImProfile /> Profile
          </button>
          <button
            onClick={() => setActive("transaction")}
              className={`flex gap-3 items-center  hover:bg-gray-100 p-3 rounded-xl ${
              active === "transaction"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
          >
            <FaBoxTissue /> Transaction
          </button>
          <button
            onClick={() => setActive("helpdesk")}
              className={`flex gap-3 items-center  hover:bg-gray-100 p-3 rounded-xl ${
              active === "helpdesk"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            }`}
          >
            <LuHandHelping /> HelpDesk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
