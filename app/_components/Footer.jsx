import React from 'react'

const Footer = () => {
  return (

<footer className="bg-neutral-900">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pt-8 text-white">
    <div className="grid grid-cols-6 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center text-white sm:justify-start">
          <img src='/assets/img/Savin-Logo-01-3.png'/>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <ul className="space-y-4 text-sm">
            <li>
              <a className="text-white transition hover:text-white/75" href="#">
                Home
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="#">
                About Us
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="#">
                Why Us
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="#"> Careers </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">

          <ul className="space-y-4 text-sm">
            <li>
              <a className="text-white transition hover:text-white/75" href="#">
                Our Services
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="#"> Portfolio </a>
            </li>

          
          </ul>
        </div>

       

       
      </div>
    </div>

  
  </div>
</footer>
  )
}

export default Footer