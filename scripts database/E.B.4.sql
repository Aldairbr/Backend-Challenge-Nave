SELECT projects.name as Projeto, (SELECT string_agg(navers.name::text, ', ') as Naver FROM projects_navers 
                              INNER JOIN navers ON navers.id = projects_navers.naver_id
                              WHERE projects.id = projects_navers.project_id
                             )
FROM projects
