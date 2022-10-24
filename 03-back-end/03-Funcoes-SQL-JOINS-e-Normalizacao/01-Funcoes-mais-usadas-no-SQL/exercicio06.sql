SELECT job_id AS funcao, COUNT(*) AS total FROM hr.employees WHERE job_id = 'IT_PROG';
SELECT job_id AS funcao, COUNT(*) AS total FROM hr.employees GROUP BY job_id HAVING job_id = 'IT_PROG';
