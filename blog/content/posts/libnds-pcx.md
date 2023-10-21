+++
title = "libNDS's PCX loader is weird"
date = 2023-10-21T22:16:39+06:00
+++

Last time I talked about how GIMP makes incorrect PCX files.

Guess what? Turns out I was ***WRONG***!

Let me explain.

So, all the PCX files that come with libNDS are 8bpp - they can have up to 256 unique colors. But when you tell GIMP to create an indexed image with maximum color count of 256 and you have less than or equal to 16 colors in the image, it will get crushed to 2bpp or 4bpp. libNDS doesn't recognize 2 and 4bpp images for some reason, so it just gives up...and I still don't know why that is.

However, libNDS docs **did not** specify that only 8bpp images are supported, so it wasn't very unexpected that I assumed that GIMP is the problem. Oh well.

To get around this arbitrary limitation, I use IfranView to increase the color depth to 8bpp. It's really easy to do - one just needs to open their image, click on 'Image' and then on 'Increase Color Depth', select 8bpp and save the new image.

And if you have to update many images to 8bpp, then it can take a really long time. A reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeally long time. A r{'e' * math.inf}ally long time.

*- moltony*
