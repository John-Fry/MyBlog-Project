import { PostSummary } from "../models/postSummaryModel"
import { PostDetail } from "../models/postDetailModel"
import { Comment } from "../models/commentModel"

import type { PostSummaryDTO } from "../DTOs/postSummaryDTO"
import type { PostDetailDTO } from "../DTOs/postDetailDTO"
import type { CommentDTO } from "../DTOs/commentDTO"

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/posts`

/**
 * GET /api/posts
 */
export async function fetchPosts(): Promise<PostSummary[]> {
  const response = await fetch(BASE_URL)

  if (!response.ok) {
    throw new Error("Failed to fetch posts")
  }

  const dtos: PostSummaryDTO[] = await response.json()

  return dtos.map(PostSummary.fromDto)
}

/**
 * GET /api/posts/:id
 */
export async function fetchPost(id: number): Promise<PostDetail> {
  const response = await fetch(`${BASE_URL}/${id}`)

  if (!response.ok) {
    throw new Error("Failed to fetch post")
  }

  const dto: PostDetailDTO = await response.json()

  return PostDetail.fromDto(dto)
}

/**
 * POST /api/posts
 */
export async function createPost(title: string, content: string): Promise<void> {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      content
    })
  })

  if (!response.ok) {
    throw new Error("Failed to create post")
  }
}

/**
 * POST /api/posts/:id/comments
 */
export async function addComment(
  postId: number,
  author: string,
  content: string
): Promise<Comment> {
  const response = await fetch(`${BASE_URL}/${postId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      author,
      content
    })
  })

  if (!response.ok) {
    throw new Error("Failed to add comment")
  }

  const dto: CommentDTO = await response.json()

  return Comment.fromDto(dto)
}