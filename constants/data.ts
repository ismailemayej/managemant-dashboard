import { NavItem } from "../types";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
    roles: ["admin", "superadmin" ,"employee"],
  },
  {
    title: "Employee List",
    href: "/dashboard/employee-list",
    icon: "user",
    label: "employee",
    roles: ["admin", "superadmin"],
  },
  {
    title: "Product List",
    href: "/dashboard/product-list",
    icon: "product",
    label: "product",
    roles: ["admin", "superadmin", "employee"],
  },
  {
    title: "Online Delivery",
    href: "/dashboard/online-delevery",
    icon: "product",
    label: "product",
    roles: ["admin", "superadmin", "employee"],
  },
  {
    title: "Account",
    icon: "user",
    label: "account",
    roles: ["admin", "superadmin" , "employee"],
    children: [
      {
        title: "Profile",
        href: "/dashboard/profile",
        icon: "userPen",
        label: "profile",
      },
      {
        title: "Login",
        href: "/",
        icon: "login",
        label: "login",
      },
    ],
  },
  {
    title: "Admin",
    href: "/dashboard/all-admin",
    icon: "kanban",
    label: "kanban",
    roles: ["admin", "superadmin"],
  },
  {
    title: "Customer List",
    href: "/dashboard/customer-list",
    icon: "user2",
    label: "kanban",
    roles: ["admin", "superadmin", "employee"],
  },
  {
    title: "Marketing Strategy",
    href: "/dashboard/marketing-strategy",
    icon: "kanban",
    label: "kanban",
    roles: ["admin", "superadmin", "employee"],
  },
];
