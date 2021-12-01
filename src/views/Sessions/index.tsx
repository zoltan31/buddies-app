import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import Card from "../../components/Card";
import SearchPanel from "./components/SearchPanel";
import Session from "./components/Session";

const positions = [
  {
    id: 1,
    title: "30 perces edzés",
    type: "Beginner",
    location: "Budapest, X. district",
    creator: "Ádám",
    time: "2021-11-07",
    description: "ASD",
    profilePicSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    title: "1 órás teljes edzés",
    type: "Beginner",
    location: "Budapest, VII. district",
    creator: "Béla",
    time: "2021-11-09",
    description: "ASD",
    profilePicSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "Nyújtás + edzés",
    type: "Beginner",
    location: "Budapest, XI. district",
    creator: "Csaba",
    time: "2021-11-14",
    description: "ASD",
    profilePicSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Sessions() {
  const [sessions, setSessions] = useState<typeof positions>([]);

  useEffect(() => {
    fetch("http://localhost:8000/plan", {
      headers: {
        Authorization: `Token ${localStorage.getItem("key")}`,
      },
    })
      .then((res) => res.json())
      .then((obj) => {
        setSessions(obj);
        console.log(obj);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AppLayout header="Sessions">
      {/* Page header */}
      <div className="sm:flex sm:items-center sm:justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Sessions
          </h2>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Manage
          </button>
          <Link
            to="/sessions/create"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <Card>
            <SearchPanel />
          </Card>
        </div>
        <div className="sm:col-span-2">
          <Card>
            <ul className="divide-y divide-gray-200">
              {sessions.map((position) => (
                <li key={position.id}>
                  <Session
                    time={position.time}
                    title={position.title}
                    description={position.description}
                    location={position.location}
                    creator="Jani"
                    type="Beginner"
                  />
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
