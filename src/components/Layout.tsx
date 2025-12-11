// import { Footer } from '@/components/Footer'
"use client";
import React from "react";
// import Header from "@/Components/Header";
import Sidebar from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { Breadcrumbs } from "./breadcrumbs";

export function Layout({ children }: { children: React.ReactNode }) {
  // const [_, setSidebarOpen] = React.useState(false);

  // const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  return (
    <SidebarProvider>
      <div className="w-full">
        <Sidebar />

        {/* <Header toggleSidebar={toggleSidebar} /> */}
        <main className="flex-auto ">
          <SidebarTrigger />
          <Breadcrumbs />

          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </SidebarProvider>
  );
}
