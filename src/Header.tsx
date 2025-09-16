import { NavLink } from "react-router-dom";
import ListAltSharpIcon from "@mui/icons-material/ListAltSharp";
import Analysis from "@mui/icons-material/DonutLargeSharp";
import Budgets from "@mui/icons-material/Calculate";
import Accounts from "@mui/icons-material/AccountBalanceWallet";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./Redux/authSlice";

function Header() {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <aside className="w-20 flex flex-col items-center py-6 dark:bg-black border-r border-green-950 space-y-6">
      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-lg font-bold">
        E
      </div>

      <nav className="flex flex-col space-y-6 mt-2">
        <NavLink
          to="/dashboard/records"
          className="text-white hover:text-green-500"
        >
          <ListAltSharpIcon style={{ fontSize: "30px" }} />
          <div className="text-[11px]">Records</div>
        </NavLink>

        <NavLink
          to="/dashboard/analysis"
          className="text-white hover:text-green-500"
        >
          <Analysis style={{ fontSize: "30px" }} />
          <div className="text-[11px]">Analysis</div>
        </NavLink>

        <NavLink
          to="/dashboard/budgets"
          className="text-white hover:text-green-500"
        >
          <Budgets style={{ fontSize: "30px" }} />
          <div className="text-[11px]">Budgets</div>
        </NavLink>

        <NavLink
          to="/dashboard/accounts"
          className="text-white hover:text-green-500"
        >
          <Accounts style={{ fontSize: "30px" }} />
          <div className="text-[11px]">Account</div>
        </NavLink>

        <NavLink to="/login" className="text-white hover:text-green-500">
            <button onClick={handleLogout}>
              <Logout style={{ fontSize: "30px" }} />
              <div className="text-[11px]">
                Logout</div>
            </button>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Header;
