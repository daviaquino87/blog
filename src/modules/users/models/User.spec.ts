import { User } from "./User";
import { userBuilder } from "@modules/users/repositories/in-memory/seed/UserSeed";

describe("User", () => {
  it("should be able possible to create a new user", () => {
    const faker = userBuilder.generate();

    const user = new User({
      name: faker.name,
      email: faker.email,
      password: faker.password,
    });
    expect(user).toBeTruthy();
  });
});
