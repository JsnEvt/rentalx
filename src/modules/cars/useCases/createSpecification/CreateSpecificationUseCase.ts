import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ISpecificationsRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string,
  description: string,
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecifcationsRepository")
    private specificationRepository: ISpecificationsRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name)
    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists!")
    }
    await this.specificationRepository.create({ name, description })

  }
}

export { CreateSpecificationUseCase }