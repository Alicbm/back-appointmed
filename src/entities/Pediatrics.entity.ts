import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "PEDIATRICS", synchronize: false })
export class PediatricsEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  typeService: string;

  @Column()
  registryNumber: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  eps: string;

  @Column()
  department: string;

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
  patientStatus: string;

  @Column()
  status: string;
}
