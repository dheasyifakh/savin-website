import React from 'react'
import Link from 'next/link'
const Header = () => {
    const menuItems = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About Us', path: '/about' },
        { id: 3, name: 'Why Us', path: '/about' },
        { id: 4, name: 'Our Services', path: '/services' },
        { id: 5, name: 'Portfolio', path: '/' },
      ];
  return (
    <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img src='/assets/img/Savin-Logo-01-3.png'/>
            <div className="hidden w-full md:block md:w-auto">
                <ul className="flex justify-center items-center space-x-4">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                        <Link href={item.path }>
                            {item.name}
                        </Link>
                        </li>
                    ))}
                    <li>
                        <button style={{backgroundColor: '#D6AE4C'}} className='inline-block rounded-2xl border px-8 py-2 text-sm font-medium '>Contact Us</button>
                    </li>
                </ul>
            </div>
        </div>
   
  </nav>
  )
}

export default Header