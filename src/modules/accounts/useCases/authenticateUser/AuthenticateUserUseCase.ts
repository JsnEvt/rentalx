import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'
import { AppError } from '@shared/errors/AppError'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'


interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string,
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    //Usuario existe
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email or password incorrect')
    }
    const passwordMatch = await compare(password, user.password)

    //Senha correta ?
    if (!passwordMatch) {
      throw new AppError('Email ou password incorrect')
    }
    //Gerar jsonwebtoken
    const token = sign({}, 'aa3f6d22019326d5f4b7c580473f1a8d', {
      subject: user.id,
      expiresIn: '1d'
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }
    return tokenReturn

  }
}

export { AuthenticateUserUseCase }