DROP TABLE user_table;
CREATE TABLE user_table ( userid int NOT NULL, username varchar(20) NOT NULL, userpwd varchar(20) NOT NULL, usergroup varchar(1), status varchar(1), note varchar(100), PRIMARY KEY (userid) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
insert into user_table (userid, username, userpwd, usergroup, status, note) values (100, 'liang', '123', '1', '0', null);
insert into user_table (userid, username, userpwd, usergroup, status, note) values (101, 'su', '123', '1', '0', null);
insert into user_table (userid, username, userpwd, usergroup, status, note) values (102, 'mei', '123', '3', '0', null);
DROP INDEX ix1 ON user_table;
CREATE UNIQUE INDEX ix1 ON user_table (userid);
DROP INDEX user_name_idx ON user_table;
CREATE UNIQUE INDEX user_name_idx ON user_table (username);
DROP INDEX ix3 ON user_table;
CREATE INDEX ix3 ON user_table (usergroup);
DROP INDEX ix4 ON user_table;
CREATE INDEX ix4 ON user_table (status);