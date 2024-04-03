"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { usePathname } from "next/navigation";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

import { ThemeSwitcher } from "./ThemeSwitcher";

const NavigationList = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/Users",
    name: "Users",
  },
  {
    path: "/Orders",
    name: "Orders",
  },
  {
    path: "/Stocks",
    name: "Stocks",
  },
];

export default function NavbarComponent() {
  const pathname = usePathname();

  return (
    <Navbar position="static" maxWidth="full">
      
      <NavbarContent className="hidden sm:flex" justify="end">
        {NavigationList.map((item) => (
          <NavbarItem key={item.path} isActive={pathname === item.path}>
            <Link href={item.path} aria-current="page">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
