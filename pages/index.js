import Head from "next/head";


import React, { useState } from "react";
import RoundedBar from "../components/RoundedBar";
import Card from "../components/Card";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  const [clicked, isActive] = useState(false);

  return (
    <div>
      <Head>
        <title>Kalani Akita | Fullstack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        
      </Head>

      <main>
        {/* Nav
        <nav>
          <div className="bg-black w-full py-4 flex justify-end px-3">
            <div className="text-4xl text-white">
              <TiThMenu />
            </div>
          </div>
        </nav>
        */}

        <Header />

        {/* wrapper */}
        <div className="px-4 bg-gray-200 py-10 space-y-10">
          {/* section 2 */}
          <div className="h-full py-5 flex justify-center items-center">
            <div className="w-full max-w-sm">
              <div className="pb-5">
                <RoundedBar title={"About Me"} />
              </div>

              <div className="space-y-5 text-lg ">
                <p>
                  My name is Kalani and I'm just a girl that makes websites, mostly Jamstack ones. I graduated from UCSB in 2020 with a degree in Biology and used my scientist abilities to learn CS. </p>
                  
                  <p>Often I incorporate the techniques and data analysis skills, as well as organic design patterns, I learned as a Biologist in my design & software engineering work. This results in creating applications that are easy to use by humans.
                </p>
                <p>If you'd like to learn more about me you can follow me on <a href="https://twitter.com/kalaniakita" className="text-pink-600 hover:text-pink-300 font-semibold">twitter</a> for live updates.</p>
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className=" h-full py-5 flex justify-center items-center">
            <div className="w-full max-w-sm">
              <div className="pb-5">
                <RoundedBar title={"Projects"} />
              </div>

              <div className="flex flex-row space-x-4"></div>

              <div className="space-y-5 text-lg">


                <div>
                  <p className="text-2xl font-bold">
                    <a href="https://main.d1kun4c1lif2tq.amplifyapp.com/" className="text-pink-600 hover:text-pink-300">Jamstack Ecommerce App</a> (2021)
                  </p>
                  <div className="space-y-2">

                  </div>
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    <a href="https://maitaisatsunset.com" className="text-pink-600 hover:text-pink-300">Maitais At Sunset</a> (2021-Present)
                  </p>
 
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    <a href="https://sasa-ca.org" className="text-pink-600 hover:text-pink-300">Students Against Sexual Assault</a> (2017-2020)
                  </p>
                 
                </div>

                
              </div>
            </div>
          </div>

          <div className=" h-full py-5 flex justify-center items-center">
            <div className="w-full max-w-sm">
              <div className="pb-5">
                <RoundedBar title={"Education"} />
              </div>

              <div className="space-y-0 text-xl font-semibold">
                <p className="text-2xl font-bold">
                  BSc Biology (2020) <br />
                  <span className="font-thin">
                    {" "}
                    Emphasis in Neurobiology & Ecology
                  </span>
                </p>

                <p>University of California, Santa Barbara</p>
              </div>
            </div>
          </div>

          {/* section 4 */}
          <div className=" h-full py-5 flex justify-center items-center">
            <div className="w-full max-w-sm">
              <div className="pb-5">
                <RoundedBar title={"Contact"} />
              </div>

              <div className="space-y-5 text-lg">
                <p>
                  You can get in touch with me by reaching out to me on <a href="https://twitter.com/kalaniakita" className="text-pink-600 hover:text-pink-300 font-semibold">twitter</a> or other social media! I'll try to get back to you as soon as I can.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </main>
    </div>
  );
}
