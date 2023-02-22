import { PostRepositoryInMemory } from "@modules/posts/repositories/in-memory/PostRepositoryInMemory";
import { CreatePostUseCase } from "../createPost/CreatePostUseCase";
import { UpdatePostUseCase } from "./UpdatePostUseCase";
import { postBuilder } from "@modules/posts/repositories/in-memory/seed/PostSeed";

var postRepositoryInMemory: PostRepositoryInMemory;
var createPostUseCase: CreatePostUseCase;
var updatePostUseCase: UpdatePostUseCase;
var faker = postBuilder.generate();

describe("Post", () => {
  beforeEach(() => {
    postRepositoryInMemory = new PostRepositoryInMemory();
    createPostUseCase = new CreatePostUseCase(postRepositoryInMemory);
    updatePostUseCase = new UpdatePostUseCase(postRepositoryInMemory);
  });

  it("should be able to possible update a title of a post", async () => {
    const post = faker;
    await createPostUseCase.execute(post);

    const updatePost = {
      userId: post.userId,
      postId: postRepositoryInMemory.posts[0].id,
      title: "New Title update",
    };

    await updatePostUseCase.execute(updatePost);
    expect(postRepositoryInMemory.posts[0].title).toEqual(updatePost.title);
  });

  it("should be able to possible update a content of a post", async () => {
    const post = faker;
    await createPostUseCase.execute(post);

    const updatePost = {
      userId: post.userId,
      postId: postRepositoryInMemory.posts[0].id,
      content: "New content update",
    };

    await updatePostUseCase.execute(updatePost);
    expect(postRepositoryInMemory.posts[0].content).toEqual(updatePost.content);
  });

  it("should be able to possible update a title and content of a post", async () => {
    const post = faker;
    await createPostUseCase.execute(post);

    const updatePost = {
      userId: post.userId,
      postId: postRepositoryInMemory.posts[0].id,
      title: "New Title update",
      content: "New content update",
    };

    await updatePostUseCase.execute(updatePost);
    expect(postRepositoryInMemory.posts[0].title).toEqual(updatePost.title);
    expect(postRepositoryInMemory.posts[0].content).toEqual(updatePost.content);
  });
});
