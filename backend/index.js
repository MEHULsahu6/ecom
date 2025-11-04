import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

// Connect to database
connectDb()

const app = express()

app.use(express.json({ limit: '10mb' }))
app.use(cookieParser())
app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "http://localhost:5174", 
      "https://ecom-three-sigma.vercel.app",
      "https://ecom-eight-roan.vercel.app",
      "https://ecom-backend.vercel.app"
    ],
    credentials: true,
  })
)

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' })
})

// Routes
app.get('/', (req, res) => res.send('Hello World!'));
 
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})


export default app
