import Image from "next/image";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { TiThMenu } from "@react-icons/all-files/ti/TiThMenu";
import bg from "../public/test.jpg";
import headerImg from "../public/header2.svg";

export default function Header() {
  return (
    <>
      {/* header */}
      <div>
        <div
          className="bg-black flex flex-col justify-center items-center -mt-10 px-4"
          style={{
            height: "100vh",
          }}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 filter blur-lg from-pink-600 to-purple-600 rounded-xl animate-tilt bg-gradient-to-br"></div>
            <div className="relative bg-black px-4 py-4 rounded-xl">
              <div>
                <p className=" text-white uppercase font-semibold whitespace-nowrap" style={{ fontSize: "45px"}}>
                  Kalani Akita
                </p>
              </div>
              <div>
                <p
                  className=" text-center text-pink-600 uppercase font-mono whitespace-nowrap"
                  style={{ fontSize: "25px"}}>
                  Fullstack Developer
                </p>
              </div>
            </div>
          </div>

          <div className="pt-16">
            <div className="text-white text-3xl justify-between items-center flex flex-row space-x-4">
              <div className="text-white text-3xl font-semibold">{"<"}</div>
              <div className="text-white  text-3xl items-center flex flex-row space-x-4 px-5">
                <a
                  href="https://github.com/ocean-bee"
                  className="hover:text-pink-600 "
                >
                  <FaGithubAlt />
                </a>
                <a
                  href="https://twitter.com/kalaniakita"
                  className="hover:text-pink-600 "
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/kalaniakita"
                  className="hover:text-pink-600 "
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="text-white text-3xl font-semibold">{"/>"}</div>
            </div>
          </div>
        </div>
        
        {/* header-bottom */}
        <div className="-mb-10 bg-gray-200">
          <Image src={headerImg} width={2560} height={900} />
        </div>
      </div>
    </>
  );
}
