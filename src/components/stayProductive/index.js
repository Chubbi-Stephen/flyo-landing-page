import React from 'react'
import stayProductive from '../../Assets/images/illustration-stay-productive.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const index = () => {
  return (
    <section className="bg-dark-blue flex justify-center items-center">
      <section className="stayProductive bg-dark-blue flex justify-center items-center">
        <div className="p-8">
          <img src={stayProductive} alt="" className="w-[90%]" />
        </div>
        <div className="flex flex-col justify-center items-start p-8 w-[33%]">
          <h2 className="text-[2.2rem] font-bold text-white pb-4">
            Stay productive, wherever you are
          </h2>
          <p className="text-[antiquewhite] pb-4">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
            <br />
            Securely share files and folders with friends,family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <button
            type="button"
            className="border-b-[1px] border-teal-200 pb-1 flex items-center justify-center text-[hsl(198, 60%, 50%)] text-teal-200 text-[1.3rem]"
          >
            See how Flyo works{' '}
            <span className="px-2">
              <BsFillArrowRightCircleFill />
            </span>
          </button>
        </div>
      </section>
    </section>
  )
}

export default index
