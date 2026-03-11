import type { CommentDTO } from "./commentDTO"

export interface PostDetailDTO {
  id: number
  title: string
  content: string
  createdAt: string
  comments: CommentDTO[]
}