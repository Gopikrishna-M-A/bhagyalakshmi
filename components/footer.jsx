import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
      <footer className="bg-[#f7f7f5] p-4">
        <div className="container mx-auto text-center flex items-center justify-center py-10">
          <p className="mr-2 font-bold text-sm">Follow Us :</p>
          <Button variant='outline' className='rounded-full h-7'>Linkedin</Button>
          <Button variant='outline' className='rounded-full h-7'>Facebook</Button>
          <Button variant='outline' className='rounded-full h-7'>Instagram</Button>
        </div>
      </footer>
    )
  }