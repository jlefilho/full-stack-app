import { User } from "../../../../core/interfaces/User";
import { v4 as uuidv4 } from "uuid";
import sql from "../../db/db";

export class UserRepository {
  async list() {
    return await sql`SELECT * from users`;
  }

  async getById(id: string) {
    return await sql`SELECT * from users WHERE id="${id}"`;
  }

  async create(user: Partial<User>) {
    const uuid = uuidv4();

    return await sql`INSERT INTO users (id, first_name, last_name, email, phone, birthday) VALUES (${uuid}, ${user.firstName}, ${user.lastName}, ${user.email}, ${user.phone}, ${user.birthday})`;
  }

  async update(user: Partial<User>): Promise<User> {
    // const [userInstance, _] = await UserTable.upsert({
    //   id: user.id || uuidv4(),
    //   ...user,
    // });
    // return userInstance;
    return {} as User;
  }

  async delete(id: string) {
    return await sql`DELETE from users WHERE id="${id}"`;
  }
}
