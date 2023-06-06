import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen min-w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        {/* navbar */}
        <nav className='bg-white p-4 flex justify-between'>
          <a href='' className='font-bold text-gray-700 text-2xl'>
            OpenTable
          </a>
          <div className='flex align-center gap-5px'>
            <button className='bg-blue-500 p-1 px-4 rounded mr-3 text-white'>
              Sign in
            </button>
            <button className='border p-1 px-4 rounded'>Sign up</button>
          </div>
        </nav>
        {/* Header */}
        <main className='bg-gradient-to-r from-[#0f1f47] to-[#5f6984] border h-64 p-2'>
          <div className='mt-10 text-center'>
            <h1 className='text-white mb-2 text-7xl font-bold'>
              Find your table for any occasion{' '}
            </h1>
            {/* search bar */}
            <div className='flex justify-center m-auto text-left py-3 text-lg'>
              <input
                type='text'
                className='py-2 px-2 rounded w-[450px] mr-3'
                placeholder='search here..'
              />
              <button className='py-2  px-9 bg-red-600 text-white rounded font-medium '>
                Lets go
              </button>
            </div>
          </div>
        </main>
        {/* Header  */} {/* card  */}
        <div className='mt-20 px-1 flex flex-wrap justify-center gap-5'>
          {/* card */}
          <div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div>
          <div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div>
          <div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div><div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div><div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div><div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div><div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div>
          <div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div><div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div><div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div><div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div><div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div><div className='w-64 h-72 overflow-hidden cursor-pointer border mt-3 rounded'>
            <img
              src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
              alt=''
              className='w-full height-36'
            />
            {/* img */}
            <div className='p-1'>
              <h3 className='font-bold text-2xl mb-2'>Milestones Grill</h3>
              <div className='flex items-start'>
                <div className='flex mb-2'>*****</div>
                <p className='ml-2'>77 reviews</p>
              </div>
              <div className='flex text-reg font-light capitalize'>
                <p className=' mr-3'>Mexican</p>
                <p className='mr-3'>$$$$</p>
                <p>Toronto</p>
              </div>
              <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
