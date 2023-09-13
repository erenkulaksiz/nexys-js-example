"use client";
import "./style.css";
import nexys from "./nexys";

export default function Home() {
  function onLog() {
    // Log a message.
    nexys.log("Test log");
  }

  function onErrorLog() {
    // Log an error.
    nexys.error({ message: "Test error log" });
  }

  function subscribe() {
    // Subscribe to log.add
    nexys.Events.subscribe("log.add", (data) => {
      console.log("log added!", data);
    });
  }

  function clearLogs() {
    // Clear logs and requests.
    nexys.clear();
  }

  // Read more about available functions: https://docs.nexys.app/category/functions

  return (
    <div className="container">
      <h1>Nexys JavaScript Example</h1>
      <div className="btn-container">
        <button onClick={clearLogs}>Clear</button>
        <button onClick={onLog}>Test log</button>
        <button onClick={onErrorLog}>Error Log</button>
        <button onClick={subscribe}>Subscribe to "log.add"</button>
      </div>
    </div>
  );
}
