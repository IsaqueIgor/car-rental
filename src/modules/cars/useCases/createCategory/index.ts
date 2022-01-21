import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCateroryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance()

const createCategoryUseCase = new CreateCateroryUseCase(categoriesRepository)

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

export { createCategoryController }
