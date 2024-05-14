import Image from 'next/image'
import React from 'react'

const AllGoals = () => {
    return (
        <div>
            <div className="h-[9vh] px-[5px] mt-[4vh] rounded-lg  mx-[10px] rounded-mda bg-[#282828] flex flex-row items-center justify-around ">
                <div className="bg-[#3d3d3d] rounded-xl flex items-center justify-center p-3 ">
                    <Image
                        src="/lift.png" // Replace with the path to your image
                        alt="Description of your image"
                        width={25} // Set the width of your image
                        height={25} // Set the height of your image
                    />
                </div>
                <p className="text-lg w-[60%] text-left font-semibold">{`Workout for 20 mins`}</p>
                <div className="bg-[#9e4cb8] rounded-xl flex items-center justify-center p-3 ">
                    <Image
                        src="/charm_tick.png" // Replace with the path to your image
                        alt="Description of your image"
                        width={20} // Set the width of your image
                        height={20} // Set the height of your image
                    />
                </div>
            </div>

            <div className="h-[9vh] px-[5px] mt-[2vh] rounded-lg  mx-[10px] rounded-mda bg-[#282828] flex flex-row items-center justify-around ">
                <div className="bg-[#3d3d3d] rounded-xl flex items-center justify-center p-3 ">
                    <Image
                        src="/foot.png" // Replace with the path to your image
                        alt="Description of your image"
                        width={25} // Set the width of your image
                        height={25} // Set the height of your image
                    />
                </div>
                <p className="text-lg w-[60%] text-left font-semibold">{`Read Books for 15 mins`}</p>
                <div className="bg-[#d15439] rounded-xl flex items-center justify-center p-3 ">
                    <Image
                        src="/charm_tick.png" // Replace with the path to your image
                        alt="Description of your image"
                        width={20} // Set the width of your image
                        height={20} // Set the height of your image
                    />
                </div>
            </div>

            <div className="h-[9vh] px-[5px] mt-[2vh] rounded-lg  mx-[10px] rounded-mda bg-[#282828] flex flex-row items-center justify-around ">
                <div className="bg-[#3d3d3d] rounded-xl flex items-center justify-center p-3 ">
                    <Image
                        src="/fire1.png" // Replace with the path to your image
                        alt="Description of your image"
                        width={25} // Set the width of your image
                        height={25} // Set the height of your image
                    />
                </div>
                <p className="text-lg w-[60%] text-left font-semibold">{`30 mins walk`}</p>
                <div className="bg-[#81b47d] rounded-xl flex items-center justify-center p-3 ">
                    <Image
                        src="/charm_tick.png" // Replace with the path to your image
                        alt="Description of your image"
                        width={20} // Set the width of your image
                        height={20} // Set the height of your image
                    />
                </div>
            </div>

            <div className="h-[9vh] px-[5px] mt-[2vh] rounded-lg  mx-[10px] rounded-mda bg-[#282828] flex flex-row items-center justify-around ">
                <div className="bg-[#3d3d3d] rounded-xl flex items-center justify-center p-3 ">
                    <Image
                        src="/Group.png"// Replace with the path to your image
                        alt="Description of your image"
                        width={25} // Set the width of your image
                        height={25} // Set the height of your image
                    />
                </div>
                <p className="text-lg w-[60%] text-left font-semibold">{`Sleep at 11 Sharp`}</p>
                <div className="bg-[#63a7a7] rounded-xl flex items-center justify-center p-3 ">
                    <Image

                        src="/charm_tick.png" // Replace with the path to your image
                        alt="Description of your image"
                        width={20} // Set the width of your image
                        height={20} // Set the height of your image
                    />
                </div>
            </div>

            <div className="h-[9vh] px-[5px] mt-[2vh] rounded-lg  mx-[10px] rounded-mda bg-[#282828] flex flex-row items-center justify-around ">
                <div className="bg-[#3d3d3d] rounded-xl flex items-center justify-center p-3 ">
                    <Image
                        src="/entypo_drop.png"// Replace with the path to your image
                        alt="Description of your image"
                        width={25} // Set the width of your image
                        height={25} // Set the height of your image
                    />
                </div>
                <p className="text-lg w-[60%] text-left font-semibold">{`Drink 3L water daily`}</p>
                <div className="bg-[#5a92cb] rounded-xl flex items-center justify-center p-3 ">
                    <Image

                        src="/charm_tick.png"  // Replace with the path to your image
                        alt="Description of your image"
                        width={20} // Set the width of your image
                        height={20} // Set the height of your image
                    />
                </div>
            </div></div>
    )
}

export default AllGoals