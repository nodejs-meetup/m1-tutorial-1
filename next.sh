#!/bin/bash

branch_name="$(git symbolic-ref HEAD 2>/dev/null)" ||
branch_name="(unnamed branch)"     # detached HEAD
branch_name=${branch_name##refs/heads/}
echo $branch_name
if [ "$branch_name" == "master" ]
then
  next_branch_name=1
else
  next_branch_name="$((branch_name + 1))"  	
fi

git checkout $next_branch_name
#echo $next_branch_name
