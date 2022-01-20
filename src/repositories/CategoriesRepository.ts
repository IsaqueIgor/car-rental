import { Category } from "../model/Category";
import { ICategoriesrepository, ICreateCategoryDto } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesrepository {

  private categories: Category[]

  constructor(){
    this.categories = [];
  }

  create({ name , description }: ICreateCategoryDto): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
  })

    this.categories.push(category)
  }

  listAll(): Category[] {
    return this.categories
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name)

    return category
  }
}

export { CategoriesRepository }
