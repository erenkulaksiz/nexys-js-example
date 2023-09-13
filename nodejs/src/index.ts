import nexys from "./nexys.js";

// Initialize nexys
nexys.init();

// Subscribe to log.add event
nexys.Events.subscribe("log.add", (data) => {
  console.log("log added!", data);
});

// Subscribe to request.error event
nexys.Events.subscribe("request.error", (data) => {
  console.log("request error!", data);
});

function sum(a: number, b: number): number {
  // Add log to the log pool
  nexys.log({ type: "sum", a, b });
  // Send a forced request to the server
  nexys.forceRequest();
  return a + b;
}

sum(5, 4);

// Running this code will add log to the log pool.
// This code will not going to send a request to the server.

// To send a request to the server, you have these options:
// - nexys.forceRequest(); - https://docs.nexys.app/functions/force-request
// - logPoolSize - https://docs.nexys.app/configuration/logpool-size
// - sendAllOnType - https://docs.nexys.app/configuration/send-all-on-type
