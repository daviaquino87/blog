import { IPostRepository } from "@modules/posts/repositories/interface/IPostRepository";
import { ICreatePostDTO } from "@modules/posts/dtos/ICreatePostDTO";
import { IUpdatePostDTO } from "@modules/posts/dtos/IUpdatePostDTO";
import { Post } from "@modules/posts/models/Post";

import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { TypeormPost } from "@shared/infra/typeorm/entities/TypeormPost";
import { TypeormPostMapper } from "../mappers/TypeormPostMapper";

export class PostRepository implements IPostRepository {
  private repository;

  constructor() {
    this.repository = AppDataSource.getRepository(TypeormPost);
  }
  async create({ userId, title, content }: ICreatePostDTO): Promise<void> {
    const raw = new Post({
      userId,
      title,
      content,
    });

    const post = this.repository.create(TypeormPostMapper.toTypeorm(raw));

    await this.repository.save(post);
  }
  async listPosts(): Promise<Post[]> {
    const data = await this.repository.find();

    if (!data) {
      return null;
    }

    const posts = data.map((post) => {
      return TypeormPostMapper.toApplication(post);
    });

    return posts;
  }
  async findPostByUser(userId: string, postId: string): Promise<Post> {
    const raw = await this.repository.findOneBy({ userId, id: postId });

    if (!raw) {
      return null;
    }

    return TypeormPostMapper.toApplication(raw);
  }
  async updatePost({
    userId,
    postId,
    title,
    content,
  }: IUpdatePostDTO): Promise<void> {
    const raw = await this.repository.findOneBy({ userId, id: postId });

    await this.repository.update(raw, {
      title,
      content,
    });
  }
  async dropPost(userId: string, postId: string): Promise<void> {
    const raw = await this.repository.findOneBy({ userId, id: postId });

    await this.repository.delete(raw);
  }
}
