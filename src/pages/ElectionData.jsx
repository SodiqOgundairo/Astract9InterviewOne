import React, { useState } from "react";
import map from '../assets/img/map-lg.png'
import mapSm from '../assets/img/map-sm.png'
import zoomin from '../assets/img/zoomin.png'
import zoomout from '../assets/img/zoomout.png'
import DonutChart from '../components/DonutChart'

const ElectionData = () => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  return (
    <div className="text-white mt-[80px] md:mt-[120px] mx-4 md:mx-[40px]">
      <div className="flex flex-col md:flex-row">
        <p className="font-bold text-3xl  leading-none">Election Data</p>
        <p className="bg-[#181C2E] border border-[#242B47] items-center md:mx-3 px-[8px] py-[1.3px] rounded-[4px] w-fit">
          <span className="text-sm ">PRESIDENTIAL</span>
          <span className="opacity-30"> / </span>
          <span className="text-sm ">2023</span>
        </p>
      </div>
      <div className="mt-8 md:mt-[120px] flex flex-col md:flex-row justify-between pb-5 border-b-2 border-[#393C4A]">
        <p className="font-medium text-md md:text-2xl md:mb-0 mb-3">Presidential Election</p>

        <div className="flex flex-col md:flex-row justify-between">
          <div className=" md:mx-2 px-[8px] py-[1.3px]">
            <label for="postElection" class="hidden">
              Select an option
            </label>
            <select
              id="postElection"
              class="border bg-[#181C2E] border-[#242B47] text-[#C6C7CB] text-sm rounded-[4px] focus:ring-theme focus:border-theme block w-full py-2.5 pl-4 pr-[4em] "
            >
              <option selected>Post Election</option>
              <option >One</option>
              <option >Two</option>
              <option >Three</option>
            </select>
          </div>
          <div className=" md:mx-2 px-[8px] py-[1.3px]">
            <label for="presidential" class="hidden">
              Select an option
            </label>
            <select
              id="presidential"
              class="border bg-[#181C2E] border-[#242B47] text-[#C6C7CB] text-sm rounded-[4px] focus:ring-theme focus:border-theme block w-full py-2.5 pl-4 pr-[4em] "
            >
              <option selected>Presidential</option>
              <option >One</option>
              <option >Two</option>
              <option >Three</option>
            </select>
          </div>
          <div className=" md:mx-2 px-[8px] py-[1.3px]">
            <label for="year" class="hidden">
              Select an option
            </label>
            <select
              id="year"
              class="border bg-[#181C2E] border-[#242B47] text-[#C6C7CB] text-sm rounded-[4px] focus:ring-theme focus:border-theme block w-full py-2.5 pl-4 pr-[4em] "
            >
              <option selected>2023</option>
              <option >One</option>
              <option >Two</option>
              <option >Three</option>
            </select>
          </div>
        </div>
      </div>

      <div className='mt-5 w-[100%] py-4 px-3 md:px-1 h-auto bg-[#181C2E] border border-[#242B47] rounded-[13px] relative'>
      <img src={map} className='object-cover m-auto' alt='map' />
      <img src={zoomin} className='absolute hidden md:block md:top-[9%] md:right-[11%] hover:blur-sm hover:drop-shadow-xl' alt='zoom' onClick={handleZoomIn}/>
      <img src={zoomout} className='absolute hidden md:block md:top-[15%] md:right-[11%] hover:blur-sm hover:drop-shadow-xl' alt='zoom' onClick={handleZoomOut} />
    

    <div className='flex flex-row md:flex-col justify-center relative mx-auto md:m0 md:absolute md:bottom-[20%] md:right-[11%] gap-6'>
      <div className='align-middle flex items-center flex-row justify-between gap-2 md:mb-4'>
        <div className=' w-[22px] h-[22px] bg-[#64CCFF]'></div>
        <span className='inline text-sm font-medium text-[#57656B] leading-none'>APC</span>
    </div>
      <div className='align-middle flex items-center flex-row justify-between gap-2 md:mb-4'>
        <div className=' w-[22px] h-[22px] bg-[#0AA83F]'></div>
        <span className='inline text-sm font-medium text-[#57656B] leading-none'>LP</span>
    </div>
      <div className='align-middle flex items-center flex-row justify-between gap-2 md:mb-4'>
        <div className=' w-[22px] h-[22px] bg-[#D62B3C]'></div>
        <span className='inline text-sm font-medium text-[#57656B] leading-none'>PDP</span>
    </div>
      </div>
      
    </div>
      <div className='flex flex-col md:flex-row justify-center items-center mb-5 p-4 h-auto bg-[#181C2E] border-0 md:border md:border-[#242B47] rounded-[13px]'>
        <div className='p-4 px-10 border h-[337px] border-[#242B47]  rounded-[13px]'>

    <DonutChart />
        </div>
    <div className=' flex flex-col md:flex-row justify-between md:w-[813px] md:h-[337px] p-[52px] border-0 md:border md:border-[#242B47] rounded-[13px]'>
      <div className='flex flex-col'>

      <p className='text-xs font-thin'>
      CANDIDATES BY GEOPOLITICAL ZONES
      </p>
      <img src={mapSm} alt='small map' className='object-cover mx-auto mt-8'/>
      </div>

      <div className='flex flex-col mt-[20px] md:mt-0'>

      <div className='align-middle flex flex-row justify-between w-[200px] mb-5 px-4'>
        <div className='flex flex-row gap-2'>
        <div className=' w-[22px] h-[14px] bg-[#449352]'></div>
        <span className='inline text-sm font-semibold leading-none'>North East</span>
        </div>
        
        <p className='inline opacity-60 text-sm leading-none'>3,000</p>
      </div>
      
      <div className='align-middle flex flex-row justify-between w-[200px] mb-5 px-4'>
        <div className='flex flex-row gap-2'>
        <div className=' w-[22px] h-[14px] bg-[#6D769D]'></div>
        <span className='inline text-sm font-semibold leading-none'>North West</span>
        </div>
        
        <p className='inline opacity-60 text-sm leading-none'>3,000</p>
      </div>

      <div className='align-middle flex flex-row justify-between w-[200px] mb-5 px-4'>
        <div className='flex flex-row gap-2'>
        <div className=' w-[22px] h-[14px] bg-[#A163BE]'></div>
        <span className='inline text-sm font-semibold leading-none'>North Central</span>
        </div>
        
        <p className='inline opacity-60 text-sm leading-none'>3,000</p>
      </div>

      <div className='align-middle flex flex-row justify-between w-[200px] mb-5 px-4'>
        <div className='flex flex-row gap-2'>
        <div className=' w-[22px] h-[14px] bg-[#E30325]'></div>
        <span className='inline text-sm font-semibold leading-none'>South West</span>
        </div>
        
        <p className='inline opacity-60 text-sm leading-none'>3,000</p>
      </div>

      <div className='align-middle flex flex-row justify-between w-[200px] mb-5 px-4'>
        <div className='flex flex-row gap-2'>
        <div className=' w-[22px] h-[14px] bg-[#2249D1]'></div>
        <span className='inline text-sm font-semibold leading-none'>South South</span>
        </div>
        
        <p className='inline opacity-60 text-sm leading-none'>3,000</p>
      </div>

      <div className='align-middle flex flex-row justify-between w-[200px] mb-5 px-4'>
        <div className='flex flex-row gap-2'>
        <div className=' w-[22px] h-[14px] bg-[#018796]'></div>
        <span className='inline text-sm font-semibold leading-none'>South East</span>
        </div>
        
        <p className='inline opacity-60 text-sm leading-none'>3,000</p>
      </div>
      </div>

      <div className='flex flex-col w-[200px] mt-8 md:mt-0'>
        <div className='mb-5 md:mb-8'>
        <p className='text-sm font-normal'>TOTAL ELECTED MEMBERS</p>
        <p className='text-xl font-bold'>10,000</p>
        </div>

        <div className='mb-5 md:mb-8'>
        <p className='text-sm font-normal'>MALE</p>
        <p className='text-xl font-bold'>9,000</p>
        </div>

        <div className='mb-5 md:mb-8'>
        <p className='text-sm font-normal'>FEMALE</p>
        <p className='text-xl font-bold'>1,000</p>
        </div>
      </div>

    </div>
    </div>

    </div>
  );
};

export default ElectionData;
