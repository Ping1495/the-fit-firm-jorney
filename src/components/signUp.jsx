import Header from "./header";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="bg-[#0A3288] h-screen">
        <Header />
        <div className="flex justify-center items-center">
          <div className="bg-white h-[550px] w-[550px] mt-[50px] rounded-3xl">
            <p class="text-3xl font-midium text-center mb-3 mt-3 text-[#0A3288]">
              Register
            </p>
            <form className="flex flex-col ml-5 mr-5 ">
              <div>
                <label
                  for="email"
                  class="block text-lg font-normal text-[#0A3288] mt-[10px] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="mt-1 p-2 border-2 border-[#0A3288] rounded w-[400px]"
                />
              </div>
              <div>
                <label
                  for="username"
                  class="block text-lg font-normal text-[#0A3288] mb-2 mt-4"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="mt-1 p-2 border-2 border-[#0A3288] rounded w-[400px]"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block text-lg font-normal text-[#0A3288] mb-2 mt-4"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="mt-1 p-2 border-2 border-[#0A3288] rounded w-[400px]"
                />
              </div>
              <div>
                <label
                  for="confirmPassword"
                  class="block text-lg font-normal text-[#0A3288] mb-2 mt-4"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  class="mt-1 p-2 border-2 border-[#0A3288] rounded w-[400px]"
                />
              </div>

              <Link
                to={"/comingSoon"}
                class="mt-[35px] ml-[400px] py-2 px-4 bg-[#0A3288] text-white font-bold rounded w-[100px] text-center"
              >
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
