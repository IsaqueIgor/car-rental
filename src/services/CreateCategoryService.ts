import { CategoriesRepository } from "../repositories/CategoriesRepository"

interface  IRequest {
  name: string
  description: string
}

class CreateCateroryService  {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({name,description}: IRequest): void{
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if(categoryAlreadyExists){
      throw new Error (`Category ${name} Already exists!`)
    }

    this.categoriesRepository.create({
      description: description,
      name: name
    })
  }
}


export { CreateCateroryService }
