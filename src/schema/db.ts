import { DataSource } from "typeorm";
import { GeneralMedicineEntity } from "../entities/GeneralMedicine.entity";
import { User } from "../entities/User";

const connectDB = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "admin",
  database: "appointmed",
  synchronize: true,
  entities: [User, GeneralMedicineEntity],
  // logging: false,
  // subscribers: [],
  // migrations: [],
});

connectDB
  .initialize()
  .then(() => {
    console.log("DB inizialized succesfully!");
  })
  .catch((err) => {
    console.log("There are problems with the DB: ", err);
  });

export default connectDB;
