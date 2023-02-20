import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

import { userBuilder } from "../../repositories/in-memory/seed/UserSeed";
import { AppError } from "../../../../shared/error/AppError";

var userRepositoryInMemory: UserRepositoryInMemory;
var createUserUseCase: CreateUserUseCase;
var faker = userBuilder.generate(2);

describe("User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able possible to save a new user", async () => {
    const user = faker.shift();

    await createUserUseCase.execute(user);

    expect(userRepositoryInMemory.users).toHaveLength(1);
    expect(userRepositoryInMemory.users[0].name).toEqual(user.name);
  });

  it("should not be able possible to save a user with email already saved", async () => {
    const user = faker.shift();

    await createUserUseCase.execute(user);

    expect(async () => {
      await createUserUseCase.execute(user);
    }).rejects.toBeInstanceOf(AppError);
  });
});
