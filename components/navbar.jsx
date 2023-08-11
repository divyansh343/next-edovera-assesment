import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTelegram } from 'react-icons/fa';


const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/">
            <div className="btn btn-ghost normal-case text-lg lg:text-lg font-semibold tracking-wide">
              <span className='mx-1'>
                {/* Crypto */}
                {/* <Image src={power} height={25} width={25} alt="" /> */}
                </span>
              {/* {isMobile ? "/" : "Suprr.link/"} */}

              <span className='text-primary pl-1 tracking-wide'> Crypto k🔺</span>
              <span className='hidden md:block mx-[2px] text-primary saturate-150 font-medium tracking-wide'>
                {/* <TextTransition springConfig={presets.gentle}>
                  {"/" + TEXTS[index % TEXTS.length]}
                </TextTransition> */}
              </span>

            </div>
          </Link>
        </div>
        <div className="navbar-end">
        
            <div className="btn font-normal text-base btn-primary btn-sm normal-case mx-1">
            <span className={`px-1 inline-block text-blue-500  `}><FaTelegram /></span>
              Join Now</div>
          {/* <Link href="/register">
            <button className="btn font-normal text-base btn-primary btn-sm normal-case">Sign up</button>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Navbar