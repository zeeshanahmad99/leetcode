# Write your MySQL query statement below

select name from employee E1
join (select managerId from employee group by managerId having count(managerId) >= 5) E2
on E1.id = E2.managerId;