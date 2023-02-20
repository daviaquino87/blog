import { Comment } from "./Comment";

describe("Comment", () => {
  it("should be able possible to create a new comment", () => {
    const comment = new Comment({
      userId: "example-user-id",
      text: "example test comment",
    });

    expect(comment).toBeTruthy();
  });
});
