import { ApplicationInsights } from "@microsoft/applicationinsights-web";

export function registerAppInsights() {
  const appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: "b9c159f8-e716-4e60-b2c3-52ca0b96f05e"
    }
  });
  appInsights.loadAppInsights();
}
