import { User } from "@modules/users/models/User";
import { TypeormUser } from "@shared/infra/typeorm/entities/TypeormUser";

export class TypeormUserMapper {
  public static toTypeorm(user: User): TypeormUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      created_at: user.created_at,
    };
  }
  public static toApplication(user: TypeormUser): User {
    return new User(
      {
        name: user.name,
        email: user.email,
        password: user.password,
        created_at: user.created_at,
      },
      user.id
    );
  }
}
