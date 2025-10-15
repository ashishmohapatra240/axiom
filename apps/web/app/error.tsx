'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#06070B] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Something went wrong!</h2>
        <p className="text-gray-400">
          An error occurred while loading the page. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-[#486FFF] hover:bg-[#6683FF] text-black font-bold px-6 py-3 rounded-full transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
