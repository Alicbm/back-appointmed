import { DataSource } from "typeorm";
import { GeneralMedicineEntity } from "../entities/GeneralMedicine.entity";
import { GynecologyEntity } from "../entities/Gynecology.entity";
import { OdontologyEntity } from "../entities/Odontology.entity";
import { OptometryEntity } from "../entities/Optometry.entity";
import { PediatricsEntity } from "../entities/Pediatrics.entity";
import { PsychiatryEntity } from "../entities/Psychiatry.entity";

const connectDB = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "admin",
  database: "appointmed",
  synchronize: true,
  entities: [
    GeneralMedicineEntity,
    GynecologyEntity,
    OdontologyEntity,
    OptometryEntity,
    PediatricsEntity,
    PsychiatryEntity,
  ],
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
