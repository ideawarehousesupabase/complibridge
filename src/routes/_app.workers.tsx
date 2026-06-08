import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/workers")({
  component: WorkersLayout,
});

function WorkersLayout() {
  return <Outlet />;
}
