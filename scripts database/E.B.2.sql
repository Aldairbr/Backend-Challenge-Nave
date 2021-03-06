TRUNCATE navers, projects, projects_navers CASCADE;

INSERT INTO navers(name, job_role, birthdate, admission_date, created_at, updated_at) VALUES ('Aldair Becker Rodrigues', 'Back-end developer', '1994-07-05', '2021-04-01', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 
INSERT INTO navers(name, job_role, birthdate, admission_date, created_at, updated_at) VALUES ('Bruno Falcão Tessmer', 'Product Owner', '1997-08-01', '2020-11-27', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 
INSERT INTO navers(name, job_role, birthdate, admission_date, created_at, updated_at) VALUES ('Wesley Marques', 'Front-end developer', '1994-12-09', '2020-08-17', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 

INSERT INTO projects(name, created_at, updated_at) VALUES ('Vittude', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 
INSERT INTO projects(name, created_at, updated_at) VALUES ('Projeto muito bom', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO projects(name, created_at, updated_at) VALUES ('Projeto realmente bom', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 


INSERT INTO projects_navers(naver_id, project_id) VALUES (1, 1); 
INSERT INTO projects_navers(naver_id, project_id) VALUES (2, 1); 
INSERT INTO projects_navers(naver_id, project_id) VALUES (1, 2); 
INSERT INTO projects_navers(naver_id, project_id) VALUES (3, 2); 
INSERT INTO projects_navers(naver_id, project_id) VALUES (3, 3); 

SELECT * FROM navers