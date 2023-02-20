import { CommentRepositoryInMemory } from "../../repositories/in-memory/CommentRepositoryInMemory";
import { CreateCommentUseCase } from "../createComment/CreateCommentUseCase";
import { UpdateCommentUseCase } from "./UpdateCommentUseCase";
import { commentBuilder } from "../../repositories/in-memory/seed/CommentSeed";
import { AppError } from "../../../../shared/error/AppError";

var commentRepositoryInMemory: CommentRepositoryInMemory;
var createCommentuseCase: CreateCommentUseCase;
var updateCommentUseCase: UpdateCommentUseCase;
var faker = commentBuilder.generate(2);

describe("Comment", () => {
  beforeEach(() => {
    commentRepositoryInMemory = new CommentRepositoryInMemory();
    createCommentuseCase = new CreateCommentUseCase(commentRepositoryInMemory);
    updateCommentUseCase = new UpdateCommentUseCase(commentRepositoryInMemory);
  });
  it("should be possible to change a comment you have made", async () => {
    let comment = faker.shift();
    await createCommentuseCase.execute(comment);

    const updateComment = {
      userId: comment.userId,
      id: commentRepositoryInMemory.comments[0].id,
      text: "this is a new text",
    };

    await updateCommentUseCase.execute(updateComment);

    expect(commentRepositoryInMemory.comments[0].text).toEqual(
      updateComment.text
    );
  });

  it("should not be possible to change a comment that you have not made", async () => {
    let comment = faker.shift();
    await createCommentuseCase.execute(comment);

    const updateComment = {
      userId: "incorrect-user-id",
      id: commentRepositoryInMemory.comments[0].id,
      text: "this is a new text",
    };

    expect(async () => {
      await updateCommentUseCase.execute(updateComment);
    }).rejects.toBeInstanceOf(AppError);
  });
});
