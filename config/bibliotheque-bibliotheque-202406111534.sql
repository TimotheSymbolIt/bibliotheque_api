--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8
-- Dumped by pg_dump version 14.8

-- Started on 2024-06-11 15:34:05

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

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3334 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 49464)
-- Name: author; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.author (
    au_id integer NOT NULL,
    au_name character varying(255) NOT NULL,
    au_age integer,
    au_isdead boolean
);


ALTER TABLE public.author OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 49463)
-- Name: author_au_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.author_au_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.author_au_id_seq OWNER TO postgres;

--
-- TOC entry 3335 (class 0 OID 0)
-- Dependencies: 209
-- Name: author_au_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.author_au_id_seq OWNED BY public.author.au_id;


--
-- TOC entry 212 (class 1259 OID 49471)
-- Name: book; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.book (
    bo_id integer NOT NULL,
    bo_title character varying(255),
    bo_description character varying(255),
    au_id integer,
    bo_isborrow boolean,
    bo_url character varying(255)
);


ALTER TABLE public.book OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 49470)
-- Name: book_bo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.book_bo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.book_bo_id_seq OWNER TO postgres;

--
-- TOC entry 3336 (class 0 OID 0)
-- Dependencies: 211
-- Name: book_bo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.book_bo_id_seq OWNED BY public.book.bo_id;


--
-- TOC entry 214 (class 1259 OID 49485)
-- Name: user_account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_account (
    us_id integer NOT NULL,
    us_username character varying(50),
    us_password character varying(255),
    us_email character varying(255)
);


ALTER TABLE public.user_account OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 49484)
-- Name: user_account_us_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_account_us_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_account_us_id_seq OWNER TO postgres;

--
-- TOC entry 3337 (class 0 OID 0)
-- Dependencies: 213
-- Name: user_account_us_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_account_us_id_seq OWNED BY public.user_account.us_id;


--
-- TOC entry 3174 (class 2604 OID 49467)
-- Name: author au_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.author ALTER COLUMN au_id SET DEFAULT nextval('public.author_au_id_seq'::regclass);


--
-- TOC entry 3175 (class 2604 OID 49474)
-- Name: book bo_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book ALTER COLUMN bo_id SET DEFAULT nextval('public.book_bo_id_seq'::regclass);


--
-- TOC entry 3176 (class 2604 OID 49488)
-- Name: user_account us_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_account ALTER COLUMN us_id SET DEFAULT nextval('public.user_account_us_id_seq'::regclass);


--
-- TOC entry 3324 (class 0 OID 49464)
-- Dependencies: 210
-- Data for Name: author; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.author (au_id, au_name, au_age, au_isdead) FROM stdin;
1	Molière	400	t
2	Diderot	400	t
3	Colette	130	t
\.


--
-- TOC entry 3326 (class 0 OID 49471)
-- Dependencies: 212
-- Data for Name: book; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.book (bo_id, bo_title, bo_description, au_id, bo_isborrow, bo_url) FROM stdin;
6	Les vrilles de la vigne	Recueil de dix-huit nouvelles publié entre 1905 et 1907	3	f	\N
5	Sido	Roman autobiographique qui décrit sa mère Sidonie Landoy mais également son entourage familial	3	f	\N
1	Le Malade Imaginaire	\N	1	t	\N
2	L'Avare	 Harpagon est un vieillard veuf d'une avarice maladive, qui fait vivre son entourage très chichement.	1	t	\N
4	Histoire des deux Indes	L'histoire philosophique et politique des établissements et du commerce des européens dans les deux Indes	2	t	\N
3	Jacques le fataliste	\N	2	t	\N
7	Le misanthrope	\N	1	f	https://static.fnac-static.com/multimedia/PE/Images/FR/NR/64/40/2f/3096676/1540-1/tsp20240104100452/Le-Misanthrope.jpg
9	Le bourgeois gentlhomme	abcdef	1	f	https://www.hachette.fr/sites/default/files/images/livres/couv/9782218959158-T.jpg
10	Chéri	abcdef	3	f	https://i.etsystatic.com/21660636/r/il/cd3c20/5646881945/il_1588xN.5646881945_p7ip.jpg
\.


--
-- TOC entry 3328 (class 0 OID 49485)
-- Dependencies: 214
-- Data for Name: user_account; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_account (us_id, us_username, us_password, us_email) FROM stdin;
18	Test	test	test@test.fr
3	tim	tim	tim@tim.fr
29	david	david	david@avid.fr
30	dave	dave	dave@avid.fr
31	dove	dove	dove@avid.fr
32	dovetest	dovetest	dovetest@avid.fr
33	testouille	testouille	testouille@testouille.fr
34	gauquelin	testouille	gauquelin@gauquelin.fr
36	abc	tesouille	abc@abc.fr
37	abcdef	abcdef	abcdef@abcdef.fr
\.


--
-- TOC entry 3338 (class 0 OID 0)
-- Dependencies: 209
-- Name: author_au_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.author_au_id_seq', 3, true);


--
-- TOC entry 3339 (class 0 OID 0)
-- Dependencies: 211
-- Name: book_bo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.book_bo_id_seq', 10, true);


--
-- TOC entry 3340 (class 0 OID 0)
-- Dependencies: 213
-- Name: user_account_us_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_account_us_id_seq', 37, true);


--
-- TOC entry 3178 (class 2606 OID 49469)
-- Name: author author_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pkey PRIMARY KEY (au_id);


--
-- TOC entry 3180 (class 2606 OID 49478)
-- Name: book book_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (bo_id);


--
-- TOC entry 3182 (class 2606 OID 49492)
-- Name: user_account user_account_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_account
    ADD CONSTRAINT user_account_pkey PRIMARY KEY (us_id);


--
-- TOC entry 3183 (class 2606 OID 49479)
-- Name: book fk_book_au_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT fk_book_au_id FOREIGN KEY (au_id) REFERENCES public.author(au_id);


-- Completed on 2024-06-11 15:34:06

--
-- PostgreSQL database dump complete
--

