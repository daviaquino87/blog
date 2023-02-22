import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  console.log("connection generate");
});
