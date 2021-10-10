import React from "react";
import AppLayout from "../../components/AppLayout";
import Actions from "./components/Actions";
import News from "./components/News";
import WelcomeCard from "./components/WelcomeCard";

export default function Home() {
  return (
    <AppLayout header="Home">
      <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <WelcomeCard />
          <div className="my-4">
            <Actions />
          </div>
        </div>
        <News />
      </div>
    </AppLayout>
  );
}
