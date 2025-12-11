"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SECTIONS } from "@/config";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" className="text-sm">
      <SidebarHeader className="h-auto p-3 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold">
            RB
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold leading-tight">Rasil Baidar</p>
            <p className="text-xs text-muted-foreground">Fullstack Engineer</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarGroup className="p-1">
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {SECTIONS.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.id} className="relative">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full"
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -4 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                        />
                      )}
                    </AnimatePresence>
                    <motion.div
                      initial={false}
                      animate={{
                        x: isActive ? 2 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className="h-8 px-2 py-1 text-sm font-normal transition-colors duration-200"
                      >
                        <a href={item.url}>
                          {item.icon}
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </motion.div>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;
