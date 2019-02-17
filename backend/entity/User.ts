import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User extends BaseEntity {

	@PrimaryGeneratedColumn()
	Id: number;

	@Column({
		type: 'varchar',
		unique: true
	})
	Email: string;

	@Column({
		type: 'varchar',
		unique: true
	})
	Username: string;

	@Column({ type: 'varchar' })
	Name: string;

	@Column({ type: 'varchar' })
	HashedPassword: string;

	@Column({ type: 'varchar' })
	Type: string;

}