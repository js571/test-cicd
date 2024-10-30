-- init.sql

-- 创建数据库（如果不存在）
CREATE DATABASE IF NOT EXISTS xwdev;

-- 选择数据库
USE xwdev;

-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 插入用户数据
INSERT INTO users (username, password) VALUES ('maat', '123456');