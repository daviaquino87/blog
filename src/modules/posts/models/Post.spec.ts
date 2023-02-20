import { Post } from "./Post";

describe("Post", () => {
  it("should able possible to create a new post", () => {
    const post = new Post({
      userId: "uuid-user-example",
      title: "New Post",
      content: "Post content",
    });

    expect(post).toBeTruthy();
  });
});
