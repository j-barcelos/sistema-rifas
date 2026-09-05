# 👑 Rifa Royale | Gestão Premium de Rifas

<div align="center">

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

</div>

> 🎮 Sistema de gestão premium de rifas de videogames — um projeto acadêmico de front-end desenvolvido por [j-barcelos](https://github.com/j-barcelos).

## 📋 Sobre o Projeto

O **Rifa Royale** é um painel administrativo web para gerenciamento de rifas cujos prêmios são consoles e acessórios de videogame (PS5, Xbox Series X, Nintendo Switch 2, Steam Deck, entre outros).

O projeto foi construído com foco em **HTML semântico** e boas práticas de **acessibilidade**, simulando o fluxo completo de gestão de uma plataforma de rifas.

📄 A documentação completa do projeto — incluindo o relatório de desenvolvimento — está disponível em [`docs/relatorio.md`](docs/relatorio.md).

## ✨ Funcionalidades

O site é dividido em quatro seções principais:

| Seção | Descrição |
|-------|-----------|
| 📊 **Dashboard** | Visão geral com métricas: rifas ativas, vendas realizadas, faturamento e próximo sorteio |
| 🎟️ **Rifas** | Lista de rifas cadastradas com barras de progresso de vendas e status (ativa/encerrada) |
| 💰 **Vendas** | Histórico das últimas vendas, com cliente, números comprados, valor e situação do pagamento |
| 📝 **Cadastro** | Formulário para cadastrar novas rifas com todas as informações necessárias |

## 🛠️ Tecnologias

- **HTML5** — marcação semântica com elementos como `section`, `table` e `fieldset`
- **CSS3** — estilização externa, incluindo uso de variáveis customizadas para as barras de progresso
- **Google Fonts** — tipografia com [Inter](https://fonts.google.com/specimen/Inter) e [Sora](https://fonts.google.com/specimen/Sora)
- **SVG** — ícones vetoriais inline, sem dependências externas

## ♿ Acessibilidade

Boas práticas de acessibilidade aplicadas:

- Navegação por âncoras com `aria-labelledby` nas seções
- Barras de progresso com `role="progressbar"` e atributos `aria-valuenow`, `aria-valuemin` e `aria-valuemax`
- Tabelas com `<caption>` e `scope="col"` nos cabeçalhos
- Ícones decorativos marcados com `aria-hidden="true"`
- Formulário com `fieldset`, `legend` e rótulos vinculados aos campos

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/j-barcelos/sistema-rifas.git
```

2. Acesse a pasta do projeto:

```bash
cd sistema-rifas
```

3. Abra o arquivo `index.html` diretamente no navegador ou use uma extensão como o **Live Server** (VS Code).

Não há necessidade de instalar dependências — o projeto é totalmente estático.

## 📁 Estrutura do Projeto

```
sistema-rifas/
├── index.html          # Estrutura da página (dashboard, rifas, vendas e cadastro)
├── style.css           # Estilos e layout responsivo
├── docs/
│   └── relatorio.md    # Relatório do projeto
└── README.md           # Este arquivo
```

## 🗺️ Roadmap

- [ ] Adicionar JavaScript para funcionalidade do formulário de cadastro
- [ ] Persistir dados com `localStorage` ou integrar a um backend
- [ ] Ordenação e filtros dinâmicos na tabela de rifas
- [ ] Geração automática de números de rifa aleatórios
- [ ] Dark mode

## ⚖️ Aviso Legal

Este é um **projeto acadêmico** com fins exclusivamente educacionais. Rifas comerciais são atividades regulamentadas por lei no Brasil e podem exigir autorização. Não utilize este código para realizar rifas reais sem a devida licença.

## 📄 Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](LICENSE) para mais informações.

---

<div align="center">

Desenvolvido por **j-barcelos**

</div>
