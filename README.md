# Lab 5 - Starter

Memeber:
Zhenyu Jiang

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Since write a message and send a message to another user is 2 different action, unit test will not be able to handle the interaction with each other on an application level. However, the unit test can test input violation such as length or empty input and make sure it's formatted in the right structer to the back end. Therefore, using it to test internal logic of the code such as message inputting is still helpful.

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, the unit test is great for testing logic violation such as message length. Since we are not bordering sending message or need to do multiple interaction between functions, using unit test to do so will have no issue at all.

Link to websites:

[expose](https://xdawn66.github.io/CSE_110_LAB5/expose.html)

[explore](https://xdawn66.github.io/CSE_110_LAB5/explore.html)
