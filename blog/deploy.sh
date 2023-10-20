#!/bin/sh
hugo || exit 1
git push || exit 1
