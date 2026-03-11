import type { CommentDTO } from "../DTOs/commentDTO"

export class Comment {
  id: number
  author: string
  content: string
  createdAt: Date

  constructor(
    id: number,
    author: string,
    content: string,
    createdAt: Date
  ) {
    this.id = id
    this.author = author
    this.content = content
    this.createdAt = createdAt
  }

  static fromDto(dto: CommentDTO): Comment {
    return new Comment(
      dto.id,
      dto.author,
      dto.content,
      new Date(dto.createdAt)
    )
  }
}