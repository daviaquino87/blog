import { CommentRepositoryInMemory } from "@modules/comments/repositories/in-memory/CommentRepositoryInMemory";
import { CreateCommentUseCase } from "../createComment/CreateCommentUseCase";
import { ListCommentsUseCase } from "./ListCommentsUseCase";
import { commentBuilder } from "@modules/comments/repositories/in-memory/seed/CommentSeed";
import { Comment } from "@modules/comments/models/Comment";

var commentRepositoryInMemory: CommentRepositoryInMemory;
var createCommentUseCase: CreateCommentUseCase;
var listCommentUseCase: ListCommentsUseCase;
var faker = commentBuilder.generate(4);

describe("Comment", () => {
  beforeEach(() => {
    commentRepositoryInMemory = new CommentRepositoryInMemory();
    createCommentUseCase = new CreateCommentUseCase(commentRepositoryInMemory);
    listCommentUseCase = new ListCommentsUseCase(commentRepositoryInMemory);
  });
  it("should able to possible list all comments", async () => {
    faker.forEach(async (comment) => {
      const create = { ...comment, postId: "example-post id" };
      await createCommentUseCase.execute(create);
    });

    const comments = await listCommentUseCase.execute("example-post id");

    expect(Array.isArray(comments)).toBe(true);
    expect(comments[0].userId).toEqual(faker.shift().userId);
    comments.forEach((comment) => {
      expect(comment instanceof Comment).toBe(true);
    });
  });
});
