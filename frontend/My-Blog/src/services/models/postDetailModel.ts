import type { PostDetailDTO} from "../DTOs/postDetailDTO"
import { Comment } from "./commentModel"

export class PostDetail {
  id: number
  title: string
  content: string
  createdAt: Date
  comments: Comment[]

  constructor(
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    comments: Comment[]
  ) {
    this.id = id
    this.title = title
    this.content = content
    this.createdAt = createdAt
    this.comments = comments
  }

  static fromDto(dto: PostDetailDTO): PostDetail {
    return new PostDetail(
      dto.id,
      dto.title,
      dto.content,
      new Date(dto.createdAt),
      dto.comments.map(Comment.fromDto)
    )
  }
}