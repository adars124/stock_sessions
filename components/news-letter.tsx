"use client";

export function NewsLetter() {
    return (
        <div className="mt-10 p-8 bg-blue-100 rounded-md shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-full md:w-1/2 p-5 md:p-10 space-y-4 md:space-y-2">
                    <h4 className="text-sm font-bold text-custom1 uppercase">Our Newsletter</h4>
                    <h1 className="text-2xl md:text-3xl font-extrabold">Stay Updated with Our Weekly Newsletter</h1>
                    <p className="text-zinc-700 font-medium text-sm">Receive weekly updates and analysis of NEPSE in your email.</p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center space-y-5 md:p-8">
                    <h2 className="text-xl md:text-2xl font-bold text-custom1">Sign Up for Newsletter</h2>
                    <form action="/signup" method="POST" className="w-full max-w-md">
                        <div className="mb-4">
                            <input type="email" className="rounded-md p-3 text-sm w-full outline-none" name="email" placeholder="Enter your email" required />
                        </div>
                        <button className="text-sm bg-zinc-500 text-teal-100 hover:bg-zinc-700 transition-colors duration-200 p-3 w-full rounded-md" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};