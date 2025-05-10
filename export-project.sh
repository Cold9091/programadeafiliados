#!/bin/bash

# Script para exportar o projeto para desenvolvimento local e envio ao GitHub/Vercel
# Execute este script para criar um arquivo zip com todo o código do projeto

# Nome do arquivo zip de saída
ZIPFILE="programa-afiliados-circulus.zip"

# Criar diretório temporário
TEMPDIR="temp_export"
mkdir -p $TEMPDIR

# Lista de diretórios e arquivos para incluir
DIRS=(
  "api"
  "client"
  "server"
  "shared"
  "attached_assets"
)

FILES=(
  ".env.example"
  ".gitignore"
  "build.js"
  "drizzle.config.ts"
  "package.json"
  "postcss.config.js"
  "README.md"
  "DEVELOPMENT.md"
  "tailwind.config.ts"
  "vercel.json"
  "vite.config.ts"
)

# Copiar diretórios
for dir in "${DIRS[@]}"; do
  if [ -d "$dir" ]; then
    cp -r "$dir" "$TEMPDIR/"
    echo "Copiado diretório: $dir"
  else
    echo "Aviso: Diretório $dir não encontrado, pulando..."
  fi
done

# Copiar arquivos
for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    cp "$file" "$TEMPDIR/"
    echo "Copiado arquivo: $file"
  else
    echo "Aviso: Arquivo $file não encontrado, pulando..."
  fi
done

# Criar arquivo ZIP
cd $TEMPDIR
zip -r "../$ZIPFILE" .
cd ..

# Limpar diretório temporário
rm -rf $TEMPDIR

echo "==================================="
echo "Exportação concluída!"
echo "Arquivo criado: $ZIPFILE"
echo "==================================="
echo ""
echo "Próximos passos:"
echo "1. Faça download do arquivo $ZIPFILE"
echo "2. Descompacte em seu ambiente local"
echo "3. Siga as instruções em DEVELOPMENT.md para configuração do ambiente"
echo "4. Use GIT_SETUP.md para configurar o Git e enviar para o GitHub:"
echo "   git init"
echo "   git remote add origin git@github.com:Cold9091/programadeafiliados.git"
echo "   git add ."
echo "   git commit -m \"Versão inicial do Programa de Afiliados CIRCULUS\""
echo "   git push -u origin main"
echo "5. Acesse vercel.com para fazer o deploy conforme DEPLOY.md"