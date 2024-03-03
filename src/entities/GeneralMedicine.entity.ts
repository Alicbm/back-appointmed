import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'GENERAL_MEDICINE', synchronize: false })
export class GeneralMedicineEntity {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  typeService: string;

  @Column()
  registryNumber: number;

  @Column()
  firsName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  eps: string;

  @Column()
  departament: string;

  @Column()
  city: string;

  @Column()
  medicalCenter: string;

  @Column()
  date: string;

  @Column()
  hour: string;

  @Column()
  doctor: string;

  @Column()
  fileNumber: number;
}
