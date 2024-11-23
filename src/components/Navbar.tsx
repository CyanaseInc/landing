import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";

import LogoIcon from "../assets/logh.png";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Investment products",
  },
  {
    href: "/sector",
    label: "Sectors",
  },

  {
    href: "/api",
    label: "API",
  },

  {
    href: "/contact",
    label: "Contact us",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky border-b-[1px] top-0 z-40 w-full ${
        isScrolled ? "bg-white" : "dark:bg-background"
      } transition-colors duration-300 dark:border-b-slate-700`}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img className="w-[120px]" src={LogoIcon} alt="Logo" />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">


            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    <img className="w-[120px]" src={LogoIcon} alt="Logo" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col items-start text-left gap-4 mt-6">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="font-bold text-lg text-[#252859] whitespace-nowrap rounded-md  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://auth.cyanase.com"
                    target="_blank"
                    className={`w-[130px] font-bold border ${buttonVariants({
                      variant: "secondary",
                    })} flex items-center gap-2`}
                  >
Create account
                    
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://auth.cyanase.com"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >

             Create account 
            </a>


          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};