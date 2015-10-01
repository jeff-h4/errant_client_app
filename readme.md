
### Notes ###
Debug Log on the Emulator or Android Phone:
> adb logcat



#### Wednesday, Sept 30, 2015 ####
Struggled to get the emulator up and running using 'phonegap run android'.
Eventually got it up and running on the Android Studio, which I couldn't do before.
I'm now trying to use React to create a div on the front page.
It's currently not appearing.

I found out about 'adb logcat'.
I added a content-security thingy meta tag to the index.html due to warnings found in
the adb logcat.
I installed babel to precompile JSX.
In moving my JSX code to its own file, JSHint let me know about a syntax error with my
React.createClass call (I shouldn't have added a 'function()' inside.
So Now I get the Red DIV! Yay!

