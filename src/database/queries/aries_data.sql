INSERT INTO `aries_db`.`categories` (name, is_active)
VALUES 
('man', 1),
('woman', 1),
('child', 1),
('accesories', 1);


INSERT INTO `aries_db`.`colors` (name, is_active)
VALUES 
('red', 1),
('blue', 1),
('white', 1),
('black', 1),
('yellow', 1);


INSERT INTO `aries_db`.`sizes` (name, is_active)
VALUES 
('XS', 1),
('S', 1),
('M', 1),
('L', 1),
('XL', 1);


SET FOREIGN_KEY_CHECKS = 0;
INSERT INTO `aries_db`.`products` (name, description, product_img, category_id, color_id, size_id, stock, price, is_active)
VALUES 
("Casco Ovation Schooler",
"Casco para equitación super cómodo y liviano. Visera y arnés de cuero genuino. Dial de ajuste fácil para un ajuste perfecto. Acabado de goma fácil de limpiar.Forro extraíble lavable Coolmax®. Exclusivo clip de ajuste YKK® y hebilla. Certificado según las normas ASTM",
"casco.jpg",
4,
5,
1,
12,
55000,
1),
("Montura salto competición armazón PVC",
"El asiento plano está diseñado para adoptar una posición de salto equilibrada, permitiendo al jinete una gran libertad de movimiento, manteniendo su posición, a lo que se le suma el contacto que le brinda el basto frances. El forrado en la falda favorece la estabilidad de la pierna. El armazon de PVC le da flexibilidad a la montura brindando comodidad al jinete y al caballo, ademas de su durabilidad.",
"montura.jpg",
4,
5,
3,
8,
132000,
1),
("Chomba competición",
"Chomba equitacion liviana 100% algodón. Elegantes detalles en cuello y aberturas laterales. Botones de metal.Ligeramente mas larga atrás",
"prod1672271866155.jpg",
1,
5,
1,
23,
12000,
1),
("Pantalón de Equitación Rider's Gene para Hombre KGrip",
"Pantalón para montar de la nueva marca italiana RG para hombre que ofrece una excelente combinación de funcionalidad y alto rendimiento con un diseño tecnológico",
"pantalonhombre.jpg",
1,
4,
3,
18,
40000,
1),
("Chaqueta Concurso",
"La Chaqueta Concurso Animo Istrana de hombre combina tecnología y diseño al máximo nivel. La característica que le hace prácticamente única, es su cierre hasta el cuello.",
"chaquetaanimohombre.jpg",
2,
2,
5,
9,
160000,
1),
("Pantalón Mujer Vestrum Syracuse Full Grip",
"Pantalones deportivos fabricados con la mejor calidad del material bielástico. Con culera de Grip",
"breechmujer.jpg",
2,
1,
1,
5,
90000,
1),
("Camisa Mujer Medan Vestrum",
"Manga corta. Tejido técnico. Adornos en la parte delantera y logo Vestrum en el cuello.",
"camisamujer.jpg",
2,
3,
4,
31,
25000,
1);
SET FOREIGN_KEY_CHECKS = 1;


INSERT INTO `aries_db`.`users` (firstName, lastName, email, password, type, user_img, is_active)
VALUES 
("Mick",
"Jagger",
"mick.jagger@gmail.com",
"$2a$10$rPhKqf8kisHnm9u2E2wd7u9ma3X9fCQJ50SRDGLiNI8sDrYc7Z58a",
"Customer",
"user1673206016637.jpg",
1),
("Keith",
"Richards",
"keith@gmail.com",
"$2a$10$E43D/1XsGeiFovOHwW/ql.z9t5VdOTKHxRn7v0xGNWkrJBnyufc1q",
"Customer",
"user1673210420364.jpg",
1),
("Paul",
"McCartney",
"paul@gmail.com",
"$2a$10$76VdRlmc9ZjCnLQEkGFcSe9YPnnOC330B/P0AWzfNwmEH4EEfjcoG",
"Customer",
"user1673310847926.jpg",
1),
("Admin",
"Strator",
"admin@gmail.com",
"abc123",
"admin",
"https://robohash.org/doloremetdoloribus.png?size=50x50&set=set1",
1)