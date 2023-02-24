import { container } from "tsyringe";

import { IUserRepository } from "@modules/users/repositories/interface/IUserRepository";
import { UserRepository } from "@modules/users/infra/typeorm/repositories/UserRepository";

import { IPostRepository } from "@modules/posts/repositories/interface/IPostRepository";
import { PostRepository } from "@modules/posts/infra/typeorm/repositories/PostRepository";

import { ICommentRepository } from "@modules/comments/repositories/interface/ICommentRepository";
import { CommentRepository } from "@modules/comments/infra/typeorm/repositories/CommentsRepository";

container.registerSingleton<IUserRepository>("userRepository", UserRepository);
container.registerSingleton<IPostRepository>("postRepository", PostRepository);
container.registerSingleton<ICommentRepository>(
  "commentRepository",
  CommentRepository
);
