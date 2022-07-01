import { User, UserModel } from "../models/user.model";

export async function createUserService({
  username,
  password,
  firstname,
  lastname,
  email,
}: User) {
  const user = await UserModel.create({
    username,
    firstname,
    lastname,
    email,
    password,
  });
}
