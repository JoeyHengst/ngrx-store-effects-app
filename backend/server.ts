import * as express from "express";
import * as cors from "cors";
import { ProductController } from "./controllers";

const app: express.Application = express();
const port: any = process.env.PORT || 9090;

app.use("/api", ProductController);
app.use(cors);
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
