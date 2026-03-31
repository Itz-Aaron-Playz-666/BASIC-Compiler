## Chapter 1: Control Flow
### 1.1 IF…THEN…ELSE
#### Syntax:
```basic
IF condition THEN statement ELSE statement
```
#### Definition:  
Executes a statement if the condition is true; optionally executes another if false.
#### Example Program:
```basic
INPUT "Enter a number: ", N
IF N MOD 2 = 0 THEN
  PRINT "Even"
ELSE
  PRINT "Odd"
END IF
```
### 1.2 FOR…NEXT
#### Syntax:
```basic
FOR counter = start TO end [STEP increment]
  statements
NEXT counter
```
#### Definition:  
Repeats a block of code a fixed number of times.
Example Program:
```basic
FOR I = 1 TO 5
  PRINT "Iteration "; I
NEXT I
```
### 1.3 WHILE…WEND
#### Syntax:
```basic
WHILE condition
  statements
WEND
```
#### Definition:  
Executes statements while condition remains true.
#### Example Program:
```basic
A = 1
WHILE A <= 5
  PRINT A
  A = A + 1
WEND
```
###1.4 DO…LOOP
#### Syntax:
```basic
DO
  statements
LOOP UNTIL condition
```
#### Definition:  
Repeats until condition is met.
#### Example Program:
```basic
DO
  INPUT "Enter a positive number (0 to quit): ", N
  IF N > 0 THEN PRINT "Square is "; N * N
LOOP UNTIL N = 0
```
