SELECT mo.title, bo.domestic_sales, bo.international_sales
FROM pixar.movies AS mo
INNER JOIN pixar.box_office AS bo
ON mo.id = bo.movie_id;