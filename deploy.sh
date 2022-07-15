#!/bin/bash

echo ">>> This is a test file to make it executable."

echo ">>> ENTERING REPO DIRECTORY"
cd /usr/repos/huascaran

echo ">>> PULLING FROM GIT"
git pull

echo ">>> INSTALLING MODULES"
pnpm i

echo ">>> RESTARTING NEXTJS APP"
pm2 restart nextapp