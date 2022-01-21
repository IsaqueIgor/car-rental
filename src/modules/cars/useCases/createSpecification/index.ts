import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "../createSpecification/CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";


const speficiationRepository = new SpecificationRepository()

const createSpecificationUseCase = new CreateSpecificationUseCase(speficiationRepository)

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
)

export { createSpecificationController }
