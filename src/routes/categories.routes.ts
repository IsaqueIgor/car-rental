import { Router, Request, Response } from 'express'

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/' , (request: Request, response: Response) => {
  const { name , description } = request.body

  const categoryAlreadyExists = categoriesRepository.findByName(name)

  if(categoryAlreadyExists){
    return response.status(400).json({
      error: `Category ${name} Already exists!`
    })
  }

  categoriesRepository.create({
    description: description,
    name: name
  })

  return response.status(201).send()
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const repo = categoriesRepository.listAll()

  return response.status(201).json(repo)
})

export {categoriesRoutes}
