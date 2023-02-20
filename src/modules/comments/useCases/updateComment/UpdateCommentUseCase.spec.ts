import { CommentRepositoryInMemory } from "../../repositories/in-memory/CommentRepositoryInMemory";
import { CreateCommentUseCase } from "../createComment/CreateCommentUseCase";
import { UpdateCommentUseCase } from "./UpdateCommentUseCase";
import { commentBuilder } from "../../repositories/in-memory/seed/CommentSeed";

var commentRepositoryInMemory: CommentRepositoryInMemory;
var createCommentuseCase: CreateCommentUseCase;
var updateCommentUseCase: UpdateCommentUseCase;
var faker = commentBuilder.generate();

describe("Comment", () => {
  beforeEach(() => {
    commentRepositoryInMemory = new CommentRepositoryInMemory();
    createCommentuseCase = new CreateCommentUseCase(commentRepositoryInMemory);
    updateCommentUseCase = new UpdateCommentUseCase(commentRepositoryInMemory);
  });
  it("should be able to possible update a comment", async () => {
    let comment = faker;
    await createCommentuseCase.execute(comment);

    const updateComment = {
      id: commentRepositoryInMemory.comments[0].id,
      text: "this is a new text",
    };

    await updateCommentUseCase.execute(updateComment);

    expect(commentRepositoryInMemory.comments[0].text).toEqual(
      updateComment.text
    );
  });
});
