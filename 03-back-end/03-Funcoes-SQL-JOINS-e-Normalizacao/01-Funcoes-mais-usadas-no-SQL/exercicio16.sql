SELECT UCASE(first_name) AS first_name, UCASE(last_name) AS last_name FROM hr.employees;
SELECT UPPER(CONCAT(first_name,' ', last_name)) AS name_employees FROM hr.employees;