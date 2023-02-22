import { PostRepositoryInMemory } from "../../repositories/in-memory/PostRepositoryInMemory";
import { CreatePostUseCase } from "../createPost/CreatePostUseCase";
import { DropPostUseCase } from "./DropPostUseCase";
import { postBuilder } from "../../repositories/in-memory/seed/PostSeed";
import { AppError } from "../../../../shared/error/AppError";

var postRepositoryInMemory: PostRepositoryInMemory;
var createPostUseCase: CreatePostUseCase;
var dropPostUseCase: DropPostUseCase;

describe("Post", () => {
  beforeEach(() => {
    postRepositoryInMemory = new PostRepositoryInMemory();
    createPostUseCase = new CreatePostUseCase(postRepositoryInMemory);
    dropPostUseCase = new DropPostUseCase(postRepositoryInMemory);
  });

  it("should be able to possible remove a post", async () => {
    var faker = postBuilder.generate(2);

    faker.forEach(async (post) => {
      await createPostUseCase.execute(post);
    });

    const post = faker.shift();

    await dropPostUseCase.execute({
      userId: post.userId,
      postId: postRepositoryInMemory.posts[0].id,
    });

    expect(postRepositoryInMemory.posts).toHaveLength(1);
    expect(postRepositoryInMemory.posts[0].content).toEqual(faker[0].content);
  });

  it("It should not be possible to remove a post with the wrong user Id", async () => {
    var faker = postBuilder.generate(2);

    faker.forEach(async (post) => {
      await createPostUseCase.execute(post);
    });

    expect(async () => {
      await dropPostUseCase.execute({
        userId: "example-user-id",
        postId: postRepositoryInMemory.posts[0].id,
      });
    }).rejects.toBeInstanceOf(AppError);
    expect(postRepositoryInMemory.posts).toHaveLength(2);
  });
});
