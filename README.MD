# Documentação
Teste automatizado com Cypress de um cenário de cadastro para o desafio chapter IV do bootcamp Agilizei.

![chapteriv (2)](https://user-images.githubusercontent.com/58441306/144939230-3a52c6f9-487d-4a51-834d-d972b397056a.gif)

Link do report: https://vinicyusmarques.github.io/desafio-chapteriv/

## Instalando as dependências e execução

A instalação a seguir será referente ao sistema operacional Ubuntu 20.04

1. Instalar a linguagem (Node.js) que contempla o gerenciador de pacotes (NPM): https://nodejs.org

2. Na raiz do projeto, execute para realizar a instalação do projeto e dependências:

```javascript
npm install
```
3. Execute o teste automatizado em modo headless:
```javascript
npm run cy:run
```
4. Execute o comando a seguir para mesclar as saídas das spec em um único arquivo:

```javascript
npm run report:merge
```
5. Execute o comando a seguir para gerar o relátorio em html dos resultados mergeados:

```javascript
npm run report:mocha
```
6. Após a geração do relatório, execute o comando a seguir para excluir do projeto a sujeira da execução do teste:

```javascript
npm run report:clean
```
7. É possivel executar o teste em modo interativo:

```javascript
npm run cy:open
```
___
Made with by [Vinicyus Marques](https://github.com/vinicyusmarques).
