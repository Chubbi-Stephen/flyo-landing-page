import React from 'react'
import Satish from '../../Assets/images/profile-1.jpg'
import Bruce from '../../Assets/images/profile-2.jpg'
import Ivy from '../../Assets/images/profile-3.jpg'

const index = () => {
  return (
    <section className="w-full bg-dark-blue py-36">
      <article className="grid testimonials grid-cols-3 w-[75%] gap-14 m-auto px-2 py-12">
        <div className="card">
          <p>
            Flyo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <br />
          <div className="flex">
            <img src={Satish} alt="" className="w-14 rounded-full" />
            <div className="ml-4">
              <h3 className="text-white font-bold">Satish Patel</h3>
              <span className="text-xs">Founder & CEO, Wadala</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            Flyo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <br />
          <div className="flex">
            <img src={Bruce} alt="" className="w-14 rounded-full" />
            <div className="ml-4">
              <h3 className="text-white font-bold">Bruce Mckenzie</h3>
              <span className="text-xs">Founder & CEO, Hudiza</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            Flyo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <br />
          <div className="flex">
            <img src={Ivy} alt="" className="w-14 rounded-full" />
            <div className="ml-4">
              <h3 className="text-white font-bold">Iva Boyd</h3>
              <span className="text-xs">Founder & CEO, Palumbi</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default index
