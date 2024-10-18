import { USER_ROLE } from '@/contants/role';
import { DrawerItem, UserRole } from '@/types'; 
import {
    BaggageClaim,
    Store,
    UserRoundCog,
    Users,
    Utensils,
    CircleUserRound,
    KeyRound, 
    LayoutDashboard, 
    SquareMenu,
    CalendarClock
  } from "lucide-react";

export const drawerItems = (role: UserRole): DrawerItem[] => {
   const roleMenus: DrawerItem[] = [];

   const defaultMenus = [
      {
         title: 'Change Password',
         path: `${role}/change-password`,
         icon: KeyRound,
      }
     
   ];

   switch (role) {
      case USER_ROLE.SUPER_ADMIN:
         roleMenus.push(
            {
               title: 'Dashboard',
               path: `${role}`,
               icon: LayoutDashboard ,
            },
            {
               title: 'Orders',
               path: `${role}/orders-manage`,
               icon: BaggageClaim,
            },
            {
               title: 'Product',
               path: `${role}/product-manage`,
               icon: Utensils,
            },
            {
               title: 'Menu Item',
               path: `${role}/menu-item-manage`,
               icon: SquareMenu,
            },
            
            {
               title: 'Stores',
               path: `${role}/stores-manage`,
               icon: Store,
            },
            {
               title: 'Delivery Slot',
               path: `${role}/delivery-slot-manage`,
               icon: CalendarClock,
            },
            {
               title: 'Manage Customer',
               path: `${role}/customers-manage`,
               icon: Users,
            },
           
            {
               title: 'Manage Admins',
               path: `${role}/admins-manage`,
               icon: UserRoundCog,
            }, 
            {
               title: 'Profile',
               path: `${role}/profile`,
               icon: CircleUserRound ,
            },
         );
         break;

      case USER_ROLE.ADMIN:
         roleMenus.push(
            {
               title: 'Dashboard',
               path: `${role}`,
               icon: LayoutDashboard,
            },
            {
               title: 'Orders',
               path: `${role}/orders-manage`,
               icon: BaggageClaim,
            },
            {
               title: 'Product',
               path: `${role}/product-manage`,
               icon: Utensils,
            },
            {
               title: 'Menu Item',
               path: `${role}/menu-item-manage`,
               icon: SquareMenu,
            },
           
            {
               title: 'Profile',
               path: `${role}/profile`,
               icon: CircleUserRound ,
            },
            {
               title: 'Delivery Slot',
               path: `${role}/delivery-slot-manage`,
               icon: CalendarClock,
            },
         );
         break;
      default:
         break;
   }

   return [...roleMenus, ...defaultMenus];
};
