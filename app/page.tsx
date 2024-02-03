import skel from "@/public/skeleton.png";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { BottomWrapper } from "@/components/bottom-wrapper";
import { NewsLetter } from "@/components/news-letter";

import up from "@/public/arrowhead-up-solid.svg";
import down from "@/public/arrowhead-down-solid.svg";

export default async function Home() {
  const data = await fetch("https://sarallagani.xyz/api/market_data/home_live", {
    headers: {
      "Accept": "application/json",
      "Permission": "2021D@T@f@RSt6&%2-D@T@"
    }
  }).then(x => x.json()).then(y => y.data);

  // Indices from data (fetch request)
  const subIndices = data.subIndices;
  const nepseIndices = data.nepseIndex;

  return (
    <div className="py-2 min-h-screen w-full sm:p-2 -z-10">
      {/* Indices */}
      <div>
        <ul className="flex items-center space-x-3 overflow-x-scroll mt-5 bg-gradient-to-br from-green-200 to-teal-400 shadow-lg rounded p-3">
          {
            nepseIndices.map((item: any) => (
              <li key={item.id} className=" min-w-40 border-r-4 space-y-1 rounded border-gray-500 p-2">
                <h1 className="text-xs md:text-sm font-bold text-custom1 truncate">{item.sindex}</h1>
                <p className="text-xs font-semibold">Rs. {item.currentValue}</p>
                {item.perChange > 0 && <p className="text-xs text-green-500 flex items-center gap-1">{item.schange} ({item.perChange} %) <Image src={up} className="h-6 w-6 inline" width={5} height={5} alt="up signal" /></p>}
                {item.perChange < 0 && <p className="text-xs text-red-700 flex items-center gap-1">{item.schange} ({item.perChange} %) <Image src={down} className="h-6 w-6 inline" width={5} height={5} alt="down signal" /></p>}
              </li>
            ))
          }
          {
            subIndices.map((item: any) => (
              <li key={item.id} className=" min-w-40 border-r-4 space-y-1 rounded border-gray-500 p-2">
                <h1 className="text-xs md:text-sm font-bold text-custom1 truncate">{item.sindex}</h1>
                <p className="text-xs font-semibold">Rs. {item.currentValue}</p>
                {item.perChange > 0 && <p className="text-xs text-green-500 flex items-center gap-1">{item.schange} ({item.perChange} %) <Image src={up} className="h-6 w-6 inline" width={5} height={5} alt="up signal" /></p>}
                {item.perChange < 0 && <p className="text-xs text-red-700 flex items-center gap-1">{item.schange} ({item.perChange} %) <Image src={down} className="h-6 w-6 inline" width={5} height={5} alt="down signal" /></p>}
              </li>
            ))
          }
        </ul>
      </div>
      {/* Indices End */}

      {/* Hero Section */}
      <HeroSection />
      {/* Hero Section End */}

      {/* Wrapper */}
      <BottomWrapper />
      {/* Wrapper */}

      {/* News Letter */}
      <NewsLetter />
      {/* News Letter End */}
    </div>
  )
};
