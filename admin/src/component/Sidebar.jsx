import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate, useLocation } from 'react-router-dom'

const sidebarLinks = [
  {
    label: "Add Items",
    icon: <IoIosAddCircleOutline className="w-5 h-5" />,
    path: "/add"
  },
  {
    label: "List Items",
    icon: <FaRegListAlt className="w-5 h-5" />,
    path: "/lists"
  },
  {
    label: "View Orders",
    icon: <SiTicktick className="w-5 h-5" />,
    path: "/orders"
  }
]

function Sidebar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <aside className="hidden md:block w-[230px] lg:w-[320px] min-h-screen fixed left-0 top-0 pt-[90px] pb-8 bg-[#F5F2EF] border-r border-[#E6D9CF]">
      <nav className="flex flex-col gap-1 pl-6 pr-2 mt-2">
        {sidebarLinks.map(link => {
          const isActive = pathname === link.path
          return (
            <button
              key={link.label}
              className={`
                flex items-center gap-3 px-4 py-3 my-1 rounded-full transition
                ${isActive
                  ? "bg-[#0f0f0f] text-white shadow"
                  : "bg-transparent text-[#3a332d] hover:bg-[#efe9e4] hover:text-[#2c7b89]"}
              `}
              style={{ outline: isActive ? "2px solid #C8BDB3" : undefined }}
              onClick={() => navigate(link.path)}
            >
              {link.icon}
              <span className="font-medium text-lg">{link.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
