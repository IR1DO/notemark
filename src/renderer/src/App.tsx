import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { MarkdownEditor } from './components/MarkdownEditor'
import { useRef } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'

const App = () => {
  const markdownEditorRef = useRef<Scrollbars>(null)
  const resetScroll = () => {
    markdownEditorRef.current?.scrollToTop()
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout className="bg-zinc-600/50">
        <Sidebar className="p-2 flex flex-col gap-2 overflow-hidden">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content className="p-2 border-l bg-zinc-900/50 border-l-white/20 flex flex-col overflow-hidden">
          <FloatingNoteTitle />
          <MarkdownEditor ref={markdownEditorRef} />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
