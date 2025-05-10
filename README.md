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
- Princípios de design responsivo
- Suporte à internacionalização

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
5. Configure as seguintes variáveis de ambiente nas configurações do projeto:
   - `EMAIL_SERVICE`: Serviço de email (por exemplo, gmail)
   - `EMAIL_USER`: Seu endereço de email para envio de notificações
   - `EMAIL_PASSWORD`: Senha do app (para Gmail, gere uma senha de app específica)
   - `EMAIL_RECIPIENT`: Email para receber as notificações de novos cadastros
   - `NODE_ENV`: Defina como "production"
6. Clique em "Deploy"

### Notas adicionais

- O formulário de registro envia emails de notificação quando novos afiliados se cadastram
- Certifique-se de configurar corretamente as variáveis de ambiente para habilitar o envio de emails
- O site é totalmente responsivo, funcionando bem em dispositivos móveis e desktop

## Desenvolvimento local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor de desenvolvimento estará disponível em http://localhost:5000