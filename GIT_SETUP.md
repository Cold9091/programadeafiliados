# Configuração do Git e Envio para GitHub

Este guia fornece instruções passo a passo para configurar o Git em seu ambiente local e enviar o código para o repositório GitHub.

## Configuração Inicial do Git

Siga estas etapas após descompactar o projeto em seu ambiente local:

```bash
# Entre no diretório do projeto
cd programadeafiliados

# Inicialize um repositório Git
git init

# Adicione o repositório remoto
git remote add origin git@github.com:Cold9091/programadeafiliados.git
```

## Autenticação SSH (Recomendado)

Para usar a URL SSH do repositório, você precisa configurar uma chave SSH:

1. Verifique se você já tem uma chave SSH:
   ```bash
   ls -la ~/.ssh
   ```

2. Se não tiver arquivos `id_rsa` e `id_rsa.pub`, crie uma nova chave:
   ```bash
   ssh-keygen -t rsa -b 4096 -C "seu-email@exemplo.com"
   ```

3. Adicione a chave SSH ao ssh-agent:
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_rsa
   ```

4. Copie a chave pública:
   ```bash
   cat ~/.ssh/id_rsa.pub
   ```

5. Adicione a chave SSH à sua conta GitHub:
   - Acesse [https://github.com/settings/keys](https://github.com/settings/keys)
   - Clique em "New SSH key"
   - Cole sua chave pública e salve

## Envio do Código para o GitHub

Após configurar o Git e a autenticação, siga estas etapas para enviar o código:

```bash
# Verifique o status dos arquivos
git status

# Adicione todos os arquivos
git add .

# Faça o commit das mudanças
git commit -m "Versão inicial do Programa de Afiliados CIRCULUS"

# Envie para o GitHub
git push -u origin main
```

## Verificação

1. Acesse seu repositório em `https://github.com/Cold9091/programadeafiliados`
2. Verifique se todos os arquivos foram enviados corretamente

## Solução de Problemas

### Problemas de Autenticação

Se encontrar problemas de autenticação:
- Verifique se sua chave SSH está configurada corretamente
- Certifique-se de que sua chave SSH está adicionada à sua conta GitHub
- Tente usar HTTPS em vez de SSH:
  ```bash
  git remote set-url origin https://github.com/Cold9091/programadeafiliados.git
  ```

### Branch Principal Diferente

Se o GitHub usar `master` como branch principal em vez de `main`:
```bash
git branch -M master
git push -u origin master
```

### Mais Informações

- [Documentação do Git](https://git-scm.com/doc)
- [Documentação do GitHub sobre SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)