#! /bin/bash

git clone git@github.com:TravisWheelerLab/soda.git
cd soda
git checkout master
npm i
make build
trst -o ../docs/source
