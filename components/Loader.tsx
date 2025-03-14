"use client"

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="spinner relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-blue-600 to-purple-600 filter blur-[1px]">
        <div className="absolute inset-0 rounded-full bg-background filter blur-[10px]"></div>
      </div>
    </div>
  )
}

export default Loader

