import React from 'react'
import bigIcon from '../assets/big_icon.svg'

const CTA = () => {
  return (
    <section className="w-full py-32" style={{ background: 'linear-gradient(to bottom, white 50%, #1E1E1E 50%)' }}>
      <div className="w-full px-12 lg:px-24">
        <div className="bg-gray-100 rounded-[32px] px-12 lg:px-20 py-24 lg:py-32">
          <div className="flex flex-col items-start lg:items-start max-w-2xl">
            {/* Icon */}
            <div className="mb-8">
              <img src={bigIcon} alt="Setapp Icon" className="w-16 h-20" />
            </div>

            {/* Text Content */}
            <div className="mb-8">
              <h2 className="font-avenir font-bold text-gray-900 text-4xl lg:text-5xl leading-tight lg:whitespace-nowrap">
                Superpowers starting $9.99/month.
              </h2>
              <p className="font-avenir font-bold text-gray-900 text-4xl lg:text-5xl leading-tight">
                Free for 7 days.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="font-avenir font-medium text-white bg-gray-900 hover:bg-gray-800 px-8 py-4 rounded-lg text-[16px] transition-colors">
                Get started now
              </button>
              <button className="font-avenir font-medium text-gray-900 bg-transparent hover:bg-gray-200 border-2 border-gray-300 px-8 py-4 rounded-lg text-[16px] transition-colors">
                More about Setapp
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default CTA

