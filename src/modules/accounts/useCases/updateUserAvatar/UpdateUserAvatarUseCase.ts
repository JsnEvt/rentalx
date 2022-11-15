
//neste caso, estamos considerando o avatar como um elemento que fica no storage do sitema/browser

import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../entities/repositories/IUsersRepository'

//Adicionar coluna avatar na tabela de users
//Refatorar usuario com coluna avatar
//Configuracao do upload Multer
//Criar a regra de negocio do upload
//Criar controller

interface IRequest {
  user_id: string
  avatar_file: string
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id)
    user.avatar = avatar_file

    await this.usersRepository.create(user)


  }
}

export { UpdateUserAvatarUseCase }