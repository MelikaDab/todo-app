CREATE DATABASE todoapp;
CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)

);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

INSERT INTO todos (id, user_email, title, progress, date) VALUES('0', 'melikadabiri2022@gmail.com', 'make todo app!', 10, 'Sat Aug 26 2023 20:35:40 GMT+0400 (Gulf Standard Time)');
