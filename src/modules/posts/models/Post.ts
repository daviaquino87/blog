import { randomUUID } from "node:crypto";
import { Replace } from "@helpers/Replace";

interface IPostProps {
  userId: string;
  title: string;
  content: string;
  created_at: Date;
}

export class Post {
  private _id: string;
  private props: IPostProps;

  constructor(props: Replace<IPostProps, { created_at?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
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

  public set title(title: string) {
    this.props.title = title;
  }

  public get title(): string {
    return this.props.title;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }
}
