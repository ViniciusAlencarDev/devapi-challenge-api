# CHALLENGE API 🚀

### API REST, utilizando padrões arquiteturais para melhor estrutura

## Por que usei o Express? 🤔
### Utilizei o Express para facilitar o desenvolvimento, mantendo a aplicação leve e focada. Oferecendo as funcionalidades essenciais que precisamos, sem a complexidade de soluções mais robustas, garantindo uma performance otimizada e evitando overengineering.


# Setup

### Preparando a base de dados com Docker, criando diretamente sem usar o Dockerfile
```
docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=pswd mongo
```

### Preencher as variáveis de ambiente
```
Seguindo o arquivo .env.example, criar um arquivo .env e colocar os campos e preencher/alterar.

.env
.env.example
```

### Instalar as dependencias
```
yarn install
```
### Transpilar de Typescript para Javascript
```
yarn build
```
### Alimentar a base de dados com algumas informações
```
yarn populate
```
### Rodar a aplicação como desenvolvimento
```
// dev
yarn dev
```
### Ou
### Rodar a aplicação como produção
```
yarn start
```

## Usando docker 🐳
```
// dev
docker-compose -f "docker-compose.dev.yaml" up -d --build
```
### Ou
```
docker-compose -f "docker-compose.yaml" up -d --build
```

## Rodar os testes automatizados
```
yarn test
```

## Acessar a aplicação
### http://localhost:3000

## Documentação
### http://localhost:3000/docs

# Considerações finais 🚀
Nessa API foi desenvolvido funcionalidades usadas para aplicações que requer escalabilidade, baixo acoplamento, utilizando padrões arquiteturais, buscando alta qualidade. Espero que tenha gostado 😊
