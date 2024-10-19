/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';
import { DashboardNav } from './dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '../../../../constants/data'; 
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  role: string;
}

export function MobileSidebar({ className , role}: SidebarProps) {
  const [open, setOpen] = useState(false);

  
    // Filter the nav items based on the user's role
    const filteredNavItems = navItems.filter((item) => {
      if (item?.roles && !item.roles?.includes(role)) {
        return false; // If roles are defined and role is not in the list, don't show the item
      }
      return true;
    });
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="focus:outline-none">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Overview
              </h2>
              <div className="space-y-1">
              
                <DashboardNav
                  items={filteredNavItems}
                  isMobileNav={true}
                  setOpen={setOpen}
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}