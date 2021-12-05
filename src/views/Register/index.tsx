import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../../logo2.png";

type RegisterData = {
  email: string;
  password1: string;
  password2: string;
  username: string;
};

export default function Register() {
  const history = useHistory();

  const [registerData, setRegisterData] = useState<RegisterData>({
    email: "",
    password1: "",
    password2: "",
    username: "",
  });

  const changeRegisterData = (key: keyof RegisterData, data: string) => {
    setRegisterData((old) => ({ ...old, [key]: data }));
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("email", registerData.email);
    formData.append("password1", registerData.password1);
    formData.append("password2", registerData.password2);
    // formData.append("username", registerData.username);
    fetch("http://localhost:8000/rest-auth/registration/", {
      method: "POST",
      body: formData,
    })
      .then(() => history.push("/login"))
      .catch((err) => console.error(err));
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create an account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                sign in to account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={registerData.email}
                  onChange={(e) => changeRegisterData("email", e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="username"
                  type="fullName"
                  autoComplete="name"
                  value={registerData.username}
                  onChange={(e) =>
                    changeRegisterData("username", e.target.value)
                  }
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  value={registerData.password1}
                  onChange={(e) =>
                    changeRegisterData("password1", e.target.value)
                  }
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="repeat-password" className="sr-only">
                  Repeat password
                </label>
                <input
                  id="repeat-password"
                  name="repeat-password"
                  type="password"
                  autoComplete="new-password"
                  value={registerData.password2}
                  onChange={(e) =>
                    changeRegisterData("password2", e.target.value)
                  }
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Repeat password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onSubmit}
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
