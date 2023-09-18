import mongoose from 'mongoose'

export const mongoConnect = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/?retryWrites=true&w=majority')
    console.log('db is connected')
  } catch (error) {
    console.log(error)
  }
}