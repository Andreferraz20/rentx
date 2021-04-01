import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  findByName(name: string): Promise<Category> {
    const category;
  }
  list(): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
