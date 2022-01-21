import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCateroryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = new CategoriesRepository()

const createCategoryUseCase = new CreateCateroryUseCase(categoriesRepository)

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

export { createCategoryController }
