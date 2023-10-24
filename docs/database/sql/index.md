---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: doc
---

## 1. 前言
大家好，从本小节开始，我们将一起学习SQL wiki系列。谈到 SQL，每个人心里会有不同的理解，但大家可能都会不约而同地想到一个词——数据库。SQL 发展到今天，它的足迹其实早已遍布各个应用领域了。

学好 SQL，你可以做到很多，数据管理、数据分析甚至机器学习，你都可以用 SQL 来完成。学习是一个颇为技巧的活，它也遵守二八定律，学好20%的知识你就可以做好80%的事情，这也是wiki想要带给大家的。

我们希望整理出 SQL “百分之二十”的知识，帮你办到“百分之八十”的事情，当然这里的知识远非百分之二十。

作为 SQL 系列的第一小节，我们将为你简单的介绍什么是 SQL，SQL 能做什么以及学习 SQL 的注意事项。

慕课赠言：空无以求全，倒空的杯子才能装满更多的水。



## 2. 什么是 SQL
SQL，全称 Structured Query Language，是一种结构化查询语言。

SQL，是一种数据库访问语言。

SQL，是一种 半衰期很长的语言，自 1970 年代诞生到现在，经久不衰，日久弥新



## 3. SQL 能做什么
- SQL 可用于在数据库中增加，删除，修改，查询数据；

- SQL 可用于新建数据库，新建数据表；

- SQL 可用于新建视图，函数；

- SQL 可用于简单的数据清洗；

- SQL 可用于简单的数据分析；

- SQL 可搭配 Hive，Spark SQL 做大数据；

- SQL 可搭配 SQLFlow 做机器学习；

- SQL 可搭配一定的工具做数据报表。

  

## 4. RDBMS有哪些

RDBMS，全称relational database management system（关系数据库管理系统），是一种数据库软件，但我们经常狭义地称呼它为数据库。RDBMS将数据及数据关系以数据库和数据表的形式存储，并提供 SQL 访问接口。

目前主流 RDBMS 有 MySQL、PostgreSQL、SQL Server 和 Oracle；其中MySQL和PostgreSQL是免费开源且使用广泛的数据库，也是我们学习的重点。

不同的数据库厂商对于 SQL 的支持差异颇大，一份精简的 wiki 实在无法囊括那么多，因此本 wiki 以MySQL和PostgreSQL为主，且默认使用MySQL。当然你大可不必担心，本 wiki 介绍的 SQL 知识几乎可以无缝地跑在不同的数据库，对于差异我们会着重说明。

## 5. 其它系统
SQL 的使用十分广泛，不仅可以在 RDBMS 中使用，还可以在其它系统中使用。

Hive 和 Pig 提供 SQL 的方式进行大数据操作，Spark SQL 也是同等作用的产品；
InfluxDB 是目前使用最为广泛的时序数据库，也提供 SQL 访问接口；
TiDB 是目前使用也非常广泛的分布式数据库，仍以 SQL 访问，并 100%兼容 MySQL；
SQLFLow 是蚂蚁金服开源的一款用 SQL 进行机器学习的产品；
Neo4j 是图数据库中的佼佼者，其查询语言也是一种类似 SQL 的语言；
SPARQL 是 w3c 专门为 RDF 定制的查询语言，被广泛的应用在知识图谱领域，其语法几乎与 SQL 无异。



## 6. 重要说明
SQL 语句中的变量使用[]作为变量占位符，如在[table_name]中，table_name 表示数据表名称。
SQL 语句若无特殊说明，均默认在MySQL中执行。
SQL 中的关键字不区分大小写，如CREATE和create均可用，但我们推荐关键字大写。
SQL 关键字虽不区分大小写，但为以示区分，教程中统一大写。
SQL 标准每年都在更新，不同厂商的支持又不尽相同，本教程以MySQL和PostgreSQL为主。
SQL 语句在书写时有诸多保留词，如index，一般情况下都需要通过转义符转义。
MySQL中的转义符是 `` ，PostgreSQL中的转义符是 “”。
本教程聚焦在 SQL 的介绍和使用上，因此不会涉及到数据库安装与配置相关的知识。