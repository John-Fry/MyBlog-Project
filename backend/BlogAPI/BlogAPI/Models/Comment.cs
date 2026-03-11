namespace BlogAPI.Models;

public class Comment
{
    public int Id { get; set; }

    public string Author { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public int BlogPostId { get; set; }

    public BlogPost? BlogPost { get; set; }
}