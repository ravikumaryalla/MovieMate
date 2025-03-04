import { logo } from "../../assets";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (search.trim() !== "") {
      e.preventDefault();
      navigate(`/search?query=${search}`);
      setSearch("");
    }
  };

  const [activePage, setActivePage] = useState("");
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-[#0f171e] min-h-[3rem] text-[25px] flex gap-[1rem] p-[1rem] justify-between">
      <div className="flex items-center gap-[1rem] ml-4">
        <img src={logo} alt="logo" className="w-[1.5rem]" />
        <p>Movie Mate</p>
      </div>

      <div className="list self-center flex gap-[1rem]">
        <ul className="list-none flex justify-center gap-[1rem]">
          {[
            { path: "/", label: "Home" },
            { path: "/popular", label: "Popular" },
            { path: "/toprated", label: "Top Rated" },
            { path: "/upcoming", label: "Up Coming" },
          ].map(({ path, label }) => (
            <li
              key={path}
              onClick={() => navigate(path)}
              className={
                activePage === path
                  ? "text-blue-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <input
          type="text"
          className="border-[2px] border-[white] rounded-[20px] pl-[1rem] pr-[3rem] w-[300px] h-[40px] focus:outline-none focus:border-blue-500 text-slate-400 relative "
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // ✅ Handles state update
          onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
        />
        <button className="cursor-pointer" onClick={(e) => handleSearch(e)}>
          {" "}
          <span className="material-icons absolute right-[20px] top-[20px]">
            search
          </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
