import SidebarComponent from "@/components/Sidebar/SidebarComponent";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className="flex">
      <SidebarComponent />
      {children}
    </aside>
  );
}
