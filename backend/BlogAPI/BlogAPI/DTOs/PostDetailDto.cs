namespace BlogAPI.DTOs;

public class PostDetailDto
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; }

    public List<CommentDto> Comments { get; set; } = new();
}