INSERT INTO sequence VALUES ('TestSeq', 0, 1);
SELECT SETVAL('TestSeq', 0);
SELECT CURRVAL('TestSeq');
SELECT NEXTVAL('TestSeq');