@echo off

SET arg1=%1
CD %arg1%

echo Node started
CALL npm start

CD ..

PAUSE
