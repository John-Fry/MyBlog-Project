import type { PostSummaryDTO } from "../DTOs/postSummaryDTO"

export class PostSummary {
  id: number
  title: string
  createdAt: Date
  commentCount: number

  constructor(
    id: number,
    title: string,
    createdAt: Date,
    commentCount: number
  ) {
    this.id = id
    this.title = title
    this.createdAt = createdAt
    this.commentCount = commentCount
  }

  static fromDto(dto: PostSummaryDTO): PostSummary {
    return new PostSummary(
      dto.id,
      dto.title,
      new Date(dto.createdAt),
      dto.commentCount
    )
  }
}