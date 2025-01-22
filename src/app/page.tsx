"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from "sonner"

export default function Home() {
  return (
    <div className="relative h-screen w-screen rounded-lg bg-background overflow-x-hidden flex flex-col pb-24">
      <div className="w-full h-16 border-b border-neutral-100 py-6">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between h-full">
          <div className="flex flex-row gap-2 items-center">
            <Image src='/icon.png' alt='' width={40} height={40} className='w-9 h-9' />
            <p className='tracking-tight font-medium text-lg'>Ocurrency</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href={'https://cotacaoglobal.info/'} target='_blank' className='underline underline-offset-4 cursor-pointer flex items-end'>Live exchange</Link>
            <Link href="/Ocurrency.zip" passHref className='underline underline-offset-4 cursor-pointer flex items-end'
              onClick={() =>
                toast("Thank you for downloading Ocurrency!", {
                  description: "Your download will start shortly",
                  action: {
                    label: "Close",
                    onClick: () => console.log("Close"),
                  },
                })
              }
            >Download</Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg flex flex-col space-y-6 mx-auto">
        <div className="h-[60vh] flex items-center justify-center">
          <h1 className="text-[60px] medium tracking-tighter text-center">Ocurrency downloads</h1>
        </div>
        <div className="grid grid-cols-3 w-full mx-auto">
          <div className="col-span-1 px-6">
            <Image src='/48cae9cb4cba45a0987b1daaabe6ed2b2a6a63c1-720x720.png' alt='' width={720} height={720} className='w-full' />
            <h2 className='text-4xl font-medium tracking-tight mt-6 mb-4'>Desktop app</h2>
            <Link href="/Ocurrency.zip" passHref className='underline underline-offset-4 cursor-pointer'>Desktop app for macOS</Link>
            <Button className='mt-4'>Join Windows waitlist!</Button>
          </div>
          <div className="col-span-1 px-6">
            <Image src='/4042e8ef7dbe5609613c705bdaf926cf65f6326b-720x720.png' alt='' width={720} height={720} className='w-full' />
            <h2 className='text-4xl font-medium tracking-tight mt-6 mb-4'>Mobile app</h2>
            <Link href={'https://cotacaoglobal.info/'} target='_blank' className='underline underline-offset-4 cursor-pointer'>Mobile PWA app</Link>
          </div>
          <div className="col-span-1 px-6">
            <Image src='/c7bca6c3aaa40f70ce2ff09bbb5e892559379e8f-720x720.png' alt='' width={720} height={720} className='w-full' />
            <h2 className='text-4xl font-medium tracking-tight mt-6 mb-4'>More content</h2>
            <p>Available soon... 👀</p>
          </div>
          <div className="col-span-3 px-6 py-16">
            <p className='text-lg text-center'>By downloading a Ocurrency application, you agree that our Terms of Service apply to your use of that application. If you have entered a different agreement with Ocurrency that covers our applications, that agreement will apply instead.</p>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-neutral-100 py-6">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between h-full">
          <div className="flex flex-row gap-2 items-center">
            <Image src='/icon.png' alt='' width={40} height={40} className='w-9 h-9' />
            <p className='tracking-tight font-medium text-lg'>Ocurrency</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href={'https://cotacaoglobal.info/'} target='_blank' className='underline underline-offset-4 cursor-pointer flex items-end'>Live exchange</Link>
            <Link href={'/'} className='underline underline-offset-4 cursor-pointer flex items-end'>Download</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
