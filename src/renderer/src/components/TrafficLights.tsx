export const TrafficLights = () => {
  return (
    <div className="absolute top-3 left-3 flex items-center space-x-2 z-50">
      <button className="w-3 h-3 bg-red-500 rounded-full shadow-md cursor-pointer hover:bg-red-600 hover:shadow-lg active:bg-red-700 active:shadow-inner"></button>
      <button className="w-3 h-3 bg-yellow-500 rounded-full shadow-md cursor-pointer hover:bg-yellow-600 hover:shadow-lg active:bg-yellow-700 active:shadow-inner"></button>
      <button className="w-3 h-3 bg-green-500 rounded-full shadow-md cursor-pointer hover:bg-green-600 hover:shadow-lg active:bg-green-700 active:shadow-inner"></button>
    </div>
  )
}
