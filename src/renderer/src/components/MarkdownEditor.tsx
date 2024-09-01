import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import { useMarkdownEditor } from '@renderer/hooks/useMarkdownEditor'
import { forwardRef } from 'react'
import Scrollbars, { ScrollbarProps } from 'react-custom-scrollbars-2'

export const MarkdownEditor = forwardRef<Scrollbars, ScrollbarProps>((props, ref) => {
  const { editorRef, selectedNote, handleAutoSaving, handleBlur } = useMarkdownEditor()

  if (!selectedNote) return null

  return (
    <Scrollbars ref={ref} {...props}>
      <MDXEditor
        ref={editorRef}
        key={selectedNote.id}
        markdown={selectedNote.content}
        onChange={handleAutoSaving}
        onBlur={handleBlur}
        plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
        contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-teal-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
      />
    </Scrollbars>
  )
})

MarkdownEditor.displayName = 'MarkdownEditor'
