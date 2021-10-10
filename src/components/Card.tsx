import React from "react";

export default function Card({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div>{children}</div>
    </div>
  );
}
