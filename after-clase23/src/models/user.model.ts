import mongoose, { Model, Schema } from "mongoose";
import { UserInterface } from "../interfaces/user.interface";

const userCollection: string = 'user'

const userSchema:Schema<UserInterface> = new mongoose.Schema<UserInterface>({
  name: String,
  lastname: String
})

export const Users: Model<UserInterface> = mongoose.model(userCollection, userSchema)