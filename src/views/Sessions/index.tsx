import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import Card from "../../components/Card";
import Notification from "../../components/Notification";
import SearchPanel from "./components/SearchPanel";
import Session, { SessionType } from "./components/Session";

export default function Sessions() {
  const [sessions, setSessions] = useState<SessionType[]>([]);
  const [joinedSessions, setJoinedSessions] = useState<SessionType[]>([]);
  const [joinedTitle, setJoinedTitle] = useState<string>("");
  const closeNoti = () => setJoinedTitle("");

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

  useEffect(() => {
    fetch("http://localhost:8000/user/joined/", {
      headers: {
        Authorization: `Token ${localStorage.getItem("key")}`,
      },
    })
      .then((res) => res.json())
      .then((obj) => setJoinedSessions(obj))
      .catch(console.error);
  }, [sessions]);

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
                    id={position.id}
                    time={position.time}
                    title={position.title}
                    description={position.description}
                    location={position.location}
                    experience_level={position.experience_level}
                    creator={(position as any).owner.first_name}
                    setJoined={setJoinedTitle}
                    joined={joinedSessions.some(
                      (sess) => sess.id === position.id
                    )}
                  />
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
      <Notification
        show={joinedTitle !== ""}
        onClose={closeNoti}
        text={joinedTitle}
      />
    </AppLayout>
  );
}
