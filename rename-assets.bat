@echo off
echo Renaming all asset files to lowercase for GitHub Pages compatibility...

cd assets

REM Rename project images
if exist "Tomodime.png" ren "Tomodime.png" "tomodime.png"
if exist "Skintastic.png" ren "Skintastic.png" "skintastic.png"
if exist "CLminton.png" ren "CLminton.png" "clminton.png"
if exist "Stellarity.png" ren "Stellarity.png" "stellarity.png"
if exist "Skinout.png" ren "Skinout.png" "skinout.png"
if exist "Krealogi.png" ren "Krealogi.png" "krealogi.png"
if exist "BioCycleXpert.png" ren "BioCycleXpert.png" "biocyclexpert.png"

REM Rename profile image
if exist "Rahmat Hanif.jpg" ren "Rahmat Hanif.jpg" "rahmat-hanif.jpg"

REM Rename tech icons (if needed)
if exist "Figma.png" ren "Figma.png" "figma.png"
if exist "Java.png" ren "Java.png" "java.png"
if exist "MySQL.png" ren "MySQL.png" "mysql.png"
if exist "Python.png" ren "Python.png" "python.png"
if exist "SAP.png" ren "SAP.png" "sap.png"

echo All files have been renamed to lowercase!
echo.
echo Current files in assets folder:
dir /b
pause