--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.4

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
-- Name: anon_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.anon_links (
    id integer NOT NULL,
    user_id uuid NOT NULL,
    link_url character varying(1024) NOT NULL,
    link_name character varying(256),
    created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE ONLY public.anon_links FORCE ROW LEVEL SECURITY;


ALTER TABLE public.anon_links OWNER TO postgres;

--
-- Name: anon_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.anon_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.anon_links_id_seq OWNER TO postgres;

--
-- Name: anon_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.anon_links_id_seq OWNED BY public.anon_links.id;


--
-- Name: user_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_links (
    id integer NOT NULL,
    user_id uuid,
    link_url text NOT NULL,
    link_name text NOT NULL,
    is_private boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE ONLY public.user_links FORCE ROW LEVEL SECURITY;


ALTER TABLE public.user_links OWNER TO postgres;

--
-- Name: user_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_links_id_seq OWNER TO postgres;

--
-- Name: user_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_links_id_seq OWNED BY public.user_links.id;


--
-- Name: username_mapping; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.username_mapping (
    uid uuid NOT NULL,
    username text
);

ALTER TABLE ONLY public.username_mapping FORCE ROW LEVEL SECURITY;


ALTER TABLE public.username_mapping OWNER TO postgres;

--
-- Name: anon_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.anon_links ALTER COLUMN id SET DEFAULT nextval('public.anon_links_id_seq'::regclass);


--
-- Name: user_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_links ALTER COLUMN id SET DEFAULT nextval('public.user_links_id_seq'::regclass);


--
-- Name: anon_links anon_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.anon_links
    ADD CONSTRAINT anon_links_pkey PRIMARY KEY (id);


--
-- Name: user_links user_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_links
    ADD CONSTRAINT user_links_pkey PRIMARY KEY (id);


--
-- Name: username_mapping username_mapping_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.username_mapping
    ADD CONSTRAINT username_mapping_pkey PRIMARY KEY (uid);


--
-- Name: username_mapping username_mapping_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.username_mapping
    ADD CONSTRAINT username_mapping_username_key UNIQUE (username);


--
-- Name: idx_username; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_username ON public.username_mapping USING btree (username);


--
-- Name: anon_links anon_links_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.anon_links
    ADD CONSTRAINT anon_links_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);


--
-- Name: user_links user_links_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_links
    ADD CONSTRAINT user_links_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);


--
-- Name: anon_links Enable delete for users based on user_id; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Enable delete for users based on user_id" ON public.anon_links FOR DELETE USING ((auth.uid() = user_id));


--
-- Name: anon_links Enable insert for all users; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Enable insert for all users" ON public.anon_links FOR INSERT WITH CHECK (true);


--
-- Name: anon_links Enable read access for all users; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Enable read access for all users" ON public.anon_links FOR SELECT USING (true);


--
-- Name: username_mapping Enable read access for all users; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY "Enable read access for all users" ON public.username_mapping FOR SELECT USING (true);


--
-- Name: anon_links; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.anon_links ENABLE ROW LEVEL SECURITY;

--
-- Name: user_links delete_own_row; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY delete_own_row ON public.user_links FOR DELETE TO authenticated, anon USING ((auth.uid() = user_id));


--
-- Name: username_mapping delete_own_username; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY delete_own_username ON public.username_mapping FOR DELETE TO authenticated, anon USING ((auth.uid() = uid));


--
-- Name: user_links insert_own_row; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY insert_own_row ON public.user_links FOR INSERT TO authenticated, anon WITH CHECK ((auth.uid() = user_id));


--
-- Name: username_mapping insert_own_username; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY insert_own_username ON public.username_mapping FOR INSERT TO authenticated, anon WITH CHECK ((auth.uid() = uid));


--
-- Name: user_links public_and_authenticated_access; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY public_and_authenticated_access ON public.user_links FOR SELECT USING ((((is_private IS NOT TRUE) AND ((auth.uid() IS NULL) OR (auth.uid() <> user_id))) OR ((auth.uid() = user_id) AND (is_private = true)) OR ((auth.uid() = user_id) AND (is_private IS NOT TRUE))));


--
-- Name: user_links update_own_row; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY update_own_row ON public.user_links FOR UPDATE TO authenticated, anon USING ((auth.uid() = user_id));


--
-- Name: username_mapping update_own_username; Type: POLICY; Schema: public; Owner: postgres
--

CREATE POLICY update_own_username ON public.username_mapping FOR UPDATE TO authenticated, anon USING ((auth.uid() = uid));


--
-- Name: user_links; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.user_links ENABLE ROW LEVEL SECURITY;

--
-- Name: username_mapping; Type: ROW SECURITY; Schema: public; Owner: postgres
--

ALTER TABLE public.username_mapping ENABLE ROW LEVEL SECURITY;

--
-- Name: TABLE anon_links; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.anon_links TO anon;
GRANT ALL ON TABLE public.anon_links TO authenticated;
GRANT ALL ON TABLE public.anon_links TO service_role;
GRANT SELECT,INSERT ON TABLE public.anon_links TO PUBLIC;


--
-- Name: SEQUENCE anon_links_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.anon_links_id_seq TO anon;
GRANT ALL ON SEQUENCE public.anon_links_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.anon_links_id_seq TO service_role;


--
-- Name: TABLE user_links; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.user_links TO anon;
GRANT ALL ON TABLE public.user_links TO authenticated;
GRANT ALL ON TABLE public.user_links TO service_role;


--
-- Name: SEQUENCE user_links_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.user_links_id_seq TO anon;
GRANT ALL ON SEQUENCE public.user_links_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.user_links_id_seq TO service_role;


--
-- Name: TABLE username_mapping; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.username_mapping TO anon;
GRANT ALL ON TABLE public.username_mapping TO authenticated;
GRANT ALL ON TABLE public.username_mapping TO service_role;


--
-- PostgreSQL database dump complete
--