import { Router, Request, Response } from 'express'

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCateroryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/' , (request: Request, response: Response) => {
  const { name , description } = request.body

  const createCategoryService = new CreateCateroryService(categoriesRepository)

  createCategoryService.execute({ description, name })

  return response.status(201).send()
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const repo = categoriesRepository.listAll()

  return response.status(201).json(repo)
})

export {categoriesRoutes}
