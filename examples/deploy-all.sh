#! /bin/bash

for d in */ ; do
    if [ "$d" != 'node_modules/' ]; then
        ./deploy.sh $d;
    fi
done
