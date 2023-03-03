const ElectionData = () => {
  return (
    <div  className='text-white mt-[120px] mx-4 md:mx-[40px]  z-40'>
      <div className='flex flex-col md:flex-row'>
      <p className='font-bold text-3xl  leading-none'>Election Data</p>
      <p className='bg-[#181C2E] border-[#242B47] items-center md:mx-3 px-[8px] py-[1.3px] rounded-[4px] w-fit' >
        <span className='text-sm '>PRESIDENTIAL</span> 
        <span className='opacity-30'> / </span> 
        <span className='text-sm '>2023</span> 
      </p>
      </div>
      <div className='mt-[120px] flex flex-col md:flex-row justify-between'>
      <p className='font-medium text-2xl'>Election Data</p>
      <p className='bg-[#181C2E] border-[#242B47]  leading-none md:mx-3 px-[8px] py-[1.3px] rounded-[4px] w-fit' >
        <span className='text-sm '>PRESIDENTIAL</span> 
        <span className='opacity-30'> / </span> 
        <span className='text-sm '>2023</span> 
      </p>
      </div>
    </div>
  )
}

export default ElectionData