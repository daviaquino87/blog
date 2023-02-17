import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { userBuilder } from "../../repositories/in-memory/seed/UserSeed";

var userRepositoryInMemory: UserRepositoryInMemory;
var createUserUseCase: CreateUserUseCase;
var faker = userBuilder.generate();

describe("User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able possible to save a new user", async () => {
    const user = {
      name: faker.name,
      email: faker.email,
      password: faker.password,
    };
    await createUserUseCase.execute(user);

    expect(userRepositoryInMemory.users).toHaveLength(1);
    expect(userRepositoryInMemory.users[0].name).toEqual(user.name);
  });
});
