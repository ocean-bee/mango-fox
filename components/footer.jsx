import Image from "next/image";
import footerImg from "../public/footer.svg";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";


export default function Footer () {
    return(
        <div className="bg-gray-200">
        <div className="-mb-10">
          <Image src={footerImg} width={2560} height={900} />
        </div>
        <div
          className=" h-72 flex justify-center items-center flex-col w-full space-y-2"
          style={{ backgroundColor: "#000000" }}
        >
          <p className="text-white text-2xl -ml-3 uppercase font-bold">
            {"kalani.dev"}
          </p>

          <div>
            <div className="text-white text-3xl justify-between items-center flex flex-row space-x-6">
              <div className="text-white text-3xl font-semibold">{"<"}</div>
              <div className="text-white text-3xl items-center flex flex-row space-x-4 px-5">
              <a href="https://github.com/ocean-bee" className="hover:text-pink-600 "><FaGithubAlt /></a>
                <a href="https://twitter.com/kalaniakita" className="hover:text-pink-600 "><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/kalaniakita" className="hover:text-pink-600 "><FaLinkedinIn /></a>
              </div>
              <div className="text-white text-3xl font-semibold">{"/>"}</div>
            </div>
          </div>

          <p className="text-xs font-mono text-gray-200">kalani.dev all rights reserved (2021)</p>
        </div>
      </div>
    )
}