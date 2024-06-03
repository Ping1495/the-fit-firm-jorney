import { Link } from "react-router-dom";
import dumbbellPic from "/public/dumbbell.png";

function Header() {
  return (
    <>
      <nav className="bg-[#0A3288] py-5 w-full">
        <div className=" mx-auto flex justify-between items-center">
          <div className="flex flex-row items-center space-x-4">
            <img
              src={dumbbellPic}
              alt="health-logo"
              className="w-12 h-12 ml-5"
            />
            <div className="text-white font-medium text-2xl ml-2">
              The Fit Firm Journey
            </div>
          </div>
          <div className="flex space-x-4 mr-5">
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
              to={`/singUp`}
              className="text-white font-semibold border border-white py-1 px-2 rounded-lg"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
