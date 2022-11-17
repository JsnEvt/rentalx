//usado com o TSyringe para injecao de dependencias.

import { container } from 'tsyringe'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { ICategoriesRepository } from '@modules/cars/infra/typeorm/repositories/ICategoriesRepository'
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { ISpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/ISpecificationRepository'
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationRepository'
import { ICarRepository } from '@modules/cars/repositories/ICarRepository'
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository'


//passando a interface ICategoryRepository para dentro do singleton
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

//InterfaceSpecificatiions
container.registerSingleton<ISpecificationsRepository>(
  "SpecifcationsRepository",
  SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<ICarRepository>(
  'CarsRepository',
  CarsRepository
)