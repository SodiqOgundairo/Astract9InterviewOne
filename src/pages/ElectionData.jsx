const ElectionData = () => {
  return (
    <div className="text-white mt-[120px] mx-4 md:mx-[40px]  z-40">
      <div className="flex flex-col md:flex-row">
        <p className="font-bold text-3xl  leading-none">Election Data</p>
        <p className="bg-[#181C2E] border border-[#242B47] items-center md:mx-3 px-[8px] py-[1.3px] rounded-[4px] w-fit">
          <span className="text-sm ">PRESIDENTIAL</span>
          <span className="opacity-30"> / </span>
          <span className="text-sm ">2023</span>
        </p>
      </div>
      <div className="mt-[120px] flex flex-col md:flex-row justify-between">
        <p className="font-medium text-2xl">Presidential Election</p>

        <div className="flex flex-col md:flex-row justify-between">
          <div className=" md:mx-2 px-[8px] py-[1.3px]">
            <label for="postElection" class="hidden">
              Select an option
            </label>
            <select
              id="postElection"
              class="border bg-[#181C2E] border-[#242B47] text-[#C6C7CB] text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 pl-4 pr-[4em] "
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
              class="border bg-[#181C2E] border-[#242B47] text-[#C6C7CB] text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 pl-4 pr-[4em] "
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
              class="border bg-[#181C2E] border-[#242B47] text-[#C6C7CB] text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 pl-4 pr-[4em] "
            >
              <option selected>2023</option>
              <option >One</option>
              <option >Two</option>
              <option >Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionData;
