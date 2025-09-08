-- KLIStra IN feed-URL: ersätt YOUR_FEED_URL med din nätverkslänk (CSV/TSV/JSON)
-- format: 'csv' eller 'tsv' eller 'json'
insert into feeds (merchant_name, url, format, default_tags, active) values
('Amazon SE', 'https://amzn.to/4m8ISp1', 'csv', '{tech,kampanj}', true),
('CDON', 'YOUR_FEED_URL', 'csv', '{tech,hem}', true),
('Webhallen', 'YOUR_FEED_URL', 'csv', '{tech,gaming}', true),
('Inet', 'YOUR_FEED_URL', 'csv', '{tech,gaming}', true),
('Kjell & Company', 'YOUR_FEED_URL', 'csv', '{tech,hem}', true),
('NetOnNet', 'YOUR_FEED_URL', 'csv', '{tech}', true),
('Proshop', 'YOUR_FEED_URL', 'csv', '{tech,gaming}', true),
('Apotea', 'YOUR_FEED_URL', 'csv', '{hem,halsa}', true),
('Jollyroom', 'YOUR_FEED_URL', 'csv', '{barn,hem}', true),
('Boozt', 'YOUR_FEED_URL', 'csv', '{mode}', true);
