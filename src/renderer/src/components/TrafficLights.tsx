import { Minus, Plus, X } from 'lucide-react'

export const TrafficLights = () => {
  return (
    <div className="absolute top-3 left-3 flex items-center space-x-2 z-50">
      <button
        onClick={window.context.closeWindow}
        className="relative w-3 h-3 bg-red-500 rounded-full shadow-md cursor-pointer transform transition-all duration-200 ease-out hover:bg-red-600 hover:shadow-lg hover:scale-110 active:bg-red-700 active:shadow-inner active:scale-95"
      >
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 transform scale-75">
          <X />
        </span>
      </button>
      <button
        onClick={window.context.minimizeWindow}
        className="relative w-3 h-3 bg-yellow-500 rounded-full shadow-md cursor-pointer transform transition-all duration-200 ease-out hover:bg-yellow-600 hover:shadow-lg hover:scale-110 active:bg-yellow-700 active:shadow-inner active:scale-95"
      >
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 transform scale-75">
          <Minus />
        </span>
      </button>
      <button
        onClick={window.context.newWindow}
        className="relative w-3 h-3 bg-green-500 rounded-full shadow-md cursor-pointer transform transition-all duration-200 ease-out hover:bg-green-600 hover:shadow-lg hover:scale-110 active:bg-green-700 active:shadow-inner active:scale-95"
      >
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 transform scale-75">
          <Plus />
        </span>
      </button>
    </div>
  )
}
