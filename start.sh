#!/usr/bin/env bash

if [ ! -d "dist" ]; then
    echo "Compiling from TS to JS"
    yarn build
fi

echo "Starting server..."
yarn start