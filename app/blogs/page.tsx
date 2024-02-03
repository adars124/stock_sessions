import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blogs"
};

export default function Page() {
  return (
    <div className="min-h-screen py-2 sm:p-2 bg-slate-400">
      Blogs Page
    </div>
  )
};