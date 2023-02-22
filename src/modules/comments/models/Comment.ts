import { Replace } from "@helpers/Replace";
import { randomUUID } from "node:crypto";

interface ICommentProps {
  userId: string;
  postId: string;
  text: string;
  created_at: Date;
}

export class Comment {
  private _id: string;
  private props: ICommentProps;

  constructor(
    props: Replace<ICommentProps, { created_at?: Date }>,
    id?: string
  ) {
    this._id = randomUUID() ?? id;
    this.props = { ...props, created_at: props.created_at ?? new Date() };
  }

  public get id(): string {
    return this._id;
  }

  public set userId(uuid: string) {
    this.props.userId = uuid;
  }

  public get userId(): string {
    return this.props.userId;
  }

  public set postId(uuid: string) {
    this.props.postId = uuid;
  }

  public get postId(): string {
    return this.props.postId;
  }

  public set text(text: string) {
    this.props.text = text;
  }

  public get text(): string {
    return this.props.text;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }
}
