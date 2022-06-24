#!/bin/bash

search=`cat text.txt`
echo `$search | tr ' ' '\n'`

selected=`printf "$search" | fzf`

echo "selected: $selected"
