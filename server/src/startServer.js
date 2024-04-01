import express from "express";
import helmet from "helmet";
import { createServer } from "http";
import { sequelize, testConn } from "./database/initDB.js";
import { setupRoutes } from "./routes/index.js";
import cors from "cors"

const app = express();

app.use(helmet());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}))

export default async function (port) {
  try {
    await testConn();
    await sequelize.sync({ force: true });

    setupRoutes(app);

    const server = createServer(app);

    server.listen(port, () => {
      console.log("server is active on port:", port);
    });
  } catch (e) {
    throw e;
  }
}
