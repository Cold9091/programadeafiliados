# Guia de Desenvolvimento Local

Este guia contém instruções detalhadas para configurar o ambiente de desenvolvimento local para o site do Programa de Afiliados CIRCULUS.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Git](https://git-scm.com/)

## Configuração Inicial

1. Clone o repositório:

```bash
git clone git@github.com:Cold9091/programadeafiliados.git
cd programadeafiliados
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse o site em `http://localhost:5000`

## Estrutura do Projeto

O projeto segue uma estrutura organizada:

- `/client/src` - Código-fonte do frontend
  - `/components` - Componentes React reutilizáveis
  - `/pages` - Páginas do site
  - `/lib` - Utilitários e funções auxiliares
  - `/hooks` - Custom hooks React
  - `/assets` - Imagens e recursos estáticos
- `/server` - Código-fonte do backend
- `/shared` - Esquemas e tipos compartilhados
- `/api` - Funções serverless para o Vercel

## Principais Comandos

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói o projeto para produção
- `npm run check` - Verifica os tipos TypeScript

## Fluxo de Trabalho de Desenvolvimento

1. Crie um branch para sua feature:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

2. Faça suas alterações e adicione commits:
   ```bash
   git add .
   git commit -m "Adiciona nova funcionalidade"
   ```

3. Envie o branch para o GitHub:
   ```bash
   git push origin feature/nova-funcionalidade
   ```

4. Crie um Pull Request no GitHub

## Deploy no Vercel

Para fazer o deploy no Vercel:

1. Envie suas alterações para o GitHub:
   ```bash
   git push origin main
   ```

2. Acesse [https://vercel.com](https://vercel.com) e faça login
3. Clique em "New Project" e selecione o repositório
4. Configure a variável de ambiente:
   - `NODE_ENV`: Defina como "production"
5. Clique em "Deploy"

## Pontos Importantes

- As notificações de novos cadastros são enviadas automaticamente por WhatsApp
- Não modifique a estrutura dos caminhos em `/client/src` pois isso pode quebrar as importações
- Mantenha os componentes de UI consistentes com o design system existente