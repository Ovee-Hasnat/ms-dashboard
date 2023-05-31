import {
  Bars3Icon,
  ClipboardDocumentIcon,
  ClipboardIcon,
  QueueListIcon,
  TicketIcon,
  UserCircleIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Navbar = () => {
  const openNav = () => {
    document.getElementById("nav").style.width = "224px";
    document.getElementById("backdrop").style.width = "100vw";
  };
  const closeNav = () => {
    document.getElementById("nav").style.width = "0px";
    document.getElementById("backdrop").style.width = "0px";
  };

  return (
    <div className="relative">
      <div className="h-16 bg-teal-200 flex justify-between items-center px-8">
        <Bars3Icon
          className="w-10 text-slate-950 cursor-pointer"
          onClick={openNav}
        />
        <img
          src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
          alt=""
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div
        id="nav"
        className="fixed top-0 left-0 h-screen w-0 lg:w-56 bg-gradient-to-t from-slate-800 to-slate-950 py-6 overflow-x-hidden transition-all duration-500 z-50 ease-in-out text-white"
      >
        <XMarkIcon
          className=" w-10 mx-auto cursor-pointer mb-10 lg:hidden"
          onClick={closeNav}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [ 0, 0, 1] }}
          transition={{ duration: 1 }}
          className="mx-2 my-10 space-y-6"
        >
          <button className="menuItem">
            <ClipboardIcon className="w-6" />
            <span>Dashboard</span>
          </button>
          <button className="menuItem">
            <TicketIcon className="w-6" />
            <span>My Tickets</span>
          </button>
          <button className="menuItem">
            <UserCircleIcon className="w-6" />
            <span>My Profile</span>
          </button>
          <button className="menuItem">
            <UserGroupIcon className="w-6" />
            <span>Users</span>
          </button>
          <button className="menuItem">
            <ClipboardDocumentIcon className="w-6" />
            <span>Ticket Type</span>
          </button>
          <button className="menuItem">
            <QueueListIcon className="w-6" />
            <span>Tickets Queue</span>
          </button>
        </motion.div>
        <div className="absolute bottom-10 left-0 right-0 w-full">
          <h1 className="text-xl font-serif text-cyan-700 text-center">LOGO</h1>
        </div>
      </div>
      <div
        id="backdrop"
        className="fixed top-0 left-0 h-screen w-0 verflow-x-hidden transition-all duration-300 bg-black/20 ease-in-out lg:hidden"
        onClick={closeNav}
      />
    </div>
  );
};

export default Navbar;
