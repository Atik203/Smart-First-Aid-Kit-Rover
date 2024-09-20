import moment from "moment";
import { useEffect, useState } from "react";
import { fetchDataAndUpdate } from "../firebase/firebaseService";

const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [newData, setNewData] = useState<any>(null);

  useEffect(() => {
    fetchDataAndUpdate(setData, setNewData);
  }, []);

  useEffect(() => {
    if (newData) {
      setData((prevData) => {
        const updatedData = [...prevData, newData];
        if (updatedData.length > 10) {
          updatedData.shift(); // Remove the oldest entry if more than 10
        }
        return updatedData;
      });
    }
  }, [newData]);

  return (
    <div className="mx-auto my-20 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Your Health Info:</h2>
      {newData && (
        <div className="stats shadow ">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Heart Rate</div>
            <div className="stat-value">{newData.bpm}</div>
            <div className="stat-desc">Latest BPM reading</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Humidity</div>
            <div className="stat-value">{newData.humidity}%</div>
            <div className="stat-desc">Latest Humidity reading</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Temperature</div>
            <div className="stat-value">{newData.temperature}°C</div>
            <div className="stat-desc">Latest Temperature reading</div>
          </div>
        </div>
      )}

      <h2 className="text-xl font-semibold mt-8 mb-4">Your Health History:</h2>

      <div className="overflow-x-auto my-10">
        <table className="table w-full">
          <thead className="text-semibold text-lg">
            <tr>
              <th></th>
              <th>BPM</th>
              <th>Humidity</th>
              <th>Temperature</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody className="text-base">
            {data.map((item, index) => (
              <tr
                key={item.timestamp}
                className={index % 2 === 0 ? "hover" : ""}
              >
                <th>{index + 1}</th>
                <td>{item.bpm}</td>
                <td>{item.humidity}%</td>
                <td>{item.temperature}°C</td>
                <td>{moment.unix(item.timestamp).format("LLL")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
