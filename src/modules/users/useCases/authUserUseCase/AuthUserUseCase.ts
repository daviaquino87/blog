import { IUserRepository } from "@modules/users/repositories/interface/IUserRepository";
import { IAuthUserDTO } from "@modules/users/dtos/IAuthUserDTO";
import { compare } from "bcrypt";
import { AppError } from "@errors/AppError";
import { sign } from "jsonwebtoken";

interface IResponse {
  user: {
    id: string;
    name: string;
  };
  token: string;
}

export class AuthUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute({ email, password }: IAuthUserDTO): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Incorrect email or password", 401);
    }

    const verifyPass = compare(user.password, password);

    if (!verifyPass) {
      throw new AppError("Incorrect email or password", 401);
    }

    const token = sign({ userId: user.id }, process.env.JWT_PASS || "", {
      expiresIn: "1h",
    });

    const authUser: IResponse = {
      user: {
        id: user.id,
        name: user.name,
      },
      token: token,
    };

    return authUser;
  }
}
