#!/bin/bash

source .env

port=58526

if [ -z "$HOST_IP" ];
then
  echo "Error: .env.HOST_IP has to be defined for this script to work"
  exit 1
fi

target="$HOST_IP:$port"
echo "Trying to connect to: $target"
adb connect $target
