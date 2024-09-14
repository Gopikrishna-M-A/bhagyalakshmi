'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

// Mock data for projects. Replace with actual data when available.
const projects = [
  { id: 1, name: "Eco Homes Thrissur", category: "Residential", image: "/8.jpg", description: "Sustainable apartment complex in Thrissur" },
  { id: 2, name: "Green Office Park", category: "Commercial", image: "/8.jpg", description: "Eco-friendly office spaces in Palakkad" },
  { id: 3, name: "Lakeside Villas", category: "Residential", image: "/8.jpg", description: "Luxury villas with lake view in Thrissur" },
  { id: 4, name: "Smart City Center", category: "Commercial", image: "/8.jpg", description: "Modern commercial complex in Thrissur city center" },
  { id: 5, name: "Green Valley Apartments", category: "Residential", image: "/8.jpg", description: "Nature-inspired apartment project in Palakkad" },
  { id: 6, name: "Tech Hub", category: "Commercial", image: "/8.jpg", description: "State-of-the-art IT park in Thrissur" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className='container mx-auto px-4 py-16 max-w-6xl'>
      <h1 className='text-4xl font-bold mb-12 text-center'>Our Projects</h1>

      <div className='flex justify-center space-x-4 mb-12'>
        {['All', 'Residential', 'Commercial'].map((category) => (
          <Button 
            key={category} 
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full ${filter === category ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredProjects.map((project) => (
          <Card key={project.id} className='overflow-hidden border-0 shadow-lg flex flex-col justify-between'>
            <CardHeader className='p-0'>
            <Image 
              src={project.image} 
              alt={project.name} 
              width={400} 
              height={300} 
              className='w-full h-64 object-cover'
            />
            <CardContent className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
              <p className='text-gray-600 mb-4'>{project.description}</p>
            </CardContent>
            </CardHeader>
            <CardFooter className='flex justify-between items-center'>
                <span className='text-sm font-medium bg-gray-200 px-3 py-1 rounded-full'>
                  {project.category}
                </span>
                <Button variant='outline' className='text-sm'>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}