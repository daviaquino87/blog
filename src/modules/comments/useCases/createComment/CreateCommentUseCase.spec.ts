import { CommentRepositoryInMemory } from "@modules/comments/repositories/in-memory/CommentRepositoryInMemory";
import { CreateCommentUseCase } from "./CreateCommentUseCase";
import { commentBuilder } from "@modules/comments/repositories/in-memory/seed/CommentSeed";

var commentRepositoryInMemory: CommentRepositoryInMemory;
var createCommentUseCase: CreateCommentUseCase;
var faker = commentBuilder.generate();

describe("Comment", () => {
  beforeEach(() => {
    commentRepositoryInMemory = new CommentRepositoryInMemory();
    createCommentUseCase = new CreateCommentUseCase(commentRepositoryInMemory);
  });
  it("should be able to possible save a new comment", async () => {
    const comment = faker;

    await createCommentUseCase.execute(comment);

    expect(commentRepositoryInMemory.comments).toHaveLength(1);
    expect(commentRepositoryInMemory.comments[0].userId).toEqual(
      comment.userId
    );
  });
});
