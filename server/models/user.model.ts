import { mongoose, pre, prop, getModelForClass } from "@typegoose/typegoose";
import bcrypt from "bcrypt";

@pre<User>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    return next();
  }
})
export class User {
  @prop({ required: true })
  firstname: string;
  @prop({ required: true })
  lastname: string;
  @prop({ required: true, unique: true })
  username: string;
  @prop({ required: true, unique: true })
  email: string;
  @prop({ required: true })
  password: string;
}
export const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
  },
});
