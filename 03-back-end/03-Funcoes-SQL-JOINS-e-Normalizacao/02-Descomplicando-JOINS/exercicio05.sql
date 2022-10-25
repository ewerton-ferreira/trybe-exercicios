SELECT th.*, mo.title, mo.director, mo.year, mo.length_minutes
FROM pixar.theater AS th
RIGHT JOIN pixar.movies AS mo
ON th.id = mo.theater_id
ORDER BY th.name;