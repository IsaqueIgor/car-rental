import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface  IRequest {
  name: string
  description: string
}

class CreateSpecificationervice  {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({name,description}: IRequest): void{
    const specificationAlreadyExist = this.specificationRepository.findByName(name)

    if(specificationAlreadyExist){
      throw new Error('Specification already exists!')
    }

    this.specificationRepository.create({
      description: description,
      name: name
    })
  }
}


export { CreateSpecificationervice }
