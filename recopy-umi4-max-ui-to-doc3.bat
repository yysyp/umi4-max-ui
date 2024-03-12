@REM This is project copy tool, it will copy your project to doc3 code folder
@REM as long as your code in github-com folder, only need to replace  "umi4-max-ui" with project name.
@REM No need to pre-create the folder in doc3 code folder.
set "umi4-max-ui=D:\doc3\3-learn\33-coding\337-mytool-demo-snippet-code\umi4-max-ui"
@REM IF NOT EXIST %umi4-max-ui% (
@REM     ECHO %umi4-max-ui%Not EXIST.
@REM     MD %umi4-max-ui%
@REM ) ELSE (
@REM     ECHO %umi4-max-ui%OK.
@REM )
cd ..
rd /S /Q %umi4-max-ui%\
robocopy umi4-max-ui "%umi4-max-ui%" /E /MIR /Z /XD "not-copy" "upload-folder" "log" ".git" ".gitattributes" ".mvn" "node_modules" "dist" ".umi" ".umi-production"
echo 'Copy current umi4-max-ui to doc3\3-learn\33-coding\337-mytool-demo-snippet-code\umi4-max-ui done!'
