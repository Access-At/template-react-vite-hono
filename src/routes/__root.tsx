import * as React from "react";
import { Iroot } from "@/util/type";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<Iroot>()({
  component: () => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </React.Suspense>
  ),
});
