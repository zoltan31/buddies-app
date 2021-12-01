import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AppLayout from "../../components/AppLayout";
import Card from "../../components/Card";

type Session = {
  title: string;
  time: string;
  location: string;
  description: string;
};

export default function CreateSession() {
  const history = useHistory();
  const [owner, setOwner] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/rest-auth/user", {
      headers: {
        Authorization: `Token ${localStorage.getItem("key")}`,
      },
    })
      .then((res) => res.json())
      .then((obj) => {
        setOwner(obj.id);
      })
      .catch((err) => console.error(err));
  }, []);

  const [session, setSession] = useState<Session>({
    title: "",
    time: "",
    location: "",
    description: "",
  });

  const changeSession = (key: keyof Session, data: any) => {
    setSession((old) => ({ ...old, [key]: data }));
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("title", session.title);
    formData.append("time", session.time);
    formData.append("location", session.location);
    formData.append("description", session.description);
    formData.append("owner", "1");

    fetch("http://localhost:8000/plan/", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("key")}`,
      },
      body: formData,
    }).then(() => history.push("/"));
  };

  return (
    <AppLayout header="Sessions">
      {/* Title */}
      <div className="mb-4 flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Create Session
        </h2>
      </div>

      {/* Form */}
      <Card>
        <form className="space-y-8 divide-y divide-gray-200 p-4">
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Session name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={session.title}
                        onChange={(e) => changeSession("title", e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={session.location}
                        onChange={(e) =>
                          changeSession("location", e.target.value)
                        }
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Budapest X. district"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div>
                    <label
                      htmlFor="startDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Start date and time
                    </label>
                    <div className="mt-1">
                      <input
                        type="datetime-local"
                        name="startDate"
                        id="startDate"
                        value={session.time}
                        onChange={(e) => changeSession("time", e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Budapest X. district"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="experienceLevel"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Experience level
                  </label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      rows={4}
                      name="description"
                      id="description"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      value={session.description}
                      onChange={(e) =>
                        changeSession("description", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* End of form */}
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={history.goBack}
              >
                Cancel
              </button>
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </Card>
    </AppLayout>
  );
}
