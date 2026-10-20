# UniVerse — Especificação de Requisitos Funcionais

**Versão:** 0.4 — Proposta para validação  
**Módulo:** Gestão de Perfis Académicos e Empresariais  
**Atores:** Estudante e Empresa

---

## RF06 — Gestão do Perfil Académico

**Prioridade:** P0 — Essencial  
**Ator principal:** Estudante

### Descrição

O sistema deve permitir que os utilizadores registados como estudantes criem, visualizem e atualizem o seu perfil académico, incluindo informações de apresentação, percurso académico e competências individuais.

As competências devem ser geridas individualmente e apresentadas visualmente sob a forma de etiquetas (*tags*), sem classificação por nível de proficiência.

### Informações do perfil

| Campo | Obrigatoriedade |
|---|---|
| Nome de apresentação | Obrigatório |
| Instituição de ensino | Obrigatório |
| Curso | Obrigatório |
| Biografia | Opcional |
| Competências individuais | Opcional |

### Funcionalidades relativas às competências

O sistema deve permitir ao estudante:

- Adicionar competências individualmente.
- Visualizar as competências como etiquetas no perfil.
- Remover competências anteriormente adicionadas.
- Associar várias competências ao mesmo perfil.
- Guardar e recuperar as competências de forma persistente.

Cada competência será identificada pelo seu nome, sem níveis de proficiência.

### Pré-condições

- O utilizador deve estar autenticado.
- A conta deve pertencer ao tipo Estudante.

### Critérios de aceitação

1. O estudante consegue criar e atualizar o seu perfil académico.
2. Os campos obrigatórios são validados.
3. O estudante consegue adicionar uma ou várias competências.
4. Cada competência é apresentada como uma etiqueta independente.
5. O estudante consegue remover uma competência sem afetar as restantes.
6. O sistema impede competências vazias ou duplicadas no mesmo perfil.
7. As competências permanecem associadas ao perfil após terminar e voltar a iniciar sessão.
8. O estudante consegue guardar o perfil sem adicionar competências.
9. Um estudante não consegue modificar competências ou informações de outro utilizador.
10. O sistema não solicita nem apresenta níveis de proficiência.

---

## RF07 — Gestão do Perfil Empresarial

**Prioridade:** P0 — Essencial  
**Ator principal:** Empresa

### Descrição

O sistema deve permitir que utilizadores registados como empresas criem, visualizem e atualizem o seu perfil institucional, disponibilizando informações sobre a organização aos restantes utilizadores.

### Informações do perfil

| Campo | Obrigatoriedade |
|---|---|
| Nome da empresa | Obrigatório |
| Área de atuação | Obrigatório |
| Descrição institucional | Opcional |
| Localização | Opcional |
| Website institucional | Opcional |

### Pré-condições

- O utilizador deve estar autenticado.
- A conta deve pertencer ao tipo Empresa.

### Critérios de aceitação

- A empresa consegue criar e atualizar o seu perfil institucional.
- O sistema valida os campos obrigatórios.
- As alterações são guardadas de forma persistente.
- O perfil apresenta os dados institucionais atualizados.
- Uma empresa não consegue modificar o perfil de outra conta.

---

## RF08 — Consulta de Perfis Públicos

**Prioridade:** P0 — Essencial  
**Atores:** Estudante e Empresa

### Descrição

O sistema deve permitir que utilizadores autenticados consultem os perfis públicos de estudantes e empresas registados na plataforma.

Nos perfis académicos, as competências devem ser apresentadas como etiquetas individuais.

### Pré-condições

- O utilizador deve estar autenticado.
- O perfil consultado deve existir e estar disponível para consulta.

### Critérios de aceitação

- O utilizador consegue consultar perfis de estudantes e empresas.
- O sistema apresenta os dados públicos correspondentes ao tipo de perfil.
- As competências dos estudantes são apresentadas como etiquetas.
- Informações privadas e credenciais não são divulgadas.
- A consulta de um perfil não permite modificar os seus dados.

---

## RF09 — Gestão da Imagem de Perfil

**Prioridade:** P1 — Desejável  
**Atores:** Estudante e Empresa

### Descrição

O sistema deve permitir que estudantes e empresas adicionem ou atualizem uma imagem associada ao seu perfil, podendo corresponder a uma fotografia pessoal ou logótipo institucional.

### Pré-condições

- O utilizador deve estar autenticado.
- O perfil deve pertencer à conta autenticada.

### Critérios de aceitação

- O utilizador consegue selecionar e enviar uma imagem válida.
- O sistema rejeita imagens que não cumpram os limites de formato e tamanho estabelecidos.
- A imagem fica associada ao perfil correto.
- A imagem atualizada é apresentada no perfil.
- O utilizador não consegue modificar imagens pertencentes a outros perfis.

---

## Regras de Negócio

**RN06 — Associação entre conta e perfil**

Cada perfil deve estar associado a uma conta de utilizador existente.

**RN07 — Tipo de perfil**

O tipo de perfil deve corresponder ao tipo de conta registado: Estudante ou Empresa.

**RN08 — Permissões de edição**

A criação e atualização dos dados de um perfil só podem ser realizadas pelo respetivo titular autorizado.

**RN09 — Integridade dos dados**

O sistema deve validar o preenchimento dos campos obrigatórios, os formatos aplicáveis e os valores submetidos antes de guardar as informações.

**RN10 — Privacidade dos perfis**

A consulta de perfis deve disponibilizar apenas as informações definidas como públicas.

**RN11 — Separação entre perfil e portfólio**

Os projetos académicos serão geridos pelo módulo de Portfólio Académico, embora possam ser apresentados no perfil do estudante.

**RN12 — Associação entre perfil empresarial e oportunidades**

As oportunidades publicadas por uma empresa devem estar associadas ao respetivo perfil empresarial.

**RN13 — Associação de competências**

Cada competência adicionada ao perfil deve ficar associada ao estudante correspondente.

**RN14 — Unicidade de competências por perfil**

O sistema não deve permitir o registo de competências duplicadas no mesmo perfil, considerando equivalentes nomes que diferem apenas em maiúsculas, minúsculas ou espaços adicionais nas extremidades.

**RN15 — Gestão das competências**

Apenas o titular do perfil académico pode adicionar ou remover as competências que lhe estão associadas.

**RN16 — Representação de competências**

As competências devem ser identificadas individualmente pelo nome, sem associação a níveis de proficiência.

**RN17 — Carácter opcional das competências**

A ausência de competências não deve impedir a criação ou atualização do perfil académico.

---

## Casos de Teste Propostos

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT06.1 | Criar perfil académico com dados válidos | Perfil guardado |
| CT06.2 | Atualizar curso e biografia | Dados atualizados |
| CT06.3 | Criar perfil sem curso | Operação rejeitada |
| CT06.4 | Adicionar competência React | Etiqueta React apresentada |
| CT06.5 | Adicionar três competências diferentes | Três etiquetas apresentadas |
| CT06.6 | Adicionar competência duplicada | Duplicação impedida |
| CT06.7 | Remover competência existente | Apenas a competência selecionada é removida |
| CT06.8 | Criar perfil sem competências | Operação permitida |
| CT06.9 | Tentar alterar competências de outro perfil | Acesso negado |
| CT06.10 | Voltar a iniciar sessão e consultar competências | Competências anteriormente guardadas apresentadas |
| CT07.1 | Criar perfil empresarial | Perfil guardado |
| CT07.2 | Atualizar descrição institucional | Alteração persistida |
| CT08.1 | Consultar perfil de outro estudante | Informações públicas apresentadas |
| CT08.2 | Tentar editar perfil de terceiros | Acesso negado |
| CT09.1 | Enviar imagem válida | Imagem associada ao perfil |
| CT09.2 | Enviar ficheiro inválido | Operação rejeitada |

Os testes CT09.1 e CT09.2 dependem da implementação do requisito desejável RF09.

---

**Estado do módulo:** Versão 0.4 — Aguardar validação final.

**Total:** 4 requisitos funcionais — 3 essenciais e 1 desejável.