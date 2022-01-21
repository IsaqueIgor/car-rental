import { Category } from "../../model/Category";
import { ICategoriesrepository } from "../../repositories/ICategoriesRepository"

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesrepository) {}

  execute(): Category[]{
    const categories = this.categoriesRepository.listAll()

    return categories;
  }
}

export { ListCategoriesUseCase }
