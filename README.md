
# Criar Backend para cadastro de clientes

Siga as fases corretamente, evite pular etapas.

**Fase 1**  [✅](https://emojipedia.org/check-mark-button/)

- Crie um projeto em node.js, com express.
- Crie as rotas 
	 - [x] /api/inserir
	 - [x] /api/editar
	 - [x] /api/excluir
	 - [x] /api/atualizar

Documentação Express: https://expressjs.com/pt-br/

Rotas com o Express: https://expressjs.com/pt-br/starter/basic-routing.html

*Após concluir a atividade, subir o projeto aqui no git*

**Fase 2**  [✅](https://emojipedia.org/check-mark-button/)

- Configure o postgres no seu projeto, ultilizando a biblioteca sequelize. https://sequelize.org/
- Crie um model com o nome cliente e os campos, Nome, Telefone, E-mail, Cep, Rua, Bairro.


***Observações:***

O Sequelize não cria o banco de dados automaticamente, utilize o dbeaver para criar o banco.
A tabela é criada automaticamente pelo sequelize, através dos models.

Divirta-se

**Fase 3**  [✅](https://emojipedia.org/check-mark-button/)

Nessa fase vamos começar a ultilizar a orientação de objetos, lembre-se dos conceitos que aprendeu ao criar a conexão do sequelize.

- No caminho **src/routes** crie o arquivo **clientes.route.js**
- Remova as rotas da classe principal e coloque na classe  **clientes.route.js**
- Importe as rotas para a classe principal.

O objetivo aqui, é que você aprenda importar e exportar classes em JavasCript e a pesquisar um pouco sobre como fazer as tarefas, por esse motivo não vou incluir nenhum tutorial.

**Fase 4** [✅](https://emojipedia.org/check-mark-button/)

Agora é hora de trabalhar com as operações no banco de dados, as rotas criadas na fase 1, deverão realizar as seguintes ações:
	 - [x] /api/inserir -> Inserir o cliente na base de dados (Altere a rota para POST)
	 - [x] /api/editar -> Atualizar um cliente na base de dados (Altere a rota para PUT)
	 - [x] /api/excluir -> Excluir um cliente da base de dados
> 	 - [x] /api/atualizar

A rota atualizar está incorreta, altere para `/api/obter`, ao acessar essa rota devera ser listado todos os clientes da base de dados.

**Fase 5** [✅](https://emojipedia.org/check-mark-button/)

Agora vamos realizar as validações na API, nesse momento revise seu model de cliente,  valide se ele possui os seguintes campos: ` Nome, Telefone, E-mail, Cep, Rua, Bairro.`

Os campos nome, telefone, e-mail são obrigatórios, ao fim dessa fase seu sistema deverá barrar requisições para inserir e para atualizar o cliente, caso não possua as informações obrigatórias.

**Fase 6**

- Criar uma tabela de endereços dos clientes, um cliente pode ter vários endereços.
- Atualizar a rota de obter clientes, o retorno deve vim com todos os endereços cadastrados do cliente.
- Ao salvar/atualizar/excluir, as operações devem ser refletidas na tabela de endereços.

Ex:

Apagou cliente, os endereços relacionados a ele devem ser apagados. Atualizou cliente os endereços devem ser atualizados..

