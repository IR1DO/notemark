import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import Scrollbars from 'react-custom-scrollbars-2'
// import Scrollbars from 'react-custom-scrollbars-2'

export const MarkdownEditor = () => {
  return (
    <Scrollbars>
      <MDXEditor
        markdown={'# Hello from MDX Editor'}
        plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
        contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-teal-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
      />
    </Scrollbars>
  )
}
