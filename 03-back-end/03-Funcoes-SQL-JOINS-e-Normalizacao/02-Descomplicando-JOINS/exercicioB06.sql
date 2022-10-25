SELECT th.name, th.location, bo.rating, mo.title, mo.director, mo.year, mo.length_minutes
FROM pixar.theater AS th
INNER JOIN pixar.movies AS mo
ON th.id = mo.theater_id
INNER JOIN pixar.box_office AS bo
ON th.id = bo.movie_id
WHERE bo.rating >= 8 AND mo.theater_id IS NOT NULL;