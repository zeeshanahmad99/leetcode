# Write your MySQL query statement below

select 
    concat(year(trans_date), '-', lpad(month(trans_date), 2, '0')) as month, 
    country, 
    count(*) as trans_count,
    sum(if(state = 'approved', 1, 0)) as approved_count,
    sum(amount) as trans_total_amount,
    sum(if(state = 'approved', amount, 0)) as approved_total_amount
from transactions 
    group by month, country