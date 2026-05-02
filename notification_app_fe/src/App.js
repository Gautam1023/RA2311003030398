import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get("http://localhost:5000/notifications");

      let notifications = res.data.notifications || [];

      const priority = { Placement: 3, Event: 2, Result: 1 };

      notifications.sort((a, b) => {
        if (priority[b.Type] !== priority[a.Type]) {
          return priority[b.Type] - priority[a.Type];
        }
        return new Date(b.Timestamp) - new Date(a.Timestamp);
      });

      setData(notifications);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [page]);

  const filtered =
    filter === "all"
      ? data
      : data.filter(
          (item) =>
            (item.Type || "").toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="container">
    <h1>Campus Notifications</h1>

    {/* Controls */}
    <div className="controls">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="Event">Event</option>
        <option value="Result">Result</option>
        <option value="Placement">Placement</option>
      </select>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          ⬅ Prev
        </button>
        <button onClick={() => setPage(page + 1)}>
          Next ➡
        </button>
      </div>
    </div>

    {/* Notifications */}
    <div className="grid">
      {filtered.map((item, index) => (
        <div
          key={item.ID || index}
          className={`card ${item.Type}`}
        >
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <span>{item.Timestamp}</span>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;