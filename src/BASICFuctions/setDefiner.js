// MS Copilot Generated Code
// Copyright ItzAaronPlayzYT - The Apache 2.0 License

// Comprehensive BASIC command/token sets for six legacy dialects
// No external libraries required — plain JavaScript Sets.
// Use these Sets as token whitelists, feature flags, or parser vocabularies.
// This collection aims to be broad and practical for compiler work (not an absolute historical canon).

/*
  Notes:
  - Tokens include common keywords, statement heads, functions, and notable dialect-specific commands.
  - Variants and common synonyms are included (e.g., "END SUB" and "ENDSUB" where historically seen).
  - For parsing you will still need per-dialect grammar (argument lists, precedence, semantics).
*/

// 1) GW‑BASIC / QBASIC (Microsoft PC BASIC family)
const GW_QBASIC = new Set([
  // Program structure
  "REM","END","STOP","SYSTEM","CHAIN","MERGE","RUN","NEW","LOAD","SAVE","VERIFY",
  // Flow control
  "GOTO","GOSUB","RETURN","IF","THEN","ELSE","ELSEIF","SELECT CASE","CASE","END SELECT",
  "FOR","TO","STEP","NEXT","WHILE","WEND","DO","LOOP","LOOP UNTIL","LOOP WHILE","EXIT FOR","EXIT DO",
  "ON","ON ERROR","ON ERROR GOTO","RESUME","CONT",
  // I/O and files
  "PRINT","LPRINT","INPUT","LINE INPUT","OPEN","CLOSE","INPUT#","PRINT#","WRITE#","GET","PUT","WRITE",
  "FIELD","GET#","PUT#","LOC","LOF","FREEFILE",
  // Data and literals
  "DATA","READ","RESTORE","DIM","REDIM","OPTION BASE","DEFINT","DEFDBL","DEFSTR","CONST",
  // Strings
  "LEN","LEFT$","RIGHT$","MID$","INSTR","CHR$","ASC","STR$","VAL","STRING$","SPACE$","TRIM$",
  // Numeric / math
  "ABS","INT","FIX","SQR","SGN","RND","RANDOMIZE","SIN","COS","TAN","ATN","EXP","LOG","PI",
  // Conversions / binary helpers
  "MKI$","MKD$","CVI","CVD","MKS$","MKL$",
  // Graphics / sound (QBASIC/GW)
  "SCREEN","PSET","PRESET","POINT","LINE","CIRCLE","PAINT","DRAW","PSET","PGET","GETIMAGE","PUTIMAGE",
  "SOUND","PLAY","BEEP","PALETTE","CLS","COLOR","LOCATE","WIDTH","VIEW","WINDOW","PAPER","INK",
  // Memory / system
  "PEEK","POKE","TIMER","DATE$","TIME$","ENVIRON$","FRE",
  // Procedures / functions
  "DEF FN","FUNCTION","END FUNCTION","SUB","END SUB","DECLARE","STATIC","LOCAL","GLOBAL","SHARED",
  // Error/debug
  "TRACE","NOTRACE","DEBUG","ON BREAK","ON ERROR GOTO","ERR",
  // Misc
  "USING","TAB","SPC","USING","FIELD","LOCK","UNLOCK","PUT","GET","BSAVE","BLOAD","VERIFY"
]);

// 2) Commodore BASIC (CBM PET / VIC / C64 family)
const COMMODORE_BASIC = new Set([
  // Program structure
  "REM","END","STOP","CONT","NEW","LOAD","SAVE","VERIFY","RUN",
  // Flow control
  "GOTO","GOSUB","RETURN","IF","THEN","FOR","TO","STEP","NEXT","ON","ON GOTO","ON GOSUB",
  // I/O and device/channel model
  "PRINT","INPUT","INPUT#","PRINT#","OPEN","CLOSE","LOAD","SAVE","VERIFY",
  // Data and arrays
  "DATA","READ","RESTORE","DIM",
  // Strings & numbers (limited compared to MS BASIC)
  "LEN","CHR$","ASC","VAL","LEFT$","RIGHT$","MID$" /* some versions limited or via routines */,
  // Math
  "ABS","INT","SQR","SIN","COS","TAN","ATN","EXP","LOG","RND",
  // Machine I/O and memory
  "POKE","PEEK","SYS","USR","PEEKW","POKEW",
  // Device-specific and storage
  "OPEN 1,device,secondary,command","CLOSE 1","PRINT#1","GET#1","PUT#1",
  "BSAVE","BLOAD" /* often via device commands */,
  // Misc
  "TAB","SPC","LPRINT","CONT","RESTORE","VERIFY"
]);

// 3) AppleSoft BASIC (Apple II family)
const APPLESOFT_BASIC = new Set([
  // Program structure
  "REM","END","RUN","NEW","LOAD","SAVE","VERIFY","CHAIN",
  // Flow control
  "GOTO","GOSUB","RETURN","IF","THEN","ELSE","FOR","TO","STEP","NEXT","ON","ON GOTO",
  // I/O and files
  "PRINT","INPUT","INPUT#","PRINT#","OPEN","CLOSE","LOAD","SAVE",
  // Data and arrays
  "DATA","READ","RESTORE","DIM",
  // Strings & formatting
  "LEN","CHR$","ASC","VAL","LEFT$","RIGHT$","MID$","PRINT USING","USING",
  // Math
  "ABS","INT","SQR","SIN","COS","TAN","ATN","EXP","LOG","RND","RANDOMIZE",
  // Graphics / memory / machine
  "GR","HGR","HPLOT","PLOT","HIMEM","LOMEM","POKE","PEEK","CALL","USR",
  // Misc
  "TAB","SPC","LPRINT","CONT","STOP","TRACE"
]);

// 4) BBC BASIC (Acorn BBC)
const BBC_BASIC = new Set([
  // Program structure
  "REM","END","RUN","LOAD","SAVE","CHAIN","MERGE","VERIFY","NEW",
  // Flow control & structured constructs
  "IF","THEN","ELSE","ELSEIF","SELECT","CASE","ENDSELECT","FOR","TO","STEP","NEXT",
  "REPEAT","UNTIL","WHILE","ENDWHILE","PROC","ENDPROC","FUNCTION","END FUNCTION","RETURN",
  "GOTO","GOSUB","ON","ON ERROR","TRACE","NOTRACE",
  // I/O and files
  "PRINT","INPUT","INPUT","PRINT#","OPEN","CLOSE","LOAD","SAVE",
  // Data and arrays
  "DATA","READ","RESTORE","DIM","LOCAL","GLOBAL",
  // Strings & conversions
  "LEN","CHR$","ASC","VAL","LEFT$","RIGHT$","MID$","STR$",
  // Math
  "ABS","INT","SQR","SIN","COS","TAN","ATN","EXP","LOG","RND",
  // Graphics / OS
  "MOVE","DRAW","PLOT","VDU","OSCLI","OSBYTE","OSWORD","VDU",
  // Misc
  "TAB","SPC","LPRINT","FRE"
]);

// 5) TI BASIC (TI-99/4A and calculator variants — generalized)
const TI_BASIC = new Set([
  // Program structure
  "REM","END","RUN","NEW","LOAD","SAVE","VERIFY",
  // Flow control
  "GOTO","GOSUB","RETURN","IF","THEN","ELSE","FOR","TO","STEP","NEXT","ON",
  // I/O and files
  "PRINT","INPUT","INPUT","PRINT#","LOAD","SAVE",
  // Data and arrays
  "DATA","READ","RESTORE","DIM",
  // Strings & conversions
  "LEN","CHR$","ASC","VAL","LEFT$","RIGHT$","MID$",
  // Math
  "ABS","INT","SQR","SIN","COS","TAN","ATN","EXP","LOG","RND",
  // TI-specific CALLs and graphics
  "CALL KEY","CALL CLEAR","CALL HCHAR","CALL VCHAR","PLOT","LINE","USR","CALL",
  // Misc
  "TAB","SPC","LPRINT","CONT","STOP"
]);

// 6) Turbo BASIC / QuickBASIC (Turbo/QuickBASIC family — superset)
const TURBO_QUICKBASIC = new Set([
  // Start with GW/QBASIC tokens (spread in)
  ...GW_QBASIC,
  // Extended structured programming
  "SUB","END SUB","FUNCTION","END FUNCTION","DECLARE","TYPE","END TYPE",
  "PROPERTY","STATIC","LOCAL","PUBLIC","PRIVATE","SHARED","OPTION EXPLICIT",
  "SELECT CASE","CASE","END SELECT","EXIT SUB","EXIT FUNCTION","EXIT FOR","EXIT DO",
  // Advanced I/O and binary helpers
  "FIELD","GET","PUT","GET#","PUT#","MKI$","MKD$","CVI","CVD","MKS$","MKL$",
  // Module and build
  "CHAIN","MERGE","LIB","CALLS","SHELL",
  // Enhanced graphics/sound (QB/Turbo)
  "SCREEN","PALETTE","PUTIMAGE","GETIMAGE","DRAW","PSET","PRESET","CIRCLE","LINE",
  "SOUND","PLAY","BEEP",
  // Error handling and debugging
  "ON ERROR GOTO","ON ERROR RESUME NEXT","ERR","ERROR","DEBUG","TRACE",
  // Misc
  "MOUSE","CURSOR","PRINT USING","USING","WIDTH","LOCATE","INKEY$","KEY$","LOCK","UNLOCK"
]);

// Export object for convenience (CommonJS style)
export default const BASIC_DIALECT_SETS = {
  GW_QBASIC,
  COMMODORE_BASIC,
  APPLESOFT_BASIC,
  BBC_BASIC,
  TI_BASIC,
  TURBO_QUICKBASIC
};
