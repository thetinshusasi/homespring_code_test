
import * as dotenv from "dotenv";
dotenv.config();

import * as express from "express";
import * as cors from "cors";
import helmet from "helmet";
import rootRouter from "./routes";

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", rootRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app