import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "ImSoftware",
  webDir: "dist",
  server: {
    cleartext: true,
    hostname: "localhost",
    allowNavigation: ["localhost", "capacitor://localhost", "http://localhost"],
  },
};

export default config;
