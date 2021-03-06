SELECT projects.id, projects.name, (SELECT Count(*) as "total de navers" FROM projects_navers WHERE projects.id = projects_navers.project_id ) 
FROM projects
