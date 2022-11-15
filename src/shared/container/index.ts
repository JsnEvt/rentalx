//usado com o TSyringe para injecao de dependencias.

import { container } from 'tsyringe'
import { UsersRepository } from '../../modules/accounts/entities/repositories/implementations/UsersRepository'
import { IUsersRepository } from '../../modules/accounts/entities/repositories/IUsersRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationRepository'


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