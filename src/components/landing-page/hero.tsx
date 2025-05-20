import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Banner from '../../../public/images/banner.jpg'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-lg mb-4">Hey, I’m Samridh</p>
            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-4">
              Turning Your Bold Visions into Sleek, Impactful Designs That Wow!
            </h1>
          </div>
          <div className="flex flex-col items-start lg:items-end justify-between">
            <div className="max-w-md ml-auto text-left sm:text-right">
              <p className="text-sm md:text-base text-gray-300">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                I'm a skilled Frontend Developer creating dynamic, user-focused
                digital experiences that bridge brands and audiences. Based in
                India, working worldwide.
              </p>
            </div>
            <Button
              className="mt-8 inline-flex items-center gap-2 text-primary font-medium py-6 px-5 rounded-full transition-colors"
              variant={"secondary"}
            >
              Let’s Work Together <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-gray-400">Scroll Down</p>
          <div className="flex justify-center mt-5">
            <div className="border border-gray-700 rounded-full p-2 animate-bounce">
              <ChevronDown size={20} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="w-full flex-center mt-8">
            <Image
              src={Banner}
              alt={`Design preview`}
              width={1920}
              height={1080}
              className="w-full max-h-[400px] rounded-3xl object-cover object-top"
            />
        </div>
      </div>
    </main>
  );
}
