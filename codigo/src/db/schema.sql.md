# src/db/schema.sql

```sql
CREATE TYPE "public"."modalidade" AS ENUM(
    'PRESENCIAL', 
    'REMOTO', 
    'HIBRIDO'
);--> statement-breakpoint

CREATE TYPE "public"."tipo_conta" AS ENUM(
    'ESTUDANTE', 
    'EMPRESA'
);--> statement-breakpoint

CREATE TYPE "public"."tipo_oportunidade" AS ENUM(
    'ESTAGIO', 
    'EMPREGO', 
    'BOLSA_ESTUDO', 
    'CONCURSO', 
    'PROGRAMA_FORMACAO', 
    'DESAFIO_PROFISSIONAL'
);--> statement-breakpoint

CREATE TABLE "utilizador" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nome_apresentacao" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"palavra_passe_hash" varchar(255) NOT NULL,
	"tipo_conta" "tipo_conta" NOT NULL,
	"foto_perfil_url" text,
	"capa_perfil_url" text,
	"ativa" boolean DEFAULT true NOT NULL,
	"criado_em" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "utilizador_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "competencia" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"perfil_academico_id" uuid NOT NULL,
	"nome" varchar(50) NOT NULL,
	CONSTRAINT "competencia_perfil_nome_uq" UNIQUE("perfil_academico_id","nome")
);
--> statement-breakpoint
CREATE TABLE "perfil_academico" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"utilizador_id" uuid NOT NULL,
	"instituicao_ensino" varchar(150) NOT NULL,
	"curso" varchar(150) NOT NULL,
	"biografia" text,
	CONSTRAINT "perfil_academico_utilizador_id_unique" UNIQUE("utilizador_id")
);
--> statement-breakpoint
CREATE TABLE "perfil_empresarial" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"utilizador_id" uuid NOT NULL,
	"area_atuacao" varchar(150) NOT NULL,
	"descricao" text,
	"localizacao" varchar(150),
	"website" varchar(255),
	CONSTRAINT "perfil_empresarial_utilizador_id_unique" UNIQUE("utilizador_id")
);
--> statement-breakpoint
CREATE TABLE "projeto" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"perfil_academico_id" uuid NOT NULL,
	"titulo" varchar(150) NOT NULL,
	"descricao" text NOT NULL,
	"data_realizacao" date,
	"criado_em" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projeto_tecnologia" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"projeto_id" uuid NOT NULL,
	"nome" varchar(50) NOT NULL,
	CONSTRAINT "projeto_tecnologia_projeto_nome_uq" UNIQUE("projeto_id","nome")
);
--> statement-breakpoint
CREATE TABLE "publicacao" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"utilizador_id" uuid NOT NULL,
	"conteudo" text NOT NULL,
	"imagem_url" text,
	"criada_em" timestamp with time zone DEFAULT now() NOT NULL,
	"atualizada_em" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "oportunidade" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"perfil_empresarial_id" uuid NOT NULL,
	"titulo" varchar(150) NOT NULL,
	"descricao" text NOT NULL,
	"tipo" "tipo_oportunidade" NOT NULL,
	"modalidade" "modalidade",
	"localizacao" varchar(150),
	"email_candidatura" varchar(255),
	"url_candidatura" varchar(500),
	"data_limite" date,
	"data_publicacao" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "oportunidade_meio_candidatura_ck" CHECK ("oportunidade"."email_candidatura" IS NOT NULL OR "oportunidade"."url_candidatura" IS NOT NULL)
);
--> statement-breakpoint
CREATE TABLE "token_revogado" (
	"jti" uuid PRIMARY KEY NOT NULL,
	"utilizador_id" uuid NOT NULL,
	"revogado_em" timestamp with time zone DEFAULT now() NOT NULL,
	"expira_em" timestamp with time zone NOT NULL
);
--> statement-breakpoint

ALTER TABLE "competencia" 
ADD CONSTRAINT "competencia_perfil_academico_id_perfil_academico_id_fk" 
FOREIGN KEY ("perfil_academico_id") 
REFERENCES "public"."perfil_academico"("id") 
ON DELETE cascade ON UPDATE no action;--> statement-breakpoint

ALTER TABLE "perfil_academico" 
ADD CONSTRAINT "perfil_academico_utilizador_id_utilizador_id_fk" 
FOREIGN KEY ("utilizador_id") 
REFERENCES "public"."utilizador"("id") 
ON DELETE cascade ON UPDATE no action;--> statement-breakpoint

ALTER TABLE "perfil_empresarial" 
ADD CONSTRAINT "perfil_empresarial_utilizador_id_utilizador_id_fk" 
FOREIGN KEY ("utilizador_id") 
REFERENCES "public"."utilizador"("id") 
ON DELETE cascade ON UPDATE no action;--> statement-breakpoint

ALTER TABLE "projeto" 
ADD CONSTRAINT "projeto_perfil_academico_id_perfil_academico_id_fk" 
FOREIGN KEY ("perfil_academico_id") 
REFERENCES "public"."perfil_academico"("id") 
ON DELETE cascade ON UPDATE no action;--> statement-breakpoint

ALTER TABLE "projeto_tecnologia" 
ADD CONSTRAINT "projeto_tecnologia_projeto_id_projeto_id_fk" 
FOREIGN KEY ("projeto_id") 
REFERENCES "public"."projeto"("id") 
ON DELETE cascade ON UPDATE no action;--> statement-breakpoint

ALTER TABLE "publicacao" 
ADD CONSTRAINT "publicacao_utilizador_id_utilizador_id_fk" 
FOREIGN KEY ("utilizador_id") 
REFERENCES "public"."utilizador"("id") 
ON DELETE cascade ON UPDATE no action;--> statement-breakpoint

ALTER TABLE "oportunidade" 
ADD CONSTRAINT "oportunidade_perfil_empresarial_id_perfil_empresarial_id_fk" 
FOREIGN KEY ("perfil_empresarial_id") 
REFERENCES "public"."perfil_empresarial"("id") 
ON DELETE cascade ON UPDATE no action;--> statement-breakpoint

ALTER TABLE "token_revogado" 
ADD CONSTRAINT "token_revogado_utilizador_id_utilizador_id_fk" 
FOREIGN KEY ("utilizador_id") 
REFERENCES "public"."utilizador"("id") 
ON DELETE cascade ON UPDATE no action;--> statement-breakpoint

CREATE INDEX "projeto_perfil_idx" ON "projeto" USING btree ("perfil_academico_id");--> statement-breakpoint
CREATE INDEX "publicacao_utilizador_idx" ON "publicacao" USING btree ("utilizador_id");--> statement-breakpoint
CREATE INDEX "publicacao_criada_em_idx" ON "publicacao" USING btree ("criada_em");--> statement-breakpoint
CREATE INDEX "oportunidade_perfil_idx" ON "oportunidade" USING btree ("perfil_empresarial_id");--> statement-breakpoint
CREATE INDEX "oportunidade_data_publicacao_idx" ON "oportunidade" USING btree ("data_publicacao");--> statement-breakpoint
CREATE INDEX "token_revogado_expira_em_idx" ON "token_revogado" USING btree ("expira_em");
```
