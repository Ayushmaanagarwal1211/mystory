import { EvervaultCard, Icon } from '@/components/ui/evervault-card';
import { FaLock } from 'react-icons/fa6';

export default function PrivacyMatters() {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-between w-full space-y-16 md:space-y-0 px-8 md:px-36 py-12 md:text-left text-center'>
        <div className='flex flex-col items-start md:justify-center justify-between md:w-[50%]'>
          <div className='text-3xl lg:text-5xl font-semibold inline-flex space-x-3 items-center justify-center'>
            <h1>Privacy Matters</h1>
            <FaLock />
          </div>
          <p className='text-md md:text-lg lg:text-xl mt-4 text-justify'>
            Safeguarding your privacy is our utmost priority. We employ robust
            industry-standard security protocols to protect your data
          </p>
        </div>

        <div className='border border-black/[0.2] dark:border-white/[0.2] bg-black flex flex-col items-start p-4 relative'>
          <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
          <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
          <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
          <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

          <EvervaultCard text='Identity' />

          <h2 className='dark:text-white text-black mt-4 text-sm font-light'>
            Your entire Identity is protected and encrypted (Hover)
          </h2>
          <a
            href='/privacy-policy'
            className='text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5'
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
