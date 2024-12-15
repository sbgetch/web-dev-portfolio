import { Button } from "@/components/ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import Socials from "./Socials";

export default function Navbar() {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contactme" },
  ];

  // Function to scroll with offset
  const scrollToSection = (href, offsets = 0) => {
    const section = document.querySelector(href);
    const offset = offsets; // You can adjust this value based on your header height
    window.scrollTo({
      top: section.offsetTop - offset, // Adjust the scroll position with the offset
      behavior: "smooth",
    });
  };

  return (
    <Disclosure
      as="nav"
      className="flex flex-col px-2 py-4 bg-blue-800 rounded-xl mx-4 mt-4 lg:mx-20"
    >
      <div className="flex items-center justify-between bg-blue-800 rounded-xl">
        <div className="flex-1">
          <div className="inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden md:ml-2 md:flex">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="text-white text-lg px-2 lg:px-4"
                  onClick={() => {
                    scrollToSection(item.href); // Use custom scroll function
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex text-center items-center justify-center">
          <img
            src="/gLogo.svg"
            alt="Site Logo"
            className="h-8 max-h-16 w-auto transition-transform duration-300 hover:scale-105 md:scale-125"
          />
        </div>
        <Socials />
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              aria-current={undefined}
              className="text-white text-center hover:bg-white hover:text-black block rounded-md px-3 py-2 text-base font-medium"
              onClick={(e) => {
                e.stopPropagation(); // Prevent panel from closing
                scrollToSection(item.href, 150); // Use custom scroll function
              }}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
