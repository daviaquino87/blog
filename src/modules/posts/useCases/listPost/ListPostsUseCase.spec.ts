import { PostRepositoryInMemory } from "../../repositories/in-memory/PostRepository";
import { CreatePostUseCase } from "../createPost/CreatePostUseCase";
import { ListPostsUseCase } from "./ListPostsUseCase";
import { postBuilder } from "../../repositories/in-memory/seed/PostSeed";

var postRepositoryInMemory: PostRepositoryInMemory;
var listPostUseCase: ListPostsUseCase;
var createPostUseCase: CreatePostUseCase;
var faker = postBuilder.generate(4);

describe("Post", () => {
  beforeEach(() => {
    postRepositoryInMemory = new PostRepositoryInMemory();
    createPostUseCase = new CreatePostUseCase(postRepositoryInMemory);
    listPostUseCase = new ListPostsUseCase(postRepositoryInMemory);
  });
  it("should be able possible to list all posts", async () => {
    faker.forEach(async (post) => {
      await createPostUseCase.execute(post);
    });

    const posts = await listPostUseCase.execute();

    expect(Array.isArray(posts)).toBe(true);
    expect(posts[0].userId).toEqual(faker.shift().userId);
  });
});
