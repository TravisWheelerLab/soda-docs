#! /bin/bash

dir=$(pwd);
d=$1;
cd $dir/$d && make clean
make build
sed -i "s/main.js/..\/_static\/example-builds\/${d%/}\/main.js/g" ./build/index.html
cp -r build/ ../../docs/source/_static/example-builds/$d
