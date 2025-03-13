import { User } from "../../../../core/interfaces/User";
import { UserRepository } from "../../data/repositories/user.repository";

export class UserService {
  userRepository = new UserRepository();
  async listAll(): Promise<User[] | null> {
    const users = await this.userRepository.list();
    if (!users) return null;
    return users.map((user: Record<string, any>) => UserService.toUser(user));
  }

  async getById(id: string): Promise<User | null> {
    const user = await this.userRepository.getById(id);
    if (!user) return null;
    return UserService.toUser(user[0]);
  }

  async create(user: Partial<User>): Promise<User | null> {
    const userTable = await this.userRepository.create(user);
    if (!user) return null;
    return UserService.toUser(userTable[0]);
  }

  async update(id: string, user: Partial<User>): Promise<User | null> {
    const userTable = await this.userRepository.update(id, user);
    console.log(userTable);
    if (!user) return null;
    return UserService.toUser(userTable[0]);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  static toUser(user: Record<string, any>): User {
    return {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone,
      birthday: user.birthday,
    };
  }
}
