import Nexys from "nexys";

const nexys = new Nexys(process.env.NEXT_PUBLIC_NEXYS_API_KEY || "", {
  appName: process.env.NEXT_PUBLIC_NEXYS_APP_NAME || "",
  debug: true,
});

export default nexys;
