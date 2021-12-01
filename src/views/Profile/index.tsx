import React from "react";
import AppLayout from "../../components/AppLayout";

export default function Profile() {
  return (
    <AppLayout header="Profile">
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
            <p className="text-sm font-medium text-gray-500">Welcome back,</p>
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Jill Gates
            </h3>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
