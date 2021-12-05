import React, { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import Card from "../../components/Card";
import Session from "../Sessions/components/Session";

const positions = [
  {
    id: 1,
    title: "30 perces edzés",
    type: "Beginner",
    location: "Budapest, X. district",
    creator: "Ádám",
    startTime: "2021-11-07",
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
    startTime: "2021-11-09",
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
    startTime: "2021-11-14",
    description: "ASD",
    profilePicSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Profile() {
  const [sessions, setSessions] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/user/joined/", {
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
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Jill Gates
            </h3>
          </div>
        </div>
        <div className="mt-4">
          <Card>
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Joined Sessions
              </h3>
            </div>
            <ul className="divide-y divide-gray-200">
              {sessions.map((position) => (
                <li key={position.id}>
                  <Session
                    id={position.id}
                    time={position.time}
                    title={position.title}
                    description={position.description}
                    location={position.location}
                    experience_level={position.experience}
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
