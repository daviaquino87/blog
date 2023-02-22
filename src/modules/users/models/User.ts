import { Replace } from "@helpers/Replace";
import { randomUUID } from "node:crypto";

interface IUserProps {
  name: string;
  email: string;
  password: string;
  created_at: Date;
}

export class User {
  private _id: string;
  private props: IUserProps;

  constructor(props: Replace<IUserProps, { created_at?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = { ...props, created_at: props.created_at ?? new Date() };
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }
}
