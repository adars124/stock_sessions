import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Courses"
};

export default function Page() {
    return (
      <div className="min-h-screen py-2 sm:p-2 bg-slate-400">
        <h1>Courses Page</h1>
      </div>
    )
};