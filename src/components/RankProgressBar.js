import React from 'react';
import { Trophy, TrendingUp, Flame } from 'lucide-react';

const RankProgressBar = ({ userProfile, rewards }) => {
  // Safety check - don't render if data isn't loaded
  if (!userProfile || !rewards || rewards.length === 0) {
    return (
      <div className="card">
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Loading...</h3>
            <p className="text-sm text-gray-600">Loading your progress data</p>
          </div>
        </div>
      </div>
    );
  }

  const currentRank = rewards.find(rank => rank.rank === userProfile.currentRank) || {
    rank: userProfile.currentRank || 'Bronze',
    description: 'Welcome to The PAC! Start your fitness journey.',
    reward: '5% off merchandise',
    level: 1,
    xpRequired: 0
  };
  const nextRank = rewards.find(rank => rank.level === (currentRank.level + 1));
  
  const progressPercentage = nextRank && userProfile.currentXP 
    ? Math.min(((userProfile.currentXP - currentRank.xpRequired) / (nextRank.xpRequired - currentRank.xpRequired)) * 100, 100)
    : 0;

  const getRankColor = (rankName) => {
    switch (rankName) {
      case 'Bronze':
        return 'rank-bronze';
      case 'Silver':
        return 'rank-silver';
      case 'Gold':
        return 'rank-gold';
      case 'Elite':
        return 'rank-elite';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
                     <div className={`w-12 h-12 ${getRankColor(userProfile.currentRank || 'Bronze')} rounded-full flex items-center justify-center`}>
             <Trophy className="w-6 h-6 text-white" />
           </div>
           <div>
             <h3 className="text-xl font-bold text-gray-900">{userProfile.currentRank || 'Bronze'}</h3>
             <p className="text-sm text-gray-600">{currentRank.description}</p>
           </div>
        </div>
                 <div className="text-right">
           <div className="text-2xl font-bold text-black">{userProfile.currentXP || 0}</div>
           <div className="text-sm text-gray-600">Total XP</div>
         </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress to {nextRank?.rank || 'Max Rank'}</span>
                     <span className="text-sm text-gray-600">
             {userProfile.currentXP || 0} / {nextRank?.xpRequired || (userProfile.currentXP || 0)} XP
           </span>
        </div>
                 <div className="w-full bg-gray-200 rounded-full h-3">
           <div
             className="bg-gradient-to-r from-black to-gray-800 h-3 rounded-full transition-all duration-500 ease-out"
             style={{ width: `${Math.min(progressPercentage, 100)}%` }}
           />
         </div>
      </div>

             {/* Current Reward */}
       <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-4">
         <div className="flex items-center space-x-2 mb-2">
           <TrendingUp className="w-5 h-5 text-black" />
           <span className="font-semibold text-gray-800">Current Reward</span>
         </div>
         <p className="text-gray-700">{currentRank.reward}</p>
       </div>

      {/* Streak */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Flame className="w-5 h-5 text-orange-500" />
          <span className="text-sm text-gray-600">Current Streak</span>
        </div>
                 <div className="text-lg font-bold text-black">{userProfile.streak || 0} days</div>
      </div>

      {/* Next Rank Preview */}
      {nextRank && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-600">Next Rank: </span>
              <span className="font-semibold text-gray-900">{nextRank.rank}</span>
            </div>
                         <div className="text-sm text-gray-600">
               {nextRank.xpRequired - (userProfile.currentXP || 0)} XP needed
             </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">{nextRank.reward}</p>
        </div>
      )}
    </div>
  );
};

export default RankProgressBar;
