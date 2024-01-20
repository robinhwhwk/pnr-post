import './assets/tailwind.css'
import Logo from './assets/images/logo512.png'
import Avatar from './assets/images/avatar.png'
import { SearchIcon, BellIcon, ChatIcon, PlusIcon, ChevronDownIcon, UserIcon, LoginIcon } from '@heroicons/react/outline'
import Button from './Button'
import { useEffect, useRef, useState } from 'react'

function Header() {
    const [userDropdownVisibilityClass, setuserDropdownVisibilityClass] = useState('hidden');
    function useUserDropdown(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setuserDropdownVisibilityClass('hidden')
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        }, [ref])
    }
    const userDropdownRef = useRef(null);
    useUserDropdown(userDropdownRef);
    function toggleUserDropdown() {
        if (userDropdownVisibilityClass === 'hidden') {
            setuserDropdownVisibilityClass('block')
        }
        else {
            setuserDropdownVisibilityClass('hidden')
        }
    }
    return (
        <header className='w-full bg-dark p-2'>
            <div className="flex mx-4 relative">
            <img src={Logo} alt="" className='w-8 h-8 mr-4'/>
            <form action="" className='bg-dark-brighter px-3 flex rounded-md border border-gray-700 mx-4 flex-grow'>
                <SearchIcon className="text-gray-300 h-6 w-6 mt-1"/>
                <input type="text" className='bg-dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white' placeholder='Search'/>
            </form>
            
            {/* <button className='px-2 py-1'>
                <ChatIcon className="text-gray-400 w-6 h-6 m-1 mx-2"></ChatIcon>
                </button>
            <button className='px-2 py-1'>
                <BellIcon className='text-gray-400 w-6 h-6 m-1 mx-2'></BellIcon>
                </button>
            <button className='px-2 py-1'>
                <PlusIcon className='text-gray-400 w-6 h-6 m-1 mx-2'></PlusIcon>
            </button> */}
            <div className='mx-2 hidden sm:block'>
                <Button outline className="mr-1">Log In</Button>
                <Button className="">Sign Up</Button>
            </div>
                <button className='rounded-md flex ml-4 border border-gray-700' onClick={toggleUserDropdown} ref={userDropdownRef}>
                    <UserIcon className='w-6 h-6 m-1 text-gray-400'></UserIcon>
                    {/* <div className='bg-gray-600 w-8 h-8 rounded-md'> */}
                        {/* <img src={Avatar} alt="" className='block'/> */}
                        
                    {/* </div> */}
                
                    <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 m-1"></ChevronDownIcon>
                </button>
                <div className={"absolute right-0 top-8 bg-dark border border-gray-700 z-10 rounded-md text-gray-100 overflow-hidden "+ userDropdownVisibilityClass}>
                    <button className='flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm'>
                        <LoginIcon className='w-5 h-5 mr-2'></LoginIcon>
                        Log In / Sign Up
                    </button> 
                </div>
            </div>
      </header>
    )

}

export default Header;