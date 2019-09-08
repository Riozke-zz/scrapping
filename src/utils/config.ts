import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "test":
    path = `@root/.env`;
    break;
  case "production":
    path = `@root/.env.production`;
    break;
  default:
    path = `@root/.env.development`;
}
dotenv.config({ path: path });

export const API_URL = process.env.API_URL;
