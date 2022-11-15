import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken'
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/entities/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError("Token missing", 401)
  }
  //Pegando o token atraves do Bearer informado na aba Bearer do Insomnia
  const [, token] = authHeader.split(' ')
  try {
    const { sub: user_id } = verify(token, 'aa3f6d22019326d5f4b7c580473f1a8d') as IPayload
    //o sub veio como resposta da requisicao do Insomnia na aba Bearer
    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(user_id)
    if (!user) {
      throw new AppError('User does not exists!', 401)
    }

    request.user = {
      id: user_id
    }

    next()
  } catch (e) {
    throw new AppError('Invalid token!', 401)
  }
}