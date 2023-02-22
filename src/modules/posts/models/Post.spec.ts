import { Post } from "./Post";
import { postBuilder } from "@modules/posts/repositories/in-memory/seed/PostSeed";

describe("Post", () => {
  it("should able possible to create a new post", () => {
    const post = new Post(postBuilder.generate());
    expect(post).toBeTruthy();
  });
});
