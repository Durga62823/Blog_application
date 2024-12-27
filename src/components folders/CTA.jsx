import React from 'react';

function CTA() {
  return (
    <>
      <svg className='w-full h-auto ' viewBox="0 0 2160 263" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Wave" fill-rule="evenodd" clip-rule="evenodd" d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z" fill="#0D2436" />
      </svg>
      <section className='relative bg-[#0D2436]   px-5'>
        <div className='container grid grid-cols-12 mx-auto md:pb-20'>
          <div className='col-span-12 p-4'>
            <h2 className='font-roboto font-bold text-2xl text-white md:text-4xl'>
              Get our stories delivered From us to your inbox weekly.
            </h2>
            <div className='w-full max-w-[494px] mt-12 space-y-2 mx-auto md:'>
             <div className='md:flex '>
             <input className='h-14 w-full rounded-xl text-xl placeholder:pl-2  w-min-64  indent-6' placeholder='Your Email' type='text' />
             <button className='w-full h-12 rounded-xl text-xl font-opensans bg-green-600 hover:text-green-500 hover:bg-black hover:transition-all '>Get started</button>
             </div>
              <div className="font-opensans text-[#5A7184]">
                <p>
                  <span className="font-bold italic text-[#B3BAC5] pr-1">Get a response tomorrow</span>   if you submit by 9pm today. If we received after 9pm will get a response the following day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA;