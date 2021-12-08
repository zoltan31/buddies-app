import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";

export default function WelcomeCard() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/rest-auth/user", {
      headers: {
        Authorization: `Token ${localStorage.getItem("key")}`,
      },
    })
      .then((res) => res.json())
      .then((obj) => setName(obj.first_name))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Card>
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Welcome back,
                </p>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {name}
                </h3>
              </div>
            </div>
          </div>
          <div className="ml-4 mt-4 flex-shrink-0 flex">
            <Link
              to="/profile"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
