// Create a Nexys instance
const nexys = new window.nexys("API_KEY", { appName: "APP_NAME", debug: true });

// Initialize Nexys
nexys.init();

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