# 🪒 Barbearia do Edu - Website Oficial

🌐 **Acesse o site:** [https://barbearia-edu.vercel.app/](https://barbearia-edu.vercel.app/)

Uma landing page moderna e responsiva desenvolvida para a Barbearia do Edu, oferecendo uma experiência visual elegante e funcional para apresentar os serviços, galeria de trabalhos e informações de contato.

## 🚀 Tecnologias Utilizadas

- **[Next.js 14](https://nextjs.org/)** - Framework React para produção
- **[React 18](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[SCSS](https://sass-lang.com/)** - Pré-processador CSS

## ✨ Funcionalidades

- 📱 **Design Responsivo** - Otimizado para todos os dispositivos
- 🎨 **Interface Moderna** - Design clean e profissional
- 🧭 **Menu Flutuante** - Navegação suave e intuitiva
- 🖼️ **Galeria Interativa** - Showcase dos trabalhos realizados
- 📊 **Seção de Estatísticas** - Métricas da barbearia
- 💳 **Cards de Serviços** - Apresentação clara dos preços
- ⭐ **Sistema de Avaliações** - Depoimentos de clientes

## 🏗️ Estrutura do Projeto

```
edu-barbearia/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AboutSection.tsx
│   ├── ContactCard.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── GallerySection.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ServiceCard.tsx
│   ├── ServicesSection.tsx
│   ├── TestimonialCard.tsx
│   └── TestimonialsSection.tsx
├── public/
│   ├── galery/
│   │   ├── img1.jpeg
│   │   ├── img2.jpeg
│   │   ├── img3.jpeg
│   │   ├── img4.png
│   │   ├── img5.jpeg
│   │   └── img6.jpeg
│   └── background.png
├── styles/
│   └── custom.scss
└── README.md
```

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/edu-barbearia.git
cd edu-barbearia
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

### 4. Acesse no navegador
Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 🎨 Componentes Principais

### Header
Menu de navegação flutuante com design glassmorphism e responsividade completa.

### HeroSection
Seção principal com imagem de fundo, overlay personalizado e call-to-actions.

### AboutSection
Apresentação da barbearia com estatísticas organizadas em cards.

### ServicesSection
Grid responsivo com cards de serviços, preços e descrições.

### GallerySection
Galeria de imagens dos trabalhos com efeitos hover e transições suaves.

### TestimonialsSection
Cards de depoimentos com sistema de avaliação por estrelas.

### ContactSection
Informações de contato organizadas em cards reutilizáveis.

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar versão de produção
npm run start

# Lint do código
npm run lint
```