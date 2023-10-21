#!/bin/sh
hugo || exit 1
git commit -m 'Update blog' || exit 1
git push || exit 1
