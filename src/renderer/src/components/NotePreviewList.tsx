import { notesMock } from "@renderer/store/mocks"
import { ComponentProps } from "react"
import { NotePreview } from "@/components/NotePreview"
import { twMerge } from "tailwind-merge"
import { useNotesList } from "@/hooks/useNotesList"
import { isEmpty } from "lodash"

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (!notes) return null

  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview key={note.title + note.lastEditTime}
          isActive={selectedNoteIndex == index}
          onClick={handleNoteSelect(index)}
          {...note} />
      ))}
    </ul>
  )
}

