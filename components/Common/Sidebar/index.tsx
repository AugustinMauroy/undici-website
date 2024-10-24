'use client';
import Link from 'next/link';
import classNames from 'classnames';
import { XIcon, MenuIcon } from 'lucide-react';
import { useState } from 'react';
import type { FC } from 'react';

type SidebarItem = {
  label: string;
  link: string;
};

type SidebarItemGroup = {
  label: string;
  items: SidebarItem[];
};

type SidebarProps = {
  items: SidebarItem[] | SidebarItemGroup[];
};

const Sidebar: FC<SidebarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 rounded-md bg-gray-200 p-2 md:hidden"
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </button>
      <div
        className={classNames(
          'fixed right-0 top-0 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <ul className="p-4">
          {items.map((item, index) => (
            <li key={index} className="mb-4">
              {'link' in item ? (
                <Link
                  href={item.link}
                  className="text-blue-500 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <span>{item.label}</span>
                  <ul>
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="ml-4">
                        <Link
                          href={subItem.link}
                          className="text-blue-500 hover:underline"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
