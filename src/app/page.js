import AllGoals from "@/components/AllGoals";
import CardBarChart from "@/components/CharDiagrma";
import Layout from "@/components/RootLayout";
import Image from "next/image";


export default function Home() {
  return (
    <Layout>
      <div className="h-[3vh] w-full">

      </div>

      <div className="flex px-[10px] flex-col">

        <div className="bg-[#4F93D3] h-[11vh] gap-3 flex rounded-xl p-4 justify-between mx-[10px]  ">
          <div className="flex w-[20%] items-center justify-center">
            <Image
              src="/round3.png" // Replace with the path to your image
              alt="Description of your image"
              width={60} // Set the width of your image
              height={60} // Set the height of your image
            />
          </div>
          <div className="flex w-[75%]  items-center justify-start flex-col">
            <p className="text-left  w-full font-bold">Your daily goal Almost done</p>
            <p className="text-left w-full font-semibold"> 4 of 5 Completed</p>
            <div className="flex  mt-1 w-full items-center justify-center gap-0">
              <div className="h-[2px] w-[70%] bg-white"></div>
              <div className="h-[2px] w-[30%] bg-[#a1cbf2] "></div>
            </div>
            <div className="w-full">
              <p className="w-full font-semibold text-sm mt-1 text-right">
                70%
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[25px] mx-[10px]">
          <p className="text-xl font-semibold">{`Today's Goal`}</p>
          <Image
            src="/heart.jpg" // Replace with the path to your image
            alt="Description of your image"
            width={40} // Set the width of your image
            height={40} // Set the height of your image
          />
        </div>


        {/* all goals */}
        <AllGoals />
        <div className="bg-[#d15439] h-[8vh] mt-[30px] gap-3 flex rounded-full p-2  mx-[10px] items-center  ">
          <div className="bg-white h-[6vh] w-[6vh] text-[#c26f2c] rounded-full flex items-center justify-center">
            <p className=" font-semibold  ">Track</p>
          </div>
          <p className="text-xl mx-2 mr-6 text-white font-semibold">{`Swipe to track all`}</p>

          <Image
            src="/arrows.png" // Replace with the path to your image
            alt="Description of your image"
            width={50} // Set the width of your image
            height={50} // Set the height of your image
          />
        </div>
        <CardBarChart />
      </div>
    </Layout>
  );
}
