import express, {Express} from 'express'
import { router } from './router'
import { mongoConnect } from './db'

const app: Express = express()

app.use(express.json())

mongoConnect()

router(app)

app.listen(3000, () => {
  console.log(3000)
})