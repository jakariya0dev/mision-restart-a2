import { useState } from "react";
import StatCard from "./StatCard";
import Swal from "sweetalert2";

import {
  getTasksFromLocalStore,
  addTaskIntoLocalStore,
  addCompletedTaskIntoLocalStore,
} from "../utils.js/tasks";
import TicketCard from "./TicketCard";

const tickets = [
  {
    id: "#1001",
    title: "Login Issues - Can't Access Account",
    description:
      "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
    status: "Open",
    priority: "HIGH PRIORITY",
    date: "1/15/2024",
    customer: "John Smith",
  },
  {
    id: "#1002",
    title: "Payment Failed - Card Declined",
    description:
      "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
    status: "Open",
    priority: "HIGH PRIORITY",
    date: "1/16/2024",
    customer: "Sarah Johnson",
  },
  {
    id: "#1003",
    title: "Unable to Download Invoice",
    description:
      "Customer cannot download their January invoice from the billing section. The download button is...",
    status: "In-Progress",
    priority: "MEDIUM PRIORITY",
    date: "1/17/2024",
    customer: "Michael Brown",
  },
  {
    id: "#1004",
    title: "Incorrect Billing Address",
    description:
      "Customer's billing address shows a different city. They updated it but it still displays the old one.",
    status: "Open",
    priority: "LOW PRIORITY",
    date: "1/18/2024",
    customer: "Emily Davis",
  },
  {
    id: "#1005",
    title: "App Crash on Launch",
    description:
      "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
    status: "Open",
    priority: "HIGH PRIORITY",
    date: "1/19/2024",
    customer: "David Wilson",
  },
  {
    id: "#1006",
    title: "Refund Not Processed",
    description:
      "Customer requested a refund two weeks ago but has not received the amount yet.",
    status: "In-Progress",
    priority: "MEDIUM PRIORITY",
    date: "1/20/2024",
    customer: "Sophia Taylor",
  },
];

const TicketsDashboard = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedTicketForComplete, setSelectedTicketForComplete] =
    useState(null);
  let progressTasksId = getTasksFromLocalStore("in-progress");
  let completedTasks = getTasksFromLocalStore("completed");

  const handleTicketClicked = (id) => {
    if(progressTasksId.find((task) => task === id)) {
      Swal.fire({
        title: "Ticket Already Selected for In-Progress!",
        icon: "error",
        draggable: true,
        timer: 1500,
      })
      return;
    }
    setSelectedTicket(id);
    addTaskIntoLocalStore(id, "in-progress");
    Swal.fire({
      title: "Ticket Selected for In-Progress!",
      icon: "success",
      draggable: true,
      timer: 1500,
    });
  };

  const handleCompleteTicket = (id) => {
    setSelectedTicketForComplete(id);
    addCompletedTaskIntoLocalStore(id);
    Swal.fire({
      title: "Ticket Selected for In-Progress!",
      icon: "success",
      draggable: true,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <StatCard
          title="In-Progress"
          value={progressTasksId.length}
          bgColor="bg-gradient-to-r from-[#422AD5] to-[#DB00FF]"
        />
        <StatCard
          title="Resolved"
          value={completedTasks.length}
          bgColor="bg-gradient-to-r from-[#54CF68] to-[#00827A]"
        />
      </div>
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Ticket List */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">
              Customer Tickets
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tickets.map((ticket, index) => (
                <TicketCard
                  key={index}
                  ticket={ticket}
                  clickHandler={handleTicketClicked}
                />
              ))}
            </div>
          </div>

          {/* Task Status */}
          <div className="w-full lg:w-80 space-y-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Task Status
            </h2>
            {progressTasksId.length > 0 ? (
              <section>
                {progressTasksId.map((id, index) => (
                  <div key={index} className="p-3 shadow-md mb-4 rounded">
                    <p className="mb-2">
                      {tickets.find((ticket) => ticket.id === id).title}
                    </p>
                    <button
                      className="bg-green-600 text-white rounded py-2 block w-full"
                      onClick={() => handleCompleteTicket(id)}
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </section>
            ) : (
              <section>
                <p className="text-gray-500 text-sm">
                  Select a ticket to add to Task Status
                </p>
              </section>
            )}

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                Resolved Task
              </h2>
              {completedTasks.length > 0 ? (
                <section>
                  {completedTasks.map((id, index) => (
                    <div key={index} className="p-4 bg-slate-100 mb-4 rounded">
                      <p>{tickets.find((ticket) => ticket.id === id).title}</p>
                    </div>
                  ))}
                </section>
              ) : (
                <section>
                  <p className="text-gray-500 text-sm">
                    No completed tasks yet
                  </p>
                </section>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsDashboard;
