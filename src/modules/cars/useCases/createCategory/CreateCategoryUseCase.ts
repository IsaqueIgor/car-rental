import { ICategoriesrepository } from "../../repositories/ICategoriesRepository"

interface  IRequest {
  name: string
  description: string
}

class CreateCateroryUseCase  {
  constructor(private categoriesRepository: ICategoriesrepository) {}

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

export { CreateCateroryUseCase }
