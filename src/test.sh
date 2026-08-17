expected="hello test"

OUTPUT=$(node -e "console.log(require('./src/app')('test'))")

if["$OUTPUT" == "$EXPECTED"];then

echo "test passed"

exit 0 

else 
echo "test failed"

exit 1

fi 