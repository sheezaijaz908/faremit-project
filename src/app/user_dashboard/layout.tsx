
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
