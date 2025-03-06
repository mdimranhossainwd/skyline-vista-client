import { Link } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";

export const SignUp = () => {
  const axios = useAxios();

  return (
    <div className="flex min-h-screen w-full container mx-auto">
      {/* Left Side: Form Section */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-8 ">
        <div className="max-w-md w-full ">
          <form>
            <h2 className="text-2xl font-semibold text-gray-900">
              Sign in or create an account
            </h2>
            <p className="mt-2 text-gray-600">
              Welcome back! Please enter your details.
            </p>

            {/* Form */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="mt-1 block w-full px-4 py-2 border  focus:ring focus:ring-[#E9E9E9]"
                style={{
                  borderColor: "#E9E9E9",
                }}
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="mt-1 block w-full px-4 py-2 border  focus:ring focus:ring-[#E9E9E9]"
                style={{
                  borderColor: "#E9E9E9",
                }}
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className="mt-1 block w-full px-4 py-2 border  focus:ring focus:ring-[#E9E9E9]"
                style={{
                  borderColor: "#E9E9E9",
                }}
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="photo"
                id="photo"
                {...register("photo", { required: true })}
                className="mt-1 block w-full px-4 py-2 border focus:ring-[#E9E9E9]"
                style={{
                  borderColor: "#E9E9E9",
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-4 py-2 text-white bg-gray-800  hover:bg-gray-700"
            >
              Continue
            </button>
          </form>

          <div className="mt-4 text-center text-gray-500">or</div>

          {/* Social Buttons */}
          <button
            className="w-full mt-4 flex items-center justify-center border py-2"
            style={{
              borderColor: "#E9E9E9",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          <div className="flex items-center justify-center mt-6">
            <p className="text-sm font-medium">
              Already Have an account ?{" "}
              <Link className="text-[#E21B60]">Sign In</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div
        className="hidden lg:flex w-1/2 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/13608798/pexels-photo-13608798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="flex flex-col justify-end w-full p-6 bg-opacity-50 text-white">
          <p className="text-lg italic">
            "The curation is highly focused on design and the scene is a clever
            marketplace that allows users to replicate the design at home."
          </p>
          <p className="mt-2 text-sm">- Kaiya Carder • Freelancer</p>
        </div>
      </div>
    </div>
  );
};
