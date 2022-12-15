import React from 'react'
import introBg from '../../Assets/images/illustration-intro.png'
import Button from '../button/Button'

const index = () => {
  return (
    <div className="w-full intro">
      <img src={introBg} alt="introBg" className="w-2/5 m-auto" />
      <section className="m-auto intro-text w-2/5 text-center">
        <h1 className="text-4xl font-bold my-10 text-white">
          All your files in one secure location,
          <br /> accessible anywhere.
        </h1>
        <p className=" text-xl text-white">
          Flyo storea all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button />
      </section>
    </div>
  )
}

export default index
