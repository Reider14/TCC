# UniVerse — Especificação de Requisitos Funcionais

**Versão:** 0.6  
**Módulo:** Gestão de Projetos e Portfólio Académico  
**Atores:** Estudante e Empresa  
**Estado:** Atualizado — colaborador sem permissões de edição

---

## RF10 — Criação de Projetos Académicos

**Prioridade:** P0 — Essencial  
**Ator principal:** Estudante

### Descrição

O sistema deve permitir que estudantes autenticados adicionem projetos ao seu portfólio académico, apresentando informações sobre trabalhos desenvolvidos individualmente ou em equipa.

Cada projeto deve estar associado a um único estudante responsável pela sua criação e gestão.

Nos projetos desenvolvidos em equipa, o estudante responsável pode mencionar os restantes participantes no campo de descrição, sem que essa referência lhes conceda acesso à gestão do projeto.

### Informações do projeto

| Campo | Obrigatoriedade |
|---|---|
| Título | Obrigatório |
| Descrição | Obrigatório |
| Tecnologias utilizadas | Opcional |
| Data de realização | Opcional |
| Imagem de capa | Opcional — RF13 |
| URL do repositório | Opcional — RF13 |
| URL de demonstração | Opcional — RF13 |

### Pré-condições

- O utilizador deve estar autenticado.
- A conta deve pertencer ao tipo Estudante.
- O estudante deve possuir um perfil académico.

### Critérios de aceitação

1. O estudante consegue criar um projeto com título e descrição válidos.
2. O sistema associa automaticamente o projeto ao estudante autenticado.
3. O estudante consegue mencionar colaboradores na descrição do projeto.
4. A menção de colaboradores não cria permissões de edição.
5. O estudante consegue adicionar várias tecnologias ao projeto.
6. O projeto é guardado de forma persistente.
7. O projeto criado passa a integrar o portfólio académico do responsável.
8. O sistema rejeita projetos sem título ou descrição válidos.
9. Um estudante pode criar vários projetos.
10. Contas empresariais não podem criar projetos académicos neste módulo.

---

## RF11 — Edição e Eliminação de Projetos

**Prioridade:** P0 — Essencial  
**Ator principal:** Estudante responsável

### Descrição

O sistema deve permitir que o estudante responsável por um projeto edite ou elimine as respetivas informações.

Apenas o titular do projeto pode realizar operações de alteração ou eliminação, independentemente de outros estudantes serem mencionados como participantes na descrição.

### Pré-condições

- O estudante deve estar autenticado.
- O projeto deve existir.
- O estudante autenticado deve ser o responsável pelo projeto.

### Critérios de aceitação

1. O responsável consegue editar o título, a descrição, as tecnologias e os restantes campos disponíveis.
2. As alterações são guardadas de forma persistente.
3. O responsável consegue eliminar o projeto mediante confirmação na interface.
4. O projeto eliminado deixa de estar disponível para consulta normal.
5. Outros estudantes não conseguem editar ou eliminar o projeto.
6. A menção de um estudante como colaborador não concede permissões de gestão.
7. Tentativas de alteração não autorizadas são rejeitadas pelo backend.

---

## RF12 — Consulta de Projetos Académicos

**Prioridade:** P0 — Essencial  
**Atores:** Estudante e Empresa

### Descrição

O sistema deve permitir que os utilizadores autenticados consultem os projetos publicados pelos estudantes, através dos respetivos portfólios académicos e das páginas de detalhes dos projetos.

Cada projeto deve identificar o estudante responsável pela sua publicação.

### Critérios de aceitação

1. Os projetos são apresentados no portfólio do estudante responsável.
2. O utilizador consegue consultar os detalhes de um projeto existente.
3. O sistema apresenta título, descrição e tecnologias utilizadas, quando disponíveis.
4. O sistema identifica o estudante responsável.
5. As referências a colaboradores presentes na descrição são apresentadas como parte do conteúdo do projeto.
6. A consulta de um projeto não concede permissões de edição.
7. O sistema apresenta uma mensagem adequada quando o projeto não existe.

---

## RF13 — Associação de Recursos Complementares

**Prioridade:** P1 — Desejável  
**Ator principal:** Estudante responsável

### Descrição

O sistema deve permitir que o estudante responsável associe recursos complementares ao projeto, incluindo ligações externas e uma imagem de apresentação.

### RF13.1 — Ligações externas

O estudante deve poder adicionar:

- Ligação para o repositório do projeto.
- Ligação para uma demonstração funcional.
- Ligação para documentação ou outros materiais relacionados.

**Critérios de aceitação:**

1. O responsável consegue adicionar, atualizar e remover ligações externas.
2. O sistema valida os formatos e protocolos permitidos.
3. As ligações válidas são apresentadas na página do projeto.
4. O utilizador consegue abrir os recursos externos.
5. Apenas o estudante responsável pode gerir as ligações.

### RF13.2 — Imagem de capa

O estudante deve poder adicionar uma imagem de apresentação ao projeto.

**Critérios de aceitação:**

1. O responsável consegue enviar uma imagem válida.
2. O sistema valida formato e tamanho do ficheiro.
3. A imagem é associada ao projeto correspondente.
4. O responsável consegue substituir ou remover a imagem.
5. Outros utilizadores não podem alterar a imagem do projeto.

---

# 2. Regras de Negócio

**RN18 — Associação entre projeto e estudante**

Cada projeto deve estar associado a um perfil académico existente.

**RN19 — Responsabilidade única**

Cada projeto deve possuir um único estudante responsável, identificado pelo sistema através da conta autenticada que realizou a criação.

**RN20 — Multiplicidade dos projetos**

Um estudante pode criar e gerir vários projetos académicos.

**RN21 — Integridade dos dados**

O título e a descrição são campos obrigatórios e devem ser validados antes do armazenamento.

**RN22 — Tecnologias opcionais**

A indicação das tecnologias utilizadas não é obrigatória.

**RN23 — Unicidade das tecnologias por projeto**

Não devem existir tecnologias duplicadas no mesmo projeto, considerando equivalentes nomes que diferem apenas em maiúsculas, minúsculas ou espaços adicionais nas extremidades.

**RN24 — Visibilidade dos projetos**

Os projetos publicados devem poder ser consultados por outros utilizadores autenticados.

**RN25 — Controlo de permissões**

Apenas o estudante responsável pode editar ou eliminar um projeto. Esta regra deve ser aplicada no backend, independentemente das restrições existentes na interface.

**RN26 — Validação de recursos externos**

As ligações externas devem apresentar formatos válidos e utilizar protocolos permitidos.

**RN27 — Separação entre projetos e publicações**

Os projetos académicos integram o portfólio do estudante e são geridos independentemente das publicações do feed.

**RN28 — Eliminação de projetos**

A eliminação deve remover o projeto da consulta normal e tratar os respetivos dados dependentes de acordo com as regras de integridade definidas.

**RN29 — Identificação de colaboradores**

O estudante responsável pode mencionar colaboradores na descrição do projeto. Estas menções constituem conteúdo textual e não representam associações formais entre contas.

**RN30 — Permissões dos colaboradores mencionados**

A identificação de um estudante como colaborador não lhe concede permissões para editar, eliminar ou administrar o projeto.

---

# 3. Casos de Teste

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT10.1 | Criar projeto válido | Projeto criado |
| CT10.2 | Criar projeto sem título | Operação rejeitada |
| CT10.3 | Criar projeto com descrição de colaboradores | Projeto guardado com as menções |
| CT10.4 | Criar vários projetos | Todos associados ao responsável |
| CT11.1 | Editar projeto próprio | Alterações guardadas |
| CT11.2 | Eliminar projeto próprio | Projeto removido |
| CT11.3 | Editar projeto de terceiros | Acesso negado |
| CT11.4 | Colaborador mencionado tenta eliminar projeto | Acesso negado |
| CT12.1 | Consultar projeto de outro estudante | Dados apresentados |
| CT12.2 | Consultar projeto inexistente | Mensagem apropriada |
| CT13.1 | Adicionar ligação externa válida | Ligação guardada |
| CT13.2 | Adicionar ligação inválida | Operação rejeitada |
| CT13.3 | Enviar imagem válida | Imagem associada |
| CT13.4 | Terceiro tenta alterar imagem | Acesso negado |

Os testes associados ao RF13 ficam condicionados à implementação das funcionalidades desejáveis.

---

**Resumo:** 4 requisitos funcionais — 3 essenciais e 1 desejável.

**Decisão arquitetural:** Um projeto possui um único responsável. Os colaboradores podem ser mencionados na descrição, sem associação formal de contas ou permissões de edição.