export default function Loading() {
  return (
    <div className="min-h-screen bg-[#06070B] flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-[#486FFF] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 text-lg">Loading...</p>
      </div>
    </div>
  )
}
