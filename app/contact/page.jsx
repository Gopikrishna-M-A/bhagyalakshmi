import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
  return (
    <div className='container mx-auto px-4 py-16 max-w-4xl'>
      <h1 className='text-4xl font-bold mb-12 text-center'>Get in Touch</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card className='border-none rounded-lg'>
          <CardContent className='p-6'>
            <form className='space-y-4'>
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={4} />
              </div>
              <Button className='w-full'>Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <Card className='border-none rounded-lg'>
          <CardContent className='p-6 space-y-6'>
            <div className='flex items-start space-x-4'>
              <FaMapMarkerAlt className='text-2xl text-gray-600 mt-1' />
              <div>
                <h3 className='font-semibold mb-2'>Visit Us</h3>
                <p className='text-gray-600'>
                  Ground Floor, Bhagyalakshmi Indoor Stadium Building<br />
                  Thrissur Shoranur main road<br />
                  Kolazhy, Thrissur
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <FaPhone className='text-2xl text-gray-600' />
              <div>
                <h3 className='font-semibold mb-2'>Call Us</h3>
                <p className='text-gray-600'>+91 XXXXXXXXXX</p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <FaEnvelope className='text-2xl text-gray-600' />
              <div>
                <h3 className='font-semibold mb-2'>Email Us</h3>
                <p className='text-gray-600'>info@bhagyalakshmibuilders.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className='mt-12'>
        <h2 className='text-2xl font-bold mb-6'>Our Locations</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card className='border-none rounded-lg'>
            <CardContent className='p-4'>
              <h3 className='font-semibold text-lg mb-2'>Thrissur</h3>
              <p className='text-gray-600'>Main office and project locations</p>
            </CardContent>
          </Card>
          <Card className='border-none rounded-lg'>
            <CardContent className='p-4'>
              <h3 className='font-semibold text-lg mb-2'>Palakkad</h3>
              <p className='text-gray-600'>Project locations</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}