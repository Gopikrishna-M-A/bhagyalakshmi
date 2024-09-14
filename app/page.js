import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaPlay } from "react-icons/fa"
import { GiPolarStar } from "react-icons/gi"

export default function Home() {
  return (
    <div className='container mx-auto px-4'>
      {/* Hero Section */}
      <section className='py-12 flex flex-col w-full relative z-10'>
        <div className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium sm:  mb-4 lg:ml-20 xl:ml-40 w-fit'>
          CONSTRUCTION <GiPolarStar className='inline-block' />
        </div>
        <div className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4 mx-auto'>
          PROJECT MANAGEMENT
        </div>
        <div className='mb-6 text-gray-600 max-w-2xl mx-auto'>
          <p>
            ARCSO has always Foundations provided structural support for
            buildings and infrastructure. There are different types of
            foundations, including shallow foundations and deep foundations
            depending on the project&apos;s requirements.
          </p>
          <Button className='rounded-full sm:py-6 px-14 w-fit mt-5'>
            LET&apos;S GO
          </Button>
        </div>

        <p className='hidden xl:block text-3xl mb-4 absolute bottom-16 font-medium w-56 tracking-tight leading-10 text-zinc-500'>
          THE PROCESS OF CREATING BUILDINGS
        </p>
      </section>

      {/* Main Image Section */}
      <section className='mb-5 relative -mt-28 sm:-mt-36 md:-mt-44'>
        <Image
          src='/1.png'
          alt='Modern house exterior'
          width={1200}
          height={800}
          className='w-full h-auto rounded-lg'
        />

        <div className='hidden sm:block absolute top-4 right-4 rounded-full p-2'>
          <div className='relative w-14 h-14 sm:h-20 sm:w-20 lg:w-32 lg:h-32'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <FaPlay className='w-3 h-3 sm:h-5 sm:w-5 lg:w-7 lg:h-7 text-gray-800' />
            </div>
            <svg viewBox='0 0 100 100' className='w-full h-full'>
              <path
                id='textPath'
                d='M50,15 a35,35 0 0,1 0,70 a35,35 0 0,1 0,-70'
                fill='none'
              />
              <text className='text-[9px] uppercase fill-gray-600'>
                <textPath xlinkHref='#textPath' startOffset='0%'>
                  • Watch reels • Watch reels • Watch reels •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

      </section>

      <section className='mb-10'>
        <div className='flex justify-end'>
          <Button variant='outline' className='rounded-full'>
            Design Planning
          </Button>
          <Button variant='outline' className='rounded-full'>
            Structure
          </Button>
          <Button variant='outline' className='rounded-full'>
            Foundation
          </Button>
          <Button variant='outline' className='rounded-full'>
            Safety
          </Button>
          <Button variant='outline' className='rounded-full hidden sm:block'>
            Preparation
          </Button>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 lg:min-h-48 mb-5 md:mb-10 lg:mb-0'>
        <div className='flex flex-col lg:justify-start'>
          <h2 className='text-2xl lg:text-3xl font-bold md:mb-4'>
            Good architectural and engineering design is based on deep
            understanding of the users need.
          </h2>
        </div>
        <div className='flex flex-col lg:justify-end'>
          <p className='text-gray-600'>
            Understanding user needs allows architects and engineers to design
            spaces and structures that are tailored to the specific requirements
            of the users. For example, a hospital needs different design
            considerations compared to a school or a residential building.
          </p>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className='mb-12'>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end'>
          <Card className='bg-zinc-700 h-96 overflow-hidden'>
            <CardContent className='p-2 flex flex-col h-full'>
              <h3 className='px-4 font-bold text-lg py-2 leading-5 text-white'>
                Eco Works <br /> Business Center
              </h3>
              <div className='flex-grow relative'>
                <Image
                  src='/2.jpg'
                  alt='Eco Works Business Center'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-3xl'
                />
              </div>
            </CardContent>
          </Card>
          <Card className='bg-black text-white h-96 lg:h-44'>
            <CardContent className='p-6'>
              <h3 className='font-bold text-lg mb-2'>ARCDO CPM</h3>
              <p className='text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati, perferendis? Minus eligendi reiciendis,
              </p>
            </CardContent>
          </Card>
          <Card className='bg-zinc-700 h-96 lg:h-[350px] '>
            <CardContent className='p-6 flex items-center justify-center h-full relative'>
              <div className='text-center flex flex-col absolute bottom-2 left-2 z-10 bg-white rounded-2xl  p-2'>
                <p className='text-xs text-gray-600'>Average Rating</p>
                <span className='text-xl font-bold'>4.9</span>
                <Button
                  className='text-xs p-2 h-4 text-gray-500 rounded-full'
                  variant='outline'>
                  980+ Customers
                </Button>
              </div>
              <Image
                src='/3.jpg'
                alt='Eco Works Business Center'
                layout='fill'
                objectFit='cover'
                className='rounded'
              />
            </CardContent>
          </Card>
          <Card className='bg-zinc-700 h-96 overflow-hidden'>
            <CardContent className='p-2 flex flex-col h-full'>
              <div className='flex flex-col gap-1 py-2'>
                <Button
                  className='text-xs p-2 h-4 text-gray-500 rounded-full w-fit '
                  variant='outline'>
                  Wanna know more
                </Button>
                <Button
                  className='text-xs p-2 h-4 text-gray-500 rounded-full w-fit '
                  variant='outline'>
                  about us
                </Button>
              </div>
              <div className='flex-grow relative'>
                <Image
                  src='/4.jpg'
                  alt='Eco Works Business Center'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-3xl'
                />
              </div>
              <p className='text-gray-200 leading-4 py-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                repellat repudiandae enim id ipsa iste
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}

      <section className='grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 min-h-48'>
        <div className='flex flex-col justify-between col-span-2'>
          <h2 className='text-2xl lg:text-3xl font-bold mb-4'>
            Our construction services that we provide Full Spectrum of
            Construction Solutions.
          </h2>
          <Button className='bg-black text-white hover:bg-gray-800 w-fit px-7 md:py-6 rounded-full'>
            START A PROJECT
          </Button>
        </div>
        <div className='flex flex-col justify-end col-span-3 xl:-ml-14'>
          <p className='text-gray-600'>
            ARCDO CPM specializes in construction and urban development,
            creating spaces that support healthy and inclusive communities while
            honoring diversity and the unique situations of individuals.lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa
            molestiae unde ea neque possimus, ipsam repellat nobis expedita,
            tenetur facilis animi sint nemo facere perspiciatis aperiam
            provident amet iusto.
          </p>
        </div>
      </section>

      {/* Services Illustration */}
      <section className='mb-12 relative'>
        <Image
          src='/7.png'
          alt='Services illustration'
          width={1150}
          height={710}
          className='w-full h-auto rounded-lg'
        />
        <div className='w-full lg:absolute bottom-4 left-4 grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 lg:mt-0 lg:px-32 xl:px-40 md:pb-10'>
          <Card className='backdrop-blur-md bg-white/70 shadow-none border-none rounded-3xl'>
            <CardContent className='p-6'>
              <h3 className='text-lg font-bold mb-3'>Onset Services</h3>
              <p className='text-gray-700 text-sm'>
                Our initial project setup and planning services lay the
                foundation for your success. We meticulously analyze your
                requirements, outline project milestones
              </p>
            </CardContent>
          </Card>
          <Card className='backdrop-blur-md bg-white/70 shadow-none border-none rounded-3xl'>
            <CardContent className='p-6'>
              <h3 className='text-lg font-bold mb-3'>Ongoing Solutions</h3>
              <p className='text-gray-700 text-sm'>
                Our initial project setup and planning services lay the
                foundation for your success. We meticulously analyze your
                requirements, outline project milestones
              </p>
            </CardContent>
          </Card>
          <Card className='backdrop-blur-md bg-white/70 shadow-none border-none rounded-3xl'>
            <CardContent className='p-6'>
              <h3 className='text-lg font-bold mb-3'>Repetitive Services</h3>
              <p className='text-gray-700 text-sm'>
                Our initial project setup and planning services lay the
                foundation for your success. We meticulously analyze your
                requirements, outline project milestones
              </p>
            </CardContent>
          </Card>
          <Card className='backdrop-blur-md bg-white/70 shadow-none border-none rounded-3xl md:hidden'>
            <CardContent className='p-6'>
              <h3 className='text-lg font-bold mb-3'>Repetitive Services</h3>
              <p className='text-gray-700 text-sm'>
                Our initial project setup and planning services lay the
                foundation for your success. We meticulously analyze your
                requirements, outline project milestones
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Statement */}
      <section className='md:mb-12 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-8 min-h-48'>
        <div className='flex flex-col justify-between col-span-3'>
          <h2 className='text-2xl lg:text-3xl font-bold md:mb-4'>
            Empowering Dreams through Innovative Construction NexArc - Where
            Visions Are Brought to Life, One Building at a Time.
          </h2>
        </div>
        <div className='flex flex-col justify-end col-span-2 md:-ml-14'>
          <p className='text-gray-600'>
            ARCDO CPM specializes in construction and urban development,
            creating spaces that support healthy and inclusive communities while
            honoring diversity and the unique situations of individuals.
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end py-10'>
        <Card className='bg-zinc-700 h-72 xl:h-96 overflow-hidden xl:mb-10'>
          <CardContent className='p-2 flex flex-col h-full relative'>
            <Image
              src='/2.jpg'
              alt='Eco Works Business Center'
              layout='fill'
              objectFit='cover'
            />
          </CardContent>
        </Card>
        <Card className='bg-zinc-700 h-72 xl:h-96 overflow-hidden xl:mb-20'>
          <CardContent className='p-2 flex flex-col h-full relative'>
            <Image
              src='/2.jpg'
              alt='Eco Works Business Center'
              layout='fill'
              objectFit='cover'
            />
          </CardContent>
        </Card>
        <Card className='bg-zinc-700 h-72 xl:h-96 overflow-hidden xl:mb-10'>
          <CardContent className='p-2 flex flex-col h-full relative'>
            <Image
              src='/2.jpg'
              alt='Eco Works Business Center'
              layout='fill'
              objectFit='cover'
            />
          </CardContent>
        </Card>
        <Card className='bg-zinc-700 h-72 xl:h-96 overflow-hidden'>
          <CardContent className='p-2 flex flex-col h-full relative'>
            <Image
              src='/2.jpg'
              alt='Eco Works Business Center'
              layout='fill'
              objectFit='cover'
            />
          </CardContent>
        </Card>
      </section>

      <section className="max-w-3xl xl:-mt-12">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          delectus. Facilis praesentium adipisci necessitatibus nobis iste
          officia, dolorum maxime inventore in possimus libero amet, soluta
          veniam exercitationem. Nisi, quis natus?
        </p>
      </section>
    </div>
  )
}




// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { FaPlay } from "react-icons/fa"
// import { GiPolarStar } from "react-icons/gi"

// export default function Home() {
//   return (
//     <div className='container mx-auto px-4'>
//       {/* Hero Section */}
//       <section className='py-8 md:py-12 flex flex-col w-full relative z-10'>
//         <div className='text-4xl md:text-7xl font-medium mb-4 mx-auto md:ml-40 w-fit'>
//           CONSTRUCTION <GiPolarStar className='inline-block' />
//         </div>
//         <div className='text-4xl md:text-7xl font-medium mb-4 mx-auto text-center'>
//           PROJECT MANAGEMENT
//         </div>
//         <div className='mb-6 text-gray-600 max-w-2xl mx-auto px-4'>
//           <p className='text-sm md:text-base'>
//             ARCSO has always Foundations provided structural support for
//             buildings and infrastructure. There are different types of
//             foundations, including shallow foundations and deep foundations
//             depending on the project's requirements.
//           </p>
//           <Button className='rounded-full py-4 md:py-6 px-8 md:px-14 w-fit mt-5 mx-auto md:mx-0'>
//             LET'S GO
//           </Button>
//         </div>

//         <p className='text-xl md:text-3xl mb-4 mx-auto md:absolute md:bottom-16 font-medium w-56 tracking-tight leading-8 md:leading-10 text-zinc-500 text-center md:text-left'>
//           THE PROCESS OF CREATING BUILDINGS
//         </p>
//       </section>

//       {/* Main Image Section */}
//       <section className='mb-5 relative md:-mt-44'>
//         <Image
//           src='/1.png'
//           alt='Modern house exterior'
//           width={1200}
//           height={800}
//           className='w-full h-auto rounded-lg'
//         />
//         <div className='absolute top-4 right-4 rounded-full p-2'>
//           <div className='relative w-20 h-20 md:w-32 md:h-32'>
//             <div className='absolute inset-0 flex items-center justify-center'>
//               <FaPlay className='w-5 h-5 md:w-7 md:h-7 text-gray-800' />
//             </div>
//             <svg viewBox='0 0 100 100' className='w-full h-full'>
//               <path
//                 id='textPath'
//                 d='M50,15 a35,35 0 0,1 0,70 a35,35 0 0,1 0,-70'
//                 fill='none'
//               />
//               <text className='text-[7px] md:text-[9px] uppercase fill-gray-600'>
//                 <textPath xlinkHref='#textPath' startOffset='0%'>
//                   • Watch reels • Watch reels • Watch reels •
//                 </textPath>
//               </text>
//             </svg>
//           </div>
//         </div>
//       </section>

//       <section className='mb-10 overflow-x-auto'>
//         <div className='flex justify-start md:justify-end space-x-2 md:space-x-4 pb-2 md:pb-0'>
//           <Button variant='outline' className='rounded-full text-xs md:text-sm whitespace-nowrap'>
//             Design Planning
//           </Button>
//           <Button variant='outline' className='rounded-full text-xs md:text-sm whitespace-nowrap'>
//             Structure
//           </Button>
//           <Button variant='outline' className='rounded-full text-xs md:text-sm whitespace-nowrap'>
//             Foundation
//           </Button>
//           <Button variant='outline' className='rounded-full text-xs md:text-sm whitespace-nowrap'>
//             Safety
//           </Button>
//           <Button variant='outline' className='rounded-full text-xs md:text-sm whitespace-nowrap'>
//             Preparation
//           </Button>
//         </div>
//       </section>

//       {/* Design Philosophy Section */}
//       <section className='grid grid-cols-1 md:grid-cols-2 gap-8 min-h-48'>
//         <div className='flex flex-col justify-start'>
//           <h2 className='text-2xl md:text-3xl font-bold mb-4'>
//             Good architectural and engineering design is based on deep
//             understanding of the users' need.
//           </h2>
//         </div>
//         <div className='flex flex-col justify-end'>
//           <p className='text-sm md:text-base text-gray-600'>
//             Understanding user needs allows architects and engineers to design
//             spaces and structures that are tailored to the specific requirements
//             of the users. For example, a hospital needs different design
//             considerations compared to a school or a residential building.
//           </p>
//         </div>
//       </section>

//       {/* Project Showcase Section */}
//       <section className='mb-12'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end'>
//           <Card className='bg-zinc-700 h-72 md:h-96 overflow-hidden'>
//             <CardContent className='p-2 flex flex-col h-full'>
//               <h3 className='px-4 font-bold text-base md:text-lg py-2 leading-5 text-white'>
//                 Eco Works <br /> Business Center
//               </h3>
//               <div className='flex-grow relative'>
//                 <Image
//                   src='/2.jpg'
//                   alt='Eco Works Business Center'
//                   layout='fill'
//                   objectFit='cover'
//                   className='rounded-3xl'
//                 />
//               </div>
//             </CardContent>
//           </Card>
//           <Card className='bg-black text-white h-44'>
//             <CardContent className='p-4 md:p-6'>
//               <h3 className='font-bold text-base md:text-lg mb-2'>ARCDO CPM</h3>
//               <p className='text-xs md:text-sm'>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Obcaecati, perferendis? Minus eligendi reiciendis,
//               </p>
//             </CardContent>
//           </Card>
//           <Card className='bg-zinc-700 h-[300px] md:h-[350px]'>
//             <CardContent className='p-4 md:p-6 flex items-center justify-center h-full relative'>
//               <div className='text-center flex flex-col absolute bottom-2 left-2 z-10 bg-white rounded-2xl p-2'>
//                 <p className='text-xs text-gray-600'>Average Rating</p>
//                 <span className='text-lg md:text-xl font-bold'>4.9</span>
//                 <Button
//                   className='text-xs p-1 md:p-2 h-4 text-gray-500 rounded-full'
//                   variant='outline'>
//                   980+ Customers
//                 </Button>
//               </div>
//               <Image
//                 src='/3.jpg'
//                 alt='Eco Works Business Center'
//                 layout='fill'
//                 objectFit='cover'
//                 className='rounded'
//               />
//             </CardContent>
//           </Card>
//           <Card className='bg-zinc-700 h-72 md:h-96 overflow-hidden'>
//             <CardContent className='p-2 flex flex-col h-full'>
//               <div className='flex flex-col gap-1 py-2'>
//                 <Button
//                   className='text-xs p-1 md:p-2 h-4 text-gray-500 rounded-full w-fit '
//                   variant='outline'>
//                   Wanna know more
//                 </Button>
//                 <Button
//                   className='text-xs p-1 md:p-2 h-4 text-gray-500 rounded-full w-fit '
//                   variant='outline'>
//                   about us
//                 </Button>
//               </div>
//               <div className='flex-grow relative'>
//                 <Image
//                   src='/4.jpg'
//                   alt='Eco Works Business Center'
//                   layout='fill'
//                   objectFit='cover'
//                   className='rounded-3xl'
//                 />
//               </div>
//               <p className='text-gray-200 text-xs md:text-sm leading-4 py-3'>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
//                 repellat repudiandae enim id ipsa iste
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className='grid grid-cols-1 md:grid-cols-5 gap-8 min-h-48'>
//         <div className='flex flex-col justify-between col-span-5 md:col-span-2'>
//           <h2 className='text-2xl md:text-3xl font-bold mb-4'>
//             Our construction services that we provide Full Spectrum of
//             Construction Solutions.
//           </h2>
//           <Button className='bg-black text-white hover:bg-gray-800 w-fit px-5 md:px-7 py-4 md:py-6 rounded-full mx-auto md:mx-0'>
//             START A PROJECT
//           </Button>
//         </div>
//         <div className='flex flex-col justify-end col-span-5 md:col-span-3 md:-ml-14'>
//           <p className='text-sm md:text-base text-gray-600'>
//             ARCDO CPM specializes in construction and urban development,
//             creating spaces that support healthy and inclusive communities while
//             honoring diversity and the unique situations of individuals.lorem
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa
//             molestiae unde ea neque possimus, ipsam repellat nobis expedita,
//             tenetur facilis animi sint nemo facere perspiciatis aperiam
//             provident amet iusto.
//           </p>
//         </div>
//       </section>

//       {/* Services Illustration */}
//       <section className='mb-12 relative'>
//         <Image
//           src='/7.png'
//           alt='Services illustration'
//           width={1150}
//           height={710}
//           className='w-full h-auto rounded-lg'
//         />
//         <div className='absolute bottom-0 left-0 right-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:px-40 md:pb-10'>
//           <Card className='backdrop-blur-md bg-white/70 shadow-none border-none rounded-3xl'>
//             <CardContent className='p-4 md:p-6'>
//               <h3 className='text-base md:text-lg font-bold mb-2 md:mb-3'>Onset Services</h3>
//               <p className='text-gray-700 text-xs md:text-sm'>
//                 Our initial project setup and planning services lay the
//                 foundation for your success. We meticulously analyze your
//                 requirements, outline project milestones
//               </p>
//             </CardContent>
//           </Card>
//           <Card className='backdrop-blur-md bg-white/70 shadow-none border-none rounded-3xl'>
//             <CardContent className='p-4 md:p-6'>
//               <h3 className='text-base md:text-lg font-bold mb-2 md:mb-3'>Ongoing Solutions</h3>
//               <p className='text-gray-700 text-xs md:text-sm'>
//                 Our initial project setup and planning services lay the
//                 foundation for your success. We meticulously analyze your
//                 requirements, outline project milestones
//               </p>
//             </CardContent>
//           </Card>
//           <Card className='backdrop-blur-md bg-white/70 shadow-none border-none rounded-3xl'>
//             <CardContent className='p-4 md:p-6'>
//               <h3 className='text-base md:text-lg font-bold mb-2 md:mb-3'>Repetitive Services</h3>
//               <p className='text-gray-700 text-xs md:text-sm'>
//                 Our initial project setup and planning services lay the
//                 foundation for your success. We meticulously analyze your
//                 requirements, outline project milestones
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Vision Statement */}
//       <section className='mb-12 grid grid-cols-1 md:grid-cols-5 gap-8 min-h-48'>
//         <div className='flex flex-col justify-between col-span-5 md:col-span-3'>
//           <h2 className='text-2xl md:text-3xl font-bold mb-4'>
//             Empowering Dreams through Innovative Construction NexArc - Where
//             Visions Are Brought to Life, One Building at a Time.
//           </h2>
//         </div>
//         <div className='flex flex-col justify-end col-span-5 md:col-span-2 md:-ml-14'>
//           <p className='text-sm md:text-base text-gray-600'>
//             ARCDO CPM specializes in construction and urban development,
//             creating spaces that support healthy and inclusive communities while
//             honoring diversity and the unique situations of individuals.
//           </p>
//         </div>
//       </section>

//       {/* Project Gallery */}
//       <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end py-10'>
//         <Card className='bg-zinc-700 h-72 md:h-96 overflow-hidden mb-10'>
//           <CardContent className='p-2 flex flex-col h-full relative'>
//             <Image
//               src='/2.jpg'
//               alt='Eco Works Business Center'
//               layout='fill'
//               objectFit='cover'
//             />
//           </CardContent>
//         </Card>
//         <Card className='bg-zinc-700 h-72 md:h-96 overflow-hidden mb-20'>
//           <CardContent className='p-2 flex flex-col h-full relative'>
//             <Image
//               src='/2.jpg'
//               alt='Eco Works Business Center'
//               layout='fill'
//               objectFit='cover'
//             />
//           </CardContent>
//         </Card>
//         <Card className='bg-zinc-700 h-72 md:h-96 overflow-hidden mb-10'>
//           <CardContent className='p-2 flex flex-col h-full relative'>
//             <Image
//               src='/2.jpg'
//               alt='Eco Works Business Center'
//               layout='fill'
//               objectFit='cover'
//             />
//           </CardContent>
//         </Card>
//         <Card className='bg-zinc-700 h-72 md:h-96 overflow-hidden'>
//           <CardContent className='p-2 flex flex-col h-full relative'>
//             <Image
//               src='/2.jpg'
//               alt='Eco Works Business Center'
//               layout='fill'
//               objectFit='cover'
//             />
//           </CardContent>
//         </Card>
//       </section>

//       <section className="max-w-3xl -mt-12 mx-auto px-4">
//         <p className='text-sm md:text-base'>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
//           delectus. Facilis praesentium adipisci necessitatibus nobis iste
//           officia, dolorum maxime inventore in possimus libero amet, soluta
//           veniam exercitationem. Nisi, quis natus?
//         </p>
//       </section>
//     </div>
//   )
// }