import { Iroot } from "@/util/type";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<Iroot>()({
  component: () => <Outlet />,
});
