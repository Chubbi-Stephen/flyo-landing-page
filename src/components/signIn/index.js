import React from 'react'
import Button from '../button/Button'

const index = () => {
  return (
    <div
      className="form w-[47%] rounded-lg px-16 py-6 m-auto flex flex-col items-center justify-center relative top-[50%]
    mx-auto  translate-y-[-50%]"
    >
      <h3 className="font-bold text-2xl pb-4 text-white">
        Get early access today
      </h3>
      <p className="text-[antiquewhite] text-center">
        {' '}
        It only takes minutes to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex items-center justify-center w-full">
        <input
          type="email"
          placeholder="email@example.com"
          className="m-6 w-[60%] py-2 px-6 rounded-full"
        />
        <Button />
      </div>
    </div>
  )
}

export default index
