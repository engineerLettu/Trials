import { configDotenv } from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js'


configDotenv();
const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials:  true,
}));
app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});