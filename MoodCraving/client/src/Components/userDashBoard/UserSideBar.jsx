import React, { useState } from "react";
import { TbChartTreemap } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTransactionRupee } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

export const UserSideBarLogo = ({ active, setActive, SideBar, setSideBar }) => {
  return (
    <>
      <div className="px-3 py-4 " >
        <button className="text-xl ps-3 font-bold  hover:animate-spin " onClick={() => setSideBar(true)}  >
          <GiHamburgerMenu className="text-xl" />
        </button>

        <div className="grid gap-3 overflow-hidden py-6 ">
          <button
            className={` hover:bg-gray-100/70 p-3 w-10 rounded-xl ${
              active === "overview"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("overview")}
          >
            <TbChartTreemap />
          </button>

          <button
            className={`flex items-center gap-3 w-10 hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "profile"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("profile")}
          >
            <ImProfile />
            
          </button>

          <button
            className={`flex items-center gap-3 hover:bg-gray-100/70 p-3 rounded-xl w-10 ${
              active === "orders"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("orders")}
          >
            <TiShoppingCart />
            
          </button>

          <button
            className={`flex items-center gap-3 hover:bg-gray-100/70 p-3 rounded-xl w-10 ${
              active === "transactions"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("transactions")}
          >
            <TbTransactionRupee />
            
          </button>

          <button
            className={`flex items-center gap-3 hover:bg-gray-100/70 p-3 rounded-xl w-10 ${
              active === "helpdesk"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("helpdesk")}
          >
            <RiCustomerService2Fill />
            
          </button>
        </div>
      </div>
    </>
  );
};

export const UserSideBar = ({ active, setActive, SideBar, setSideBar }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold flex gap-2 items-center justify-between">
          
          User Dashboard
          <button  onClick={() => setSideBar(false)} className="hover:animate-ping hover:bg-blue-950 hover:text-white rounded-2xl "><MdOutlineKeyboardDoubleArrowLeft className="text-xl"/></button>
        </div>
        <hr />
        <div className="grid gap-3 p-6">
          <button
            className={`flex items-center gap-3 hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "overview"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("overview")}
          >
            <TbChartTreemap />
            Overview
          </button>

          <button
            className={`flex items-center gap-3 hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "profile"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("profile")}
          >
            <ImProfile />
            Profile
          </button>

          <button
            className={`flex items-center gap-3 hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "orders"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("orders")}
          >
            <TiShoppingCart />
            Orders
          </button>

          <button
            className={`flex items-center gap-3 hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "transactions"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("transactions")}
          >
            <TbTransactionRupee />
            Transactions
          </button>

          <button
            className={`flex items-center gap-3 hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "helpdesk"
                ? "bg-(--color-secondary) text-white"
                : "hover:bg-gray-100/70"
            } `}
            onClick={() => setActive("helpdesk")}
          >
            <RiCustomerService2Fill />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};