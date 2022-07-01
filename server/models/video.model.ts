import { pre, prop, mongoose, getModelForClass } from "@typegoose/typegoose";

export class Video {
  @prop({ required: true })
  public name: string;
  @prop({ required: true })
  public videoId: string;
  @prop({ required: true, default: "This is a random description" })
  public description: string;
  @prop({ required: true, default: "This is a random thumbnail" })
  public thumbnail: string;
}

export const videoModel = getModelForClass(Video, {
  schemaOptions: {
    timestamps: true,
  },
});
