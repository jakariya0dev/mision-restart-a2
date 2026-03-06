import React from 'react'
import { Calendar } from 'lucide-react';
const TicketCard = ({ ticket, clickHandler }) => {
  const statusStyles = ticket.status === 'Open' 
    ? 'bg-green-100 text-green-700' 
    : 'bg-yellow-100 text-yellow-700';

  const priorityStyles = ticket.priority.includes('HIGH') 
    ? 'text-red-500' 
    : ticket.priority.includes('MEDIUM') ? 'text-orange-400' : 'text-green-500';

  return (
    <div onClick={() => clickHandler(ticket.id)} className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-800 text-lg leading-tight flex-1 pr-4">{ticket.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${statusStyles}`}>
          <span className="w-2 h-2 rounded-full bg-current"></span>
          {ticket.status}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-6 line-clamp-2">{ticket.description}</p>
      
      <div className="flex justify-between items-center text-[11px] font-bold">
        <div className="flex items-center gap-3">
          <span className="text-gray-400">{ticket.id}</span>
          <span className={priorityStyles}>{ticket.priority}</span>
        </div>
        <div className="flex items-center gap-4 text-gray-500 font-medium">
          <span className="flex items-center gap-1">{ticket.customer}</span>
          <span className="flex items-center gap-1"><Calendar size={14} /> {ticket.date}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard
