import { Post } from "@modules/posts/models/Post";
import { TypeormPost } from "@shared/infra/typeorm/entities/TypeormPost";
import { TypeormUser } from "@shared/infra/typeorm/entities/TypeormUser";

export class TypeormPostMapper {
  public static toTypeorm(post: Post): TypeormPost {
    return {
      id: post.id,
      userId: post.userId,
      title: post.title,
      content: post.content,
      created_at: post.created_at,
      user: new TypeormUser(post.userId),
    };
  }

  public static toApplication(post: TypeormPost): Post {
    return new Post(
      {
        userId: post.userId,
        title: post.title,
        content: post.content,
        created_at: post.created_at,
      },
      post.id
    );
  }
}
