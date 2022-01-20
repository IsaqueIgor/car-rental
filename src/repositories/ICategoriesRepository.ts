import { Category } from "../model/Category";

interface ICreateCategoryDto {
  name: string
  description: string
}

interface ICategoriesrepository {
  findByName(name: string): Category;
  listAll(): Category[]
  create({ name , description }: ICreateCategoryDto): void
}

export { ICategoriesrepository, ICreateCategoryDto }
