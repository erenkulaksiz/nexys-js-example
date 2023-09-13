import nexys from "./nexys.js";

nexys.init();

function sum(a: number, b: number): number {
  nexys.log({ type: "sum", a, b });
  console.log("logged in nexys.");
  console.log("nexys.getLogPoolLogs();", nexys.getLogPoolLogs());
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
