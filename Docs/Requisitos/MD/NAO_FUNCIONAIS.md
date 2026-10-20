# UniVerse — Especificação de Requisitos Não Funcionais

**Versão:** 1.0 — Proposta para validação  
**Sistema:** UniVerse — Plataforma Digital Académica  
**Arquitetura prevista:** React, Next.js, Tailwind CSS, NestJS, PostgreSQL e Drizzle ORM

## 1. Segurança

### RNF01 — Segurança da Autenticação

**Prioridade:** P0 — Essencial

O sistema deve garantir que as credenciais dos utilizadores sejam armazenadas e processadas de forma segura, utilizando algoritmos apropriados de hash de palavras-passe, como Argon2id ou bcrypt, e mecanismos seguros de gestão de sessões.

**Critérios de aceitação:**

- As palavras-passe nunca são armazenadas em texto simples.
- Credenciais inválidas não permitem a autenticação.
- As sessões possuem mecanismos de expiração.
- O sistema não divulga palavras-passe nem tokens de autenticação em respostas públicas.
- O sistema limita tentativas repetidas de autenticação para reduzir ataques de força bruta.

**Verificação:** testes de autenticação, revisão da configuração de segurança e inspeção dos dados armazenados.

### RNF02 — Controlo de Acesso e Autorização

**Prioridade:** P0 — Essencial

O sistema deve restringir o acesso aos recursos e às operações de acordo com o tipo de utilizador e a titularidade dos dados.

**Critérios de aceitação:**

- Estudantes não conseguem executar operações reservadas a empresas.
- Utilizadores não conseguem editar ou eliminar projetos, perfis, publicações ou oportunidades pertencentes a terceiros.
- Requisições sem autenticação são rejeitadas quando o recurso exige autenticação.
- O controlo de autorização é realizado no backend, independentemente da interface.
- O acesso indevido a recursos protegidos é rejeitado com uma resposta HTTP adequada.

**Verificação:** testes de autorização por perfil e tentativas de acesso direto aos endpoints protegidos.

### RNF03 — Proteção da Comunicação e dos Segredos

**Prioridade:** P0 — Essencial

O sistema deve proteger as comunicações e os dados sensíveis de configuração.

**Critérios de aceitação:**

- As comunicações públicas em ambiente de produção utilizam HTTPS.
- Credenciais da base de dados, chaves e segredos não são incluídos no código-fonte versionado.
- As configurações sensíveis são geridas por variáveis de ambiente ou mecanismos equivalentes.
- Informações internas do servidor não são expostas nas mensagens de erro destinadas aos utilizadores.

**Verificação:** revisão da configuração, do repositório e das respostas da aplicação.

### RNF04 — Validação e Proteção dos Dados de Entrada

**Prioridade:** P0 — Essencial

O sistema deve validar os dados introduzidos pelos utilizadores e impedir que entradas inválidas ou maliciosas comprometam a integridade e a segurança da aplicação.

**Critérios de aceitação:**

- Os dados são validados no backend antes do processamento.
- Campos obrigatórios, formatos e limites são verificados.
- As consultas à base de dados utilizam mecanismos seguros de parametrização.
- Os conteúdos submetidos não permitem a execução de scripts não autorizados.
- Os erros de validação são apresentados de forma compreensível.

**Verificação:** testes com dados inválidos, entradas maliciosas e tentativas de acesso não autorizado.

### RNF05 — Segurança dos Ficheiros e Imagens

**Prioridade:** P0 — Essencial

O sistema deve validar e processar de forma segura as imagens enviadas pelos utilizadores.

**Critérios de aceitação:**

- São aceites apenas os formatos de imagem autorizados, inicialmente JPEG, PNG e WebP.
- O tamanho máximo proposto para uma imagem é de 5 MB.
- O backend verifica o tipo real do ficheiro, não dependendo apenas da extensão.
- Os ficheiros são armazenados num serviço apropriado.
- O envio de ficheiros inválidos é rejeitado.
- Apenas utilizadores autorizados podem alterar as imagens associadas aos seus recursos.

**Verificação:** testes de upload com ficheiros válidos, inválidos, excessivamente grandes e tentativas de alteração por terceiros.

---

## 2. Desempenho e Eficiência

### RNF06 — Tempo de Resposta da API

**Prioridade:** P0 — Essencial

A API deve responder às operações principais dentro de limites de desempenho adequados ao contexto de utilização previsto.

**Metas preliminares:**

- Pelo menos 95% das requisições de leitura devem ser processadas em até 1 segundo.
- Pelo menos 95% das operações de criação e atualização sem upload devem ser processadas em até 2 segundos.
- Os limites serão avaliados num ambiente de testes definido, com 20 clientes concorrentes e uma base de dados com dados de exemplo representativos.
- Os tempos referem-se ao processamento da API, excluindo a latência da rede do utilizador e serviços externos.

**Verificação:** testes de carga com ferramentas como k6 ou Artillery.

### RNF07 — Carregamento Eficiente dos Conteúdos

**Prioridade:** P0 — Essencial

O sistema deve evitar o carregamento desnecessário de grandes volumes de informação, especialmente nas páginas de publicações, oportunidades e projetos.

**Critérios de aceitação:**

- As listagens de dados utilizam paginação ou carregamento progressivo.
- As consultas não recuperam indiscriminadamente todos os registos disponíveis.
- As imagens são apresentadas com dimensões adequadas aos seus contextos.
- Os estados de carregamento são apresentados quando existem operações assíncronas.
- A navegação continua utilizável durante a recuperação de dados.

**Verificação:** inspeção das consultas, testes de listagens e análise das requisições de rede.

---

## 3. Usabilidade e Acessibilidade

### RNF08 — Interface Responsiva

**Prioridade:** P0 — Essencial

A interface do UniVerse deve adaptar-se adequadamente a diferentes dimensões de ecrã, utilizando uma abordagem de desenvolvimento responsivo e mobile-first.

**Critérios de aceitação:**

- As interfaces principais funcionam corretamente em larguras de 360 px, 768 px e 1280 px.
- Os elementos de navegação permanecem acessíveis em dispositivos móveis.
- Os formulários ajustam-se à largura disponível.
- Não existe deslocamento horizontal inesperado nas páginas principais.
- Textos, imagens e componentes mantêm uma apresentação legível.

**Verificação:** testes de responsividade em navegadores e dispositivos de diferentes dimensões.

### RNF09 — Acessibilidade

**Prioridade:** P0 — Essencial

O sistema deve adotar boas práticas de acessibilidade, utilizando como referência os critérios aplicáveis das WCAG 2.2, nível AA, nas principais funcionalidades do MVP.

**Critérios de aceitação:**

- Os elementos interativos podem ser utilizados através do teclado.
- Os campos dos formulários possuem etiquetas identificáveis.
- Os elementos gráficos informativos possuem alternativas textuais adequadas.
- Os textos e componentes apresentam contraste adequado.
- As mensagens de erro podem ser identificadas sem depender exclusivamente da cor.
- Os componentes utilizam elementos HTML semânticos quando apropriado.

**Verificação:** testes com teclado, ferramentas automatizadas de acessibilidade e revisão manual dos fluxos principais.

### RNF10 — Facilidade de Utilização

**Prioridade:** P1 — Desejável

A plataforma deve apresentar uma navegação clara e consistente, permitindo que novos utilizadores realizem as principais operações com reduzida necessidade de orientação.

**Critérios de aceitação propostos:**

- As principais funcionalidades são acessíveis através de uma navegação consistente.
- Os botões e ações possuem designações compreensíveis.
- Os formulários apresentam mensagens de erro e confirmação.
- Num teste exploratório com pelo menos cinco participantes, pelo menos quatro conseguem concluir os cenários principais sem assistência direta.

**Verificação:** testes de usabilidade com estudantes e análise das dificuldades observadas.

---

## 4. Fiabilidade e Integridade

### RNF11 — Integridade e Consistência dos Dados

**Prioridade:** P0 — Essencial

O sistema deve preservar a integridade das informações armazenadas na base de dados, respeitando as regras de negócio e as relações estabelecidas entre as entidades.

**Critérios de aceitação:**

- As relações entre entidades são protegidas por chaves estrangeiras ou mecanismos de integridade equivalentes.
- Não existem associações inválidas entre projetos e estudantes.
- As competências duplicadas de um mesmo perfil são impedidas.
- Os gostos duplicados são impedidos, caso o módulo seja implementado.
- Operações que exigem alterações atómicas utilizam transações apropriadas.
- A eliminação de registos trata corretamente os dados dependentes.

**Verificação:** testes de integração com PostgreSQL e verificação das restrições da base de dados.

### RNF12 — Tratamento de Erros e Recuperação

**Prioridade:** P0 — Essencial

O sistema deve tratar falhas de processamento, comunicação e persistência sem apresentar resultados incorretos ou mensagens técnicas inadequadas aos utilizadores.

**Critérios de aceitação:**

- As falhas são apresentadas através de mensagens compreensíveis.
- Operações não concluídas não são apresentadas como bem-sucedidas.
- A interface apresenta estados apropriados de carregamento, erro e ausência de dados.
- Os erros não provocam a perda desnecessária de informações introduzidas em formulários.
- As falhas de armazenamento de imagens são tratadas adequadamente.

**Verificação:** simulação de falhas de rede, respostas de erro da API e falhas em operações de persistência.

---

## 5. Compatibilidade e Manutenibilidade

### RNF13 — Compatibilidade entre Navegadores

**Prioridade:** P1 — Desejável

A plataforma deve funcionar corretamente nas versões recentes dos principais navegadores modernos.

**Critérios de aceitação:**

- As funcionalidades principais são verificadas no Google Chrome e Mozilla Firefox.
- A interface adapta-se a navegadores móveis modernos.
- Os fluxos de autenticação, publicação e consulta funcionam sem erros críticos nos navegadores testados.

**Verificação:** testes manuais e automatizados com Playwright.

### RNF14 — Manutenibilidade e Organização do Código

**Prioridade:** P0 — Essencial

O sistema deve possuir uma arquitetura modular, com separação clara de responsabilidades, promovendo a legibilidade, reutilização e facilidade de manutenção.

**Critérios de aceitação:**

- O frontend e o backend possuem responsabilidades claramente definidas.
- O backend organiza as funcionalidades em módulos e serviços apropriados.
- O acesso à base de dados encontra-se separado da camada de apresentação.
- O código utiliza TypeScript e práticas consistentes de tipagem.
- O projeto inclui mecanismos de formatação e análise estática do código.
- Os comandos de verificação de tipos, lint e build terminam sem erros impeditivos.
- As configurações necessárias para executar a aplicação estão documentadas.

**Verificação:** revisão da arquitetura, análise do repositório e execução das ferramentas de qualidade.

---

## 6. Testabilidade e Observabilidade

### RNF15 — Testabilidade

**Prioridade:** P0 — Essencial

O sistema deve permitir a execução de testes que verifiquem o cumprimento dos requisitos funcionais e das regras de negócio definidas.

**Critérios de aceitação:**

- Cada requisito funcional essencial possui pelo menos um cenário de teste documentado e executado.
- As operações críticas de autenticação e autorização são verificadas.
- As principais operações de criação, consulta, atualização e eliminação são testadas.
- São utilizados testes automatizados em funcionalidades críticas selecionadas.
- Os resultados dos testes são documentados para apresentação na monografia.

**Verificação:** execução do plano de testes, registo de resultados e documentação de evidências.

### RNF16 — Registo de Erros e Eventos Relevantes

**Prioridade:** P1 — Desejável

O backend deve disponibilizar mecanismos de registo de erros e eventos relevantes para facilitar a identificação e resolução de problemas.

**Critérios de aceitação:**

- Erros inesperados são registados no servidor.
- As mensagens de log permitem identificar o contexto técnico das falhas.
- Os logs não devem expor palavras-passe, tokens ou outros dados sensíveis.
- Os registos permitem investigar erros sem depender exclusivamente das mensagens apresentadas no frontend.

**Verificação:** simulação de falhas e inspeção dos registos técnicos produzidos.

---

## 7. Comunicação em Tempo Real — Condicional

### RNF17 — Atualização em Tempo Real das Mensagens

**Prioridade:** P1 — Condicional

Caso o módulo de Chat Privado seja implementado, o sistema deve disponibilizar as novas mensagens automaticamente aos participantes ligados à conversa.

**Critérios de aceitação:**

- As novas mensagens são apresentadas sem atualização manual da página.
- Apenas os participantes autorizados têm acesso às mensagens.
- As mensagens são armazenadas de forma persistente.
- Numa ligação estável e ambiente controlado, a meta preliminar é apresentar pelo menos 95% das mensagens em até 2 segundos após a confirmação do envio.
- Falhas de comunicação são tratadas sem apresentar mensagens não confirmadas como enviadas definitivamente.

**Verificação:** testes de comunicação com dois utilizadores, persistência e autorização.

---

## 8. Recuperação de Dados — Recomendado para Produção

### RNF18 — Cópias de Segurança e Recuperação

**Prioridade:** P1 — Desejável

O ambiente de produção deve possuir mecanismos adequados de cópia de segurança e recuperação dos dados persistidos.

**Critérios de aceitação:**

- É definida uma estratégia de backup da base de dados.
- As cópias de segurança são armazenadas de forma protegida.
- Existe um procedimento documentado de recuperação.
- O processo de restauro é testado num ambiente isolado.

**Verificação:** execução de backup e restauro de uma base de dados de testes.

---

## Estado da Especificação

Os requisitos RNF01 a RNF18 representam a proposta inicial de qualidade do UniVerse.

As metas numéricas são objetivos preliminares de engenharia e deverão ser confirmadas de acordo com o ambiente de testes, os recursos disponíveis e os resultados observados.

**Estado:** Proposta para revisão e validação antes da implementação.