import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  ">
      <Navbar />
      <div className="flex md:flex-row flex-col-reverse items-center relative pt-52 ">
        <div className="md:w-1/2 p px-5 md:pl-5">
          <h1 className="font-light md:static absolute  top-40 text-3xl md:text-5xl border-red-300 border-t-2 border-l-2 rounded-lg pt-4 mr-6 md:mr-0 pl-4 md:ml-5 w-fit ">
            Welcome to PLAN B Construction
          </h1>
          <p className=" pl-3 md:pl-6 text-sm md:text-base md:ml-5 pt-2 font-extralight leading-7">
            "Your Trusted Partner in Construction Solutions"
          </p>
          <p className="pl-3 md:pl-6  text-sm md:text-base border-lime-100 md:ml-5 pt-2 font-extralight leading-7 rounded-lg border-b-2 border-r-2 pb-5 pr-5 shadow-white ">
            At PlanB Construction, we build dreams into reality. Our expert team
            is committed to delivering top-quality construction projects that
            reflect your vision and exceed your expectations. Whether it's
            building your dream home, renovating a commercial space, or taking
            on a large-scale construction project, we have the expertise and
            experience to bring it to life.
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 flex-grow  items-center min-h-full justify-center">
          <Image
            src={"/home1 bgremoved.png"}
            width={500}
            height={500}
            alt="Picture of the author"
            className="mt-3 md:mt-0"
          />
        </div>
      </div>
      <div className="group pl-8 w-full" >
        <h1 className=" pt-8 text-4xl font-light   text-left flex " >Servieces</h1>
        <div className=" w-0 group-hover:w-60 h-0.5  bg-slate-100 transition-all duration-500 "></div>
        <div className="flex flex-grow bg-white "></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pr-8 pt-5 pb-5 mb-96">
          <div className="flex h-60  p-[2px] bg-gradient-to-r from-indigo-900 via-gray-600 to-gray-100 rounded-lg "> <div className="h-full w-full rounded-lg dark:bg-black"></div> </div>
          <div className="flex h-60  p-[2px] bg-gradient-to-r from-gray-100 via-red-400 to-red-900 rounded-lg "> <div className="h-full w-full rounded-lg dark:bg-black"></div> </div>
          <div className="flex h-60  p-[2px] bg-gradient-to-r from-red-900 via-yellow-600 to-yellow-200 rounded-lg "> <div className="h-full w-full rounded-lg dark:bg-black"></div> </div>

        </div>
      </div>
    </main>
  );
}
