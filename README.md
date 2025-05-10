# CIRCULUS - Programa de Afiliados

Site institucional responsivo para o Programa de Afiliados CIRCULUS, projetado para fornecer informações transparentes e envolventes sobre níveis de afiliados e estruturas de comissões.

## Principais Recursos

- Página de destino interativa com componentes dinâmicos
- Calculadora de comissão interativa
- Seção de depoimentos
- Linha do tempo visual do processo de afiliação
- Design responsivo e acessível com modo escuro/claro
- Suporte à internacionalização

## Tecnologias

- React.js (frontend)
- TypeScript
- Tailwind CSS
- Express.js (backend)
- Princípios de design responsivo
- Suporte à internacionalização

## Documentação

Este projeto inclui documentação detalhada para os diferentes aspectos do desenvolvimento e implantação:

- [Guia de Desenvolvimento](./DEVELOPMENT.md) - Instruções completas para configuração do ambiente de desenvolvimento local
- [Configuração do Git](./GIT_SETUP.md) - Instruções passo a passo para configurar o Git e enviar o código para o GitHub
- [Guia de Deploy](./DEPLOY.md) - Instruções detalhadas para fazer o deploy no Vercel

## Deploy no Vercel

### Pré-requisitos

- Conta no Vercel
- Git instalado
- Node.js instalado

### Passos para deploy

1. Faça o fork ou clone este repositório para sua conta no GitHub/GitLab/Bitbucket
2. Faça login na sua conta Vercel
3. Clique em "New Project"
4. Importe o repositório
5. Configure a variável de ambiente nas configurações do projeto:
   - `NODE_ENV`: Defina como "production"
6. Clique em "Deploy"

### Notas adicionais

- O formulário de registro redireciona automaticamente para o WhatsApp quando um novo afiliado se cadastra
- Não é necessária nenhuma configuração adicional para notificações, pois são tratadas diretamente pelo cliente
- O site é totalmente responsivo, funcionando bem em dispositivos móveis e desktop

## Exportação do Projeto

Para exportar o projeto para desenvolvimento local:

1. Execute o script `export-project.sh`
2. Faça download do arquivo ZIP gerado
3. Descompacte em seu ambiente local e siga as instruções em [DEVELOPMENT.md](./DEVELOPMENT.md)

## Desenvolvimento local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor de desenvolvimento estará disponível em http://localhost:5000