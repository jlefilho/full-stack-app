import { User } from "../../../../core/interfaces/User";
import { UserRepository } from "../../data/repositories/user.repository";

export class UserService {
  userRepository = new UserRepository();
  async listAll(): Promise<User[]> {
    return this.userRepository.list();
  }

  async getById(id: string): Promise<User> {
    return this.userRepository.getBy({ id });
  }

  async createOrUpdate(user: Partial<User>): Promise<User> {
    return this.userRepository.createOrUpdate(user);
  }

  async delete(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
