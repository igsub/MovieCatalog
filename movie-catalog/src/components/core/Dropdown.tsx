import { Fragment } from "react";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";

export interface IDropdownOption {
  label: string
  active: boolean
  id: number
}

interface IDropdownSimple {
  options: IDropdownOption[]
  className: string;
}

export default function DropdownsSimple({ className, options }: IDropdownSimple) {
  return (
    <>
      <div className={`flex justify-end ${className}`}>
        {/* Dropdown Container */}
        <Menu as="div" className="relative inline-block">
          {/* Dropdown Toggle Button */}
          <Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-800 bg-gray-800 text-white hover:text-white hover:bg-gray-700 hover:border-gray-700 focus:ring focus:ring-opacity-50">
            <span>Genre</span>
            <svg className="hi-solid hi-chevron-down inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </Menu.Button>
          {/* END Dropdown Toggle Button */}

          {/* Dropdown */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="transform opacity-0 scale-75"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-75"
          >
            <Menu.Items className="absolute left-0 origin-top-right mt-2 w-48 shadow-xl rounded z-50">
              <div className="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100">
                <div className="p-2 space-y-1">
                  {options.map(o => (
                    <Menu.Item key={o.label}>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 ${
                            active ? "text-gray-700 bg-gray-100" : "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                          }`}
                        >
                          <span>{o.label}</span>
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                  {/* <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 ${
                          active ? "text-gray-700 bg-gray-100" : "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                        }`}
                      >
                        <span>Profile</span>
                      </a>
                    )}
                  </Menu.Item> */}
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* END Dropdown Container */}
      </div>
    </>
  )
}