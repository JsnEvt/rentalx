RF - **Requisitos funcionais**
RNF - **Requisitos não funcionais**
RN - **Regras de negócio**

# Cadastro de carros

**RF**
Deve ser possível cadastrar um novo carro
<!-- Deve ser possível listar todas as categorias. -->

<!-- **RNF** -->
**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.

O carro deve ser cadastrado por padrão como disponível.
 * Não deve ser possível qualquer pessoa cadastrar um carro, apenas um usuário administrador
A linha acima trataremos no controller.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pela categoria
Deve ser possível listar todos os carros disponíveis pela marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema para visualizar a página.

# Cadastro de especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro


**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
Não deve ser possível qualquer pessoa cadastrar um carro, apenas um usuário administrador

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro

**RNF**
Utitlizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
Não deve ser possível qualquer pessoa cadastrar um carro, apenas um usuário administrador

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
O usuario deve estar logado na aplicacao

