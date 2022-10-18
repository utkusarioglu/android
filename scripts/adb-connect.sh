#!/bin/bash

source .env

port=58526

target="android-host:$port"
echo "Trying to connect to: $target"
adb connect $target
