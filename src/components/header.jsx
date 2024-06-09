import { Link } from "react-router-dom";
import dumbbellPic from "/public/images/dumbbell.png";

function Header() {
  return (
    <nav className="bg-[#0A3288] py-5 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <img src={dumbbellPic} alt="health-logo" className="w-12 h-12" />
          <div className="text-white font-medium text-2xl hidden md:block">
            The Fit Firm Journey
          </div>
        </div>
        <div className="flex space-x-4">
          <Link
            to={`/`}
            className="text-white font-semibold border border-white py-1 px-2 rounded-lg"
          >
            Home
          </Link>

          <Link
            to={`/login`}
            className="text-white font-semibold border border-white py-1 px-2 rounded-lg"
          >
            Login
          </Link>
          <Link
            to={`/signUp`}
            className="text-white font-semibold border border-white py-1 px-2 rounded-lg"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
