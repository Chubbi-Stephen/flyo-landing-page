import React from 'react'
import Files from '../../Assets/images/icon-any-file.svg'
import Security from '../../Assets/images/icon-security.svg'
import Access from '../../Assets/images/icon-access-anywhere.svg'
import Collaboration from '../../Assets/images/icon-collaboration.svg'

const index = () => {
  return (
    <section className="w-full bg-dark-blue pb-16">
      <section className="features grid grid-cols-2 w-[70%] text-center m-auto gap-14">
        <div className="w-[70%] flex justify-center items-center flex-col m-auto">
          <img src={Access} alt="" />
          <h3>Access your files, anywhere</h3>
          <p>
            The ability to use your smart phone, tablet, or computer to access
            your account means your files follow you anywhere.
          </p>
        </div>
        <div className="w-[70%] flex justify-center items-center flex-col m-auto">
          <img src={Security} alt="" />
          <h3>Security you can trust</h3>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure files.
          </p>
        </div>
        <div className="w-[70%] flex justify-center items-center flex-col m-auto">
          <img src={Collaboration} alt="" />
          <h3>Real-time collaboration</h3>
          <p>
            Securely share files and folders with friends, family and colleagues
            for the collaboration. No email attachments required.
          </p>
        </div>
        <div className="w-[70%] flex justify-center items-center flex-col m-auto">
          <img src={Files} alt="" />
          <h3>Store any type of file</h3>
          <p>
            Whether you're sharing holidays photos or worh documents, Flyo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </section>
    </section>
  )
}

export default index
