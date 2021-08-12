#!/bin/sh

yarn run cy:run
if [ $? -ne 0 ]
then
    osascript -e 'tell app "Finder" to display dialog "Hello World"'
fi

exit 0
