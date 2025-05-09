# CIRCULUS - Programa de Afiliados

![CIRCULUS](https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3)

Website institucional responsivo para o Programa de Afiliados da CIRCULUS, projetado para fornecer informações claras sobre níveis de afiliação, estrutura de comissões e conteúdo educativo adaptado ao mercado angolano.

## 🌟 Características

- **Design Moderno e Responsivo**: Experiência visual completa em dispositivos desktop e móveis
- **Modo Claro/Escuro**: Sistema de temas completo para preferência do usuário
- **Multilíngue**: Suporte para Português e Inglês com detecção automática do idioma do navegador
- **Seções Interativas**:
  - Calculadora de Comissões
  - Timeline Visual do processo de afiliação
  - Depoimentos de afiliados
  - Níveis de afiliação com comparativos
  - Formulário de registro otimizado com envio para WhatsApp
- **Integração com WhatsApp**: Envio automático dos formulários para WhatsApp do administrador
- **Blog Completo**:
  - 26 artigos detalhados sobre vendas, prospecção, ferramentas e mentalidade
  - Sistema de filtragem por categorias e tags
  - Conteúdo adaptado à realidade angolana
  - Visualização de artigos relacionados
  - Informações de autor e compartilhamento

## 🚀 Tecnologias Utilizadas

- **Frontend**:
  - React.js + TypeScript
  - TailwindCSS para estilização
  - Framer Motion para animações
  - ShadcnUI para componentes
  - React Query para gerenciamento de estado
  - Wouter para roteamento
  - i18next para internacionalização
  - react-i18next para integração de traduções no React
  - i18next-browser-languagedetector para detecção automática de idioma
  
- **Backend**:
  - Node.js + Express
  - Armazenamento em memória para prototipagem rápida
  
- **Integrações**:
  - API do WhatsApp para mensagens diretas
  - Sistema de idiomas com detecção automática

## 📋 Páginas Principais

1. **Home**: Landing page principal com todas as seções informativas
2. **Blog**: Listagem de artigos com sistema de filtragem
3. **Artigo Individual**: Visualização detalhada de cada artigo do blog
4. **Página 404**: Tratamento para rotas não existentes

## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js (v14+)
- NPM (v6+)

### Passos para Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/circulus-afiliados.git
   cd circulus-afiliados
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse o projeto em seu navegador:
   ```
   http://localhost:5000
   ```

## 🎨 Personalização

### Cores e Tema

O sistema de cores pode ser personalizado editando o arquivo `tailwind.config.ts`. As principais cores utilizadas são:

- **primary**: Roxo/Violeta (#8033B5)
- **primary-dark**: Tom mais escuro de roxo (#5A1C80)
- **secondary**: Azul claro/Turquesa (#3BBCD9)
- **accent**: Amarelo/Dourado (#FFAE33)

### Conteúdo

O conteúdo do blog está centralizado no arquivo `client/src/data/blogPosts.ts`. Para adicionar ou modificar artigos, edite este arquivo seguindo a estrutura existente.

### Traduções e Idiomas

As traduções estão disponíveis nos arquivos:
- `client/src/locales/pt/translation.json` (Português)
- `client/src/locales/en/translation.json` (Inglês)

Para adicionar ou modificar traduções, edite estes arquivos seguindo a estrutura de chaves existente. Para adicionar um novo idioma, crie uma nova pasta com o código do idioma (ex: `fr` para francês) e adicione um arquivo `translation.json` com as mesmas chaves.

### Integração WhatsApp

A integração com WhatsApp está configurada no arquivo `client/src/components/RegistrationForm.tsx`. Para alterar o número de WhatsApp que receberá as mensagens, modifique a variável `whatsappNumber` com o novo número no formato internacional (com código do país).

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- Desktops (1200px+)
- Tablets (768px - 1199px)
- Smartphones (320px - 767px)

## 🌐 SEO e Performance

- Meta tags otimizadas para cada página
- Lazy loading de imagens e componentes
- Estrutura semântica de HTML
- Texto alternativo para imagens

## 🤝 Contato e Suporte

Para questões relacionadas ao programa de afiliados CIRCULUS:
- **WhatsApp**: [Grupo de Afiliados](https://chat.whatsapp.com/FpqmbYg9lop62rocgJNDgy)
- **Telefone**: +244931475544
- **Email**: circulus.ao@gmail.com

## 📄 Licença

Este projeto está sob licença privada para uso exclusivo da CIRCULUS.

---

Desenvolvido com 💜 por [Seu Nome/Empresa]