import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

import heroImg from '../../assets/images/hero.png'
import oneImg from '../../assets/images/portraits/one.jpeg'
import twoImg from '../../assets/images/portraits/two.jpeg'
import fourImg from '../../assets/images/portraits/four.jpeg'
import fiveImg from '../../assets/images/portraits/five.jpeg'
import sixImg from '../../assets/images/portraits/six.jpeg'
import sevenImg from '../../assets/images/portraits/seven.jpeg'
import eightImg from '../../assets/images/portraits/eight.jpeg'
import nineImg from '../../assets/images/portraits/nine.jpeg'
import { useState } from 'react'
import { FiZap } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="relative bg-base-100">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        {/* <Image height={500} width={500} priority className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" /> */}
      </div>
      <section className="relative py-12 sm:py-16 lg:pt-10 lg:pb-36">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">

                <h1 className="text-4xl mt-3 lg:mt-5 md:text-5xl tracking-wide font-black leading-tight md:leading-tight lg:text-6xl lg:leading-tight ">Crypto K🔺</h1>

                <h1 className="text-3xl my-4 md:text-5xl tracking-wide font-black leading-tight md:leading-tight lg:text-6xl lg:leading-tight ">
                  <ReactTypingEffect
                    typingDelay={400}
                    speed={60}
                    eraseSpeed={30}
                    eraseDelay={1800}
                    text={[
                      `Analysis`,
                      `Siganls`,
                      `Updates`,
                      `Airdrops`,
                    ]}
                  />
                </h1>

                {/* <h1 className="text-3xl md:text-5xl tracking-wide font-black leading-tight md:leading-tight lg:text-6xl lg:leading-tight ">🔺VIP Signals🔻</h1> */}

                <div className="mt-0 lg:mt-12 grid place-items-center lg:place-items-start">
                  <div className="avatar-group -space-x-3 ">
                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={twoImg} />
                      </div>
                    </div>

                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={sixImg} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={fourImg} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={fiveImg} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={sevenImg} />
                      </div>
                    </div>


                    <div className="avatar">
                      <div className="w-18">
                        <Image height={40} width={40} alt="" src={nineImg} />
                      </div>
                    </div>

                  </div>
                  <div className='grid justify-center'>
                    <div className="rating mt-10 mb-2 lg:mt-2">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                  </div>
                  {/* <p className="pt-6 text-sm text-primary-focus lg:mt-0 lg:ml-4 text-md font-pj">
                    More than
                    <span className="font-thin px-1 text-primary">3200 Already joined </span>
                  </p> */}
               
                </div>
                <p className="pt-8 text-sm text-primary-focus lg:mt-0 lg:ml-4 text-md  font-pj">
                    We are the #1 provider of Crypto Signals. 
                  </p>
                  <p className="pt-1 text-sm text-primary-focus lg:mt-0 lg:ml-4 text-md  font-pj">
                  Trusted by over 1,000+ traders.
                  </p>
              </div>

              <div className="mt-10 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-6">
                <Link href="/register">
                  <button className="btn mx-1 normal-case btn-primary lg:btn-base    text-base lg:text-lg  font-medium">
                    <span className={`px-1 inline-block text-blue-500 `}><FaTelegram /></span>
                    Join Telegram
                  </button>
                </Link>


              </div>
              {/* <div className='mt-8'>
              <div className="tabs tabs-boxed font-medium ">
                <p onClick={() => { setThemeChange("light") }} className={`tab  font-medium ${themeChange === "light" ? "tab-active" : null}`}>Light</p>
                <p onClick={() => { setThemeChange("night") }} className={`tab  font-medium ${themeChange === "night" ? "tab-active" : null}`}>Night</p>
                <p onClick={() => { setThemeChange("aqua") }}
                  className={`tab hidden md:flex
                  font-medium ${themeChange === "aqua" ? "tab-active" : null}`}>Aqua</p>
                <p onClick={() => { setThemeChange("forest") }} className={`tab hidden md:flex  font-medium ${themeChange === "forest" ? "tab-active" : null}`}>Forest</p>
                <p onClick={() => { setThemeChange("lofi") }} className={`tab  font-medium ${themeChange === "lofi" ? "tab-active" : null}`}>Classic</p>
                <p onClick={() => { setThemeChange("halloween") }} className={`tab  font-medium ${themeChange === "halloween" ? "tab-active" : null}`}>Halloween</p>
              </div>
            </div> */}
            </div>
            <div className="xl:col-span-3 shadow-lg">
              <Image height={800} width={1200} className="mx-auto drop-shadow-lg lg:px-20 border-sky-200 border-2  rounded-xl" src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero