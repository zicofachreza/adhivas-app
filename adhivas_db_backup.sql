--
-- PostgreSQL database dump
--

-- Dumped from database version 14.11
-- Dumped by pg_dump version 14.11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Universities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Universities" (
    id integer NOT NULL,
    "univName" character varying(255) NOT NULL,
    location character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Universities" OWNER TO postgres;

--
-- Name: Universities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Universities_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Universities_id_seq" OWNER TO postgres;

--
-- Name: Universities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Universities_id_seq" OWNED BY public."Universities".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    nim character varying(255) NOT NULL,
    "fullName" character varying(255),
    "birthDate" character varying(255),
    role character varying(255) NOT NULL,
    "UniversityId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Universities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Universities" ALTER COLUMN id SET DEFAULT nextval('public."Universities_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20250409160843-create-university.js
20250409161009-create-user.js
\.


--
-- Data for Name: Universities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Universities" (id, "univName", location, "createdAt", "updatedAt") FROM stdin;
1	Telkom University	Bandung	2025-04-11 09:16:12.136+07	2025-04-11 09:16:12.136+07
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, username, password, nim, "fullName", "birthDate", role, "UniversityId", "createdAt", "updatedAt") FROM stdin;
1	adminsteven	$2b$10$hQ3w9WIF8NUuXz1Riq9ny.3YyTcHW1DUwnHNmSfwwmJwEVzM5S1JC	1301181234	\N	\N	Admin	1	2025-04-11 09:16:12.378+07	2025-04-11 09:16:12.378+07
4	zicofm	$2b$10$5FuVe9C549aGh2Mr0gSll.WkgQZA7CthkrPjI8ATxCcvlpnZDGXui	1301181235	Zico Fachreza	20000105	Student	1	2025-04-11 09:51:38.517+07	2025-04-11 10:06:22.111+07
\.


--
-- Name: Universities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Universities_id_seq"', 1, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 5, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Universities Universities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Universities"
    ADD CONSTRAINT "Universities_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_nim_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_nim_key" UNIQUE (nim);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key" UNIQUE (username);


--
-- Name: Users Users_UniversityId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_UniversityId_fkey" FOREIGN KEY ("UniversityId") REFERENCES public."Universities"(id);


--
-- PostgreSQL database dump complete
--

