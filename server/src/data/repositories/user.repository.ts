import { User } from "../../../../core/interfaces/User";
import { v4 as uuidv4 } from "uuid";
import sql from "../../db/db";

export class UserRepository {
  async list() {
    return await sql`SELECT * FROM users`;
  }

  async getById(id: string) {
    return await sql`SELECT * FROM users WHERE id = ${id} LIMIT 1`;
  }

  async create(user: Partial<User>) {
    const uuid = uuidv4();

    return await sql`INSERT INTO users (id, first_name, last_name, email, phone, birthday) VALUES (${uuid}, ${user.firstName}, ${user.lastName}, ${user.email}, ${user.phone}, ${user.birthday}) RETURNING *`;
  }

  async update(id: string, user: Partial<User>) {
    const { firstName, lastName, email, phone, birthday } = user;

    return await sql`UPDATE users SET first_name = ${firstName}, last_name = ${lastName}, email = ${email}, phone = ${phone}, birthday = ${birthday} WHERE id = ${id} RETURNING *`;
  }

  async delete(id: string) {
    return await sql`DELETE from users WHERE id = ${id}`;
  }
}
