import { Comment } from "@modules/comments/models/Comment";
import { User } from "@modules/users/models/User";
import { TypeormComment } from "@shared/infra/typeorm/entities/TypeormComment";
import { TypeormPost } from "@shared/infra/typeorm/entities/TypeormPost";
import { TypeormUser } from "@shared/infra/typeorm/entities/TypeormUser";

export class TypeormCommentsMapper {
  public static toTypeorm(comment: Comment): TypeormComment {
    return {
      id: comment.id,
      text: comment.text,
      userId: comment.userId,
      postId: comment.postId,
      created_at: comment.created_at,
      user: new TypeormUser(comment.userId),
      post: new TypeormPost(comment.postId),
    };
  }

  public static toApplication(comment: TypeormComment): Comment {
    return new Comment(
      {
        userId: comment.userId,
        postId: comment.postId,
        text: comment.text,
        created_at: comment.created_at,
      },
      comment.id
    );
  }
}
