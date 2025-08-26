import React, { useState, useEffect } from 'react';
import { Calendar, Target, Award, Flame, Users, Zap, Trophy } from 'lucide-react';
import RankProgressBar from '../components/RankProgressBar';
import SessionCard from '../components/SessionCard';
import rewardsData from '../data/rewards.json';
import sessionsData from '../data/sessions.json';

const Dashboard = () => {
  const [rewards, setRewards] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setRewards(rewardsData.rewards);
    setUserProfile(rewardsData.userProfile);
    setSessions(sessionsData.sessions);
  }, []);

  const upcomingSessions = sessions.slice(0, 3);
     const recentAchievements = [
     { id: 1, title: "7-Day Streak", description: "Completed workouts for 7 consecutive days", icon: Flame, color: "text-black" },
     { id: 2, title: "First CrossFit Session", description: "Completed your first CrossFit workout", icon: Zap, color: "text-gray-600" },
     { id: 3, title: "Silver Rank", description: "Reached Silver rank with 1000+ XP", icon: Award, color: "text-gray-400" }
   ];

     const stats = [
     { label: "Total Sessions", value: userProfile.totalSessions || 0, icon: Calendar, color: "text-black" },
     { label: "Current Streak", value: `${userProfile.streak || 0} days`, icon: Flame, color: "text-gray-600" },
     { label: "Favorite Workout", value: userProfile.favoriteWorkout || 'CrossFit', icon: Target, color: "text-gray-800" },
     { label: "Member Since", value: userProfile.joinDate ? new Date(userProfile.joinDate).toLocaleDateString() : 'N/A', icon: Users, color: "text-gray-700" }
   ];

  // Safety check - show loading state if data isn't loaded
  if (!userProfile || Object.keys(userProfile).length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Loading Dashboard...</h3>
          <p className="text-sm text-gray-600">Please wait while we load your data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="gradient-bg text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, Warrior!
              </h1>
              <p className="text-gray-100">
                Keep pushing your limits and achieving your fitness goals
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <div className="text-2xl font-bold">{userProfile.currentRank}</div>
                <div className="text-sm text-gray-300">Current Rank</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Rank Progress */}
            <RankProgressBar userProfile={userProfile} rewards={rewards} />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="card">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center ${stat.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Upcoming Sessions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Sessions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingSessions.map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Achievements */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Achievements</h3>
              <div className="space-y-4">
                {recentAchievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={achievement.id} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center ${achievement.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{achievement.title}</div>
                        <div className="text-sm text-gray-600">{achievement.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rewards Preview */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Available Rewards</h3>
              <div className="space-y-3">
                {rewards.map((rank) => (
                  <div key={rank.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{rank.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900">{rank.rank}</div>
                        <div className="text-sm text-gray-600">{rank.reward}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {rank.xpRequired} XP
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary">
                  Book Next Session
                </button>
                <button className="w-full btn-secondary">
                  View Progress History
                </button>
                <button className="w-full btn-secondary">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
