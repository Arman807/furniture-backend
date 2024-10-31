import express, { Application, Request, Response } from 'express'
import cors from 'cors'

export const app: Application = express()

app.use(express.json())
app.use(cors())
app.get('/', (req: Request, res: Response) => {
  const a = 10

  res.send('Hello World!')
})
