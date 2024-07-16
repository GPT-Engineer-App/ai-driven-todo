import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Home, Wallet, QrCode, History, HelpCircle, Bell, Layers, ChevronDown } from "lucide-react";
import { NavLink, Outlet, Link } from "react-router-dom";
import ImageRenderer from '@/components/ImageRenderer';

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-primary px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          <div className="flex-1 flex justify-center items-center">
            <ImageRenderer
              url="https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-500-x-500-px.png?w=500"
              alt="PlataPay Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold text-primary-foreground ml-2">PlataPay</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <Bell className="h-5 w-5" />
            </Button>
            <UserDropdown />
          </div>
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
        <MobileFooter />
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <ImageRenderer
            url="https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-500-x-500-px.png?w=500"
            alt="PlataPay Logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold text-primary">PlataPay</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-base font-medium lg:px-4 gap-2">
          <SidebarNavLink to="/" icon={<Home className="h-6 w-6" />}>Home</SidebarNavLink>
          <SidebarNavLink to="/wallet" icon={<Wallet className="h-6 w-6" />}>E-Wallet</SidebarNavLink>
          <SidebarNavLink to="/qrcode" icon={<QrCode className="h-6 w-6" />}>QR Code</SidebarNavLink>
          <SidebarNavLink to="/history" icon={<History className="h-6 w-6" />}>Transactions</SidebarNavLink>
          <SidebarNavLink to="/help-support" icon={<HelpCircle className="h-6 w-6" />}>Support</SidebarNavLink>
          <SidebarDropdown
            icon={<Layers className="h-6 w-6" />}
            label="Requested Screens"
            items={[
              {
                label: "Account Registration",
                subitems: [
                  { to: "/create-account", label: "Create Account" },
                  { to: "/personal-information", label: "Personal Information" },
                  { to: "/home-address", label: "Home Address" },
                  { to: "/mpin-nomination", label: "MPIN Nomination" },
                  { to: "/otp-verification", label: "OTP Verification" },
                  { to: "/registration-success", label: "Registration Success" },
                ],
              },
              {
                label: "KYC Verification",
                subitems: [
                  { to: "/capture-signature", label: "Capture Specimen Signature" },
                  { to: "/capture-valid-id", label: "Capture Valid ID" },
                  { to: "/capture-five-angle-selfie", label: "Capture Five Angle Selfie" },
                ],
              },
              {
                label: "Account Management",
                subitems: [
                  { to: "/verify-account", label: "Account Verification Overview" },
                ],
              },
            ]}
          />
        </nav>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <ImageRenderer
            url="https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-500-x-500-px.png?w=500"
            alt="PlataPay Logo"
            width={32}
            height={32}
          />
          <span>PlataPay</span>
        </NavLink>
        <SidebarNavLink to="/" icon={<Home className="h-6 w-6" />}>Home</SidebarNavLink>
        <SidebarNavLink to="/wallet" icon={<Wallet className="h-6 w-6" />}>E-Wallet</SidebarNavLink>
        <SidebarNavLink to="/qrcode" icon={<QrCode className="h-6 w-6" />}>QR Code</SidebarNavLink>
        <SidebarNavLink to="/history" icon={<History className="h-6 w-6" />}>Transactions</SidebarNavLink>
        <SidebarNavLink to="/help-support" icon={<HelpCircle className="h-6 w-6" />}>Support</SidebarNavLink>
        <MobileSidebarDropdown
          icon={<Layers className="h-6 w-6" />}
          label="Requested Screens"
          items={[
            {
              label: "Account Registration",
              subitems: [
                { to: "/create-account", label: "Create Account" },
                { to: "/personal-information", label: "Personal Information" },
                { to: "/home-address", label: "Home Address" },
                { to: "/mpin-nomination", label: "MPIN Nomination" },
                { to: "/otp-verification", label: "OTP Verification" },
                { to: "/registration-success", label: "Registration Success" },
              ],
            },
            {
              label: "KYC Verification",
              subitems: [
                { to: "/capture-signature", label: "Capture Specimen Signature" },
                { to: "/capture-valid-id", label: "Capture Valid ID" },
                { to: "/capture-five-angle-selfie", label: "Capture Five Angle Selfie" },
              ],
            },
            {
              label: "Account Management",
              subitems: [
                { to: "/verify-account", label: "Account Verification Overview" },
              ],
            },
          ]}
        />
      </nav>
    </SheetContent>
  </Sheet>
);

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarNavLink = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-base font-semibold",
        isActive
          ? "text-primary bg-primary/10"
          : "text-gray-700 hover:text-primary hover:bg-primary/5"
      )
    }
  >
    {icon}
    {children}
  </NavLink>
);

const SidebarDropdown = ({ icon, label, items }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="w-full justify-start gap-3 font-semibold">
        {icon}
        {label}
        <ChevronDown className="ml-auto h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      {items.map((item, index) => (
        <SubmenuDialog key={index} item={item} />
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

const SubmenuDialog = ({ item }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="ghost" className="w-full justify-start">
        {item.label}
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{item.label}</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {item.subitems.map((subitem, subIndex) => (
          <Button key={subIndex} asChild variant="ghost">
            <Link to={subitem.to}>{subitem.label}</Link>
          </Button>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const MobileSidebarDropdown = ({ icon, label, items }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-3 font-semibold">
      {icon}
      {label}
    </div>
    {items.map((item, index) => (
      <MobileSubmenuDialog key={index} item={item} />
    ))}
  </div>
);

const MobileSubmenuDialog = ({ item }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="ghost" className="w-full justify-start text-sm">
        {item.label}
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{item.label}</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {item.subitems.map((subitem, subIndex) => (
          <Button key={subIndex} asChild variant="ghost">
            <Link to={subitem.to}>{subitem.label}</Link>
          </Button>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const MobileFooter = () => (
  <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-2">
    <nav className="flex justify-around items-center">
      <NavLink to="/" className="flex flex-col items-center p-2">
        <Home className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </NavLink>
      <NavLink to="/wallet" className="flex flex-col items-center p-2">
        <Wallet className="h-6 w-6" />
        <span className="sr-only">E-Wallet</span>
      </NavLink>
      <NavLink to="/qrcode" className="flex flex-col items-center p-2">
        <QrCode className="h-6 w-6" />
        <span className="sr-only">QR Code</span>
      </NavLink>
      <NavLink to="/history" className="flex flex-col items-center p-2">
        <History className="h-6 w-6" />
        <span className="sr-only">Transactions</span>
      </NavLink>
      <NavLink to="/help-support" className="flex flex-col items-center p-2">
        <HelpCircle className="h-6 w-6" />
        <span className="sr-only">Support</span>
      </NavLink>
    </nav>
  </footer>
);

export default Layout;