# Relatório — Sistema Rifa Royale: Gestão Premium de Rifas de Videogames

---

## 1. Introdução

O projeto **Rifa Royale** consiste em uma interface gráfica para um sistema de gestão de vendas de rifas de videogames, desenvolvida utilizando **HTML5** e **CSS3**. A aplicação foi criada com o objetivo de permitir a visualização das rifas cadastradas, o acompanhamento das vendas e o cadastro de novas rifas, tudo em um ambiente visualmente atraente e funcional.

A interface foi desenvolvida considerando princípios de **estrutura semântica**, **responsividade**, **acessibilidade** e **organização do código**, conforme as boas práticas estudadas em referências como *Head First HTML and CSS*.

O sistema possui:
- Um **painel inicial (Dashboard)** com informações resumidas (rifas ativas, vendas realizadas, faturamento e próximo sorteio).
- Uma **área de gerenciamento de rifas**, com uma tabela detalhada.
- Uma **área de controle de vendas**, com histórico das últimas transações.
- Um **formulário para cadastro de novas rifas**.

---

## 2. Utilização de HTML5 Semântico

A estrutura da página utiliza elementos semânticos do **HTML5** para representar adequadamente cada parte da interface, melhorando a acessibilidade e a manutenção do código.

- **`<header>`**: Representa o cabeçalho da aplicação, contendo a **identidade visual da marca Rifa Royale** (nome, slogan e ícone).
- **`<nav>`**: Representa a navegação principal, com links para as seções: **Dashboard, Rifas, Vendas e Cadastrar Rifa**.
- **`<main>`**: Identifica semanticamente o conteúdo principal do documento, onde estão todas as seções funcionais.
- **`<section>`**: Utilizado para separar as funcionalidades do sistema:
  - `dashboard`: Painel de gestão com cartões de métricas.
  - `rifas`: Tabela de rifas cadastradas.
  - `vendas`: Tabela de vendas recentes.
  - `cadastro`: Formulário para cadastro de novas rifas.
- **`<article>`**: Cada cartão do dashboard é representado por um `<article>`, pois apresentam informações independentes (ex.: rifas ativas, vendas realizadas).
- **`<table>`**: Utilizado para organizar dados tabulares (rifas e vendas). Cada tabela possui:
  - **`<caption>`**: Descreve o propósito da tabela.
  - **`<th scope="col">`**: Indica semanticamente os cabeçalhos das colunas.
- **`<footer>`**: Contém informações de rodapé, como direitos autorais e descrição do projeto.

---

## 3. Formulário e Acessibilidade

O **cadastro de rifas** foi implementado utilizando o elemento **`<form>`**, com campos organizados de forma semântica e acessível:

- **`<fieldset>` e `<legend>`**: Agrupam os campos do formulário e fornecem um título descritivo ("Informações da rifa"), facilitando a compreensão para usuários e tecnologias assistivas.
- **`<label>`**: Cada campo possui um `<label>` associado ao controle correspondente via atributos `for` e `id`.
- **Tipos de entrada HTML5**:
  - `text`: Nome da rifa e prêmio.
  - `number`: Valor por número e quantidade de números.
  - `date`: Data do sorteio.
  - `select`: Status da rifa (Ativa/Encerrada).
  - `textarea`: Descrição do prêmio.
- **Validação nativa**: Campos obrigatórios possuem o atributo `required`.
- **Estados de foco**: Utilização de `:focus-visible` para destacar elementos interativos (campos, botões, links) quando navegados via teclado, garantindo acessibilidade para usuários que não utilizam mouse.

---

## 4. CSS e Responsividade

O **CSS** foi desenvolvido em arquivo separado (`style.css`), seguindo as melhores práticas de organização e manutenção:

- **Variáveis CSS**: Centralizadas em `:root` para facilitar a manutenção e consistência visual. Incluem:
  - Cores de fundo, texto e bordas.
  - Paleta de cores temática (dourado, azul, verde, vermelho, roxo, laranja).
  - Sombras, raios de borda e gradientes.
- **Layout com CSS Grid**:
  - Cartões do dashboard organizados em grid responsivo.
  - Campos do formulário organizados em grid de 2 colunas (1 coluna em telas menores).
- **Media Queries**: Adaptam a interface para diferentes tamanhos de tela:
  - Em telas **≤ 900px**: Cartões do dashboard passam para 2 colunas.
  - Em telas **≤ 700px**: Cartões para 1 coluna, formulário em coluna única, botões ocupam 100% da largura.
  - Em telas **≤ 500px**: Navegação compacta, ícone da marca reduzido.
- **Tabelas responsivas**: Contêiner com `overflow-x: auto` permite rolagem horizontal em telas pequenas.
- **Altura mínima de elementos interativos**: Botões e campos de formulário possuem altura adequada para interação em dispositivos móveis.

---

## 5. Organização Visual e Identidade

A interface do **Rifa Royale** adota uma **identidade visual premium**, inspirada no universo dos videogames, com as seguintes características:

- **Tema Light**:
  - Fundo claro (`#f8fafc`), superfícies brancas (`#ffffff`) e texturas sutis.
  - Cores de texto escuras (`#1e293b`) para melhor legibilidade.
- **Paleta de cores temática**:
  - **Dourado** (`#c99b3f` a `#f7e3a1`): Usado em títulos, botões principais, ícones e destaques.
  - **Azul** (`#3b82f6`): Cartão de rifas ativas.
  - **Verde** (`#10b981`): Status "Ativo" e "Pago".
  - **Vermelho** (`#ef4444`): Status "Encerrada".
  - **Laranja** (`#f97316`): Cartão de próximo sorteio.
  - **Roxo** (`#8b5cf6`): Cartão de faturamento.
- **Status visuais**:
  - Diferença por cores **e** texto (ex.: "Ativa", "Pago", "Pendente", "Encerrada"), evitando dependência exclusiva de cores.
- **Dashboard**:
  - Cartões com informações resumidas (rifas ativas, vendas, faturamento, próximo sorteio) e efeito de hover.
- **Progresso de vendas**:
  - Barras de progresso com gradiente dourado, indicando visualmente a porcentagem de números vendidos.

---

## 6. Conclusão

O projeto **Rifa Royale** demonstra a aplicação prática de **HTML5 semântico** e **CSS3 moderno** na construção de uma interface de sistema de gestão de rifas de videogames. A utilização de elementos semânticos como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<form>`, `<fieldset>`, `<table>` e `<footer>` proporciona uma estrutura **organizada, acessível e significativa**.

As técnicas de **CSS** empregadas garantem uma interface **responsiva**, visualmente consistente e adaptável a diferentes dispositivos. Recursos de **acessibilidade**, como associação entre labels e campos, foco visível, validação nativa e estrutura semântica, foram integralmente considerados.

### Evoluções Futuras
Para tornar o sistema funcional, a interface poderia ser integrada a:
- **JavaScript**: Para validação dinâmica, interatividade e atualização em tempo real.
- **API ou Banco de Dados**: Para persistência de dados (cadastro de rifas, registro de vendas, atualização de status).
- **Automação**: Geração de relatórios de vendas, notificações de sorteios e controle de estoque de números.

---
**Projeto acadêmico desenvolvido por j-barcelos — 2026**
