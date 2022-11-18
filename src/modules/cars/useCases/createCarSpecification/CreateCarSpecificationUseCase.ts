import { ISpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/ISpecificationRepository'
import { ICarRepository } from '@modules/cars/repositories/ICarRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  car_id: string,
  specifications_id: string[],
}

// @injectable()
class CreateCarSpecificationUseCase {

  constructor(
    // @inject('CarRepository')
    private carsRepository: ICarRepository,
    private specificationsRepository: ISpecificationsRepository

    // DOIS PRIVATES VISTO QUE SAO DUAS TABELAS DE RELACAO MUITOS PARA MUITOS
  ) { }
  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id)
    if (!carExists) {
      throw new AppError('Car does not exists!')
    }
    const specifications = await this.specificationsRepository.findByIds(specifications_id)
    carExists.specifications = specifications
    await this.carsRepository.create(carExists)
    console.log(carExists)
  }
}

export { CreateCarSpecificationUseCase }