import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-7 max-w-screen-xl mx-auto py-24 ">
      <div className="bg-gradient-to-br from-blue-400 to-pink-400 rounded-lg p-4 md:col-span-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Good Morning Champ!</h2>
          <p className="text-lg">Time to seize the day 🌞</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg p-4 md:col-span-3 md:row-span-2">
        <h2 className="text-2xl font-bold mb-2">Weekly Schedule</h2>
        {/* <table className="w-full">
          <thead>
            <tr>
              <th className="border-b-2 border-double py-2">Day</th>
              <th className="border-b-2 border-double py-2">Scheduled Exercise</th>
              <th className="border-b-2 border-double py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2">Monday</td>
              <td className="border-b py-2">Running</td>
              <td className="border-b py-2">6:00 AM</td>
            </tr>
            <tr>
              <td className="border-b py-2">Tuesday</td>
              <td className="border-b py-2">Swimming</td>
              <td className="border-b py-2">7:00 AM</td>
            </tr>
            <tr>
              <td className="border-b py-2">Wednesday</td>
              <td className="border-b py-2">Cycling</td>
              <td className="border-b py-2">6:30 AM</td>
            </tr>
            <tr>
              <td className="border-b py-2">Thursday</td>
              <td className="border-b py-2">Yoga</td>
              <td className="border-b py-2">6:00 AM</td>
            </tr>
            <tr>
              <td className="border-b py-2">Friday</td>
              <td className="border-b py-2">Weight Training</td>
              <td className="border-b py-2">8:00 AM</td>
            </tr>
          </tbody>
        </table> */}
      </div>

      <div className="bg-gradient-to-br from-green-300 to-green-500 rounded-lg p-4 md:col-span-2 md:row-span-2">
        <h2 className="text-2xl font-bold mb-2">Last 5 Exercises</h2>
        {/* <table className="w-full">
          <thead>
            <tr>
              <th className="border-b-2 border-double py-2">Exercise</th>
              <th className="border-b-2 border-double py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2">Running</td>
              <td className="border-b py-2">30 min</td>
            </tr>
            <tr>
              <td className="border-b py-2">Swimming</td>
              <td className="border-b py-2">45 min</td>
            </tr>
            <tr>
              <td className="border-b py-2">Cycling</td>
              <td className="border-b py-2">60 min</td>
            </tr>
            <tr>
              <td className="border-b py-2">Yoga</td>
              <td className="border-b py-2">40 min</td>
            </tr>
            <tr>
              <td className="border-b py-2">Weight Training</td>
              <td className="border-b py-2">50 min</td>
            </tr>
          </tbody>
        </table> */}
      </div>

      <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg p-4 md:col-span-1">
        <h2 className="text-2xl font-bold mb-2">Active Calories</h2>
        {/* <div className="grid grid-cols-2 gap-2">
          <div className="bg-white bg-opacity-25 rounded-full border-2 border-white flex items-center justify-center">
            <strong className="text-lg">Today:</strong> <span className="text-lg">500</span>
          </div>
          <div className="bg-white bg-opacity-25 rounded-full border-2 border-white flex items-center justify-center">
            <strong className="text-lg">This Week:</strong> <span className="text-lg">3500</span>
          </div>
          <div className="bg-white bg-opacity-25 rounded-full border-2 border-white flex items-center justify-center">
            <strong className="text-lg">This Month:</strong> <span className="text-lg">14000</span>
          </div>
        </div> */}
      </div>

      <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg p-4 md:col-span-1">
        <h2 className="text-2xl font-bold mb-2">Personal Bests</h2>
        {/* <ul>
          <li className="bg-white bg-opacity-75 rounded-lg font-semibold p-2">Fastest 5K Run: 22 min</li>
          <li className="bg-white bg-opacity-75 rounded-lg font-semibold p-2">Heaviest Deadlift: 250 lbs</li>
          <li className="bg-white bg-opacity-75 rounded-lg font-semibold p-2">Longest Plank: 3 min</li>
        </ul> */}
      </div>

      <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg p-4 md:col-span-1">
        <h2 className="text-2xl font-bold mb-2">Challenges</h2>
        {/* <ul>
          <li className="bg-white bg-opacity-75 rounded-lg font-semibold p-2">30-Day Running Streak</li>
          <li className="bg-white bg-opacity-75 rounded-lg font-semibold p-2">1000 Pushups in a Month</li>
          <li className="bg-white bg-opacity-75 rounded-lg font-semibold p-2">Swim 20km in a Month</li>
        </ul> */}
      </div>

      <div className="bg-gradient-to-br from-blue-400 to-pink-400 rounded-lg p-4 md:col-span-4">
        <h2 className="text-2xl font-bold mb-2">Friends Activity</h2>
        {/* <ul>
          <li className="bg-white bg-opacity-75 rounded-lg font-semibold p-2">Jane just set a new record in cycling: 30 miles!</li>
          <li className="bg-white bg-opacity-75 rounded-lg font-semibold p-2">Mike completed the 30-Day Running Streak Challenge!</li>
          <li className="bg-white bg-opacity-75 rounded-lg font-semibold p-2">Anna shared a new workout: 'Hill Sprints Interval'.</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Dashboard;
