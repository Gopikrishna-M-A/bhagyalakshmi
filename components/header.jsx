'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Cuboid, Menu, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch"
import ScreenSizeIndicator from './ScreenSizeIndicator';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    // { name: 'Our Team', href: '/our-team' },
    // { name: 'Community', href: '/community' },
  ];

  return (
    <header className="p-4 bg-[#f7f7f5] mx-auto w-full">
      <div className="container mx-auto flex justify-between items-center">
      {/* <ScreenSizeIndicator /> */}
        <Link href="/" className="md:text-2xl font-bold flex gap-1 items-center uppercase">
        <Cuboid  className='md:w-10 md:h-10'/>
        BLA Builders
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="bg-white text-gray-600 font-medium border rounded-full text-sm px-2 py-1 hover:text-gray-900">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch className='opacity-0 cursor-none'/>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className='bg-white'>
            <nav className="flex flex-col space-y-4 mt-8 ">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}