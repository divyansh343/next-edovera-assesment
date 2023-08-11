import React from 'react'

const Digits = () => {
  return (
    <div className=' lg:mx-10 my-10'>
      <div className="bg-base-100 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold text-base-content sm:text-4xl">Gr<span className="text-base-400">o</span><span className="text-red-400">w</span> your portfolio with Proven ROI.
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">And we have the data to back it up</p>
          </div>
        </div>


        <div className="pt-10">
          <div className="relative bg-base-100">
            <div className="absolute inset-0 h-1/2 bg-base-100"></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                <dl className="rounded-lg bg-base-200 shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-base-300 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Total trades</dt><dd className="order-1 text-5xl font-extrabold text-base-600">43x</dd></div>
                  <div className="flex flex-col border-b border-t border-base-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"><dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Average ROI</dt><dd className="order-1 text-5xl font-extrabold text-base-600">850%</dd></div>
                  <div className="flex flex-col border-t border-base-100 p-6 text-center sm:border-0 sm:border-l"><dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Commulative ROI</dt><dd className="order-1 text-5xl font-extrabold text-base-600">1585%</dd></div>
                </dl></div>
            </div>
          </div>
        </div>
        <div className="bg-base-100 pb-12 sm:pb-16"></div>
      </div>
      

    </div>

  )
}

export default Digits