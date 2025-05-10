# Guia de Deploy no Vercel

Este documento fornece instruções detalhadas para o deploy do Programa de Afiliados CIRCULUS no Vercel.

## Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Repositório Git (GitHub, GitLab ou Bitbucket)
- Código do projeto enviado para o repositório

## Passos para o Deploy

### 1. Preparação do Código

Certifique-se de que seu código está atualizado no GitHub:

```bash
# Adicionar todas as alterações
git add .

# Commit das alterações
git commit -m "Preparação para deploy"

# Enviar para o GitHub
git push origin main
```

### 2. Deploy no Vercel

1. Acesse [https://vercel.com](https://vercel.com) e faça login
2. Clique no botão "New Project"
3. Importe o repositório do GitHub:
   - Encontre "Cold9091/programadeafiliados" na lista
   - Clique em "Import"
4. Configure o projeto:
   - **Framework Preset**: Deixe como "Other"
   - **Root Directory**: Deixe como "/"
   - **Build Command**: Pode deixar o padrão
   - **Output Directory**: Deixe como "dist/public"
   - **Environment Variables**: Adicione `NODE_ENV=production`
5. Clique em "Deploy"

### 3. Verificação do Deploy

1. Aguarde o processo de build e deploy terminar
2. O Vercel fornecerá um URL para acessar seu site (geralmente algo como `programadeafiliados.vercel.app`)
3. Verifique se o site está funcionando corretamente, teste o formulário de cadastro

### 4. Configuração de Domínio Personalizado (Opcional)

1. Na dashboard do projeto no Vercel, vá para a aba "Domains"
2. Clique em "Add Domain"
3. Siga as instruções para configurar seu domínio personalizado

### 5. Monitoramento e Logs

Para monitorar seu site e verificar logs:

1. Na dashboard do projeto no Vercel, vá para a aba "Deployments"
2. Selecione o deployment desejado
3. Navegue para a aba "Logs" para ver os logs do servidor

## Solução de Problemas

Se encontrar problemas durante o deploy:

1. **Erros de Build**:
   - Verifique os logs de build no Vercel para identificar o problema
   - Certifique-se de que todas as dependências estão instaladas corretamente

2. **Problemas de API**:
   - Verifique se o arquivo `api/index.js` está configurado corretamente
   - Verifique se os caminhos das importações estão corretos

3. **Problemas com Rotas**:
   - Verifique se o arquivo `vercel.json` está configurado corretamente

Para qualquer outro problema, consulte a [documentação do Vercel](https://vercel.com/docs) ou entre em contato com o suporte.