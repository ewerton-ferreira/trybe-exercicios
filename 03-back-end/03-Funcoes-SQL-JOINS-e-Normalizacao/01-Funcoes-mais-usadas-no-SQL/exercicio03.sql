SELECT job_id, AVG(salary) AS media_salarial FROM hr.employees GROUP BY job_id ORDER BY media_salarial DESC;
#Uma segunda interpretação para outra tabela estrutural
SELECT job_id, (max_salary + min_salary) / 2 AS media_salarial FROM hr.jobs ORDER BY media_salarial DESC;