import React from 'react'

const Hero = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-20 pt-20" style={{backgroundImage: 'url(/assets/img/Feature-Graphic.jpg)', backgroundRepeat: "no-repeat", backgroundSize:'cover'}}>
        <div className="grid grid-cols-3 gap-12 sm:grid-cols-6 md:grid-cols-3">
            <div className="flex justify-end">
                <img src='/assets/img/kiri.png'/>
            </div>
            <div className="mt-40 md:mt-40 sm:mt-0">
                <img src='/assets/img/tengah.png'/>
            </div>
            <div className="">
                <img src='/assets/img/kanan.png'/>
            </div>
        </div>
    </div>
  )
}

export default Hero