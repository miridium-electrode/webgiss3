#!/bin/bash

b() {
	if [ -d public/build/images ]
	then
		pnpm run build
	else
		cp -r node_modules/leaflet/dist/images public/build/images && pnpm run build
	fi
}

dev() {
	if [ -d public/build/images ]
	then
		pnpm run dev
	else
		cp -r node_modules/leaflet/dist/images public/build/images && pnpm run dev
	fi
}

start() {
	if [ -d public/build/images ]
	then
		pnpm run start
	else
		cp -r node_modules/leaflet/dist/images public/build/images && pnpm run start
	fi
}

case $1 in
	b)
		b
		;;
	dev)
		dev
		;;
	start)
		start
		;;
	*)
		echo 'no'
		;;
esac