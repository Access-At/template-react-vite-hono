import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
