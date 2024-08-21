import { ComponentProps, forwardRef } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge('w-[250px] mt-8 h-[100vh + 10px] overflow-auto', className)}
      {...props}
    >
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={500}>
        {children}
      </Scrollbars>
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
        <Scrollbars>{children}</Scrollbars>
      </div>
    )
  }
)

Content.displayName = 'Content'
