import React from 'react';

import TicketCard from './TicketCard';

const tickets = [
  { id: '#1001', title: "Login Issues - Can't Access Account", description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...", status: 'Open', priority: 'HIGH PRIORITY', date: '1/15/2024', customer: 'John Smith' },
  { id: '#1002', title: 'Payment Failed - Card Declined', description: 'Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.', status: 'Open', priority: 'HIGH PRIORITY', date: '1/16/2024', customer: 'Sarah Johnson' },
  { id: '#1003', title: 'Unable to Download Invoice', description: 'Customer cannot download their January invoice from the billing section. The download button is...', status: 'In-Progress', priority: 'MEDIUM PRIORITY', date: '1/17/2024', customer: 'Michael Brown' },
  { id: '#1004', title: 'Incorrect Billing Address', description: "Customer's billing address shows a different city. They updated it but it still displays the old one.", status: 'Open', priority: 'LOW PRIORITY', date: '1/18/2024', customer: 'Emily Davis' },
  { id: '#1005', title: 'App Crash on Launch', description: 'Customer reports that the mobile app crashes immediately upon opening on Android 13.', status: 'Open', priority: 'HIGH PRIORITY', date: '1/19/2024', customer: 'David Wilson' },
  { id: '#1006', title: 'Refund Not Processed', description: 'Customer requested a refund two weeks ago but has not received the amount yet.', status: 'In-Progress', priority: 'MEDIUM PRIORITY', date: '1/20/2024', customer: 'Sophia Taylor' },
];



const TicketsDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Ticket List */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-slate-800 mb-6">Customer Tickets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map((ticket, index) => (
              <TicketCard key={index} ticket={ticket} />
            ))}
          </div>
        </div>

        {/* Task Status */}
        <div className="w-full lg:w-80 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Task Status</h2>
            <p className="text-gray-500 text-sm">Select a ticket to add to Task Status</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Resolved Task</h2>
            <p className="text-gray-400 text-sm italic">No resolved tasks yet.</p>
          </section>
        </div>
        
      </div>
    </div>
  );
};

export default TicketsDashboard;