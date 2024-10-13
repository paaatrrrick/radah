import React, { useState } from 'react'
import logo from '@/images/logo192.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { fireBaseAuth } from '@/helpers/firebase';
import { signOut } from "firebase/auth";
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import constants from '@/helpers/constants';

const navigation = [
  { name: 'Profile', href: constants.routes.profile },
]


type NavbarTypes = {
  profilePicture: string,
}

function Navbar({profilePicture} : NavbarTypes) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <a href={constants.routes.home} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src={logo} alt="" />
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item, index) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:items-center">
          <button className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" onClick={() => {signOut(fireBaseAuth)}}>
              <p>Logout</p>
          </button>
        {profilePicture && <img className="h-10 w-10 rounded-full ml-6" src={profilePicture}  alt="Profile Picture"/>}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href={constants.routes.home} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => {signOut(fireBaseAuth)}}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

interface NavLinkProps {
  name: string,
  pathEnding: string,
}

const NavLink = ({name, pathEnding} : NavLinkProps) => {
  const currentUrl = usePathname();
  const lastTick = currentUrl.split('/').pop();
  if (lastTick !== pathEnding) {
    return (
      <Link href={pathEnding} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">{name}</Link>
    )
  }
  return (<Link href={pathEnding} className="inline-flex items-center border-b-2 border-brandColor px-1 pt-1 text-sm font-medium text-gray-900" aria-current="page">{name}</Link>)
}

export default Navbar;