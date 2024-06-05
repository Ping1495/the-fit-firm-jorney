import { Link } from "react-router-dom";
import Header from "./header";

function Login() {
  return (
    <>
      <div className="bg-[#0A3288] h-screen">
        <Header />
        <div className="flex justify-center items-center">
          <div className="bg-white h-[450px] w-[550px] mt-[50px] rounded-3xl">
            <p class="text-3xl font-midium text-center mb-6 mt-9 text-[#0A3288]">
              Login
            </p>
            <form className="flex flex-col ml-5 mr-5 ">
              <div>
                <label
                  for="username"
                  class="block text-lg font-normal text-[#0A3288] mt-[20px] mb-4"
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
                  class="block text-lg font-normal text-[#0A3288] mb-4 mt-5"
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

              <Link
                to={"/comingSoon"}
                class="mt-[50px] ml-[400px] py-2 px-4 bg-[#0A3288] text-white font-bold rounded w-[100px] text-center"
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
