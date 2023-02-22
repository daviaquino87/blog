import { Comment } from "./Comment";
import { commentBuilder } from "@modules/comments/repositories/in-memory/seed/CommentSeed";

describe("Comment", () => {
  it("should be able possible to create a new comment", () => {
    const comment = new Comment(commentBuilder.generate());

    expect(comment).toBeTruthy();
  });
});
