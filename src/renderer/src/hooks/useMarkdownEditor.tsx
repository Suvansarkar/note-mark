import { MDXEditorMethods } from "@mdxeditor/editor"
import { saveNoteAtom, selectedNoteAtom } from "@renderer/store"
import { NoteContent } from "@shared/models"
import { useAtomValue, useSetAtom } from "jotai"
import { useRef } from "react"
import { throttle } from "lodash"
import { autoSavingInterval } from "@shared/constants"

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(async (content: NoteContent) => {
    if (!selectedNote) return

    console.info('Auto saving:', selectedNote.title)

    await saveNote(content)
  }, autoSavingInterval, {
    leading: false,
    trailing: true
  })

  const handleBlur = async () => {
    if (!selectedNote) return

    handleAutoSaving.cancel()
    const content = editorRef.current?.getMarkdown()

    if (content != null) {
      await saveNote(content)
    }
  }

  return {
    editorRef,
    selectedNote,
    handleAutoSaving,
    handleBlur
  }
}
