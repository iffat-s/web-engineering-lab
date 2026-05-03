#!/bin/bash
pass=0
fail=0
echo "Enter number of students:"
read num
if [ $num -lt 0 ]; then
echo "Invalid Input"
fi
for((i=1; i<=num; i++))
do
echo "Enter marks of student $i"
read marks
if [ $marks -ge  40 ]; then
echo "Student Pass"
((pass++))
else
echo "Student Failed"
((fail++))
fi
done
echo "        "
echo "Total number of passed students : $pass"
echo "Total number of failed students : $fail"

