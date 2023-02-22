import { IPostRepository } from "../interface/IPostRepository";
import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";
import { IUpdatePostDTO } from "../../dtos/IUpdatePostDTO";
import { Post } from "../../models/Post";

export class PostRepositoryInMemory implements IPostRepository {
  public posts: Post[];
  constructor() {
    this.posts = [];
  }

  async create({ userId, title, content }: ICreatePostDTO): Promise<void> {
    const post = new Post({
      userId,
      title,
      content,
    });

    this.posts.push(post);
  }
  async listPosts(): Promise<Post[]> {
    return this.posts;
  }
  async findPostByUser(userId: string, postId: string): Promise<Post> {
    return this.posts.find(
      (post) => post.userId === userId && post.id === postId
    );
  }
  async updatePost({
    userId,
    postId,
    title,
    content,
  }: IUpdatePostDTO): Promise<void> {
    let post = this.posts.find(
      (post) => post.userId === userId && post.id === postId
    );

    post.title = title ?? post.title;
    post.content = content ?? post.content;
  }
  async dropPost(userId: string, postId: string): Promise<void> {
    const index = this.posts.findIndex(
      (post) => post.userId === userId && post.id === postId
    );

    this.posts.splice(index, 1);
  }
}
