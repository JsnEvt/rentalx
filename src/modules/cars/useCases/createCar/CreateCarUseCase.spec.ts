import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'
import { CreateCarUseCase } from './CreateCarUseCase'

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('create car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
  })
  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'name car',
      description: "description car",
      daily_rate: 100,
      license_plate: 'ZZZ-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category'

    })
    expect(car).toHaveProperty('id')
  })


  it('should not be able to create a car with license_plates`s exists', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'CarZ1',
        description: "description carZ1",
        daily_rate: 100,
        license_plate: 'ZZZ-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'category'

      })
      await createCarUseCase.execute({
        name: 'CarZ',
        description: "description carZ",
        daily_rate: 100,
        license_plate: 'ZZZ-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'category'

      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Available',
      description: "description car avilable",
      daily_rate: 100,
      license_plate: 'ZZZ-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category'
    })

    console.log(car)
    expect(car.available).toBe(true)
  })
})