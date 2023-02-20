import { CommentRepositoryInMemory } from "../../repositories/in-memory/CommentRepositoryInMemory";
import { CreateCommentUseCase } from "../createComment/CreateCommentUseCase";
import { DropCommentUseCase } from "./DropCommentUseCase";
import { commentBuilder } from "../../repositories/in-memory/seed/CommentSeed";
import { AppError } from "../../../../shared/error/AppError";

var commentRepositoryInMemory: CommentRepositoryInMemory;
var createCommentUseCase: CreateCommentUseCase;
var dropCommentUseCase: DropCommentUseCase;
var faker = commentBuilder.generate(2);

describe("Comment", () => {
  beforeEach(() => {
    commentRepositoryInMemory = new CommentRepositoryInMemory();
    createCommentUseCase = new CreateCommentUseCase(commentRepositoryInMemory);
    dropCommentUseCase = new DropCommentUseCase(commentRepositoryInMemory);
  });

  it("should be able to possible remove a comment", async () => {
    const comment = faker.shift();
    await createCommentUseCase.execute(comment);
    await dropCommentUseCase.execute({
      userId: comment.userId,
      commentId: commentRepositoryInMemory.comments[0].id,
    });

    expect(commentRepositoryInMemory.comments).toHaveLength(0);
  });

  it("should not be possible to remove a comment with a different user id", async () => {
    const comment = faker.shift();
    await createCommentUseCase.execute(comment);

    expect(async () => {
      await dropCommentUseCase.execute({
        userId: "invalid-user-id",
        commentId: commentRepositoryInMemory.comments[0].id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
