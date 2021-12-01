import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import RenderIf from "../../../components/RenderIf";
import { classNames } from "../../../utils/classnames";

type Props = {
  title: string;
  type: string;
  creator: string;
  location: string;
  description: string;
  profilePicSrc: string;
  startTime: string;
};

export default function Session({
  title,
  type,
  creator,
  location,
  description,
  profilePicSrc,
  startTime,
}: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const toggle = () => setShowDetails(!showDetails);

  return (
    <div className="bg-gray-100 sm:rounded-md">
      <div
        className={classNames(
          showDetails ? "mb-1" : "mb-0",
          "bg-white shadow overflow-hidden sm:rounded-md"
        )}
      >
        <button onClick={toggle} className="block w-full hover:bg-gray-50">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-base font-medium text-indigo-600 truncate">
                {title}
              </p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {type}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  <UsersIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {creator}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <LocationMarkerIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {location}
                </p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <CalendarIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <p>
                  Starts at <time dateTime={startTime}>{startTime}</time>
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
      <RenderIf condition={showDetails}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex justify-between items-center mb-4">
              <div className="gap-4 flex items-center">
                <img
                  className="h-16 w-auto rounded-full"
                  src={profilePicSrc}
                  alt="Building Buddies"
                />
                <div>
                  <p className="text-sm text-gray-500">Created by:</p>
                  <p className="font-medium">{creator}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Location:</p>
                <p className="font-medium">{location}</p>
                <p className="text-gray-500">Starts at:</p>
                <p className="font-medium">
                  {new Date(startTime).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-500">Description:</p>
              <p className="font-medium">{description}</p>
            </div>
            <div className="flex justify-end gap-1">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </RenderIf>
    </div>
  );
}
