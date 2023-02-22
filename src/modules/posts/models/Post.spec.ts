import { postBuilder } from "../repositories/in-memory/seed/PostSeed";
import { Post } from "./Post";

describe("Post", () => {
  it("should able possible to create a new post", () => {
    const post = new Post(postBuilder.generate());
    expect(post).toBeTruthy();
  });
});
