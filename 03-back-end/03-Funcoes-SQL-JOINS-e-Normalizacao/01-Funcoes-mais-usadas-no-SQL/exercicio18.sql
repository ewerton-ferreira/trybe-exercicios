SELECT first_name, last_name, DATEDIFF(NOW(), hire_date) AS days_employed FROM hr.employees;

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS days_employed FROM hr.employees;