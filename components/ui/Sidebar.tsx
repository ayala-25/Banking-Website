'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Footer from './Footer';
import PlaidLink from './PlaidLink';


const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
    return (
      <section className="sidebar">
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="mb-12 cursor-pointer flex items-center gap-2"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Axis logo"
              className="w-6 h-6 max-xl:w-4 max-xl:h-4"
            />
            <h1 className="sidebar-logo">Axis</h1>
          </Link>
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link href={item.route} key={item.label} className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>

<div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
                
              </Link>
            );
          })}

          <PlaidLink user={user} />
        </nav>
        <Footer user={user}/>
      </section>
    );
  };
  

export default Sidebar;
