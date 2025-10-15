"use client";

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import BottomNavbar from "../components/BottomNavbar";
import PulseHeading from "../components/PulseHeading";
import PulseColumn from "../components/footer-components/PulseColumn";
import Footer from "../components/Footer";
import { useWebSocket } from "../hooks/useWebSocket";

type TabType = "newPairs" | "finalStretch" | "migrated";

const Pulse = () => {
  const { data, isLoading } = useWebSocket("wss://api.axiom.ashishmohapatra.in");
  const [activeTab, setActiveTab] = useState<TabType>("newPairs");

  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <BottomNavbar />
      <PulseHeading />

      <div className="lg:hidden mx-6 mb-4 flex gap-2 rounded-md p-1" role="tablist" aria-label="Trading pair categories">
        <button
          onClick={() => setActiveTab("newPairs")}
          className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "newPairs"
              ? "bg-[#323542] text-white"
              : "text-[#323542]"
          }`}
          role="tab"
          aria-selected={activeTab === "newPairs"}
          aria-controls="new-pairs-panel"
          id="new-pairs-tab"
        >
          New Pairs
          <span className="ml-2 text-xs opacity-70" aria-label={`${data?.newPairs?.length ?? 0} new pairs`}>
            {data?.newPairs?.length ?? 0}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("finalStretch")}
          className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "finalStretch"
              ? "bg-[#323542] text-white"
              : "text-[#323542]"
          }`}
          role="tab"
          aria-selected={activeTab === "finalStretch"}
          aria-controls="final-stretch-panel"
          id="final-stretch-tab"
        >
          Final Stretch
          <span className="ml-2 text-xs opacity-70" aria-label={`${data?.finalStretch?.length ?? 0} final stretch pairs`}>
            {data?.finalStretch?.length ?? 0}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("migrated")}
          className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "migrated"
              ? "bg-[#323542] text-white"
              : "text-[#323542]"
          }`}
          role="tab"
          aria-selected={activeTab === "migrated"}
          aria-controls="migrated-panel"
          id="migrated-tab"
        >
          Migrated
          <span className="ml-2 text-xs opacity-70" aria-label={`${data?.migrated?.length ?? 0} migrated pairs`}>
            {data?.migrated?.length ?? 0}
          </span>
        </button>
      </div>

      <div className="px-4 py-2 flex flex-col lg:flex-row gap-4 bg-[#101114] mx-6 mb-4 rounded-md border border-[#22242D] flex-1 min-h-0">
        <div
          className={`${activeTab === "newPairs" ? "flex" : "hidden"} lg:flex flex-1 min-w-0`}
          role="tabpanel"
          id="new-pairs-panel"
          aria-labelledby="new-pairs-tab"
          aria-hidden={activeTab !== "newPairs"}
        >
          <PulseColumn
            title="New Pairs"
            count={data?.newPairs?.length ?? 0}
            pairs={data?.newPairs ?? []}
            isConnected={isLoading}
            pairType="newPairs"
          />
        </div>
        <div
          className={`${activeTab === "finalStretch" ? "flex" : "hidden"} lg:flex flex-1 min-w-0`}
          role="tabpanel"
          id="final-stretch-panel"
          aria-labelledby="final-stretch-tab"
          aria-hidden={activeTab !== "finalStretch"}
        >
          <PulseColumn
            title="Final Stretch"
            count={data?.finalStretch?.length ?? 0}
            pairs={data?.finalStretch ?? []}
            isConnected={isLoading}
            pairType="finalStretch"
          />
        </div>
        <div
          className={`${activeTab === "migrated" ? "flex" : "hidden"} lg:flex flex-1 min-w-0`}
          role="tabpanel"
          id="migrated-panel"
          aria-labelledby="migrated-tab"
          aria-hidden={activeTab !== "migrated"}
        >
          <PulseColumn
            title="Migrated"
            count={data?.migrated?.length ?? 0}
            pairs={data?.migrated ?? []}
            isConnected={isLoading}
            pairType="migrated"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pulse;
