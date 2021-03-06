DROP TABLE IF EXISTS navers, projects, projects_navers CASCADE;

CREATE TABLE IF NOT EXISTS navers (
	id SERIAL PRIMARY KEY,
	name varchar(50) NOT NULL,
	job_role varchar (50) NOT NULL,
 	birthdate date NOT NULL,
 	admission_date date NOT NULL,
 	created_at timestamp NOT NULL,
 	updated_at timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
	id SERIAL PRIMARY KEY,
	name varchar(50) NOT NULL,
	created_at timestamp NOT NULL,
	updated_at timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS projects_navers (
	id SERIAL PRIMARY KEY,
 	naver_id integer NOT NULL,
 	project_id integer NOT NULL,
 	FOREIGN KEY (naver_id) REFERENCES navers (id) ON DELETE CASCADE ON UPDATE CASCADE,
 	FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE ON UPDATE CASCADE
);