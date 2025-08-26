import React from 'react';
import { Clock, Users, User, Zap } from 'lucide-react';

const SessionCard = ({ session }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'CrossFit':
        return <Zap className="w-4 h-4" />;
      case 'Open Gym':
        return <User className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  const isLowCapacity = session.spotsLeft <= 5;
  const isFull = session.spotsLeft === 0;

  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          {getTypeIcon(session.type)}
          <span className="font-semibold text-gray-900">{session.type}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(session.difficulty)}`}>
          {session.difficulty}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-lg font-bold text-gray-900">{session.time}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">
            {session.spotsLeft} of {session.capacity} spots available
          </span>
        </div>

        <div className="text-sm text-gray-600">
          <span className="font-medium">Coach:</span> {session.instructor}
        </div>

        {/* Capacity indicator */}
                 <div className="w-full bg-gray-200 rounded-full h-2">
           <div
             className={`h-2 rounded-full transition-all duration-300 ${
               isFull
                 ? 'bg-gray-800'
                 : isLowCapacity
                 ? 'bg-gray-600'
                 : 'bg-black'
             }`}
             style={{
               width: `${((session.capacity - session.spotsLeft) / session.capacity) * 100}%`
             }}
           />
         </div>

                 <button
           className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
             isFull
               ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
               : isLowCapacity
               ? 'bg-gray-600 hover:bg-gray-700 text-white'
               : 'btn-primary'
           }`}
           disabled={isFull}
         >
           {isFull ? 'Full' : isLowCapacity ? 'Only ' + session.spotsLeft + ' spots left!' : 'Join Session'}
         </button>
      </div>
    </div>
  );
};

export default SessionCard;
