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

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout className="bg-zinc-600/50">
        <Sidebar className="p-2 flex flex-col gap-2 overflow-hidden">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="space-y-1" />
        </Sidebar>
        <Content className="p-2 border-l bg-zinc-900/50 border-l-white/20 flex flex-col overflow-hidden">
          <FloatingNoteTitle />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
