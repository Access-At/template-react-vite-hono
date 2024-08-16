import MainLayout from "@/layout/mainLayout";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});
