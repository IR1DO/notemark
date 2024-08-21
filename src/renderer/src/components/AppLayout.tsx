import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {/* TODO check platform to enable or disable traffic lights */}
      <TrafficLights />
      {children}
    </main>
  )
}

export const TrafficLights = () => {
  return (
    <div className="absolute top-3 left-3 flex items-center space-x-2 z-50">
      <div className="w-3 h-3 bg-red-500 rounded-full shadow-md"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-md"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full shadow-md"></div>
    </div>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className)}
      {...props}
    >
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
        {children}
      </div>
    )
  }
)

Content.displayName = 'Content'
