import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Inbox from "./pages/Inbox"; // New Inbox page
import SearchPage from "./pages/Searchpage"; // New SearchPage component
import ActiveTicket from "./pages/ActiveTicket";
import ClosedTicket from "./pages/ClosedTicket";
import DashboardPage from "./pages/DashboardPage";
import CustomersPage from "./pages/CustomersPage";
import GeneralLayout from "./layout/GeneralLayout";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to control search pop-up visibility

  // Function to open the search pop-up
  const openSearch = () => {
    setIsSearchOpen(true);
  };

  // Function to close the search pop-up
  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    // <Router>
    // <div className="flex font-DMSans">
    //   <Sidebar openSearch={openSearch} />
    //   {/* Passing openSearch function to Sidebar */}
    //   {/* ml-64 below shifted the dashboard part to the left */}
    //   <div className="flex-1 px-8 py-5 ml-64">
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/active-tickets" element={<ActiveTicket />} />
        <Route path="/closed-tickets" element={<ClosedTicket />} />

        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/inbox" element={<Inbox />} />
        {/* Adding route for Inbox */}
      </Route>
    </Routes>
    // </div>
    //   {/* Search pop-up */}
    //   {isSearchOpen && (
    //     <div className="fixed inset-0 z-50 flex items-center justify-center">
    //       {/* Dark Overlay */}
    //       <div
    //         className="absolute inset-0 bg-black opacity-50"
    //         onClick={closeSearch}
    //       ></div>

    //       {/* Search Page */}
    //       <div className="relative bg-white w-[700px] h-[500px] rounded-lg shadow-lg p-5 ml-60">
    //         <SearchPage closeSearch={closeSearch} />{" "}
    //         {/* Passing closeSearch to handle close button inside the search */}
    //       </div>
    //     </div>
    //   )}
    // </div>
    // </Router>
  );
}

export default App;
