import { User } from "../../../../core/interfaces/User";
import { v4 as uuidv4 } from "uuid";

export class UserRepository {
  async list() {
    return [{} as User];
  }

  async getBy(filter: { id: string }) {
    return { id: filter.id } as User;
  }

  async createOrUpdate(user: Partial<User>): Promise<User> {
    // const [userInstance, _] = await UserTable.upsert({
    //   id: user.id || uuidv4(),
    //   ...user,
    // });
    // return userInstance;
    return {} as User;
  }

  async delete(id: string): Promise<void> {
    return;
  }
}
