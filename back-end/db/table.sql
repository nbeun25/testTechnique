CREATE TABLE IF NOT EXISTS excuse (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    http_code INTEGER NOT NULL,
    tag VARCHAR(25),
    message VARCHAR(240)
);

INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (701, "Inexcusable", "Meh"); 
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (702, "Inexcusable", "Emacs"); 
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (703, "Inexcusable", "Explosion"); 
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (710, "Novelty Implementations", "PHP"); 
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (711, "Novelty Implementations", "Convenience Store"); 
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (712, "Novelty Implementations", "NoSQL");
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (720, "Edge Cases", "Unpossible"); 
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (721, "Edge Cases", "Known Unknowns"); 
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (722, "Edge Cases", "Unknown Unknowns"); 
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (730, "Fucking", "Fucking npm"); 
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (731, "Fucking", "Fucking Rubygems"); 
INSERT INTO mysqlDatabase.excuse (http_code, tag, message) VALUES (732, "Fucking", "Fucking Unic💩de");  