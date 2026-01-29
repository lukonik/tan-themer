import { Outlet, createRootRoute } from "@tanstack/react-router";
import * as React from "react";

import { ThemeProvider } from "tanstack-theme";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <div>Hello "__root"!</div>
        <Outlet />
      </ThemeProvider>
    </React.Fragment>
  );
}
