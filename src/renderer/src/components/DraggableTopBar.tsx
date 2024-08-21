import { TrafficLights } from '@/components'

export const DraggableTopBar = () => {
  return (
    // TODO check platform to enable or disable traffic lights
    <header className="absolute inset-0 h-8 bg-transparent">
      {window.context.platform !== 'darwin' && <TrafficLights />}
    </header>
  )
}
