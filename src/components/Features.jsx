import React from 'react'
import mainImage from '../assets/main.svg'
import leftImage from '../assets/left.svg'
import rightImage from '../assets/right.svg'
import runner from '../assets/runner.svg'
import meter from '../assets/meter.svg'
import mac from '../assets/mac.svg'

const Features = () => {
  return (
    <section className="w-full bg-dark-bg">
      <div className="w-full px-12 lg:px-24">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <h2 className="font-avenir font-bold text-white text-4xl lg:text-5xl">
            What you get on Setapp.
          </h2>
          <p className="font-avenir font-medium text-white text-[16px] leading-[32px] max-w-md">
            With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="lg:col-span-2 bg-pink-300 rounded-3xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex  items-center gap-4 mb-6">
                <img src={mac} alt="" className='w-18 h-18 flex-shrink-0' />
                <div>
                  <h3 className="font-avenir font-bold text-gray-800 text-2xl mb-2">
                    Keep your Mac clean
                  </h3>
                  <p className="font-avenir font-normal text-gray-700 text-[18px] leading-[32px]">
                    Remove junk, scan for malware, wipe email attachments
                  </p>
                </div>
              </div>
              <img src={mainImage} alt="Keep your Mac clean" className="w-full h-auto" />
            </div>
          </div>

          <div className="bg-[#F5F0E8] rounded-3xl overflow-hidden">
            <div className="p-8">
              <img src={leftImage} alt="Write code" className="w-full h-auto mb-6" />
              <div className="flex flex-col gap-4 pl-8">
                <img src={runner} alt="" className='w-16 h-16 flex-shrink-0' />
                <div>
                  <h3 className="font-avenir font-bold text-gray-800 text-2xl mb-2">
                    Write code
                  </h3>
                  <p className="font-avenir font-normal text-gray-700 text-[18px] leading-[32px]">
                    Create applications in more than 25 languages
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#5B7C9E] rounded-3xl overflow-hidden">
            <div>
              <div className="flex flex-col p-14 items-start gap-4">
                <img src={meter} alt="" className='w-16 h-16' />
                <div>
                  <h3 className="font-avenir font-medium text-white text-4xl mb-2">
                    Join meetings in a click
                  </h3>
                  <p className="font-avenir font-normal text-white text-[18px] leading-[32px]">
                    Quickly access links to your meetings from menu bar
                  </p>
                </div>
              </div>
              <img src={rightImage} alt="Join meetings in a click" className="w-full h-auto" />
            </div>
          </div>

        </div>

        {/* View all superpowers button */}
        <div className="flex justify-center mt-16">
          <a href="#" className="inline-flex items-center gap-3 text-white font-avenir font-normal text-[18px] hover:opacity-70 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            View all superpowers
          </a>
        </div>

        {/* Your Setapp journey section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-20 mb-12 gap-8">
          <h2 className="font-avenir font-bold text-white text-4xl lg:text-5xl">
            Your Setapp journey.
          </h2>
          <p className="font-avenir font-normal text-white text-[16px] leading-[32px] max-w-md">
            Type in your task into Setapp search and get instant app recommendations.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white opacity-20"></div>

      </div>
    </section>
  )
}

export default Features

