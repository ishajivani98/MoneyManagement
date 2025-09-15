// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logout } from "../Redux/authSlice";
import Header from "../Header";
import { Outlet } from "react-router-dom";
function Dashboard() {
  // const user = JSON.parse(localStorage.getItem("user") || "null");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  //
  // const handleLogout = () => {
  //   dispatch(logout());
  //   localStorage.removeItem("isLoggedIn");
  //   navigate("/login");
  // };

  return (
    <>


             <div className="flex min-h-screen">
           {/* Sidebar */}
    <Header />

           {/* Main Content */}
    <div className="flex-1 bg-[#001a00] p-6">
      <Outlet /> {/* This will render Records, Analysis, etc. */}
    </div>
    </div>



</>

    // <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    //   <div className="bg-white p-6 rounded-lg shadow-md text-center">
    //     <h1 className="text-2xl font-bold">Welcome, {user?.name} 🎉</h1>
    //     <p className="text-gray-600">Email: {user?.email}</p>
    //     <button
    //       onClick={handleLogout}
    //       className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
    //     >
    //       Logout
    //     </button>
    //   </div>
    // </section>
  );
}

export default Dashboard;
