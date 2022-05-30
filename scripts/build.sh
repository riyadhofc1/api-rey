#!/usr/bin/env bash
echo "Building server side..."
yarn build-ts
echo "Removing view dir if exist"
rm -rf dist/view
echo "Building client side..."
cd client
yarn build
echo "Cleaning cache..."
rm -r node_modules
echo "Leaving client dir..."
cd ..
echo "Moving result to dist dir"
mv client/build dist/view