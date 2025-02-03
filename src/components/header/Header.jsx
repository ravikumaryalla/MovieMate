import { logo } from "../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="bg-[#0f171e] min-h-[3rem] flex gap-[1rem] p-[1rem] justify-between">
      <div className="flex items-center gap-[1rem] ml-4">
        <img src={logo} alt="logo" className="w-[1.5rem]" />
        <p>Movie Mate</p>
      </div>

      <div className="list self-center flex gap-[1rem]">
        <ul className="list-none flex justify-center gap-[1rem]">
          <li
            onClick={() => {
              setActivePage("Home");
              navigate("/");
            }}
            className={
              activePage === "Home"
                ? "text-blue-500  cursor-pointer"
                : "cursor-pointer"
            }
          >
            Home
          </li>

          <li
            onClick={() => {
              setActivePage("Popular");
              navigate("/popular");
            }}
            className={
              activePage === "Popular"
                ? "text-blue-500  cursor-pointer"
                : "cursor-pointer"
            }
          >
            Popular
          </li>
          <li
            onClick={() => {
              setActivePage("Top Rated");
              navigate("/toprated");
            }}
            className={
              activePage === "Top Rated"
                ? "text-blue-500 cursor-pointer"
                : "cursor-pointer"
            }
          >
            Top Rated
          </li>

          <li
            onClick={() => {
              setActivePage("Up Coming");
              navigate("/upcoming");
            }}
            className={
              activePage === "Up Coming"
                ? "text-blue-500  cursor-pointer"
                : "cursor-pointer"
            }
          >
            Up Coming
          </li>
        </ul>
      </div>
      <div>
        <input
          type="text"
          className="border-[1px] border-[gray] rounded-[20px] p-[0.5rem] w-[150px] h-[10px] p-[1rem] focus:outline-none focus:border-blue-500 text-slate-400"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Header;
