import React from 'react'
import logo from '../assets/logo.svg'
import leftFirst from '../assets/left_first.svg'
import leftC from '../assets/left_C.svg'
import leftPdf from '../assets/left_pdf.svg'
import leftTeamwork from '../assets/left_teamwork.svg'
import leftSecure from '../assets/left_secure.svg'
import rightFirst from '../assets/right_first.svg'
import plan from '../assets/plan.svg'
import thirdRight from '../assets/third_right.svg'
import rightFourth from '../assets/right_fourth.svg'
import rightFifth from '../assets/right_fith.svg'

const HeroSection = () => {
    return (
        <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex flex-col items-center justify-center py-20">
            
            <div className="absolute left-0 top-0 bottom-0 w-full hidden lg:block pointer-events-none">
                <div className="max-w-[1600px] mx-auto relative h-full px-12">
                    <img 
                        src={leftFirst} 
                        alt="" 
                        className="absolute top-[20%] left-[2%] w-auto h-[160px]"
                    />
                    <img 
                        src={leftC} 
                        alt="" 
                        className="absolute top-[30%] left-[0.5%] w-auto h-[60px]"
                    />
                    <img 
                        src={leftPdf} 
                        alt="" 
                        className="absolute top-[28%] left-[7%] w-auto h-[140px]"
                    />
                    <img 
                        src={leftTeamwork} 
                        alt="" 
                        className="absolute top-[45%] left-[1%] w-auto h-[120px]"
                    />
                    <img 
                        src={leftSecure} 
                        alt="" 
                        className="absolute top-[54%] left-[2%] w-auto h-[150px]"
                    />

                    {/* Right side decorative images */}
                    <img 
                        src={rightFirst} 
                        alt="" 
                        className="absolute top-[20%] right-[2%] w-auto h-[100px]"
                    />
                    <img 
                        src={plan} 
                        alt="" 
                        className="absolute top-[25%] right-[5%] w-auto h-[140px]"
                    />
                    <img 
                        src={thirdRight} 
                        alt="" 
                        className="absolute top-[40%] right-[1%] w-auto h-[150px]"
                    />
                    <img 
                        src={rightFourth} 
                        alt="" 
                        className="absolute top-[50%] right-[6%] w-auto h-[120px]"
                    />
                    <img 
                        src={rightFifth} 
                        alt="" 
                        className="absolute top-[58%] right-[2%] w-auto h-[100px]"
                    />
                </div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl">

                <div className="flex justify-center mb-12">
                    <div className="bg-black rounded-3xl p-8 shadow-2xl">
                        <img src={logo} alt="Logo" className="h-16 w-auto" />
                    </div>
                </div>

                <h1 className="font-avenir font-bold text-white text-6xl md:text-7xl lg:text-8xl leading-tight mb-8">
                    Dozens of apps.<br />
                    One subscription.<br />
                    <span className="text-6xl md:text-7xl lg:text-8xl">$9.99</span>
                </h1>

                <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
                    <button className="bg-white text-black font-avenir text-xl px-20 py-6 rounded-lg hover:bg-gray-100 transition-all shadow-lg">
                        Try free for 7 days
                    </button>
                    <div className="flex gap-4">
                        <button className="bg-white p-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg">
                            <svg className="w-11 h-11" viewBox="0 0 24 24" fill="black">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                        </button>
                        <button className="bg-white p-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg">
                            <svg className="w-11 h-11" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <p className="font-avenir text-white text-2xl opacity-80">
                    Power up your workflow with Setapp, a<br />
                    smart way to get apps.
                </p>

            </div>

            <div className="w-full px-12 lg:px-24 mt-20">
                <div className="h-px bg-white"></div>
            </div>

        </section>
    )
}

export default HeroSection