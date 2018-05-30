1. banner
 id     
 title         varchar(32)
 sub_title     varchar(16)
 src           varchar(64)
2. actitl
  id
  autor         varchar(16)
  autor-src     varchar(64)
  title         varchar(32)
  port_time    发布时间（s） int
  content       text 2g
  n_like       赞 int 

3. user
  id
  username     varchar(32)
  password     varchar(32)
  src          varchar(64)

数据字典

// 按价格升序
order by price ASC
// 按价格升序 ，按销量升序
order by price ASC, salse desc

// Group by  合并相同
// 统计每个班级的人数
count 
select class,count(class) from student_table Group by class 

// 每个班得平均分
select class,avage(score) from student_table Group by class 

// 每个班级最高，最低分
select class ,max(score),min(score) from student_table Group by class;


// select name, sum(price) from salse_table group by name;


Limit  ---- 用来做分页

limit 10 前10条数据

limit  5,8 ,从5开始取8条


第一页 0，20
第二页20，

