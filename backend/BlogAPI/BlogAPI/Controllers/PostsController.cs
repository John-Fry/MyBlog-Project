using BlogAPI.Data;
using BlogAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlogAPI.DTOs;

namespace BlogAPI.Controllers;

[ApiController]
[Route("api/posts")]
public class PostsController : ControllerBase
{
    private readonly BlogDbContext _context;

    public PostsController(BlogDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetPosts()
    {
        var posts = await _context.Posts
            .Select(p => new PostSummaryDto
            {
                Id = p.Id,
                Title = p.Title,
                CreatedAt = DateTime.SpecifyKind(p.CreatedAt, DateTimeKind.Utc),
                CommentCount = p.Comments.Count
            })
            .ToListAsync();

        return Ok(posts);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPost(int id)
    {
        var post = await _context.Posts
            .Where(p => p.Id == id)
            .Select(p => new PostDetailDto
            {
                Id = p.Id,
                Title = p.Title,
                Content = p.Content,
                CreatedAt = DateTime.SpecifyKind(p.CreatedAt, DateTimeKind.Utc),
                Comments = p.Comments.Select(c => new CommentDto
                {
                    Id = c.Id,
                    Author = c.Author,
                    Content = c.Content,
                    CreatedAt = DateTime.SpecifyKind(c.CreatedAt, DateTimeKind.Utc)
                }).ToList()
            })
            .FirstOrDefaultAsync();

        if (post == null)
            return NotFound();

        return Ok(post);
    }

    [HttpPost]
    public async Task<IActionResult> CreatePost(CreatePostDto dto)
    {
        var post = new BlogPost
        {
            Title = dto.Title,
            Content = dto.Content
        };

        _context.Posts.Add(post);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetPost),
            new { id = post.Id },
            new { post.Id }
        );
    }

    [HttpPost("{id}/comments")]
    public async Task<IActionResult> AddComment(int id, CreateCommentDto dto)
    {
        var post = await _context.Posts.FindAsync(id);

        if (post == null)
            return NotFound();

        var comment = new Comment
        {
            Author = dto.Author,
            Content = dto.Content,
            BlogPostId = id
        };

        _context.Comments.Add(comment);
        await _context.SaveChangesAsync();

        return Ok(new CommentDto
        {
            Id = comment.Id,
            Author = comment.Author,
            Content = comment.Content,
            CreatedAt = DateTime.SpecifyKind(comment.CreatedAt, DateTimeKind.Utc)
        });
    }
}