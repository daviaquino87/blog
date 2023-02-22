import "dotenv/config";
import { UserRepositoryInMemory } from "@modules/users/repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "@modules/users/useCases/createUser/CreateUserUseCase";
import { AuthUserUseCase } from "./AuthUserUseCase";
import { userBuilder } from "@modules/users/repositories/in-memory/seed/UserSeed";
import { verify } from "jsonwebtoken";

var userRepositoryInMemory: UserRepositoryInMemory;
var createUserUseCase: CreateUserUseCase;
var authUserUseCase: AuthUserUseCase;
var faker = userBuilder.generate();

interface JwtPlaylod {
  userId: string;
}

describe("Auth User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    authUserUseCase = new AuthUserUseCase(userRepositoryInMemory);
  });
  it("should be able to authenticate a valid user", async () => {
    const user = faker;

    await createUserUseCase.execute(user);

    const userAuth = await authUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    const userId = verify(
      userAuth.token,
      process.env.JWT_PASS || ""
    ) as JwtPlaylod;

    expect(userAuth).toHaveProperty("token");
    expect(userId.userId).toEqual(userRepositoryInMemory.users[0].id);
  });
});
