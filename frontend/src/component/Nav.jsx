import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { IoSearchCircleOutline, IoSearchCircleSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdContacts } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import axios from 'axios';
import { userDataContext } from '../context/UserContext';
import { authDataContext } from '../context/AuthContext';
import { shopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const { getCurrentUser, userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { showSearch, setShowSearch, search, setSearch, getCartCount } = useContext(shopDataContext);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true });
      getCurrentUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[70px] bg-[#F9FAFB] fixed top-0 flex items-center justify-between px-8 shadow-md z-30 border-b border-[#E5E7EB] transition-all duration-300">

      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-10 drop-shadow-sm" />
        <h1 className="text-3xl font-bold text-[#1F2937] tracking-tight">EZ Cart</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-[#1F2937] font-medium">
        <ul className="flex items-center gap-6 text-lg">
          <li className="cursor-pointer px-5 py-2 rounded-full hover:bg-[#E5E7EB] hover:text-[#0EA5E9] transition-all" onClick={() => navigate("/")}>Home</li>
          <li className="cursor-pointer px-5 py-2 rounded-full hover:bg-[#E5E7EB] hover:text-[#0EA5E9] transition-all" onClick={() => navigate("/collection")}>Collections</li>
          <li className="cursor-pointer px-5 py-2 rounded-full hover:bg-[#E5E7EB] hover:text-[#0EA5E9] transition-all" onClick={() => navigate("/about")}>About</li>
          <li className="cursor-pointer px-5 py-2 rounded-full hover:bg-[#E5E7EB] hover:text-[#0EA5E9] transition-all" onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-[#1F2937] relative">
        {/* Search Toggle */}
        {!showSearch ? (
          <IoSearchCircleOutline className="w-10 h-10 cursor-pointer hover:text-[#0EA5E9] transition-all" onClick={() => { setShowSearch(true); navigate("/collection"); }} />
        ) : (
          <IoSearchCircleSharp className="w-10 h-10 cursor-pointer text-[#0EA5E9]" onClick={() => setShowSearch(false)} />
        )}

        {/* User Profile */}
        {!userData ? (
          <FaCircleUser className="w-7 h-7 cursor-pointer hover:text-[#0EA5E9]" onClick={() => setShowProfile(prev => !prev)} />
        ) : (
          <div
            className="w-9 h-9 bg-[#1F2937] text-[#F9FAFB] font-semibold rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0EA5E9] transition-all"
            onClick={() => setShowProfile(prev => !prev)}
          >
            {userData?.name.slice(0, 1).toUpperCase()}
          </div>
        )}

        {/* Cart */}
        <div className="relative">
          <MdOutlineShoppingCart className="w-8 h-8 cursor-pointer hidden md:block hover:text-[#0EA5E9] transition-all" onClick={() => navigate("/cart")} />
          <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-[#0EA5E9] text-black rounded-full text-xs font-semibold hidden md:flex">
            {getCartCount()}
          </span>
        </div>

        {/* Profile Dropdown */}
        {showProfile && (
          <div className="absolute top-full right-0 mt-3 bg-white rounded-xl shadow-lg border border-[#E5E7EB] z-50 w-56">
            <ul className="flex flex-col py-2">
              {!userData && (
                <li className="px-5 py-2 cursor-pointer hover:bg-[#F3F4F6]" onClick={() => { navigate("/login"); setShowProfile(false); }}>
                  Login
                </li>
              )}
              {userData && (
                <li className="px-5 py-2 cursor-pointer hover:bg-[#F3F4F6]" onClick={() => { handleLogout(); setShowProfile(false); }}>
                  Logout
                </li>
              )}
              <li className="px-5 py-2 cursor-pointer hover:bg-[#F3F4F6]" onClick={() => { navigate("/order"); setShowProfile(false); }}>Orders</li>
              <li className="px-5 py-2 cursor-pointer hover:bg-[#F3F4F6]" onClick={() => { navigate("/about"); setShowProfile(false); }}>About</li>
            </ul>
          </div>
        )}
      </div>

     {/* Search Input */}
{showSearch && (
  <div className="absolute top-full left-0 right-0 bg-[#E5E7EB] p-4 shadow-inner border-t border-[#D1D5DB]">
    <input
      type="text"
      className="w-full max-w-4xl mx-auto rounded-full bg-[#F3F4F6] p-3 placeholder:text-[#9CA3AF] text-[#1F2937] text-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition-all"
      placeholder="Search here..."
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  </div>
)}


      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1F2937] h-20 flex items-center justify-between px-8 md:hidden text-white text-xs shadow-[0_-4px_16px_rgba(0,0,0,0.2)]">
        <button className="flex flex-col items-center gap-1 hover:text-[#0EA5E9] transition-all" onClick={() => navigate("/")}>
          <IoMdHome className="w-7 h-7" /> Home
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-[#0EA5E9] transition-all" onClick={() => navigate("/collection")}>
          <HiOutlineCollection className="w-7 h-7" /> Collections
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-[#0EA5E9] transition-all" onClick={() => navigate("/contact")}>
          <MdContacts className="w-7 h-7" /> Contact
        </button>
        <button className="flex flex-col items-center gap-1 relative hover:text-[#0EA5E9] transition-all" onClick={() => navigate("/cart")}>
          <MdOutlineShoppingCart className="w-7 h-7" />
          <span className="absolute -top-1 -right-2 w-5 h-5 flex items-center justify-center bg-[#0EA5E9] text-black rounded-full text-xs font-bold">
            {getCartCount()}
          </span>
          Cart
        </button>
      </div>

    </div>
  );
}

export default Nav;
