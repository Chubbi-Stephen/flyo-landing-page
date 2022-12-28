import React from 'react'
import Logo from '../../Assets/images/logo.svg'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { TbBrandInstagram } from 'react-icons/tb'
import { MdLocationOn } from 'react-icons/md'
import { CgPhone } from 'react-icons/cg'
import { TfiEmail } from 'react-icons/tfi'

const index = () => {
  return (
    <section className="w-[75%] m-auto">
      <img src={Logo} alt="Logo.svg" className="w-5%" />
      <section className="flex justify-start items-start mx-4 py-[4rem] text-[antiquewhite]">
        <div className="flex items-start justify-start">
          <MdLocationOn />
          <p className="pl-8 w-full text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            cum, deserunt autem quibusdam molestiae quam.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col mx-20">
          <span className="flex items-center justify-start pb-4">
            <CgPhone />
            <p className="pl-4">+1-343-546-5678</p>
          </span>
          <span className="flex items-center justify-start">
            <TfiEmail />
            <p className="pl-4">example@tyla.com</p>
          </span>
        </div>
        <div className="mx-20 w-[30%]">
          <ul>
            <li className="pb-4">About us</li>
            <li className="pb-4">Jobs</li>
            <li className="pb-4">Press</li>
            <li className="pb-4">Blog</li>
          </ul>
        </div>
        <div className="mx-20 w-[30%]">
          <ul>
            <li className="pb-4">Contact us</li>
            <li className="pb-4">Terms</li>
            <li className="pb-4">Privacy</li>
          </ul>
        </div>
        <div className="flex justify-around items-center">
          <p className="px-2 text-3xl">
            <TiSocialFacebookCircular />
          </p>
          <p className="p-2 text-3xl">
            <AiFillTwitterCircle />
          </p>
          <p className="p-2 text-3xl">
            <TbBrandInstagram />
          </p>
        </div>
      </section>
    </section>
  )
}

export default index
