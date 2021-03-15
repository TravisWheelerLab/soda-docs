#! /bin/bash

dir=$(pwd);
for d in */ ; do
    if [ "$d" != 'node_modules/' ]; then
        cd $dir/$d && make clean
        make build
        sed -i "s/main.js/..\/_static\/example-builds\/${d%/}\/main.js/g" ./build/index.html
        cp -r build/ ../../docs/source/_static/example-builds/$d
    fi
done
