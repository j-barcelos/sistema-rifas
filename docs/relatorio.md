# Relatório — Sistema Rifa Royale: Gestão Premium de Rifas de Videogames

---

## 1. Trabalho 1 — Interface Semântica, Responsiva e Acessível

**Realizado em: 05/09**

O primeiro trabalho teve como objetivo desenvolver uma interface gráfica do usuário (GUI) para o front-end de uma aplicação web, priorizando aspectos de semântica, responsividade e acessibilidade.

Como parte da atividade assíncrona, foram consultados os capítulos introdutórios sobre estrutura semântica e boas práticas de CSS apresentados por **Freeman & Freeman**. A partir desses conceitos, foi desenvolvida uma página web utilizando **HTML5 e CSS3** para o cadastro e a visualização de dados de um sistema de gestão.

A estrutura da página foi organizada utilizando elementos semânticos do HTML5, buscando representar adequadamente a finalidade de cada parte do conteúdo. A utilização de elementos como `header`, `nav`, `main`, `section`, `form` e `footer` contribui para uma estrutura mais organizada, facilita a interpretação do conteúdo por diferentes agentes e melhora a manutenção do código.

O elemento `header` foi utilizado para representar o cabeçalho da aplicação, enquanto `nav` foi destinado à área de navegação. O conteúdo principal foi agrupado em `main`, com a utilização de `section` para separar áreas relacionadas da interface. Para o cadastro de informações, foi utilizado o elemento `form`, juntamente com campos de entrada adequados aos diferentes tipos de dados.

Além da estrutura semântica, foram aplicadas técnicas de CSS para organizar o layout e proporcionar uma apresentação consistente. A interface foi planejada de forma responsiva, permitindo sua adaptação a diferentes resoluções e tamanhos de tela. Dessa maneira, o usuário pode acessar a aplicação tanto em computadores quanto em dispositivos com telas menores.

A preocupação com acessibilidade também esteve presente na construção dos formulários e na organização visual dos elementos, buscando facilitar a compreensão e a utilização da interface. Dessa forma, o Trabalho 1 estabeleceu a base estrutural e visual necessária para a evolução da aplicação.

## 2. Trabalho 2 — JavaScript, Validações e Requisições Assíncronas

**Implementado em: 11/09**

O segundo trabalho teve como objetivo acrescentar dinamicidade à interface desenvolvida anteriormente, utilizando **JavaScript**, manipulação do DOM, eventos e requisições HTTP assíncronas.

A principal necessidade identificada foi permitir que o formulário realizasse validações antes do envio dos dados, evitando o preenchimento incorreto ou incompleto dos campos. Para isso, foram implementadas validações no lado do cliente, fornecendo respostas imediatas ao usuário e melhorando a experiência de utilização do sistema.

Também foi implementada a consulta automática de endereço a partir de um CEP informado pelo usuário. Essa funcionalidade utiliza uma requisição assíncrona, realizada por meio de `fetch/Ajax`, para obter os dados do endereço e preencher dinamicamente os campos correspondentes da interface.

A utilização de JavaScript possibilitou a manipulação dos elementos da página por meio do **DOM**, bem como a execução de ações em resposta aos eventos gerados pelo usuário. Esses recursos permitiram transformar a interface inicialmente estática em uma aplicação mais interativa.

As técnicas utilizadas foram relacionadas aos conceitos de manipulação do DOM e eventos apresentados por **Michael**, enquanto a utilização de requisições assíncronas foi fundamentada nos conceitos de **Ajax** descritos por **Riordan**.

Um dos principais benefícios da implementação assíncrona é que a consulta do endereço ocorre sem a necessidade de recarregar toda a página. Dessa forma, apenas as informações necessárias são atualizadas, tornando a interação mais rápida e proporcionando uma experiência mais próxima de uma aplicação web dinâmica.

## 3. Conclusão

Os dois trabalhos foram desenvolvidos de maneira incremental. O **Trabalho 1**, realizado em 05/09, estabeleceu a estrutura HTML5, a organização semântica, o estilo CSS3 e a responsividade da interface. O **Trabalho 2**, implementado em 11/09, acrescentou comportamento dinâmico por meio de JavaScript, validações no lado do cliente e requisições assíncronas para consulta e preenchimento automático de dados.

A evolução entre as duas etapas demonstra a integração entre **HTML5, CSS3 e JavaScript**, resultando em uma interface mais organizada, responsiva, interativa e adequada às necessidades de um sistema de gestão.

---
**Projeto acadêmico desenvolvido por j-barcelos — 2026**
