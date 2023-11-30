'use client'
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { User } from "@nextui-org/react";
import { IoMdExit } from "react-icons/io";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import { Tooltip, Button } from "@nextui-org/react";
import Link from "next/link";

const Home = () => {
    // margin: true si quiero un salto de linea
    const menus = [
        { name: "Inicio", link: "/", icon: MdOutlineDashboard, margin: false },
        { name: "Perfil", link: "/", icon: AiOutlineUser },
        { name: "Importante", link: "/", icon: FiAlertTriangle },
        { name: "Ajustes", link: "/", icon: RiSettings4Line },
    ];
    const [open, setOpen] = useState(true);
    return (
        <section className="flex gap-6">
            <div className={`bg-[#0e0e0e] relative min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>
                <div className="flex py-3 justify-between">
                    <div style={{ transitionDelay: `100ms` }}
                        className={`flex gap-1 items-center whitespace-pre duration-500 ${!open && "opacity-0 overflow-hidden"}`}>
                        Brainscape
                        <div className="text-danger">
                            <AiOutlineHeart size={20} />
                        </div>
                    </div>
                    <div className="">
                        <HiMenuAlt3 size={26} className="cursor-pointer hover:text-primary hover:duration-500" onClick={() => setOpen(!open)} />
                    </div>
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link
                            href={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                        >
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
                <div style={{ transitionDelay: `100ms` }}
                    className={`flex bottom-0 w-full justify-between absolute whitespace-pre duration-500 ${!open && "opacity-0 overflow-hidden"}`} >
                    <div>
                        <User
                            name="ArangoMzl"
                            description="Owner"
                        />
                    </div>
                    <div className="flex mx-9 items-center hover:text-danger cursor-pointer hover:duration-500">
                        <IoMdExit size={20} />
                    </div>
                </div>
                <div className={`flex bottom-0 w-full absolute mb-1.5 cursor-pointer ${!open ? "block" : "hidden"}`}>
                    <Tooltip
                        showArrow
                        placement="right"
                        content="Salir"
                        color="danger"
                        size="md"
                        closeDelay={100}
                        classNames={{
                            content: [
                                "font-bold text-white cursor-pointer",
                            ],
                        }}
                    >
                        <Avatar name="ArangoMzl" />
                    </Tooltip>
                </div>
            </div>
        </section>
    );
};

export default Home;