#!/bin/bash

# Remove everything except docs folder
git rm -rf --cached .
git add docs/
git commit -m "Clean main branch: keep only docs folder"
git push origin main 