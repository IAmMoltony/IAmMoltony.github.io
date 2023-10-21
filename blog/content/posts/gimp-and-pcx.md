+++
title = 'GIMP and PCX: a disappointing discovery'
date = 2023-10-21T14:10:10+06:00
+++

Recently, I've been trying to get PCX image files to load using libnds. I knew that GIMP supports many image formats, including PCX, so I made a new PCX image, saved it and then wrote code that displays it. After some tweaking... I got a cyan square. Weird! I started messing around with the code, trying to get it to work, but it either didn't display anything or displayed that dreaded cyan square. Looking at the documentation, I decided to print the BPP of the image, and... 1bpp. The image that I made was 8bpp, but the PCX loader thought it's 1bpp. So there must have been some issue with GIMP not saving my image properly. I tested the program with `ball.pcx`, which is included in libnds examples and is known to work. And sure enough, it just worked!

Never using GIMP for PCX files ever again.

*- moltony*