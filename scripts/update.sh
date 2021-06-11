#!/bin/bash

sudo apt update && sudo apt list --upgradeable && sudo apt upgrade -y && sudo apt autoremove -y
