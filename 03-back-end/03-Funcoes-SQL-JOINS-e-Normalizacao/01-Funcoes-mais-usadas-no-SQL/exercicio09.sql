SELECT job_id AS funcao, AVG(salary) AS total FROM hr.employees WHERE job_id <> 'IT_PROG' GROUP BY job_id ORDER BY total DESC;
SELECT job_id AS funcao, AVG(salary) AS total FROM hr.employees GROUP BY job_id HAVING NOT job_id = 'IT_PROG' ORDER BY total DESC;
