import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { carsRoutes } from './car.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './user.routes';

const router = Router()

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes)
router.use('/cars', carsRoutes)
//para que nao apareca na barra de enderecamento a informacao de "autenticacao/sessao...", 
//informaremos diretamente a rota chamada:
router.use(authenticateRoutes)

export { router }