import Image from "next/image";
import skel from "@/public/skeleton.png";

export function BottomWrapper() {
    // TODO: Import from DB and display here.
    const dumm = [1, 2, 3];
    
    return (
        <div className="mt-10 p-5 space-y-5 mb-4 bg-blue-100 rounded-md">
        {/* Top Headings */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-custom1 mb-2">Why Choose Stock Sessions?</h3>
          <p className="text-lg text-primary">We specialize in providing expert insights and tips for successful investing in the stock market.</p>
        </div>
        {/* Top Headings End */}

        {/* Cards Section */}
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          {
            dumm.map((item: any) => (
              <div key={ item } className="flex flex-col items-center space-y-2 rounded border-2 border-slate-600 p-4">
                <div><Image src={skel} height={150} width={300} alt="dummy image" className="w-full rounded-md" /></div>
                <h1 className=" text-secondary-foreground font-bold">Technical Analysis</h1>
                <p className="text-sm text-zinc-700">We provide valuable insights in technical trading.</p>
              </div>
            ))
          }
        </div>
        {/* Cards Section End */}
      </div>
    )
};