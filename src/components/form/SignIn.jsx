import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";

export const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleSignIn = async (data) => {
    const { email, password } = data;
    try {
      const result = await signIn(email, password);
      const { data } = await axios.post("/login", {
        email: result?.user?.email,
        password: result?.user?.password,
      });
      console.log(data);

      toast.success("Access Your Account Successfully");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex h-screen w-full container mx-auto">
        {/* Right Side: Image Section */}
        <div
          className="hidden lg:flex w-1/2 rounded-lg my-1 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/13608798/pexels-photo-13608798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          <div className="flex flex-col justify-end w-full p-6 bg-opacity-50 text-white">
            <p className="text-lg italic">
              "The curation is highly focused on design and the scene is a
              clever marketplace that allows users to replicate the design at
              home."
            </p>
            <p className="mt-2 text-sm">- Kaiya Carder • Freelancer</p>
          </div>
        </div>
        {/* Left Side: Form Section */}
        <div className="flex items-center justify-center w-full lg:w-1/2 p-8">
          <div className="max-w-md w-full">
            <form onSubmit={handleSubmit(handleSignIn)}>
              <h2 className="text-2xl font-semibold text-gray-900">
                Access In to Your Account
              </h2>
              <p className="mt-2 text-gray-600">
                Welcome back! Please enter your details.
              </p>

              {/* Form */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border  focus:ring focus:ring-[#E9E9E9]"
                  style={{
                    borderColor: "#E9E9E9",
                  }}
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Enter Password
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border  focus:ring focus:ring-[#E9E9E9]"
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

            <div className="flex items-center justify-center my-10">
              <p className="text-sm font-medium">
                Already Have an account ?{" "}
                <Link to={"/sign-up"} className="text-[#E21B60]">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
