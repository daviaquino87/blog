import { PostRepositoryInMemory } from "@modules/posts/repositories/in-memory/PostRepositoryInMemory";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { postBuilder } from "@modules/posts/repositories/in-memory/seed/PostSeed";

var postRepositoryInMemory: PostRepositoryInMemory;
var createPostUseCase: CreatePostUseCase;
var faker = postBuilder.generate();

describe("Post", () => {
  beforeEach(() => {
    postRepositoryInMemory = new PostRepositoryInMemory();
    createPostUseCase = new CreatePostUseCase(postRepositoryInMemory);
  });
  it("should be able possible to save a new post", async () => {
    const post = faker;

    await createPostUseCase.execute(post);

    expect(postRepositoryInMemory.posts[0].userId).toEqual(post.userId);
    expect(postRepositoryInMemory.posts).toHaveLength(1);
  });
});
