import { Sidebar } from "./Sidebar";
import { UserNav } from "./UserNav";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
              <div className="mr-4 hidden md:flex">
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  {/* Navigation items can be added here if needed */}
                </nav>
              </div>
              <UserNav />
            </div>
          </header>
          <main className="container py-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}