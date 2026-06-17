export interface IQuestion {
  Id: number;
  question: string;
  optionList: string[];
  answer: number;
  codeBlock?: string;
};

export class QuestionCollectionPython {

  get(): IQuestion[] {

    let questionList = [
      {
        "Id": 1,
        "optionList": [
          "3.3",
          "3.5.1",
          "2.4",
          "2.6"
        ],
        "question": "Which of the following version of Python was released in December, 2015 by Python.org?",
        "answer": 1
      },
      {
        "Id": 2,
        "optionList": [
          ".python",
          ".pe",
          ".py",
          ".pi"
        ],
        "question": "Python files are saved with the extension as ?",
        "answer": 2
      },
      {
        "Id": 3,
        "optionList": [
          "PGUI",
          "Pyshell",
          "IDLE",
          "PythonSh"
        ],
        "question": "What is the name of the GUI that comes in-built as an interactive shell with Python?",
        "answer": 2
      },
      {
        "Id": 4,
        "optionList": [
          "Indigenous Development Lab",
          "Integrated Development Environment",
          "Integrated Developers Local Environment",
          "Indie Developers Environment"
        ],
        "question": "IDLE stands for ? ?",
        "answer": 1
      },
      {
        "Id": 5,
        "optionList": [
          "print",
          "display",
          "run",
          "output"
        ],
        "question": "The function to display a specified message on the screen is ? ?",
        "answer": 0
      },
      {
        "Id": 6,
        "optionList": [
          "==",
          "===",
          ">>>",
          "="
        ],
        "question": "Which of the following is an assignment operator in Python?",
        "answer": 3
      },
      {
        "Id": 7,
        "optionList": [
          "x = y: y = 33",
          "x = y = z = 33",
          "x = z; y = z; x = 33;",
          "x & y & z = 33"
        ],
        "question": "Which of the following is used to initialize multiple variables with a common value?",
        "answer": 1
      },
      {
        "Id": 8,
        "optionList": [
          "{",
          "%",
          "*",
          "#"
        ],
        "question": "Comments in Python begin with ??",
        "answer": 3
      },
      {
        "Id": 9,
        "optionList": [
          "user",
          "enter",
          "input",
          "value"
        ],
        "question": "A user-specified value can be assigned to a variable with this function ?",
        "answer": 2
      },
      {
        "Id": 10,
        "optionList": [
          "Floating Decimal",
          "Text String",
          "Boolean Value",
          "Integer"
        ],
        "question": "User input is read as ?",
        "answer": 1
      },
      {
        "Id": 11,
        "optionList": [
          "\\t",
          "\\n",
          "\\s",
          "\\r"
        ],
        "question": "Output displayed by the print function will add this invisible character at the end of the line by default ?",
        "answer": 1
      },
      {
        "Id": 12,
        "optionList": [
          "Single Space",
          "Double Space",
          "A new Line",
          "Double Lines"
        ],
        "question": "Multiple values specified in parentheses to print function will display each value separated with this by default ?",
        "answer": 0
      },
      {
        "Id": 13,
        "optionList": [
          "sep is !",
          "separate = !",
          "sep >> '!'",
          "sep = '!'"
        ],
        "question": "Which of the following will provide an ! character as alternative separator for the print function?",
        "answer": 3
      },
      {
        "Id": 14,
        "optionList": [
          "end to *",
          "end as *",
          "end = '*'",
          "ending = '*'"
        ],
        "question": "Which of the following will provide a * character as alternative line ending for the print function?",
        "answer": 2
      },
      {
        "Id": 15,
        "optionList": [
          "Semantic error",
          "Syntax error",
          "Runtime error",
          "All type of errors"
        ],
        "question": "For which type of error does the interpreter halts and reports the error but does not execute the program?",
        "answer": 1
      },
      {
        "Id": 16,
        "optionList": [
          "Semantic error",
          "Syntax error",
          "Runtime error",
          "All type of errors"
        ],
        "question": "For which type of error does the interpreter runs the program but halts at error and reports the error as an \"Exception\"?",
        "answer": 2
      },
      {
        "Id": 17,
        "optionList": [
          "Semantic error",
          "Syntax error",
          "Runtime error",
          "All type of errors"
        ],
        "question": "For which type of error does the interpreter runs the program and does not report an error?",
        "answer": 0
      },
      {
        "Id": 18,
        "optionList": [
          "2.0",
          "2",
          "18",
          "18.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 6\ny = 3\nprint(x / y)",
        "answer": 0
      },
      {
        "Id": 19,
        "optionList": [
          "4.0",
          "4",
          "16",
          "16.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 8 \ny = 2 \nprint(x // y)",
        "answer": 1
      },
      {
        "Id": 20,
        "optionList": [
          "0",
          "20",
          "1.0",
          "1"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 5 \ny = 4 \nprint(x % y)",
        "answer": 3
      },
      {
        "Id": 21,
        "optionList": [
          "3",
          "2",
          "5",
          "1"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 3 \ny = 2 \nx += y\nprint(x)",
        "answer": 2
      },
      {
        "Id": 22,
        "optionList": [
          "7",
          "12",
          "5",
          "35"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 5 \ny = 7 \nx *= y \nprint(x)",
        "answer": 3
      },
      {
        "Id": 23,
        "optionList": [
          "10",
          "25",
          "15",
          "-15"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 25 \ny = 15 \nx -= y\nprint(x)",
        "answer": 0
      },
      {
        "Id": 24,
        "optionList": [
          "4",
          "28",
          "2",
          "37"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 30\ny = 7 \nx %= y \nprint(x)",
        "answer": 2
      },
      {
        "Id": 25,
        "optionList": [
          "y = 7 and x = 3",
          "True",
          "x = 3 and y = 3",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 3 \ny = 7 \nprint(x == y)",
        "answer": 3
      },
      {
        "Id": 26,
        "optionList": [
          "y = 6 and x = 8",
          "True",
          "x = 6 and y = 6",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 8 \ny = 6 \nprint(x != y)",
        "answer": 1
      },
      {
        "Id": 27,
        "optionList": [
          "True",
          "False",
          "Yes",
          "No"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 83 \ny = 57 \nprint(x > y)",
        "answer": 0
      },
      {
        "Id": 28,
        "optionList": [
          "True",
          "False",
          "Yes",
          "No"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 72 \ny = 64 \nprint(x < y)",
        "answer": 1
      },
      {
        "Id": 29,
        "optionList": [
          "True",
          "False",
          "Not defined",
          "xy"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = True \ny = False \nprint(x and y)",
        "answer": 1
      },
      {
        "Id": 30,
        "optionList": [
          "True",
          "False",
          "Not defined",
          "xy"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = True \ny = False \nprint(x or y)",
        "answer": 0
      },
      {
        "Id": 31,
        "optionList": [
          "True",
          "False",
          "Not defined",
          "y"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = True \ny = False \nprint(not x)",
        "answer": 1
      },
      {
        "Id": 32,
        "optionList": [
          "True",
          "False",
          "Not defined",
          "x"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = True \ny = False \nprint(not y)",
        "answer": 0
      },
      {
        "Id": 33,
        "optionList": [
          "True",
          "False",
          "20",
          "40"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 20 \ny = 40\nz = y \nif (y > x) else x \nprint(z)",
        "answer": 3
      },
      {
        "Id": 34,
        "optionList": [
          "True",
          "False",
          "50",
          "10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 50\ny = 10 \nz = y \nif (y > x) else x \nprint(z)",
        "answer": 2
      },
      {
        "Id": 35,
        "optionList": [
          "True",
          "False",
          "65",
          "53"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 65\ny = 53 \nz = y \nif (x % 2 == 0) else x\nprint(z)",
        "answer": 2
      },
      {
        "Id": 36,
        "optionList": [
          "True",
          "False",
          "46",
          "98"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 46 \ny = 98\nz = y \nif (y % 2 == 0) else x \nprint(z)",
        "answer": 3
      },
      {
        "Id": 37,
        "optionList": [
          "30",
          "15",
          "22",
          "247"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 2 * 4 + 7 \nprint(x)",
        "answer": 1
      },
      {
        "Id": 38,
        "optionList": [
          "63",
          "16",
          "33",
          "35"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 7 * (4 + 5) \nprint(x)",
        "answer": 0
      },
      {
        "Id": 39,
        "optionList": [
          "40",
          "2416",
          "21",
          "46"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '24' + '16' \nprint(x)",
        "answer": 1
      },
      {
        "Id": 40,
        "optionList": [
          "40",
          "153",
          "50",
          "1535"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 15 + 35 \nprint(x)",
        "answer": 2
      },
      {
        "Id": 41,
        "optionList": [
          "Float",
          "String",
          "List",
          "Integer"
        ],
        "question": "What will be the data type of x after the following statement if input entered is 18 ?",
        "codeBlock": "x = input('Enter a number: ')",
        "answer": 1
      },
      {
        "Id": 42,
        "optionList": [
          "Float",
          "String",
          "List",
          "Integer"
        ],
        "question": "What will be the data type of y after the following statements if input entered is 50?",
        "codeBlock": "x = input('Enter a number: ') \ny = int(x)",
        "answer": 3
      },
      {
        "Id": 43,
        "optionList": [
          "Float",
          "String",
          "List",
          "Integer"
        ],
        "question": "What will be the data type of y after the following statements?",
        "codeBlock": "x = 71 \ny = float(x)",
        "answer": 0
      },
      {
        "Id": 44,
        "optionList": [
          "Float",
          "String",
          "List",
          "Integer"
        ],
        "question": "What will be the data type of y after the following statements?",
        "codeBlock": "x = 48 \ny = str(x)",
        "answer": 1
      },
      {
        "Id": 45,
        "optionList": [
          "x",
          "8",
          "z",
          "y"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = y = z = 8\nprint(y)",
        "answer": 1
      },
      {
        "Id": 46,
        "optionList": [
          "All three will have the value of 3",
          "All three will have the value of 100",
          "All three will have the value of 300",
          "x and y will have arbitrary values, while z will have the value of 300"
        ],
        "question": "What will be the value of x, y and z after the following statement?",
        "codeBlock": "x = y = z = 300",
        "answer": 2
      },
      {
        "Id": 47,
        "optionList": [
          "All three will have the value of 3",
          "All three will have the value of 345",
          "x will have the value of 3, y will have the value 4 and z will have the value of 5",
          "x and y will have arbitrary values, while z will have the value of 345"
        ],
        "question": "What will be the value of x, y and z after the following statement?",
        "codeBlock": "x, y, z = 3, 4, 5",
        "answer": 2
      },
      {
        "Id": 48,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "String"
        ],
        "question": "What is the data type of x after the following statement?",
        "codeBlock": "x = [7, 8, 9, 10]",
        "answer": 0
      },
      {
        "Id": 49,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "String"
        ],
        "question": "What is the data type of x after the following statement?",
        "codeBlock": "x = ['Today', 'Tomorrow', 'Yesterday']",
        "answer": 0
      },
      {
        "Id": 50,
        "optionList": [
          "x1",
          "Today",
          "Tomorrow",
          "Yesterday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['Today', 'Tomorrow', 'Yesterday'] \ny = x[1] \nprint(y)",
        "answer": 2
      },
      {
        "Id": 51,
        "optionList": [
          "x0",
          "25",
          "35",
          "45"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [25, 35, 45] \ny = x[0] \nprint(y)",
        "answer": 1
      },
      {
        "Id": 52,
        "optionList": [
          "20",
          "30",
          "40",
          "50"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [10, 20, 30] \ny = x[1] + x[2] \nprint(y)",
        "answer": 3
      },
      {
        "Id": 53,
        "optionList": [
          "MondayTuesday",
          "SundayMonday",
          "SunMonday",
          "Monday Tuesday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['Sunday', 'Monday', 'Tuesday'] \ny = x[1] + x[2] \nprint(y)",
        "answer": 0
      },
      {
        "Id": 54,
        "optionList": [
          "0.0",
          "1.0",
          "5.0",
          "6.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [[0.0, 1.0, 2.0],[4.0, 5.0, 6.0]] \ny = x[1][2]\nprint(y)",
        "answer": 3
      },
      {
        "Id": 55,
        "optionList": [
          "1.0",
          "4.0",
          "5.0",
          "6.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [[0.0, 1.0, 2.0],[4.0, 5.0, 6.0]] \ny = x[0][1] + x[1][0] \nprint(y)",
        "answer": 2
      },
      {
        "Id": 56,
        "optionList": [
          "3",
          "4",
          "3 4",
          "12"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 3 \ny = 4 \nprint(x*y)",
        "answer": 3
      },
      {
        "Id": 57,
        "optionList": [
          "30",
          "40",
          "50",
          "10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [15, 45, 85, 95] \nprint(x[3]-x[1])",
        "answer": 2
      },
      {
        "Id": 58,
        "optionList": [
          "[5, 4, 3, 2]",
          "5, 4, 3, 2",
          "5432",
          "(5, 4, 3, 2)"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2] \nprint(x)",
        "answer": 0
      },
      {
        "Id": 59,
        "optionList": [
          "[5, 4, 3, 2]",
          "5, 4, 3, 2, 1",
          "5432",
          "[5, 4, 3, 2, 1]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2]\nx.append(1) \nprint(x)",
        "answer": 3
      },
      {
        "Id": 60,
        "optionList": [
          "[5, 1, 3, 2, 0]",
          "[5, 0, 4, 3, 2]",
          "[0, 5, 4, 3, 2]",
          "[1, 5, 4, 3, 2]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2]\nx.insert(1, 0) \nprint(x)",
        "answer": 1
      },
      {
        "Id": 61,
        "optionList": [
          "[5, 3, 2]",
          "[5, 4, 3]",
          "[5, 4, 2]",
          "[3, 2]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2]\nx.remove(2) \nprint(x)",
        "answer": 1
      },
      {
        "Id": 62,
        "optionList": [
          "4",
          "3",
          "2",
          "1"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2, 1] \nprint(x.pop(3))",
        "answer": 2
      },
      {
        "Id": 63,
        "optionList": [
          "4",
          "3",
          "2",
          "1"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2, 1] \nprint(x.index(1))",
        "answer": 0
      },
      {
        "Id": 64,
        "optionList": [
          "[5, 4, 3, 2, 1]",
          "[]",
          "[1, 2, 3, 4, 5]",
          "[5, 4, 3, 2, 1, 5, 4, 3, 2, 1]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2, 1]\nx.extend(x) \nprint(x)",
        "answer": 3
      },
      {
        "Id": 65,
        "optionList": [
          "[5, 4, 3, 2, 1, 0, 5, 10]",
          "[]",
          "[5, 4, 3, 2, 1]",
          "[0, 5, 10, 5, 4, 3, 2, 1]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2, 1] \ny = [0, 5, 10]\nx.extend(y) \nprint(x)",
        "answer": 0
      },
      {
        "Id": 66,
        "optionList": [
          "[5, 4, 3, 2, 1, 10, 5, 0]",
          "[]",
          "[10, 5, 0, 5, 4, 3, 2, 1]",
          "[10, 5, 0]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2, 1] \ny = [10, 5, 0]\nx.extend(y) \nprint(y)",
        "answer": 3
      },
      {
        "Id": 67,
        "optionList": [
          "[5, 4, 3, 2, 1, 10, 5, 0]",
          "[10, 5, 0, 5, 4, 3, 2, 1]",
          "[5, 4, 3, 2, 1]",
          "[10, 5, 0]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2, 1] \ny = [10, 5, 0]\ny.extend(x) \nprint(y)",
        "answer": 1
      },
      {
        "Id": 68,
        "optionList": [
          "[0, 1, 2, 3, 4, 5]",
          "[0, 5, 4, 3, 2, 1]",
          "[5, 4, 3, 2, 1, 0]",
          "[1, 2, 3, 4, 5]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2, 1]\nx.reverse() \nprint(x)",
        "answer": 3
      },
      {
        "Id": 69,
        "optionList": [
          "[11, 14, 25, 53, 62]",
          "[25, 14, 53, 62, 11]",
          "[62, 53, 25, 14, 11]",
          "[25, 53, 62, 14, 11]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [25, 14, 53, 62, 11]\nx.sort() \nprint(x)",
        "answer": 0
      },
      {
        "Id": 70,
        "optionList": [
          "['Today', 'Sunday', '15', '25', '53']",
          "['Sunday', 'Today', '15', '25', '53']",
          "['15', '25', '53', 'Sunday', 'Today']",
          "['15', '25', '53', 'Today', 'Sunday']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['25', 'Today', '53', 'Sunday', '15']\nx.sort() \nprint(x)",
        "answer": 2
      },
      {
        "Id": 71,
        "optionList": [
          "['Today', 'Sunday', 15, 25, 53]",
          "[15, 'Sunday', 53, 'Today', 25]",
          "[15, 25, 53, 'Sunday', 'Today']",
          "[15, 25, 53, 'Today', 'Sunday']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [25, 'Today', 53, 'Sunday', 15]\nx.reverse()\nprint(x)",
        "answer": 1
      },
      {
        "Id": 72,
        "optionList": [
          "25",
          "3",
          "53",
          "35"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [25, 35, 53, 25, 52, 35, 25] \nprint(x.count(25))",
        "answer": 1
      },
      {
        "Id": 73,
        "optionList": [
          "25",
          "5",
          "7",
          "35"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [25, 35, 53, 25, 52, 35, 25] \nprint(len(x))",
        "answer": 2
      },
      {
        "Id": 74,
        "optionList": [
          "25",
          "5",
          "7",
          "[25, 35, 53, 25, 52, 35, 25]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [25, 35, 53, 25, 52, 35, 25] \nlen(x) \nprint(x)",
        "answer": 3
      },
      {
        "Id": 75,
        "optionList": [
          "[25, 35, 53, 52, 35, 25]",
          "[25, 5, 5, 25, 52, 5, 25]",
          "[35, 53, 52, 35]",
          "[25, 35, 53, 25, 52, 35, 25]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [25, 35, 53, 25, 52, 35, 25] \ndel x[3] \nprint(x)",
        "answer": 0
      },
      {
        "Id": 76,
        "optionList": [
          "[5, 3, 6, 4, 0, 1]",
          "[5, 3, 2, 4, 0, 1]",
          "[5, 6, 2, 4, 0, 1]",
          "[5, 4, 0, 1]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 3, 6, 2, 4, 0, 1] \ndel x[2:3] \nprint(x)",
        "answer": 1
      },
      {
        "Id": 77,
        "optionList": [
          "[]",
          "[5, 3, 6, 2, 4, 0, 7]",
          "[5, 3, 6, 2, 4, 0]",
          "[3, 6, 2, 4, 0]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 3, 6, 2, 4, 0, 7] \ndel x[0:7]\nprint(x)",
        "answer": 0
      },
      {
        "Id": 78,
        "optionList": [
          "[]",
          "[5, 3, 6, 2, 7]",
          "[5, 3, 6, 2, 4, 0]",
          "[4, 0, 7]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 3, 6, 2, 4, 0, 7] \ndel x[0:4] \nprint(x)",
        "answer": 3
      },
      {
        "Id": 79,
        "optionList": [
          "[]",
          "[5, 3, 6, 2, 7]",
          "[5, 3, 6, 2, 4, 0]",
          "[4, 0, 7]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 3, 6, 2, 4, 0, 7] \ndel x[:] \nprint(x)",
        "answer": 0
      },
      {
        "Id": 80,
        "optionList": [
          "11",
          "4",
          "40",
          "7"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [4, 0, 7]\ny = str(x[0]) + str(x[1]) \nprint(y)",
        "answer": 2
      },
      {
        "Id": 81,
        "optionList": [
          "11",
          "11.0",
          "47.0",
          "47"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [4, 0, 7] \ny = float(x[0] + x[2]) \nprint(y)",
        "answer": 1
      },
      {
        "Id": 82,
        "optionList": [
          "List",
          "String",
          "Dictionary",
          "Tuple"
        ],
        "question": "What will be the data type of x after the following statement?",
        "codeBlock": "x = (34, 81, 50)",
        "answer": 3
      },
      {
        "Id": 83,
        "optionList": [
          "List",
          "String",
          "Dictionary",
          "Tuple"
        ],
        "question": "What will be the data type of x after the following statement?",
        "codeBlock": "x = 'Python 3 Test'",
        "answer": 1
      },
      {
        "Id": 84,
        "optionList": [
          "List",
          "String",
          "Dictionary",
          "Tuple"
        ],
        "question": "What will be the data type of x after the following statement?",
        "codeBlock": "x = [2290, 376, 198]",
        "answer": 0
      },
      {
        "Id": 85,
        "optionList": [
          "List",
          "Set",
          "Dictionary",
          "Tuple"
        ],
        "question": "What will be the data type of x after the following statement?",
        "codeBlock": "x = {'lang' :'Python', 'version' : '3'}",
        "answer": 2
      },
      {
        "Id": 86,
        "optionList": [
          "List",
          "Set",
          "Dictionary",
          "Tuple"
        ],
        "question": "What will be the data type of x after the following statement?",
        "codeBlock": "x = {2015, 2016, 2017, 2018}",
        "answer": 1
      },
      {
        "Id": 87,
        "optionList": [
          "List",
          "String",
          "Dictionary",
          "Boolean"
        ],
        "question": "What will be the data type of x after the following statement?",
        "codeBlock": "x = [2016, 'Leap Year', 'True']",
        "answer": 0
      },
      {
        "Id": 88,
        "optionList": [
          "List",
          "String",
          "Dictionary",
          "Boolean"
        ],
        "question": "What will be the data type of x after the following statement?",
        "answer": 3
      },
      {
        "Id": 89,
        "optionList": [
          "data()",
          "type()",
          "true()",
          "str()"
        ],
        "question": "Which of the following function can be used to find the data type of a variable?",
        "answer": 1
      },
      {
        "Id": 90,
        "optionList": [
          "x[0]",
          "[24]",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [24, 50, 37]\ny = 24 in x \nprint(y)",
        "answer": 2
      },
      {
        "Id": 91,
        "optionList": [
          "x[1]",
          "['B']",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'A', 'B', 'C'} \ny = 'b' in x \nprint(y)",
        "answer": 3
      },
      {
        "Id": 92,
        "optionList": [
          "[1]",
          "y",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python' \ny = 'y' in x \nprint(y)",
        "answer": 2
      },
      {
        "Id": 93,
        "optionList": [
          "x[0]",
          "[24]",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {0:4, 1:8, 2:16, 3:32} \ny = 0 in x \nprint(y)",
        "answer": 2
      },
      {
        "Id": 94,
        "optionList": [
          "x[0]",
          "[24]",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {0:4, 1:8, 2:16, 3:32} \ny = 8 in x\nprint(y)",
        "answer": 3
      },
      {
        "Id": 95,
        "optionList": [
          "List",
          "String",
          "Dictionary",
          "Boolean"
        ],
        "question": "What will be the data type of x after the following statements?",
        "codeBlock": "false = \"This is not true\" \nx = false",
        "answer": 1
      },
      {
        "Id": 96,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "Which of the following is immutable (values that cannot be changed)?",
        "answer": 2
      },
      {
        "Id": 97,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "Which of the following has only unique values?",
        "answer": 3
      },
      {
        "Id": 98,
        "optionList": [
          "dict_keys([0, 1, 2, 3])",
          "dict_keys{0, 1, 2, 3}",
          "dict_keys(0, 1, 2, 3)",
          "dict_keys[0, 1, 2, 3]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {0:4, 1:8, 2:16, 3:32} \nprint(x.keys())",
        "answer": 0
      },
      {
        "Id": 99,
        "optionList": [
          "dict_values([4, 8, 16, 32])",
          "dict_values{4, 8, 16, 32}",
          "dict_values(4, 8, 16, 32)",
          "dict_values[4, 8, 16, 32]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {0:4, 1:8, 2:16, 3:32} \nprint(x.values())",
        "answer": 0
      },
      {
        "Id": 100,
        "optionList": [
          "Jan",
          "Feb",
          "March",
          "April"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {1:'Jan', 2:'Feb', 3:'March', 4:'April'} \nprint(x[2])",
        "answer": 1
      },
      {
        "Id": 101,
        "optionList": [
          "[4, 8]",
          "[4, 8, 16]",
          "16",
          "8"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {0:4, 1:8, 2:16, 3:32} \nprint(list(x.values())[2])",
        "answer": 2
      },
      {
        "Id": 102,
        "optionList": [
          "dict_items(4, 8, 16, 32)",
          "dict_items([4, 8, 16, 32])",
          "dict_items[0, 1, 2, 3]",
          "dict_items([(0, 4), (1, 8), (2, 16), (3, 32)])"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {0:4, 1:8, 2:16, 3:32} \nprint(x.items())",
        "answer": 3
      },
      {
        "Id": 103,
        "optionList": [
          "[4, 8, 16, 32]",
          "[(3, 16), (5, 4), (8, 8), (9, 32)]",
          "[3, 5, 8, 9]",
          "[(4, 5), (8, 8), (16, 3), (32, 9)]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {5:4, 8:8, 3:16, 9:32} \nprint(sorted(x.items()))",
        "answer": 1
      },
      {
        "Id": 104,
        "optionList": [
          "20",
          "5",
          "x",
          "7"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 7 \nif x > 5:     \n    print(20)",
        "answer": 0
      },
      {
        "Id": 105,
        "optionList": [
          "20",
          "x",
          "10",
          "8"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 8 \nif x > 8:     \n    print(20) \nelse:     \n    print(10)",
        "answer": 2
      },
      {
        "Id": 106,
        "optionList": [
          "20",
          "40",
          "10",
          "30"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 40\nif x > 10:     \n    print(20) \nelif x == 40:     \n    print(10) \nelse:     \n    print(30)",
        "answer": 0
      },
      {
        "Id": 107,
        "optionList": [
          "0",
          "1",
          "2",
          "15"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 15\nif x > 15:\n    print(0)\nelif x == 15:\n    print(1)\nelse:\n    print(2)",
        "answer": 1
      },
      {
        "Id": 108,
        "optionList": [
          "15",
          "yes",
          "equal",
          "no"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 5 \nif x > 15:\n    print('yes') \nelif x == 15:     \n    print('equal') \nelse:     \n    print('no')",
        "answer": 3
      },
      {
        "Id": 109,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 50\nif x > 10  and x < 15:     \n    print('true') \nelif x > 15  and x < 25:     \n    print('not true') \nelif x > 25  and x < 35:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 3
      },
      {
        "Id": 110,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 25 \nif x > 10  and x < 15:     \n    print('true') \nelif x > 15  and x < 25:     \n    print('not true') \nelif x > 25  and x < 35:\n    print('false') \nelse:\n    print('not false')",
        "answer": 3
      },
      {
        "Id": 111,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 15 \nif x > 10  and x <= 15:\n    print('true') \nelif x > 15  and x < 25:     \n    print('not true') \nelif x > 25  and x < 35:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 0
      },
      {
        "Id": 112,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 25 \nif x > 10  and x <= 15:\n    print('true') \nelif x >= 15  and x < 25:     \n    print('not true') \nelif x >= 25  and x < 35:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 1
      },
      {
        "Id": 113,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 25 \nif x >= 10  and x <= 15:\n    print('true') \nelif x >= 15  and x <= 25:     \n    print('not true') \nelif x >= 25  and x <= 35:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 2
      },
      {
        "Id": 114,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 20 \nif x <= 10 or x >= 75:     \n    print('true') \nelif x <= 15 or x >= 55:     \n    print('not true') \nelif x <= 25 or x >= 35:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 1
      },
      {
        "Id": 115,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 30 \nif x <= 10 or x >= 75:     \n    print('true') \nelif x <= 15 or x >= 55:     \n    print('not true') \nelif x <= 25 or x >= 35:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 3
      },
      {
        "Id": 116,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 80 \nif x <= 10 or x >= 75:     \n    print('true') \nelif x <= 15 or x >= 55:     \n    print('not true') \nelif x <= 25 or x >= 35:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 0
      },
      {
        "Id": 117,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 60 \nif x <= 10 or x >= 75:     \n    print('true') \nelif x <= 15 or x >= 55:     \n    print('not true') \nelif x <= 25 or x >= 35:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 2
      },
      {
        "Id": 118,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 68 \nif x <= 50 and x >= 25:\n    print('true')\nelif x <= 60 or x >= 55:     \n    print('not true') \nelif x <= 70 and x >= 35:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 2
      },
      {
        "Id": 119,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 99 \nif x <= 30 or x >= 100:\n    print('true')\nelif x >= 50 and x <= 80:     \n    print('not true') \nelif x >= 100 or x <= 75:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 3
      },
      {
        "Id": 120,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 70 \nif x <= 30 or x >= 100:\n    print('true') \nelif x <= 50 and x == 50:     \n    print('not true') \nelif x >= 150 or x <= 75:\n    print('false') \nelse:     \n    print('not false')",
        "answer": 1
      },
      {
        "Id": 121,
        "optionList": [
          "true",
          "false",
          "not true",
          "not false"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 40 \ny = 25 \nif x + y >= 100:     \n    print('true') \nelif x + y == 50:     \n    print('not true') \nelif x + y <= 90:     \n    print('false') \nelse:     \n    print('not false')",
        "answer": 1
      },
      {
        "Id": 122,
        "optionList": [
          "123456789",
          "1",
          "10",
          "2"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 1\nwhile x < 10:     \n    print(x, end='')     \n    x = x + 1",
        "answer": 0
      },
      {
        "Id": 123,
        "optionList": [
          "0123456789",
          "123456789",
          "4123456789",
          "048"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 0 \nwhile x < 10:     \n    print(x, end='')     \n    x += 4",
        "answer": 3
      },
      {
        "Id": 124,
        "optionList": [
          "012345",
          "0123456789",
          "4123456789",
          "048"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 0 \ny = 4 \nwhile x + y < 10:     \n    print(x, end='')     \n    x += 1",
        "answer": 0
      },
      {
        "Id": 125,
        "optionList": [
          "012345",
          "0123456",
          "123456",
          "0123456"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 0 \ny = 4 \nwhile x + y < 10:     \n    x += 1     \n    print(x, end='')",
        "answer": 2
      },
      {
        "Id": 126,
        "optionList": [
          "012345",
          "456789",
          "123456789",
          "0123456789"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 1 \ny = 4 \nwhile x * y < 10:     \n    print(y, end='')     \n    y += 1",
        "answer": 1
      },
      {
        "Id": 127,
        "optionList": [
          "4",
          "48",
          "148",
          "0123456789"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 1 \ny = 4 \nwhile x * y < 10:     \n    print(y, end='')     \n    x += 1     \n    y += 1",
        "answer": 0
      },
      {
        "Id": 128,
        "optionList": [
          "4",
          "48",
          "14",
          "12"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 1 \ny = 4 \nwhile x * y <= 10:     \n    print(x, end='')     \n    x += 1     \n    y += 1",
        "answer": 3
      },
      {
        "Id": 129,
        "optionList": [
          "1045",
          "10 45",
          "34",
          "3 4 10 45"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x, y = 2, 5 \nwhile y - x < 5:\n    print(x*y, end=' ')     \n    x += 3     \n    y += 4",
        "answer": 1
      },
      {
        "Id": 130,
        "optionList": [
          "1 1 2 3 5 8",
          "112358",
          "0123456789",
          "0 2 4 6 8"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x, y = 0, 1 \nwhile y < 10:     \n    print(y, end=' ')     \n    x, y = y, x + y",
        "answer": 0
      },
      {
        "Id": 131,
        "optionList": [
          "1 1 2 2",
          "1 1 2 2 3 3 4 4",
          "1 2 3 4",
          "1 2 1 2 1 2"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 1 \nwhile x < 4:     \n    x += 1     \n    y = 1     \n    while y < 3:         \n        print(y, end=' ')         \n        y += 1",
        "answer": 3
      },
      {
        "Id": 132,
        "optionList": [
          "1 1 2 2",
          "1 2",
          "1 2 3 4",
          "1 2 1 2 1 2"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = y = 1 \nwhile x < 4:     \n    x += 1     \n    while y < 3:         \n        print(y, end=' ')         \n        y += 1",
        "answer": 1
      },
      {
        "Id": 133,
        "optionList": [
          "Closed loop",
          "One time loop",
          "Infinite loop",
          "Evergreen loop"
        ],
        "question": "What type of loop is this?",
        "codeBlock": "x = 1 \nwhile x < 5:     \n    print(x, end='')",
        "answer": 2
      },
      {
        "Id": 134,
        "optionList": [
          "h",
          "hello",
          "h e l l o",
          "i x"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'hello' \nfor i in x:     \n    print(i, end='')",
        "answer": 1
      },
      {
        "Id": 135,
        "optionList": [
          "5",
          "1 5",
          "012345",
          "01234"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "for i in range(5):     \n    print(i, end='')",
        "answer": 3
      },
      {
        "Id": 136,
        "optionList": [
          "15",
          "12345",
          "1234",
          "012345"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "for i in range(1,5):     \n    print(i, end='')",
        "answer": 2
      },
      {
        "Id": 137,
        "optionList": [
          "1 6 11 16 21",
          "1 5 10 15 20 25",
          "1 5 25",
          "16111621"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "for i in range(1,25,5):     \n    print(i, end=' ')",
        "answer": 0
      },
      {
        "Id": 138,
        "optionList": [
          "P",
          "python",
          "Pytho",
          "Python"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['P', 'y', 't', 'h', 'o', 'n'] \nfor i in x:     \n    print(i, end='')",
        "answer": 3
      },
      {
        "Id": 139,
        "optionList": [
          "abcd",
          "a b c d",
          "False",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ('a', 'b', 'c', 'd') \nfor i in x:     \n    print(i, end=' ')",
        "answer": 1
      },
      {
        "Id": 140,
        "optionList": [
          "x z y",
          "xzy",
          "False",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'x', 'z', 'y'} \nfor i in x:     \n    print(i, end='')",
        "answer": 1
      },
      {
        "Id": 141,
        "optionList": [
          "x y z",
          "1 2 3",
          "x:3 y:2 z:1",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'z:1', 'y:2', 'x:3'} \nfor i in x:     \n    print(i, end=' ')",
        "answer": 2
      },
      {
        "Id": 142,
        "optionList": [
          "('P')('y')('t')('h')('o')('n')",
          "python",
          "python",
          "(0, 'P')(1, 'y')(2, 't')(3, 'h')(4, 'o')(5, 'n')"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['P', 'y', 't', 'h', 'o', 'n'] \nfor i in enumerate(x):     \n    print(i, end='')",
        "answer": 3
      },
      {
        "Id": 143,
        "optionList": [
          "x y z",
          "1 2 3",
          "x:1 y:2 z:3",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'x':1, 'y':2, 'z':3} \nfor i in x:     \n    print(i, end=' ')",
        "answer": 0
      },
      {
        "Id": 144,
        "optionList": [
          "x y z",
          "x 1 y 2 z 3",
          "x:1 y:2 z:3",
          "x, 1, y, 2, z, 3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'x':1, 'y':2, 'z':3} \nfor i, j in x.items():     \n    print(i, j, end=' ')",
        "answer": 1
      },
      {
        "Id": 145,
        "optionList": [
          "('P')('y')('t')('h')('o')('n')",
          "python 0 1 2 3 4 5",
          "('p', '0')('y', '1')('t', '2')('h', '3')('o', '4')('n', '5')",
          "(0, 'P')(1, 'y')(2, 't')(3, 'h')(4, 'o')(5, 'n')"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['p', 'y', 't', 'h', 'o', 'n'] \ny = ['0', '1', '2', '3', '4', '5'] \nfor i in zip(x, y):     \n    print(i, end='')",
        "answer": 2
      },
      {
        "Id": 146,
        "optionList": [
          "123",
          "1234",
          "12",
          "12345"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "for i in range(1,5):     \n    print(i, end='')     \n    if i == 3:         \n        break",
        "answer": 0
      },
      {
        "Id": 147,
        "optionList": [
          "12",
          "01",
          "012",
          "0123"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "for i in range(0,5):\n    if i == 2:         \n        break     \n\nprint(i, end='')",
        "answer": 1
      },
      {
        "Id": 148,
        "optionList": [
          "1 2 4",
          "1 2 3 4",
          "1 2",
          "1 2 3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "for i in range(1,5):     \n    if i == 3:         \n        continue     \n    \nprint(i, end=' ')",
        "answer": 0
      },
      {
        "Id": 149,
        "optionList": [
          "0124",
          "01234",
          "12",
          "1345"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "for i in range(0,5):     \n    print(i, end='')     \n    if i == 2:         \n        continue",
        "answer": 1
      },
      {
        "Id": 150,
        "optionList": [
          "01245",
          "12345",
          "5",
          "1234"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "myvar = 5 \ndef printvar() :     \n    print(myvar) \n    printvar()",
        "answer": 2
      },
      {
        "Id": 151,
        "optionList": [
          "A list",
          "A string",
          "An integer",
          "A function"
        ],
        "question": "What is printvar in the following statements?",
        "codeBlock": "myvar = 5 \ndef printvar() :     \n    print(myvar) \n    printvar()",
        "answer": 3
      },
      {
        "Id": 152,
        "optionList": [
          "55",
          "5 5",
          "5",
          "10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "myvar = 5 \ndef printvar() :\n    print(myvar, end ='') \n    printvar() \n    printvar()",
        "answer": 0
      },
      {
        "Id": 153,
        "optionList": [
          "55",
          "4 5",
          "45",
          "var"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(var) :\n    print(var, end ='') \n    \ncall(45)",
        "answer": 2
      },
      {
        "Id": 154,
        "optionList": [
          "10",
          "50",
          "40",
          "10 + 40"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(var1, var2) :\n    print(var1 + var2, end ='')\n    \ncall(10, 40)",
        "answer": 1
      },
      {
        "Id": 155,
        "optionList": [
          "1000",
          "10",
          "30",
          "10 10 10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(var1, var2, var3) :\n    print(var1 var2 var3, end ='') \n    a = b = c = 10 \n    \ncall(a, b, c)",
        "answer": 0
      },
      {
        "Id": 156,
        "optionList": [
          "100",
          "1000",
          "2052",
          "200"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(var1=20, var2=5, var3=2) :     \n    print(var1 var2 var3, end ='') \n    \ncall()",
        "answer": 3
      },
      {
        "Id": 157,
        "optionList": [
          "597",
          "315",
          "2052",
          "200"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(var1=20, var2=5, var3=2) :     \n    print(var1 var2 var3, end ='') \n    \ncall(5,9,7)",
        "answer": 1
      },
      {
        "Id": 158,
        "optionList": [
          "57",
          "315",
          "70",
          "200"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(var1=20, var2=5, var3=2) :     \n    print(var1 var2 var3, end ='') \n    \ncall(5,7)",
        "answer": 2
      },
      {
        "Id": 159,
        "optionList": [
          "17",
          "98",
          "70",
          "11"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(var1=20, var2=5, var3=2) :     \n    print((var1 * var2) - var3, end ='') \n    \ncall(var2=5, var3=3, var1=4)",
        "answer": 0
      },
      {
        "Id": 160,
        "optionList": [
          "17",
          "98",
          "26",
          "11"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(var1=20, var2=5, var3=2) :     \n    print((var1 * var2) - var3, end ='') \n    \ncall(7,4)",
        "answer": 2
      },
      {
        "Id": 161,
        "optionList": [
          "18",
          "5, 3",
          "15",
          "8"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(x, y) :     \n    return x * y \n\nprint(call(5, 3))",
        "answer": 2
      },
      {
        "Id": 162,
        "optionList": [
          "0.444445",
          "2",
          "0",
          "2.25"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(y, x) :     \n    return x / y \n\nz = call(4, 9) \nprint(z)",
        "answer": 3
      },
      {
        "Id": 163,
        "optionList": [
          "6",
          "-6",
          "2",
          "6.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(x,y) :     \n    if y == 0:         \n        return     \n    return y - x \n\nprint(call(8,2))",
        "answer": 1
      },
      {
        "Id": 164,
        "optionList": [
          "5",
          "5.0",
          "0",
          "None"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def call(x,y) :     \n    if x == 0:     \n        return     \n    return y + x \n\nprint(call(0,5))",
        "answer": 3
      },
      {
        "Id": 165,
        "optionList": [
          "24",
          "24.0",
          "6: 24",
          "36"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "y = lambda x: x*4 \nprint(y(6))",
        "answer": 0
      },
      {
        "Id": 166,
        "optionList": [
          "None",
          "25",
          "27",
          "No output"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 27 \nif x < 25:     \n    print(x) \nelse:\n    pass",
        "answer": 3
      },
      {
        "Id": 167,
        "optionList": [
          "List",
          "Module",
          "Dictionary",
          "Tuple"
        ],
        "question": "Which of the following is not a core data structure in Python?",
        "answer": 1
      },
      {
        "Id": 168,
        "optionList": [
          "012",
          "123",
          "111",
          "000"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def gen():     \n    x = 0     \n    while True:         \n        yield x         \n        x += 1 \n        \ny = gen() \nprint(next(y), end='') \nprint(next(y), end='') \nprint(next(y), end='')",
        "answer": 0
      },
      {
        "Id": 169,
        "optionList": [
          "0123",
          "123",
          "12345",
          "234"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def gen():     \n    x = 2     \n    while True:         \n        yield x         \n        x += 1 \n        \ny = gen() \nfor i in y:     \n    if i >= 5:         \n        break     \n    else:         \n        print(i, end='')",
        "answer": 3
      },
      {
        "Id": 170,
        "optionList": [
          "HELP",
          "save",
          "help()",
          "help"
        ],
        "question": "What do you type to enter the interactive help mode of Python?",
        "answer": 2
      },
      {
        "Id": 171,
        "optionList": [
          "Imports the random module",
          "Imports a random module from a list of modules",
          "Imports the random function",
          "imports the directory named random"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "import random",
        "answer": 0
      },
      {
        "Id": 172,
        "optionList": [
          "Imports all the python keywords",
          "Imports the keyword and sys modules",
          "Imports the keyword and sys functions",
          "imports the directories named keyword and sys"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "import keyword, sys",
        "answer": 1
      },
      {
        "Id": 173,
        "optionList": [
          "A random float value between 4 and 7, including 4 and 7",
          "A random float value between 4 and 7, excluding 4 and 7",
          "A random integer value between 4 and 7, excluding 4 and 7",
          "A random integer value between 4 and 7, including 4 and 7"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import random as rd \nprint(rd.randint(4,7))",
        "answer": 3
      },
      {
        "Id": 174,
        "optionList": [
          "A random float value between 0 and 1",
          "A random integer value between 0 and 1",
          "A random float value between 0 and 10",
          "A random integer value between 0 and 10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import random as rd \nprint(rd.random())",
        "answer": 0
      },
      {
        "Id": 175,
        "optionList": [
          "A dictionary containing 3 random keys from list x",
          "Three random integer values between 0 and 10",
          "A list containing 3 random elements from list x",
          "A tuple containing 2 random elements from list x"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "from random import * \nx = [0, 2, 4, 6, 8, 10] \nprint(sample(x, 3))",
        "answer": 2
      },
      {
        "Id": 176,
        "optionList": [
          "[4, 11, 30]",
          "[3, 15, 10]",
          "[1, 5, 7, 4]",
          "[1, 5, 0]"
        ],
        "question": "Which of the following can be a possible output after the following statements?",
        "codeBlock": "from random import * \nprint(sample(range(0,10), 3))",
        "answer": 3
      },
      {
        "Id": 177,
        "optionList": [
          "Displays the Python version",
          "Displays the operating system version",
          "Displays the date",
          "Displays the year"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "import sys \nprint(sys.version)",
        "answer": 0
      },
      {
        "Id": 178,
        "optionList": [
          "Displays the Python version",
          "Displays the operating system version",
          "Displays the location of the Python interpreter",
          "Displays the date and time"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "import sys \nprint(sys.executable)",
        "answer": 2
      },
      {
        "Id": 179,
        "optionList": [
          "Displays the list of Python modules",
          "Displays a list of all the Python keywords",
          "Displays a random keyword from the Python keywords",
          "Displays the date and time"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "import keyword \nprint(keyword.kwlist)",
        "answer": 1
      },
      {
        "Id": 180,
        "optionList": [
          "67",
          "68",
          "67.0",
          "68.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import math \nprint(math.floor(67.3))",
        "answer": 0
      },
      {
        "Id": 181,
        "optionList": [
          "21",
          "22",
          "21.0",
          "22.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import math \nprint(math.ceil(21.4))",
        "answer": 1
      },
      {
        "Id": 182,
        "optionList": [
          "2.1",
          "2",
          "2.0",
          "4.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import math \nprint(math.sqrt(4))",
        "answer": 2
      },
      {
        "Id": 183,
        "optionList": [
          "6",
          "9",
          "6.0",
          "9.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import math \nprint(math.pow(3,2))",
        "answer": 3
      },
      {
        "Id": 184,
        "optionList": [
          "Displays current date and time",
          "Displays a list of all the hours remaining till midnight",
          "Displays a random time from today's date",
          "Displays today's weekday name"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "import datetime \nprint(datetime.datetime.today())",
        "answer": 0
      },
      {
        "Id": 185,
        "optionList": [
          "Displays current date and time",
          "Displays a list of all the hours remaining till midnight",
          "Displays current hour of the day",
          "Displays the number of hours in a day"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(getattr(datetime.today(),'hour'))",
        "answer": 2
      },
      {
        "Id": 186,
        "optionList": [
          "Displays current date and year",
          "Displays current year",
          "Displays the number of months in a year",
          "Displays the number of days in a year"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(getattr(datetime.today(),'year'))",
        "answer": 1
      },
      {
        "Id": 187,
        "optionList": [
          "Displays the full month name",
          "Displays the abbreviated month name",
          "Displays the abbreviated day name",
          "Displays the full weekday name"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%A'))",
        "answer": 3
      },
      {
        "Id": 188,
        "optionList": [
          "Displays the full weekday name",
          "Displays the full month name",
          "Displays the abbreviated day name",
          "Displays the abbreviated month name"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%B'))",
        "answer": 1
      },
      {
        "Id": 189,
        "optionList": [
          "Displays the hour number of 12-hour clock",
          "Displays the date and time appropriate for locale",
          "Displays the day of the month number (from 01 to 31)",
          "Displays the microsecond number (from 0 to 999999) 190. What does the following statements do?"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%d'))",
        "answer": 2
      },
      {
        "Id": 190,
        "optionList": [
          "Displays the date and time appropriate for locale",
          "Displays the microsecond number (from 0 to 999999)",
          "Displays the hour number of 12-hour clock",
          "Displays the hour number of 24-hour clock"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%c'))",
        "answer": 0
      },
      {
        "Id": 191,
        "optionList": [
          "Displays the date and time appropriate for locale",
          "Displays the microsecond number (from 0 to 999999)",
          "Displays the hour number of 24-hour clock",
          "Displays the hour number of 12-hour clock"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%f'))",
        "answer": 1
      },
      {
        "Id": 192,
        "optionList": [
          "Displays the hour number of 12-hour clock",
          "Displays the minute number from 00 to 59",
          "Displays the hour number of 24-hour clock",
          "Displays the day number of the year from 000 to 366 193. What does the following statements do?"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%I'))",
        "answer": 0
      },
      {
        "Id": 193,
        "optionList": [
          "Displays the minute number from 00 to 59",
          "Displays the hour number of 12-hour clock",
          "Displays the hour number of 24-hour clock",
          "Displays the day number of the year from 000 to 366"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%H'))",
        "answer": 2
      },
      {
        "Id": 194,
        "optionList": [
          "Displays the month number from 01 to 12",
          "Displays the minute number from 00 to 59",
          "Displays the day number of the year from 000 to 366",
          "Displays the second number from 00 to 59 195."
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%j'))",
        "answer": 2
      },
      {
        "Id": 195,
        "optionList": [
          "Displays the month number from 01 to 12",
          "Displays the second number from 00 to 59",
          "Displays the AM or PM equivalent for locale",
          "Displays the minute number from 00 to 59"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%M'))",
        "answer": 3
      },
      {
        "Id": 196,
        "optionList": [
          "Displays the minute number from 00 to 59",
          "Displays the month number from 01 to 12",
          "Displays the second number from 00 to 59",
          "Displays the AM or PM equivalent for locale"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%m'))",
        "answer": 1
      },
      {
        "Id": 197,
        "optionList": [
          "Displays the AM or PM equivalent for locale",
          "Displays the minute number from 00 to 59",
          "Displays the month number from 01 to 12",
          "Displays the second number from 00 to 59"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%p'))",
        "answer": 0
      },
      {
        "Id": 198,
        "optionList": [
          "Displays the AM or PM equivalent for locale",
          "Displays the second number from 00 to 59",
          "Displays the week number of the year from 00 to 53",
          "Displays the month number from 01 to 12"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%S'))",
        "answer": 1
      },
      {
        "Id": 199,
        "optionList": [
          "Displays the weekday number from 0(Sunday) to 6(Saturday)",
          "Displays the AM or PM equivalent for locale",
          "Displays the date appropriate for locale",
          "Displays the week number of the year from 00 to 53"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%W'))",
        "answer": 3
      },
      {
        "Id": 200,
        "optionList": [
          "Displays the week number of the year from 00 to 53",
          "Displays the date appropriate for locale",
          "Displays the weekday number from 0(Sunday) to 6(Saturday)",
          "Displays the time appropriate for locale"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%w'))",
        "answer": 2
      },
      {
        "Id": 201,
        "optionList": [
          "Displays the time appropriate for locale",
          "Displays the current year as 00 to 99",
          "Displays the current year as 0001 to 9999",
          "Displays the date appropriate for locale"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%x'))",
        "answer": 3
      },
      {
        "Id": 202,
        "optionList": [
          "Displays the current year as 0001 to 9999",
          "Displays the timezone name",
          "Displays the time appropriate for locale",
          "Displays the current year as 00 to 99"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%X'))",
        "answer": 2
      },
      {
        "Id": 203,
        "optionList": [
          "Displays the current year as 00 to 99",
          "Displays the current year as 0001 to 9999",
          "Displays the timezone name",
          "Displays the timezone offset from UTC as +HHMM or -HHMM 204."
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%y'))",
        "answer": 0
      },
      {
        "Id": 204,
        "optionList": [
          "Displays the current year as 0001 to 9999",
          "Displays the timezone name",
          "Displays the timezone offset from UTC as +HHMM or -HHMM",
          "Displays the full month name"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%Y'))",
        "answer": 0
      },
      {
        "Id": 205,
        "optionList": [
          "Displays the timezone offset from UTC as +HHMM or -HHMM",
          "Displays the timezone name",
          "Displays the abbreviated month name",
          "Displays the full month name"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%Z'))",
        "answer": 1
      },
      {
        "Id": 206,
        "optionList": [
          "Displays the full month name",
          "Displays the abbreviated month name",
          "Displays the abbreviated day name",
          "Displays the timezone offset from UTC as +HHMM or -HHMM 207."
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%z'))",
        "answer": 3
      },
      {
        "Id": 207,
        "optionList": [
          "Displays the full month name",
          "Displays the full day name",
          "Displays the abbreviated day name",
          "Displays the abbreviated month name"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%a'))",
        "answer": 2
      },
      {
        "Id": 208,
        "optionList": [
          "Displays the full month name",
          "Displays the abbreviated month name",
          "Displays the full day name",
          "Displays the abbreviated day name"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from datetime import * \nprint(datetime.today().strftime('%b'))",
        "answer": 1
      },
      {
        "Id": 209,
        "optionList": [
          "Displays the current time in seconds since the Epoch as a floating point number",
          "Displays the current time in minutes since the Epoch as a floating point number",
          "Displays the current time in seconds since the Epoch as an integer",
          "Displays the current time in minutes since the Epoch as an integer"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from time import *\nprint(time())",
        "answer": 0
      },
      {
        "Id": 210,
        "optionList": [
          "Pauses the execution of the program by 3 minutes",
          "Pauses the execution of the program by 3 seconds",
          "Displays the current time in seconds since the Epoch as an integer",
          "Displays the current time in minutes since the Epoch as an integer"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "from time import * \nsleep(3)",
        "answer": 1
      },
      {
        "Id": 211,
        "optionList": [
          "Python Python",
          "MCQ MCQ",
          "Python MCQ",
          "PythonMCQ"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "x = 'Python' \ny = 'MCQ' \nprint(x + y)",
        "answer": 3
      },
      {
        "Id": 212,
        "optionList": [
          "Pyt Pyt Pyt",
          "t",
          "Python Python Python",
          "PythonPythonPython"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python ' \nprint(x*3)",
        "answer": 2
      },
      {
        "Id": 213,
        "optionList": [
          "h",
          "t",
          "Python Python Python Python",
          "o"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python ' \nprint(x[4])",
        "answer": 3
      },
      {
        "Id": 214,
        "optionList": [
          "Pyth",
          "th",
          "tho",
          "thon"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python' \nprint(x[2:4])",
        "answer": 1
      },
      {
        "Id": 215,
        "optionList": [
          "yth",
          "Pn",
          "Python",
          "PythonPythonPython"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python' \nprint(x[:])",
        "answer": 2
      },
      {
        "Id": 216,
        "optionList": [
          "y",
          "Y",
          "Python",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python' \nprint('y' in x)",
        "answer": 3
      },
      {
        "Id": 217,
        "optionList": [
          "p",
          "P",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python' \nprint('p' not in x)",
        "answer": 2
      },
      {
        "Id": 218,
        "optionList": [
          "Python 3 Test",
          "Python Test",
          "Test 3 Python",
          "Test Python"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '{} 3 {}'.format('Python', 'Test') \nprint(x)",
        "answer": 0
      },
      {
        "Id": 219,
        "optionList": [
          "Python for Questions",
          "Questions for Python",
          "1 for 0",
          "Python 1 for 0 Questions"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '{1} for {0}'.format('Python', 'Questions') \nprint(x)",
        "answer": 1
      },
      {
        "Id": 220,
        "optionList": [
          "Python MCQ",
          "MCQ Test",
          "Test MCQ Python",
          "Python MCQ Test"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '%s MCQ %s' %('Python', 'Test') \nprint(x)",
        "answer": 3
      },
      {
        "Id": 221,
        "optionList": [
          "Python 3",
          "3 Version",
          "Python 3 Version",
          "Python Version 3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python %d Version' %(3) \nprint(x)",
        "answer": 2
      },
      {
        "Id": 222,
        "optionList": [
          "Python 3 or Python 2",
          "Python 2 or Python 3",
          "Python 2 or Python 2",
          "Python 23"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python %c or Python %c' %('2', '3') \nprint(x)",
        "answer": 1
      },
      {
        "Id": 223,
        "optionList": [
          "Python 3.51 or Python 2.7",
          "Python 2 or Python 3",
          "Python 2.7 or Python 3.5",
          "Python 2.7 or Python 3.51"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python %.1f or Python %.2f' %(2.7, 3.51) \nprint(x)",
        "answer": 3
      },
      {
        "Id": 224,
        "optionList": [
          "Python",
          "Python.capitalize",
          "PYTHON",
          "pYTHON"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python' \nprint(x.capitalize())",
        "answer": 0
      },
      {
        "Id": 225,
        "optionList": [
          "python job interview",
          "Python job interview",
          "Python Job Interview",
          "Python job Interview"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'python job interview' \nprint(x.title())",
        "answer": 2
      },
      {
        "Id": 226,
        "optionList": [
          "PYTHON JOBS",
          "Python jobs",
          "Python Jobs",
          "python jobs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'python jobs' \nprint(x.upper())",
        "answer": 0
      },
      {
        "Id": 227,
        "optionList": [
          "PYTHON JOBS",
          "Python jobs",
          "Python Jobs",
          "python jobs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'python jobs' \nprint(x.lower())",
        "answer": 3
      },
      {
        "Id": 228,
        "optionList": [
          "PYTHON JOBS",
          "pYTHON jOBS",
          "Python Jobs",
          "python jobs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python Jobs' \nprint(x.swapcase())",
        "answer": 1
      },
      {
        "Id": 229,
        "optionList": [
          "Python33",
          "3Python3",
          "Python3",
          "Python 33"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python' \nprint(x.join('33'))",
        "answer": 1
      },
      {
        "Id": 230,
        "optionList": [
          "3Python Test3",
          "3Python3Test",
          "Python3Test3",
          "Python Test33"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python Test' \nprint(x.join('33'))",
        "answer": 0
      },
      {
        "Id": 231,
        "optionList": [
          "Python 3",
          "3Python3",
          "Python3",
          "Python+3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ' Python ' y = '3'\nprint(x.lstrip()+y.lstrip())",
        "answer": 0
      },
      {
        "Id": 232,
        "optionList": [
          "Python 3",
          "3Python3",
          "Python3",
          "Python+3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python ' \ny = '3 '\nprint(x.rstrip()+y.rstrip())",
        "answer": 2
      },
      {
        "Id": 233,
        "optionList": [
          "Python 3 Questions",
          "Python3Questions",
          "Python3 Questions",
          "Python 3Questions"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ' Python ' \ny = ' 3 ' \nz = ' Questions ' \nprint(x.strip()+y.strip()+z.strip())",
        "answer": 1
      },
      {
        "Id": 234,
        "optionList": [
          "Interview",
          "Intrviw",
          "I n t e r v i e w",
          "Int rvi w"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Interview' \nprint(x.replace('e',' '))",
        "answer": 3
      },
      {
        "Id": 235,
        "optionList": [
          "MCQs******",
          "M C Q S",
          "******MCQs",
          "M C Q s"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'MCQs' \nprint(x.ljust(10,'*'))",
        "answer": 0
      },
      {
        "Id": 236,
        "optionList": [
          "MCQs******",
          "M C Q S",
          "******MCQs",
          "M C Q s"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'MCQs' \nprint(x.rjust(10,'*'))",
        "answer": 2
      },
      {
        "Id": 237,
        "optionList": [
          "MCQs******",
          "***MCQs***",
          "******MCQs",
          "M C Q s"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'MCQs' \nprint(x.center(10,'*'))",
        "answer": 1
      },
      {
        "Id": 238,
        "optionList": [
          "1",
          "0",
          "4",
          "5"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python Pi Py Pip' \nprint(x.count('p'))",
        "answer": 0
      },
      {
        "Id": 239,
        "optionList": [
          "-1",
          "0",
          "1",
          "3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python Pi Py' \nprint(x.find('p'))",
        "answer": 0
      },
      {
        "Id": 240,
        "optionList": [
          "-1",
          "0",
          "1",
          "3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python Pi Py'\nprint(x.find('P'))",
        "answer": 1
      },
      {
        "Id": 241,
        "optionList": [
          "1",
          "0",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Pi Py Python' \nprint(x.startswith('p'))",
        "answer": 3
      },
      {
        "Id": 242,
        "optionList": [
          "1",
          "0",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Pi Py Python' \nprint(x.endswith('n'))",
        "answer": 2
      },
      {
        "Id": 243,
        "optionList": [
          "1",
          "0",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python' \nprint(x.isalpha())",
        "answer": 2
      },
      {
        "Id": 244,
        "optionList": [
          "1",
          "0",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python 3' \nprint(x.isnumeric())",
        "answer": 3
      },
      {
        "Id": 245,
        "optionList": [
          "1",
          "0",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python 3 MCQ' \nprint(x.isalnum())",
        "answer": 3
      },
      {
        "Id": 246,
        "optionList": [
          "True",
          "False",
          "1",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python 3 MCQ' \nprint(x.islower())",
        "answer": 1
      },
      {
        "Id": 247,
        "optionList": [
          "True",
          "False",
          "1",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python 3 MCQ' \nprint(x.istitle())",
        "answer": 1
      },
      {
        "Id": 248,
        "optionList": [
          "True",
          "False",
          "1",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'MCQ' \nprint(x.isupper())",
        "answer": 0
      },
      {
        "Id": 249,
        "optionList": [
          "True",
          "False",
          "1",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '\\n' \nprint(x.isspace())",
        "answer": 0
      },
      {
        "Id": 250,
        "optionList": [
          "True",
          "False",
          "1",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '2000' \nprint(x.isdigit())",
        "answer": 0
      },
      {
        "Id": 251,
        "optionList": [
          "True",
          "False",
          "1",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '2.7' \nprint(x.isdecimal())",
        "answer": 1
      },
      {
        "Id": 252,
        "optionList": [
          "Opens an existing text file named python.csv to write",
          "Opens an existing text file named python.csv to append",
          "Opens an existing text file named python.csv to read",
          "Opens a new file named python.csv to read"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "x = open('python.csv', 'r')",
        "answer": 2
      },
      {
        "Id": 253,
        "optionList": [
          "Opens or creates a text file named python.csv to write",
          "Opens or creates a text file named python.csv to append",
          "Opens or creates a text file named python.csv to read",
          "Opens a new file named python.csv to write"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "x = open('python.csv', 'w')",
        "answer": 0
      },
      {
        "Id": 254,
        "optionList": [
          "Opens or creates a text file named python.csv to write",
          "Opens or creates a text file named python.csv to append",
          "Opens or creates a text file named python.csv to read",
          "Opens a new file named python.csv to append"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "x = open('python.csv', 'a')",
        "answer": 1
      },
      {
        "Id": 255,
        "optionList": [
          "Opens a text file named python.txt to read from or write to",
          "Opens a text file named python.txt to read",
          "Opens a text file named python.txt to write",
          "Opens a new file named python.txt to append"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "x = open('python.txt', 'r+')",
        "answer": 0
      },
      {
        "Id": 256,
        "optionList": [
          "Opens a text file named python.txt to read",
          "Opens a text file named python.txt to write to or read from",
          "Opens a text file named python.txt to write",
          "Opens a new file named python.txt to append"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "x = open('python.txt', 'r+')",
        "answer": 1
      },
      {
        "Id": 257,
        "optionList": [
          "Opens a text file named python.txt to read",
          "Opens a text file named python.txt to read and write",
          "Opens a text file named python.txt to write to",
          "Opens or creates a text file named python.txt to read from or write to at the end of the file"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "x = open('python.txt', 'a+')",
        "answer": 1
      },
      {
        "Id": 258,
        "optionList": [
          "Opens an existing text file named python.bat to write",
          "Opens an existing binary file named python.bat to write",
          "Opens an existing binary file named python.bat to append",
          "Opens an existing binary file named python.bat to read"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "x = open('python.bat', 'rb')",
        "answer": 3
      },
      {
        "Id": 259,
        "optionList": [
          "Opens or creates a binary file named python.bat to write",
          "Opens or creates a binary file named python.bat to append",
          "Opens or creates a binary file named python.bat to read",
          "Opens a new file named python.bat to write"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "x = open('python.bat', 'wb')",
        "answer": 0
      },
      {
        "Id": 260,
        "optionList": [
          "Opens or creates a binary file named python.bat to write",
          "Opens or creates a binary file named python.bat to append",
          "Opens or creates a binary file named python.bat to read",
          "Opens a new file named python.bat to append"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "x = open('python.bat', 'ab')",
        "answer": 1
      },
      {
        "Id": 261,
        "optionList": [
          "python",
          "python.txt opened",
          "python.txt or FileNotFoundError",
          "python r"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = open('python.txt', 'r') \nprint(x.name)",
        "answer": 2
      },
      {
        "Id": 262,
        "optionList": [
          "python write",
          "python.txt",
          "r",
          "w"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = open('python.csv', 'w') \nprint(x.mode)",
        "answer": 3
      },
      {
        "Id": 263,
        "optionList": [
          "open",
          "closed",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = open('python.csv', 'w') \nprint(x.closed)",
        "answer": 3
      },
      {
        "Id": 264,
        "optionList": [
          "open",
          "closed",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = open('python.csv', 'w')\nx.close() \nprint(x.closed)",
        "answer": 2
      },
      {
        "Id": 265,
        "optionList": [
          "readable",
          "writable",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = open('python.csv', 'w') \nprint(x.readable())",
        "answer": 3
      },
      {
        "Id": 266,
        "optionList": [
          "readable",
          "writable",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = open('python.csv', 'w') \nprint(x.writable())",
        "answer": 2
      },
      {
        "Id": 267,
        "optionList": [
          "readable",
          "writable",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = open('python.csv', 'a') \nprint(x.writable())",
        "answer": 2
      },
      {
        "Id": 268,
        "optionList": [
          "4+4",
          "4 + 4",
          "4*2",
          "4**2"
        ],
        "question": "In IDLE shell, the output will be the same for all the following statements except one. Which one?",
        "answer": 3
      },
      {
        "Id": 269,
        "optionList": [
          "Page Down",
          "Page Up",
          "Alt + P",
          "Ctrl + P"
        ],
        "question": "In IDLE shell, what is the keyboard shortcut for the previous command in history on Windows/Linux?",
        "answer": 2
      },
      {
        "Id": 270,
        "optionList": [
          "Page Down",
          "Page Up",
          "Ctrl + N",
          "Alt + N"
        ],
        "question": "In IDLE shell, what is the keyboard shortcut for the next command in history on Windows/Linux?",
        "answer": 3
      },
      {
        "Id": 271,
        "optionList": [
          "Page Down",
          "Page Up",
          "Alt + P",
          "Ctrl + P"
        ],
        "question": "In IDLE shell, what is the keyboard shortcut for the previous command in history on Mac OS X?",
        "answer": 3
      },
      {
        "Id": 272,
        "optionList": [
          "Page Down",
          "Page Up",
          "Ctrl + N",
          "Alt + N"
        ],
        "question": "In IDLE shell, what is the keyboard shortcut for the next command in history on Mac OS X?",
        "answer": 2
      },
      {
        "Id": 273,
        "optionList": [
          "F5",
          "F1",
          "Shift",
          "Alt"
        ],
        "question": "In IDLE file editor, what is the keyboard shortcut for executing the program in shell?",
        "answer": 0
      },
      {
        "Id": 274,
        "optionList": [
          "Not declared",
          "Not defined",
          "Not assigned",
          "Not a variable"
        ],
        "question": "What type of error is shown when you use a variable without assigning an initial value?",
        "answer": 1
      },
      {
        "Id": 275,
        "optionList": [
          "High level",
          "Low level",
          "Top level",
          "Bottom level"
        ],
        "question": "What type of language is Python?",
        "answer": 0
      },
      {
        "Id": 276,
        "optionList": [
          "Python - the reptile",
          "Monty Python",
          "A pet",
          "A company"
        ],
        "question": "Python language was named after?",
        "answer": 1
      },
      {
        "Id": 277,
        "optionList": [
          "Bill Gates",
          "Guido Van Rossum",
          "Jeff Bezos",
          "Larry Page"
        ],
        "question": "Who is the creator of Python?",
        "answer": 1
      },
      {
        "Id": 278,
        "optionList": [
          "Dynamic typing",
          "Static typing",
          "Slow typing",
          "Auto typing"
        ],
        "question": "Which of the following is identified with Python?",
        "answer": 0
      },
      {
        "Id": 279,
        "optionList": [
          "Single quotes",
          "Double quotes",
          "Either single quotes or double quotes",
          "! symbol"
        ],
        "question": "Which of the following is used to enclose strings?",
        "answer": 2
      },
      {
        "Id": 280,
        "optionList": [
          "\\t",
          "\\tab",
          "\\a",
          "\\b"
        ],
        "question": "Which of the following is used to add an invisible tab character to the output?",
        "answer": 0
      },
      {
        "Id": 281,
        "optionList": [
          "2 t 4",
          "2\\t4",
          "2 4",
          "2 tab 4"
        ],
        "question": "What will be the output after the following statement?",
        "codeBlock": "print('2\\\\t4')",
        "answer": 1
      },
      {
        "Id": 282,
        "optionList": [
          "True",
          "False",
          "b",
          "5"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = True \nb = False \nc = 5 \nif (a == 1) else b \nprint(c)",
        "answer": 3
      },
      {
        "Id": 283,
        "optionList": [
          "True",
          "False",
          "a",
          "b"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = True \nb = False \nc = 'a' \nif (b == 0) else 'b' \nprint(c)",
        "answer": 2
      },
      {
        "Id": 284,
        "optionList": [
          "True",
          "False",
          "ab",
          "ba"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = False \nb = False \nprint(a and b)",
        "answer": 1
      },
      {
        "Id": 285,
        "optionList": [
          "Multiplication",
          "Division",
          "Addition",
          "Subtraction"
        ],
        "question": "In the order of precedence, which of the operation will be completed first in the following statement?",
        "codeBlock": "3 * 6 + 5 - 4 / 2",
        "answer": 0
      },
      {
        "Id": 286,
        "optionList": [
          "Multiplication",
          "Division",
          "Addition",
          "Subtraction"
        ],
        "question": "In the order of precedence, which of the operation will be completed last in the following statement?",
        "codeBlock": "3 * 6 + 5 - 4 / 2",
        "answer": 3
      },
      {
        "Id": 287,
        "optionList": [
          "Multiplication, Division, Subtraction, Addition",
          "Multiplication, Division, Addition, Subtraction",
          "Division, Multiplication, Subtraction, Addition",
          "Division, Multiplication, Addition, Subtraction"
        ],
        "question": "What will be the order of precedence of operations in the following statement?",
        "codeBlock": "10 * 4 - 1 + 8 / 5",
        "answer": 1
      },
      {
        "Id": 288,
        "optionList": [
          "Integer",
          "String",
          "List",
          "Float"
        ],
        "question": "What will be the data type of x after the following statement if input entered is 64?",
        "codeBlock": "x = float(input('Enter a number: '))",
        "answer": 3
      },
      {
        "Id": 289,
        "optionList": [
          "0",
          "16.0",
          "32",
          "4.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = 27 / 3 % 2 * 4**2 \nprint(a)",
        "answer": 1
      },
      {
        "Id": 290,
        "optionList": [
          "20.0",
          "1.0",
          "36.0",
          "0.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = 3 / 3 - 3*3 \nprint(a)",
        "answer": 0
      },
      {
        "Id": 291,
        "optionList": [
          "[3, 5, 7, 9]",
          "[1, 3, 5] [3, 5, 7, 9, 11, 13, 15, 17]",
          "[3, 5, 7, 9] [7, 9, 11, 13, 15, 17, 19]",
          "[3, 5, 7, 9, 11, 13, 15, 17, 19]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [1,3,5,7,9,11,13,15,17,19] \nprint(a[1:5],a[3:17])",
        "answer": 2
      },
      {
        "Id": 292,
        "optionList": [
          "[1, 3, 5, 1, 3, 5]",
          "[1, 2, 3, 5]",
          "[3, 5]",
          "[11, 33, 55]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [1,3,5] \nprint(a * 2)",
        "answer": 0
      },
      {
        "Id": 293,
        "optionList": [
          "abc",
          "abc123",
          "123abc",
          "abc_123"
        ],
        "question": "Which of the following is not a valid variable name?",
        "answer": 2
      },
      {
        "Id": 294,
        "optionList": [
          "a$1",
          "a1",
          "1a",
          "abc 123"
        ],
        "question": "Which of the following is a valid variable name?",
        "answer": 1
      },
      {
        "Id": 295,
        "optionList": [
          "25 15",
          "15 25",
          "a 15",
          "25 a"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = 15 \nb = a \na = 25 \nprint(a,b)",
        "answer": 0
      },
      {
        "Id": 296,
        "optionList": [
          "25 15 20",
          "20.0 20.0 20.0",
          "20.0 20 20.0",
          "20 20.0 20"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 16 / 4 * 5 \ny = 16 / 4 * 5.0 \nz = 16 / 4.0 * 5 \nprint(x, y, z)",
        "answer": 1
      },
      {
        "Id": 297,
        "optionList": [
          "Integer",
          "List",
          "String",
          "Float"
        ],
        "question": "What will be the data type of x after the following statement?",
        "codeBlock": "x = 1/2",
        "answer": 3
      },
      {
        "Id": 298,
        "optionList": [
          "1,4",
          "y,z",
          "No output",
          "None"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def x(y,z):     \n    pass \n\nx(1,4)",
        "answer": 2
      },
      {
        "Id": 299,
        "optionList": [
          "14",
          "16",
          "20",
          "25"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "b = 1 \nfor a in range(1, 10, 3):\n    b += a + 1 \n    \nprint(b)",
        "answer": 1
      },
      {
        "Id": 300,
        "optionList": [
          "37",
          "47",
          "44",
          "38"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "b = 1 \nfor a in range(1, 10):\n    b += a - 1 \n    \nprint(b)",
        "answer": 0
      },
      {
        "Id": 301,
        "optionList": [
          "7",
          "4",
          "3",
          "8"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "b = 3\nfor a in range(10, 1):\n    b -= a + 1 \n\nprint(b)",
        "answer": 2
      },
      {
        "Id": 302,
        "optionList": [
          "120",
          "40",
          "36",
          "250"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "b = 1 \nfor a in range(1, 5):\n    b *= a + 1 \n    \nprint(b)",
        "answer": 0
      },
      {
        "Id": 303,
        "optionList": [
          "a",
          "False",
          "not a",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = True \nprint(a and not a)",
        "answer": 1
      },
      {
        "Id": 304,
        "optionList": [
          "a == b",
          "False",
          "not b",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = True \nb = False \nprint(a == b or not b)",
        "answer": 3
      },
      {
        "Id": 305,
        "optionList": [
          "a is b",
          "False",
          "not b",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = 'Hello' \nb = 'hello' \nprint(a is b)",
        "answer": 1
      },
      {
        "Id": 306,
        "optionList": [
          "a is b",
          "False",
          "not b",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = 'Python' \nb = 'Python' \nprint(a is b)",
        "answer": 3
      },
      {
        "Id": 307,
        "optionList": [
          "a is b",
          "False",
          "not b",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [4, 7, 9] \nb = [4, 7, 9] \nprint(a is b)",
        "answer": 1
      },
      {
        "Id": 308,
        "optionList": [
          "a is b",
          "False",
          "not b",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [4, 7, 9] \nb = [7, 4, 9] \nprint(a is not b)",
        "answer": 3
      },
      {
        "Id": 309,
        "optionList": [
          "True True",
          "False False",
          "False True",
          "True False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [3, 6, 9] \nb = [3, 6, 9] \nprint(a is b, a == b)",
        "answer": 2
      },
      {
        "Id": 310,
        "optionList": [
          "0 5 10",
          "5 10 10",
          "5 10 5",
          "5 5 10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = 0 \nb = 5 \nc = 10 \na = b \nb = c \nc = a \nprint(a, b, c)",
        "answer": 2
      },
      {
        "Id": 311,
        "optionList": [
          "20 15",
          "15 20",
          "a 20",
          "15 a"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "b = 15 \nc = 20\na = b \nb = c \nc = a \nprint(b, c)",
        "answer": 0
      },
      {
        "Id": 312,
        "optionList": [
          "4*3",
          "60//5",
          "17-5",
          "12/1"
        ],
        "question": "In IDLE shell, the output will be the same for all the following statements except one. Which one?",
        "answer": 3
      },
      {
        "Id": 313,
        "optionList": [
          "P = 'python' * int('1')",
          "P = 'python' + 1",
          "P = 'python' + str(1)",
          "P = 'python' * 1"
        ],
        "question": "In IDLE shell, the output will be an error for one of the following statements. Which one?",
        "answer": 1
      },
      {
        "Id": 314,
        "optionList": [
          "4 4",
          "4 3",
          "12 12",
          "64 64"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = 4**3 \nb = pow(4,3) \nprint(a, b)",
        "answer": 3
      },
      {
        "Id": 315,
        "optionList": [
          "(10, 15, 6, 17, 24)",
          "6",
          "5",
          "24"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = min(10, 15, 6, 17, 24) \nprint(a)",
        "answer": 1
      },
      {
        "Id": 316,
        "optionList": [
          "[4, 25, 16, 9, 24]",
          "9",
          "25",
          "24"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [4, 25, 16, 9, 24] \nprint(max(a))",
        "answer": 2
      },
      {
        "Id": 317,
        "optionList": [
          "5 5 5",
          "6 5 6",
          "5 6 6",
          "5 6 5"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = round(5.3) \nb = round(5.6) \nc = round(5.5) \nprint(a, b, c)",
        "answer": 2
      },
      {
        "Id": 318,
        "optionList": [
          "3",
          "4",
          "5",
          "6"
        ],
        "question": "How many times will \"Python 3\" be printed after the following statements?",
        "codeBlock": "for i in range(1, 5):     \n    print('Python 3')",
        "answer": 1
      },
      {
        "Id": 319,
        "optionList": [
          "4",
          "5",
          "4.0",
          "4.5"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = round(4.49999) \nprint(a)",
        "answer": 0
      },
      {
        "Id": 320,
        "optionList": [
          "None",
          "No value",
          "Zero",
          "Bool"
        ],
        "question": "What will be the output for a function that does not return any value?",
        "answer": 0
      },
      {
        "Id": 321,
        "optionList": [
          "SyntaxError",
          "TypeError",
          "ValueError",
          "NameError"
        ],
        "question": "What type of error will be shown after the following statement?",
        "codeBlock": "a = b",
        "answer": 3
      },
      {
        "Id": 322,
        "optionList": [
          "SyntaxError",
          "TypeError",
          "ValueError",
          "NameError"
        ],
        "question": "What type of error will be shown after the following statement?",
        "codeBlock": "a = int('hello')",
        "answer": 2
      },
      {
        "Id": 323,
        "optionList": [
          "SyntaxError",
          "TypeError",
          "ValueError",
          "NameError"
        ],
        "question": "What type of error will be shown after the following statement?",
        "codeBlock": "a = {7)",
        "answer": 0
      },
      {
        "Id": 324,
        "optionList": [
          "SyntaxError",
          "TypeError",
          "ValueError",
          "NameError"
        ],
        "question": "What type of error will be shown after the following statement?",
        "codeBlock": "a = 'Python' + 3",
        "answer": 1
      },
      {
        "Id": 325,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "What is the data type of a after the following statement?",
        "codeBlock": "a = {'A', 'B', 'C', 'D'}",
        "answer": 3
      },
      {
        "Id": 326,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "What is the data type of a after the following statement?",
        "codeBlock": "a = {'A':1, 'B':2, 'C':3, 'D':4}",
        "answer": 1
      },
      {
        "Id": 327,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "What is the data type of a after the following statement?",
        "codeBlock": "a = (1, 4, 3, 6)",
        "answer": 2
      },
      {
        "Id": 328,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "What is the data type of a after the following statement?",
        "codeBlock": "a = [1, 4, 3, 6]",
        "answer": 0
      },
      {
        "Id": 329,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "What is the data type used to store values in key values pair?",
        "answer": 1
      },
      {
        "Id": 330,
        "optionList": [
          "\"Python\\tis\\tEasy\\n\"",
          "\"Hello, it's very easy to learn Python\"",
          "\"Python\", \"easy\"",
          "\"Python is easy'"
        ],
        "question": "In IDLE shell, which of the following statements gives SyntaxError?",
        "answer": 3
      },
      {
        "Id": 331,
        "optionList": [
          "45",
          "50.0",
          "45.0",
          "55.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = 45 \nb = 55\nc = (a + b) / 2 \nprint(c)",
        "answer": 1
      },
      {
        "Id": 332,
        "optionList": [
          "Parentheses",
          "Exponential",
          "Division",
          "Subtraction"
        ],
        "question": "Which of the following has the highest precedence in an expression?",
        "answer": 0
      },
      {
        "Id": 333,
        "optionList": [
          "32",
          "144",
          "36",
          "24"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = 4*3**2 \nprint(a)",
        "answer": 2
      },
      {
        "Id": 334,
        "optionList": [
          "regex",
          "regexes",
          "REG",
          "re"
        ],
        "question": "What is the name of Python's built-in module for regular expressions?",
        "answer": 3
      },
      {
        "Id": 335,
        "optionList": [
          "csv",
          "tsc",
          "delimited",
          "pipe"
        ],
        "question": "What is the name of Python's built-in module for delimited files?",
        "answer": 0
      },
      {
        "Id": 336,
        "optionList": [
          "date",
          "time",
          "datetime",
          "dates"
        ],
        "question": "What is the name of Python's built-in module for basic date and time types?",
        "answer": 2
      },
      {
        "Id": 337,
        "optionList": [
          "mailserver",
          "email",
          "message",
          "mail"
        ],
        "question": "What is the name of Python's built-in module for email related tasks?",
        "answer": 1
      },
      {
        "Id": 338,
        "optionList": [
          "getpass",
          "password",
          "login",
          "readpass"
        ],
        "question": "What is the name of Python's built-in module for reading passwords?",
        "answer": 0
      },
      {
        "Id": 339,
        "optionList": [
          "getip",
          "ipman",
          "ip",
          "ipaddress"
        ],
        "question": "What is the name of Python's built-in module for IPv4/IPv6 manipulation?",
        "answer": 3
      },
      {
        "Id": 340,
        "optionList": [
          "json",
          "jcode",
          "jsonencode",
          "jsoncode"
        ],
        "question": "What is the name of Python's built-in module for encoding/decoding JSON format?",
        "answer": 0
      },
      {
        "Id": 341,
        "optionList": [
          "string",
          "keyword",
          "stringtest",
          "keytest"
        ],
        "question": "What is the name of Python's built-in module for Python keywords?",
        "answer": 1
      },
      {
        "Id": 342,
        "optionList": [
          "maths",
          "mathematics",
          "math",
          "mathfunc"
        ],
        "question": "What is the name of Python's built-in module for mathematical functions?",
        "answer": 2
      },
      {
        "Id": 343,
        "optionList": [
          "windows",
          "liunx",
          "operatingsystem",
          "os"
        ],
        "question": "What is the name of Python's built-in module for operating system interfaces?",
        "answer": 3
      },
      {
        "Id": 344,
        "optionList": [
          "pprint",
          "print",
          "prettyprint",
          "printp"
        ],
        "question": "What is the name of Python's built-in module for data pretty printer?",
        "answer": 0
      },
      {
        "Id": 345,
        "optionList": [
          "psrandom",
          "random",
          "psuedo",
          "randomnum"
        ],
        "question": "What is the name of Python's built-in module for generating pseudo-random numbers?",
        "answer": 1
      },
      {
        "Id": 346,
        "optionList": [
          "scheduler",
          "eventsched",
          "sched",
          "schedule"
        ],
        "question": "What is the name of Python's built-in module for general purpose event scheduler?",
        "answer": 2
      },
      {
        "Id": 347,
        "optionList": [
          "shutil",
          "fileutil",
          "futility",
          "fileop"
        ],
        "question": "What is the name of Python's built-in module for high level file operations?",
        "answer": 0
      },
      {
        "Id": 348,
        "optionList": [
          "net",
          "socket",
          "webking",
          "webworking"
        ],
        "question": "What is the name of Python's built-in module for low level networking interface?",
        "answer": 1
      },
      {
        "Id": 349,
        "optionList": [
          "SQL",
          "sqldb",
          "dbase",
          "sqlite3"
        ],
        "question": "What is the name of Python's built-in module for SQLite databases?",
        "answer": 3
      },
      {
        "Id": 350,
        "optionList": [
          "ssl",
          "swrap",
          "tlsssl",
          "sslobj"
        ],
        "question": "What is the name of Python's built-in module for TLS/SSL wrapper for socket objects?",
        "answer": 0
      },
      {
        "Id": 351,
        "optionList": [
          "mathstats",
          "statistics",
          "statmath",
          "statfunc"
        ],
        "question": "What is the name of Python's built-in module for mathematical statistics functions?",
        "answer": 1
      },
      {
        "Id": 352,
        "optionList": [
          "sub",
          "mansub",
          "submng",
          "subprocess"
        ],
        "question": "What is the name of Python's built-in module for subprocess management?",
        "answer": 3
      },
      {
        "Id": 353,
        "optionList": [
          "config",
          "pysys",
          "sysconfig",
          "pycon"
        ],
        "question": "What is the name of Python's built-in module for Python's configuration information?",
        "answer": 2
      },
      {
        "Id": 354,
        "optionList": [
          "telnetlib",
          "tellib",
          "tnet",
          "telnet"
        ],
        "question": "What is the name of Python's built-in module for telnet client class?",
        "answer": 0
      },
      {
        "Id": 355,
        "optionList": [
          "temp",
          "tempdir",
          "temporary",
          "tempfile"
        ],
        "question": "What is the name of Python's built-in module for generating temporary files and directories?",
        "answer": 3
      },
      {
        "Id": 356,
        "optionList": [
          "thread",
          "threadall",
          "threading",
          "thrpar"
        ],
        "question": "What is the name of Python's built-in module for thread based parallelism?",
        "answer": 2
      },
      {
        "Id": 357,
        "optionList": [
          "timely",
          "time",
          "primetime",
          "mytime"
        ],
        "question": "What is the name of Python's built-in module for time access and conversions?",
        "answer": 1
      },
      {
        "Id": 358,
        "optionList": [
          "calendars",
          "calendar",
          "yearcal",
          "calc"
        ],
        "question": "What is the name of Python's built-in module for working with calendars?",
        "answer": 1
      },
      {
        "Id": 359,
        "optionList": [
          "timeit",
          "selftime",
          "codetime",
          "timer"
        ],
        "question": "What is the name of Python's built-in module for measuring execution time of code snippets?",
        "answer": 0
      },
      {
        "Id": 360,
        "optionList": [
          "tkgui",
          "guitk",
          "intertk",
          "tkinter"
        ],
        "question": "What is the name of Python's built-in module for interface to Tcl/Tk for graphical user interfaces?",
        "answer": 3
      },
      {
        "Id": 361,
        "optionList": [
          "torque",
          "tedu",
          "turtle",
          "moveturtle"
        ],
        "question": "What is the name of Python's built-in module for simple educational graphical applications?",
        "answer": 2
      },
      {
        "Id": 362,
        "optionList": [
          "urls",
          "urllib",
          "URL",
          "httpurl"
        ],
        "question": "What is the name of Python's built-in module for url handling?",
        "answer": 1
      },
      {
        "Id": 363,
        "optionList": [
          "wav",
          "WAVE",
          "WAV",
          "wave"
        ],
        "question": "What is the name of Python's built-in module for interface to WAV sound format?",
        "answer": 3
      },
      {
        "Id": 364,
        "optionList": [
          "browser",
          "browse",
          "webrowser",
          "webbrowser"
        ],
        "question": "What is the name of Python's built-in module for web browser controlller?",
        "answer": 3
      },
      {
        "Id": 365,
        "optionList": [
          "xml",
          "XML",
          "allxml",
          "onlyxml"
        ],
        "question": "What is the name of Python's built-in module for xml processing?",
        "answer": 0
      },
      {
        "Id": 366,
        "optionList": [
          "readzip",
          "zipfile",
          "writezip",
          "rwzip"
        ],
        "question": "What is the name of Python's built-in module for reading and writing ZIP archive files?",
        "answer": 1
      },
      {
        "Id": 367,
        "optionList": [
          "pcgi",
          "pycgi",
          "cgi",
          "cgipy"
        ],
        "question": "What is the name of Python's built-in module for running Python scripts via CGI?",
        "answer": 2
      },
      {
        "Id": 368,
        "optionList": [
          "complexmath",
          "cmath",
          "mathc",
          "mathplex"
        ],
        "question": "What is the name of Python's built-in module for mathematical functions for complex numbers?",
        "answer": 1
      },
      {
        "Id": 369,
        "optionList": [
          "color",
          "colors",
          "colours",
          "colorsys"
        ],
        "question": "What is the name of Python's built-in module for conversions between color systems?",
        "answer": 3
      },
      {
        "Id": 370,
        "optionList": [
          "copyd",
          "copyme",
          "copy",
          "copys"
        ],
        "question": "What is the name of Python's built-in module for shallow and deep copy operations?",
        "answer": 2
      },
      {
        "Id": 371,
        "optionList": [
          "filecmp",
          "cmpfile",
          "compare",
          "filecompare"
        ],
        "question": "What is the name of Python's built-in module for comparing files?",
        "answer": 0
      },
      {
        "Id": 372,
        "optionList": [
          "ftp",
          "ftplib",
          "FTP",
          "pftp"
        ],
        "question": "What is the name of Python's built-in module for FTP protocol client?",
        "answer": 1
      },
      {
        "Id": 373,
        "optionList": [
          "upattern",
          "pathpat",
          "upath",
          "glob"
        ],
        "question": "What is the name of Python's built-in module for unix style pathname pattern expansion?",
        "answer": 3
      },
      {
        "Id": 374,
        "optionList": [
          "hyper",
          "xml",
          "html",
          "uml"
        ],
        "question": "What is the name of Python's built-in module for html manipulation?",
        "answer": 2
      },
      {
        "Id": 375,
        "optionList": [
          "[0, 1, 2, 3, 4, 5]",
          "[0]",
          "[]",
          "[1, 2, 3, 4, 5]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2, 1]\nx.clear()\nprint(x)",
        "answer": 2
      },
      {
        "Id": 376,
        "optionList": [
          "[0, 1, 2, 3, 4, 5]",
          "[5, 4, 3, 2, 1]",
          "[]",
          "[1, 2, 3, 4, 5]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2, 1] \ny = x.copy() \nprint(y)",
        "answer": 1
      },
      {
        "Id": 377,
        "optionList": [
          "[0, 1, 2, 3, 4, 5]",
          "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]",
          "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]",
          "[1, 4, 9, 16, 25, 36, 49, 64, 81]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [] \nfor i in range(10):\n    x.append(i**2) \n    \nprint(x)",
        "answer": 1
      },
      {
        "Id": 378,
        "optionList": [
          "[0, 1, 2, 3, 4, 5]",
          "[1, 4, 9, 16, 25]",
          "[0, 1, 4, 9, 16, 25]",
          "[0, 1, 4, 9, 16]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = list(map(lambda x:x**2, range(5))) \nprint(x)",
        "answer": 3
      },
      {
        "Id": 379,
        "optionList": [
          "[0, 1, 2, 3, 4, 5]",
          "[1, 4, 9]",
          "[0, 1, 4, 9]",
          "[0, 1, 4, 9, 16]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [i**2 for i in range(4)] \nprint(x)",
        "answer": 2
      },
      {
        "Id": 380,
        "optionList": [
          "[0, 1, 2, 3, 4, 5]",
          "[(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]",
          "[(0, 1, 2), (3, 4, 5)]",
          "[(0, 3), (0, 4), (0, 5), (1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [(x, y) for x in [0, 1, 2] for y in [3, 4, 5] if x!=y] \nprint(a)",
        "answer": 3
      },
      {
        "Id": 381,
        "optionList": [
          "[(0, 5), (0, 4), (3, 5), (3, 4), (3, 0), (5, 4), (5, 0)]",
          "[(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]",
          "[(0, 3, 5), (0, 4, 5)]",
          "[(0, 5), (0, 4), (0, 0), (3, 5), (3, 4), (3, 0), (5, 5), (5, 4), (5, 0)]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [(x, y) for x in [0, 3, 5] for y in [5, 4, 0] if x!=y] \nprint(a)",
        "answer": 0
      },
      {
        "Id": 382,
        "optionList": [
          "[(0, 2)]",
          "[(0, 0), (2, 2)]",
          "[(0, 2), (2, 4, 0)]",
          "[(0, 2), (0, 4), (0, 0), (2, 2), (2, 4), (2, 0)]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [(x, y) for x in [0, 2] for y in [2, 4, 0] if x==y] \nprint(a)",
        "answer": 0
      },
      {
        "Id": 383,
        "optionList": [
          "[(0, 2)]",
          "[(0, 0), (2, 2)]",
          "[(0, 2), (0, 4), (2, 4), (2, 0)]",
          "[(0, 2), (0, 4), (0, 0), (2, 2), (2, 4), (2, 0)]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [(x, y) for x in [0, 2] for y in [2, 4, 0] if x!=y] \nprint(a)",
        "answer": 2
      },
      {
        "Id": 384,
        "optionList": [
          "[0, 1, 2, 3, 4, 5]",
          "[(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]",
          "[(0, 1, 2), (3, 4, 5)]",
          "[(0, 3), (0, 4), (0, 5), (1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [] \nfor x in [0, 1, 2]:     \n    for y in [3, 4, 5]:         \n        if x!=y:\n            a.append((x,y)) \n\nprint(a)",
        "answer": 3
      },
      {
        "Id": 385,
        "optionList": [
          "[(0, 2)]",
          "[-2, -1, 0, 1, 2]",
          "[8, 1, 0, 1, 8]",
          "[-8, -1, 0, 1, 8]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [-2, -1, 0, 1, 2] \nprint([i**3 for i in a])",
        "answer": 3
      },
      {
        "Id": 386,
        "optionList": [
          "[81, 1, 0, 1, 81]",
          "[-81, -1, 0, 1, 81]",
          "[16, 1, 0, 1, 16]",
          "[-16, -1, 0, 1, 16]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [-3, -1, 0, 1, 3] \nprint([i**4 for i in a])",
        "answer": 0
      },
      {
        "Id": 387,
        "optionList": [
          "[-3, -1, 0, 1, 3]",
          "[0, 1, 3]",
          "[1, 3]",
          "[-1, 0, 1]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [-3, -1, 0, 1, 3] \nprint([x for x in a if x>=0])",
        "answer": 1
      },
      {
        "Id": 388,
        "optionList": [
          "[-3, -1, 0, 1, 3]",
          "[0, 1, 3]",
          "[3, 1, 0, 1, 3]",
          "[-1, 0, 1]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [-3, -1, 0, 1, 3] \nprint([abs(x) for x in a])",
        "answer": 2
      },
      {
        "Id": 389,
        "optionList": [
          "['today', 'tomorrow ', 'not now']",
          "[' today', ' tomorrow', 'not now']",
          "['today', 'tomorrow', 'notnow']",
          "['today', 'tomorrow', 'not now']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [' today', ' tomorrow ', 'not now'] \nprint([x.strip() for x in a])",
        "answer": 3
      },
      {
        "Id": 390,
        "optionList": [
          "[(0, 0), (1, 2), (2, 4), (3, 6)]",
          "[(0, 0), (1, 2), (2, 4), (3, 6), (4, 8)]",
          "[(1, 2), (2, 4), (3, 6), (4, 8)]",
          "[(1, 2), (2, 4), (3, 6)]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "print([(x, x*2) for x in range(4)])",
        "answer": 0
      },
      {
        "Id": 391,
        "optionList": [
          "[0, 1, 2, 4, 5, 6, 7, 8, 9]",
          "[0, 1, 2, 7, 8, 9, 4, 5, 6]",
          "[(0, 1, 2), (7, 8, 9), (4, 5, 6)]",
          "[(0, 7, 4), (1, 8, 5), (2, 9, 6)]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [[0, 1, 2], [7, 8, 9], [4, 5, 6]] \nprint([x for y in a for x in y])",
        "answer": 1
      },
      {
        "Id": 392,
        "optionList": [
          "[3.0, 3.1, 3.14, 3.142, 3.1416]",
          "['3.0', '3.1', '3.14', '3.142']",
          "['3.0', '3.1', '3.14', '3.142', '3.1416']",
          "['3.1', '3.14', '3.142', '3.1416']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "from math import pi \na = [str(round(pi, i)) for i in range(0,5)] \nprint(a)",
        "answer": 2
      },
      {
        "Id": 393,
        "optionList": [
          "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]",
          "[[0, 4, 8], [1, 5, 9], [2, 6, 10], [3, 7, 11]]",
          "[[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]",
          "[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]] \nb = [[x[i] for x in a] for i in range(4)] \nprint(b)",
        "answer": 1
      },
      {
        "Id": 394,
        "optionList": [
          "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]",
          "[[0, 4, 8], [1, 5, 9], [2, 6, 10], [3, 7, 11]]",
          "[[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]",
          "[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [] \nb = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]] \nfor i in range(4):\n    a.append([row[i] for row in b]) \n    \nprint(a)",
        "answer": 1
      },
      {
        "Id": 395,
        "optionList": [
          "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]",
          "[[0, 4, 8], [1, 5, 9], [2, 6, 10], [3, 7, 11]]",
          "[[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]",
          "[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]] \nprint(list(zip(*a)))",
        "answer": 1
      },
      {
        "Id": 396,
        "optionList": [
          "None",
          "Null",
          "[0, 1, 2, 3]",
          "NameError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [0, 1, 2, 3] \ndel a \nprint(a)",
        "answer": 3
      },
      {
        "Id": 397,
        "optionList": [
          "None",
          "[]",
          "[0, 1, 2, 3]",
          "NameError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [0, 1, 2, 3] \ndel a[:] \nprint(a)",
        "answer": 1
      },
      {
        "Id": 398,
        "optionList": [
          "[0, 1, 2, 3, 4, 5]",
          "[0, 1, 2, 3, 4]",
          "[-4, -2, 0, 2, 4]",
          "[0, 1, 4, 9, 16]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [i*2-4 for i in range(5)] \nprint(x)",
        "answer": 2
      },
      {
        "Id": 399,
        "optionList": [
          "[-3, 6, 33]",
          "[0, 1, 2, 3, 4]",
          "[-3, -2, 0, 2, 3]",
          "[-3, 9, 18, 36]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [i**2-3 for i in range(0,7,3)] \nprint(x)",
        "answer": 0
      },
      {
        "Id": 400,
        "optionList": [
          "[0, 2, 36]",
          "[0, 1, 2, 3, 4]",
          "[0, 6, 2]",
          "[0, 2, 14]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [i**4//7 for i in range(0,6,2)] \nprint(x)",
        "answer": 0
      },
      {
        "Id": 401,
        "optionList": [
          "[0, 2, 36]",
          "[0, 2, 21]",
          "[0, 6, 2]",
          "[0, 2, 14]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [int(i**3/3) for i in range(0,5,2)] \nprint(x)",
        "answer": 1
      },
      {
        "Id": 402,
        "optionList": [
          "[-3, -2, -1]",
          "[0, 2, 6]",
          "[0, 1, 2]",
          "[-3, -1, 3]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [int(i/2-5) for i in range(3,8,2)] \nprint(x)",
        "answer": 0
      },
      {
        "Id": 403,
        "optionList": [
          "print(\"Hello World!\")",
          "print \"Hello World!\"",
          "print(\"Hello World!\")!",
          "print(\"Hello World!\"):"
        ],
        "question": "What is the famous one-line Hello World program of Python?",
        "answer": 0
      },
      {
        "Id": 404,
        "optionList": [
          "Three braces {{{ }}}",
          "Three Colons ::: :::",
          "Three hashes ### ###",
          "Three Quotes ''' '''"
        ],
        "question": "What is used for multi-line strings in Python?",
        "answer": 3
      },
      {
        "Id": 405,
        "optionList": [
          "y ran for x minutes",
          "y ran for 90 minutes",
          "I ran for 90 minutes",
          "I ran for x minutes"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 90 \ny = 'I ran for %s minutes' \nprint(y % x)",
        "answer": 2
      },
      {
        "Id": 406,
        "optionList": [
          "ran for 60 minutes",
          "she ran for 60 minutes",
          "She ran for 60 minutes",
          "x ran for 60 minutes"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'She' \ny = 60 \nz = 'ran for %s minutes' \nprint(x, z % y)",
        "answer": 2
      },
      {
        "Id": 407,
        "optionList": [
          "ran for 75 minutes",
          "ran for 60 minutes",
          "ran for 135 minutes",
          "y ran for 60 minutes"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 75 \ny = 60 \nz = 'ran for %s minutes' \nprint(z % y)",
        "answer": 1
      },
      {
        "Id": 408,
        "optionList": [
          "He ran for 7 minutes for 7 days",
          "He ran for 6 minutes for 6 days",
          "He ran for 6 minutes for 7 days",
          "He ran for 7 minutes for 6 days"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 7 \ny = 6 \nz = 'He ran for %s minutes for %s days' \nprint(z % (x, y))",
        "answer": 3
      },
      {
        "Id": 409,
        "optionList": [
          "We can not convert Python 2 program to Python 3 program",
          "We can not convert Python 3 program to Python 2 program",
          "We can convert Python 2 program to Python 3 program",
          "We can convert Python 3 program to Python 2 program"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python 2' \ny = 'Python 3' \nz = 'We can convert %s program to %s program' \nprint(z % (x, y))",
        "answer": 2
      },
      {
        "Id": 410,
        "optionList": [
          "Displays a tab",
          "Displays 5 spaces",
          "Displays a newline",
          "Displays 10 quotes"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ' ' \nprint(x*5)",
        "answer": 1
      },
      {
        "Id": 411,
        "optionList": [
          "'yes', 'may be', 'no'",
          "'no', 'may be', 'yes'",
          "['no', 'may be', 'yes']",
          "['yes', 'may be', 'no']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'no' \ny = 'yes' \nz = 'may be' \na = [y, z, x] \nprint(a)",
        "answer": 3
      },
      {
        "Id": 412,
        "optionList": [
          "Addition",
          "Multiplication",
          "Division",
          "Deletion"
        ],
        "question": "Which of the following operations is not possible while manipulating lists?",
        "answer": 2
      },
      {
        "Id": 413,
        "optionList": [
          "Braces",
          "Indentation",
          "Commas",
          "Expressions"
        ],
        "question": "Which of the following is used by interpreter to identify code blocks?",
        "answer": 1
      },
      {
        "Id": 414,
        "optionList": [
          "Yesterday's Today's Tomorrow's weather temperature humidity",
          "Yesterday's weather temperature humidity",
          "Yesterday's weather temperature humidity Today's Tomorrow's",
          "Yesterday's weather Today's temperature Tomorrow's humidity"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [\"Yesterday's\", \"Today's\", \"Tomorrow's\"] \ny = ['weather', 'temperature', 'humidity'] \nfor i in x:\n    print(i, end=' ') \n    for j in y:         \n        print(j, end=' ')",
        "answer": 0
      },
      {
        "Id": 415,
        "optionList": [
          "Yesterday's Today's Tomorrow's temperature",
          "Yesterday's temperature",
          "Yesterday's temperature Today's Tomorrow's",
          "Yesterday's temperature Today's temperature Tomorrow's temperature"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [\"Yesterday's\", \"Today's\", \"Tomorrow's\"] \ny = ['temperature'] \nfor i in x:\n    print(i, end=' ')     \n    for j in y:         \n        print(j, end=' ')",
        "answer": 2
      },
      {
        "Id": 416,
        "optionList": [
          "Today's Tomorrow's temperature",
          "Today's temperature Tomorrow's temperature",
          "temperature Today's Tomorrow's",
          "Today's temperature Tomorrow's"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [\"Yesterday's\", \"Today's\", \"Tomorrow's\"] y = ['temperature'] \nfor i in x:         \n    if i[0] == 'T':             \n        for j in y:                 \n            print(i, j, end=' ')",
        "answer": 1
      },
      {
        "Id": 417,
        "optionList": [
          "Today's Tomorrow's temperature",
          "Yesterday's temperature Tomorrow's temperature",
          "Yesterday's",
          "Yesterday's Today's Tomorrow's"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [\"Yesterday's\", \"Today's\", \"Tomorrow's\"] \ny = ['temperature'] \nfor i in x:\n    if i[0] != 'T':             \n        for j in y:                 \n            print(i, end=' ')",
        "answer": 2
      },
      {
        "Id": 418,
        "optionList": [
          "temperature temperature",
          "temperature",
          "temperature temperature temperature",
          "Yesterday's Today's Tomorrow's"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [\"Yesterday's\", \"Today's\", \"Tomorrow's\"] \ny = ['temperature'] \nfor i in x:         \n    if i[0] != 'y':             \n        for j in y:                 \n            print(j, end=' ')",
        "answer": 2
      },
      {
        "Id": 419,
        "optionList": [
          "26 11",
          "25 11",
          "25 10",
          "26 10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 25 \ny = 10 \nwhile x < 26 and y < 11:\n    x = x + 1     \n    y = y + 1     \n    \nprint(x,y)",
        "answer": 0
      },
      {
        "Id": 420,
        "optionList": [
          "26 11",
          "25 11",
          "25 10",
          "26 10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 25\ny = 10 \nwhile x < 26 and y < 11:\n    print(x,y)     \n    x = x + 1     \n    y = y + 1",
        "answer": 2
      },
      {
        "Id": 421,
        "optionList": [
          "list(range(0,5))",
          "list(0, 1, 2, 3, 4)",
          "0, 1, 2, 3, 4",
          "[0, 1, 2, 3, 4]"
        ],
        "question": "What will be the output after the following statement?",
        "codeBlock": "print(list(range(0,5)))",
        "answer": 3
      },
      {
        "Id": 422,
        "optionList": [
          "hello world",
          "hello Python",
          "hello",
          "hello % world"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc(world):     \n    print('hello %s' % world) \n    \nabc('Python')",
        "answer": 1
      },
      {
        "Id": 423,
        "optionList": [
          "hello world",
          "hello Python world",
          "hello Python",
          "hello world Python"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc(x, y):\n    print('hello %s %s' % (y, x)) \n    \nabc('Python', 'world')",
        "answer": 3
      },
      {
        "Id": 424,
        "optionList": [
          "hello world",
          "hello Python world",
          "hello Python",
          "hello world Python"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "b = 'Python' \na = 'world' \ndef pypi(x, y):\n    print('hello %s %s' % (y, x)) \n    \npypi(a, b)",
        "answer": 1
      },
      {
        "Id": 425,
        "optionList": [
          "15",
          "45",
          "75",
          "120"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = 12 \nb = 45\nc = 10 \ndef pypi(x, y, z):     \n    return(z * y - x) \n\nprint(pypi(b, c, a))",
        "answer": 2
      },
      {
        "Id": 426,
        "optionList": [
          "280",
          "Error",
          "60",
          "215"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def pypi():     \n    b = 25     \n    c = 20     \n    return(a * b - c) \n\na = 12 \nprint(pypi())",
        "answer": 0
      },
      {
        "Id": 427,
        "optionList": [
          "Furniture has 4 legs",
          "Error",
          "has 4 legs",
          "legs has 4 legs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "class Furniture:     \n    def legs(x):         \n        print('has %s legs' % x)\n        \nFurniture.legs(4)",
        "answer": 2
      },
      {
        "Id": 428,
        "optionList": [
          "Furniture is made of wood",
          "is made of wood",
          "print(is made of wood)",
          "legs is made of wood"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "class Furniture:     \n    def legs():         \n        print('is made of wood')\n        \nFurniture.legs()",
        "answer": 1
      },
      {
        "Id": 429,
        "optionList": [
          "It has 4 legs",
          "It has no legs",
          "It has 0 legs",
          "It has 6 legs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "class Furniture:     \n    def chair(x):\n        print('It has %s legs' % x)     \n        \n    def table(x):         \n        print('It has %s legs' % x) \n        \nFurniture.table(6)",
        "answer": 3
      },
      {
        "Id": 430,
        "optionList": [
          "It has 4 legs",
          "It has no legs",
          "It has 0 legs",
          "It has 6 legs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "class Furniture:     \n    def chair():\n        print('It has 4 legs')     \n        \n    def table():         \n        print('It has 6 legs') \n        \nFurniture.chair()",
        "answer": 0
      },
      {
        "Id": 431,
        "optionList": [
          "None",
          "Error",
          "Wrong Value",
          "This is absolute value"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = -4 \nif abs(x) > 0:     \n    print('This is absolute value')",
        "answer": 3
      },
      {
        "Id": 432,
        "optionList": [
          "No output",
          "Error",
          "0",
          "-3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = -3 \nif abs(x) < 3:     \n    print(x) \nelse:     \n    print(0)",
        "answer": 2
      },
      {
        "Id": 433,
        "optionList": [
          "No output",
          "Error",
          "0",
          "-4"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = -4 \nif bool(x):     \n    print(x) \nelse:     \n    print(0)",
        "answer": 3
      },
      {
        "Id": 434,
        "optionList": [
          "No output",
          "Error",
          "5",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 0 \nif bool(x):     \n    print(x) \nelse:     \n    print(5)",
        "answer": 2
      },
      {
        "Id": 435,
        "optionList": [
          "None",
          "Yes",
          "No",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'None' \nif bool(x):     \n    print('Yes') \nelse:     \n    print('No')",
        "answer": 1
      },
      {
        "Id": 436,
        "optionList": [
          "None",
          "Yes",
          "No",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '' \nif bool(x):     \n    print('Yes') \nelse:\n    print('No')",
        "answer": 2
      },
      {
        "Id": 437,
        "optionList": [
          "None",
          "Yes",
          "No",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ' ' \nif bool(x):     \n    print('Yes') \nelse:     \n    print('No')",
        "answer": 1
      },
      {
        "Id": 438,
        "optionList": [
          "No",
          "Yes",
          "None",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [] \nif bool(x):     \n    print('Yes') \nelse:     \n    print('No')",
        "answer": 0
      },
      {
        "Id": 439,
        "optionList": [
          "No",
          "Yes",
          "None",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [1, 2, 3] \nif bool(x):     \n    print('Yes') \nelse:    \n    print('No')",
        "answer": 1
      },
      {
        "Id": 440,
        "optionList": [
          "Yes",
          "No",
          "None",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '' \nif not bool(x):     \n    print('Yes') \nelse:     \n    print('No')",
        "answer": 0
      },
      {
        "Id": 441,
        "optionList": [
          "x",
          "print(\"Python\")",
          "Python",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'print(\"Python\")' \neval(x)",
        "answer": 2
      },
      {
        "Id": 442,
        "optionList": [
          "45*2",
          "eval(\"90\")",
          "90",
          "0"
        ],
        "question": "What will be the output after the following statements if input entered is 45*2?",
        "codeBlock": "x = input(\"Enter an expression: \") \nprint(eval(x))",
        "answer": 2
      },
      {
        "Id": 443,
        "optionList": [
          "Python 3is Good",
          "Python 3 is Good",
          "Python 3",
          "is Good"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '''print(\"Python 3\", end='') print(\" is Good\")''' \nexec(x)",
        "answer": 1
      },
      {
        "Id": 444,
        "optionList": [
          "a",
          "A",
          "b",
          "c"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = ['a', 'b', 'c', 'A', 'B'] \nprint(max(a))",
        "answer": 3
      },
      {
        "Id": 445,
        "optionList": [
          "a",
          "A",
          "b",
          "c"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = ['a', 'b', 'c', 'A', 'B'] \nprint(min(a))",
        "answer": 1
      },
      {
        "Id": 446,
        "optionList": [
          "a",
          "A",
          "1",
          "c"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = ['a', 'b', 'c', '1', '2', 'A', 'B'] \nprint(max(a))",
        "answer": 3
      },
      {
        "Id": 447,
        "optionList": [
          "a",
          "A",
          "1",
          "c"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = ['a', 'b', 'c', '1', '2', 'A', 'B'] \nprint(min(a))",
        "answer": 2
      },
      {
        "Id": 448,
        "optionList": [
          "3",
          "2",
          "1",
          "6"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = [1, 2, 3] \nprint(sum(a))",
        "answer": 3
      },
      {
        "Id": 449,
        "optionList": [
          "10",
          "100",
          "18",
          "30"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = list(range(0,10,3)) \nprint(sum(a))",
        "answer": 2
      },
      {
        "Id": 450,
        "optionList": [
          "10",
          "0",
          "18",
          "90"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = list(range(10,-10,3)) \nprint(sum(a))",
        "answer": 1
      },
      {
        "Id": 451,
        "optionList": [
          "-24",
          "0",
          "24",
          "20"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "a = list(range(-10,5,2))\nprint(sum(a))",
        "answer": 0
      },
      {
        "Id": 452,
        "optionList": [
          "[6, 4, 3, 2, 1]",
          "6",
          "[5, 4, 3, 2, 1]",
          "5"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [5, 4, 3, 2, 1] \ny = x.copy() \nx[0] = 6 \nprint(y)",
        "answer": 2
      },
      {
        "Id": 453,
        "optionList": [
          "[6, 4, 3, 2, 1]",
          "6",
          "[5, 4, 3, 2, 1]",
          "5"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import copy \nx = [5, 4, 3, 2, 1] \ny = copy.copy(x)\nx.append(6) \nprint(y[0])",
        "answer": 3
      },
      {
        "Id": 454,
        "optionList": [
          "True",
          "keyword",
          "for",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import keyword \nprint(keyword.iskeyword('IS'))",
        "answer": 3
      },
      {
        "Id": 455,
        "optionList": [
          "True",
          "keyword",
          "for",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import keyword \nprint(keyword.iskeyword('for'))",
        "answer": 0
      },
      {
        "Id": 456,
        "optionList": [
          "True",
          "keyword",
          "for",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import keyword\nprint(keyword.iskeyword('Python'))",
        "answer": 3
      },
      {
        "Id": 457,
        "optionList": [
          "A random element from the list x",
          "The list x",
          "A random element from the list x, excluding 3 and 0",
          "A random element from the list elements 3 and 0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import random \nx = [3, 8, 6, 5, 0] \nprint(random.choice(x))",
        "answer": 0
      },
      {
        "Id": 458,
        "optionList": [
          "A random element from the list x",
          "The shuffled list x with the elements mixed up",
          "A random element from the list x, excluding 3 and 0",
          "A random element from the list elements 3 and 0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import random \nx = [3, 8, 6, 5, 0] \nrandom.shuffle(x) \nprint(x)",
        "answer": 1
      },
      {
        "Id": 459,
        "optionList": [
          "A random element from the list x",
          "The shuffled list x with the elements mixed up",
          "None",
          "A random element from the list x, excluding 3 and 0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import random \nx = [3, 8, 6, 5, 0] \ny = random.shuffle(x) \nprint(y)",
        "answer": 2
      },
      {
        "Id": 460,
        "optionList": [
          "A random character from the string 'Python Jobs'",
          "Python Jobs",
          "None",
          "PJ"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import sys\nx = sys.stdout.write('Python Jobs')",
        "answer": 1
      },
      {
        "Id": 461,
        "optionList": [
          "Current time in seconds since the Epoch at 00:00:00 GMT on January 1, 1970",
          "Today's time in hours",
          "None",
          "Today's time in minutes"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import time \nprint(time.time())",
        "answer": 0
      },
      {
        "Id": 462,
        "optionList": [
          "String",
          "Integer",
          "List",
          "Float"
        ],
        "question": "What will be the data type of the output after the following statements?",
        "codeBlock": "import time \nprint(time.time())",
        "answer": 3
      },
      {
        "Id": 463,
        "optionList": [
          "String",
          "Integer",
          "List",
          "Float"
        ],
        "question": "What will be the data type of the output after the following statements?",
        "codeBlock": "import time \nprint(time.asctime())",
        "answer": 0
      },
      {
        "Id": 464,
        "optionList": [
          "Current time in seconds since the Epoch at 00:00:00 GMT on January 1, 1970",
          "Current date and time",
          "None",
          "Today's time in minutes"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import time \nprint(time.asctime())",
        "answer": 1
      },
      {
        "Id": 465,
        "optionList": [
          "Current time in seconds since the Epoch at 00:00:00 GMT on January 1, 1970",
          "Current date and time",
          "Sat Feb 10 12:45:32 2016",
          "No output"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import time \ny = (2016, 2, 10, 12, 45, 32, 5, 0, 0) \nprint(time.asctime(y))",
        "answer": 2
      },
      {
        "Id": 466,
        "optionList": [
          "2016",
          "3:40",
          "Mon",
          "04"
        ],
        "question": "What is likely to be the output after the following statements?",
        "codeBlock": "import time \ny = time.asctime() \nprint(y[:3])",
        "answer": 2
      },
      {
        "Id": 467,
        "optionList": [
          "10",
          "A random integer number within the range of 0 to 9",
          "None",
          "A random floating point number within the range of 0 to 9"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import random \nprint(int(random.random()*10))",
        "answer": 1
      },
      {
        "Id": 468,
        "optionList": [
          "11",
          "A random integer number within the range of 0 to 11",
          "None",
          "A random whole number within the range of 1 to 10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import random\nprint(int(random.random()*10) + 1)",
        "answer": 3
      },
      {
        "Id": 469,
        "optionList": [
          "A list of 5 unique numbers within the range of 0 to 19",
          "A list of 5 unique numbers within the range of 0 to 20",
          "A list of 4 unique numbers within the range of 0 to 19",
          "A tuple of 5 unique numbers within the range of 0 to 19"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import random\nprint(random.sample(range(20), 5))",
        "answer": 0
      },
      {
        "Id": 470,
        "optionList": [
          "A list of 5 unique numbers within the range of 4 to 19",
          "A list of 5 unique numbers within the range of 5 to 20",
          "A list of 4 unique numbers within the range of 5 to 19",
          "A tuple of 4 unique numbers within the range of 5 to 19"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import random\nprint(random.sample(range(5, 20), 4))",
        "answer": 2
      },
      {
        "Id": 471,
        "optionList": [
          "SyntaxError",
          "TypeError",
          "ValueError",
          "NameError"
        ],
        "question": "What will be the output after the following statement?",
        "codeBlock": "print(a)",
        "answer": 3
      },
      {
        "Id": 472,
        "optionList": [
          "SyntaxError",
          "TypeError",
          "ValueError",
          "NameError"
        ],
        "question": "What will be the output after the following statement?",
        "codeBlock": "a = \"Python Practice'",
        "answer": 0
      },
      {
        "Id": 473,
        "optionList": [
          "No Error",
          "TypeError",
          "ValueError",
          "NameError"
        ],
        "question": "What will be the output after the following statement?",
        "codeBlock": "a = true",
        "answer": 3
      },
      {
        "Id": 474,
        "optionList": [
          "undefined",
          "Null",
          "Nan",
          "None"
        ],
        "question": "What is the value of the NoneType data type?",
        "answer": 3
      },
      {
        "Id": 475,
        "optionList": [
          "NameError",
          "56",
          "a = 56",
          "xyz"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def xyz():     \n    a = 56 \n    \nxyz()\nprint(a)",
        "answer": 0
      },
      {
        "Id": 476,
        "optionList": [
          "NameError",
          "40",
          "10",
          "32"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def xyz():     \n    x = 40     \n    abc()     \n    \nprint(x) \n    \ndef abc():     \n    a = 32     \n    x = 10 \n    \nxyz()",
        "answer": 1
      },
      {
        "Id": 477,
        "optionList": [
          "NameError",
          "40",
          "10",
          "32"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def xyz():     \n    x = 40\n    \ndef abc():     \n    xyz()     \n    a = 32     \n    x = 10     \n    print(x) \n    \nabc()",
        "answer": 2
      },
      {
        "Id": 478,
        "optionList": [
          "NameError",
          "x",
          "10",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc():     \n    print(x) \n    x = 10 \n    \nabc()",
        "answer": 2
      },
      {
        "Id": 479,
        "optionList": [
          "NameError",
          "12",
          "10",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc():     \n    x = 12\n    \nprint(x) \nx = 10 \nabc()",
        "answer": 1
      },
      {
        "Id": 480,
        "optionList": [
          "NameError",
          "12",
          "10",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc():     \n    x = 10     \n    \nprint(x) \nabc() \nx = 12",
        "answer": 2
      },
      {
        "Id": 481,
        "optionList": [
          "NameError",
          "23",
          "10",
          "0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc():     \n    global x     \n    x = 23\n    \nx = 10 \nabc() \nprint(x)",
        "answer": 1
      },
      {
        "Id": 482,
        "optionList": [
          "NameError",
          "20",
          "10",
          "UnboundLocalError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc():     \n    print(x)     \n    \nx = 10 \nabc() \nx = 20",
        "answer": 3
      },
      {
        "Id": 483,
        "optionList": [
          "NameError",
          "5",
          "5.0",
          "ZeroDivisionError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc(x):     \n    return 20 / x \n    \nprint(abc(4))",
        "answer": 2
      },
      {
        "Id": 484,
        "optionList": [
          "NameError",
          "Undefined",
          "5.0",
          "ZeroDivisionError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc(x):     \n    return 20 / x \n    \nprint(abc(0))",
        "answer": 3
      },
      {
        "Id": 485,
        "optionList": [
          "NameError",
          "Not a valid argument",
          "Not a valid argument None",
          "ZeroDivisionError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc(x):     \n    try:\n        print(20 / x)     \n    except:         \n        print('Not a valid argument', end=' ') \n        \nprint(abc(0))",
        "answer": 2
      },
      {
        "Id": 486,
        "optionList": [
          "Not a valid argument 0 None",
          "Not a valid argument",
          "Not a valid argument None",
          "ZeroDivisionError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc(x):     \n    try:\n        print(20 / x)\n    except:\n        print('Not a valid argument', end=' ')     \n    finally:         \n        print(0, end=' ') \n        \nprint(abc(0))",
        "answer": 0
      },
      {
        "Id": 487,
        "optionList": [
          "4",
          "3",
          "[1, 2, 3, 4]",
          "IndexError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [1, 2, 3, 4] \nprint(x[4])",
        "answer": 3
      },
      {
        "Id": 488,
        "optionList": [
          "20",
          "30",
          "[20]",
          "IndexError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [10, 20, 30, 40] \nprint(x[20])",
        "answer": 3
      },
      {
        "Id": 489,
        "optionList": [
          "2",
          "3.0",
          "TypeError",
          "IndexError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [1.0, 2.0, 3.0] \nprint(x[2.0])",
        "answer": 2
      },
      {
        "Id": 490,
        "optionList": [
          "2",
          "3.0",
          "TypeError",
          "IndexError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = [1.0, 2.0, 3.0] \nprint(x[int(2.0)])",
        "answer": 1
      },
      {
        "Id": 491,
        "optionList": [
          "Today is a niceday",
          "Today is a nice day",
          "Todayis aniceday",
          "Todayisaniceday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['Today', 'nice', 'day'] \nprint(x[0] + ' is a ' + x[1] + x[2])",
        "answer": 0
      },
      {
        "Id": 492,
        "optionList": [
          "Today was a great day",
          "Sunday was a great day",
          "TypeError",
          "IndexError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['Today', 'Sunday', 'Monday']\nprint(x[0] + ' was a great day')",
        "answer": 0
      },
      {
        "Id": 493,
        "optionList": [
          "Today was a great day",
          "Sunday was a great day",
          "Monday was a great day",
          "IndexError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['Today', 'Sunday', 'Monday'] \nprint(x[-1] + ' was a great day')",
        "answer": 2
      },
      {
        "Id": 494,
        "optionList": [
          "Today was a great day",
          "Sunday was a great day",
          "Monday was a great day",
          "IndexError"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['Today', 'Sunday', 'Monday'] \nprint(x[-3] + ' was a great day')",
        "answer": 0
      },
      {
        "Id": 495,
        "optionList": [
          "Friday was a great day",
          "Sunday was a great day",
          "Monday was a great day",
          "Yesterday was a great day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['Today', 'Sunday', 'Monday'] \nx[2] = 'Friday' \nx[1] = 'Yesterday'\nprint(x[-2] + ' was a great day')",
        "answer": 3
      },
      {
        "Id": 496,
        "optionList": [
          "['Today', 'Sunday', 'Monday', 4, 6, 8]",
          "[4, 6, 8, 'Today', 'Sunday', 'Monday']",
          "['Today', 'Sunday', 'Monday']",
          "[4, 6, 8]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['Today', 'Sunday', 'Monday'] \ny = [4, 6, 8] \nprint(y + x)",
        "answer": 1
      },
      {
        "Id": 497,
        "optionList": [
          "'Mon' in x",
          "'Monday' in x",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Monday' \nprint('Mon' in x)",
        "answer": 2
      },
      {
        "Id": 498,
        "optionList": [
          "'Day' not in x",
          "'Monday' not in x",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Monday' \nprint('Day' not in x)",
        "answer": 2
      },
      {
        "Id": 499,
        "optionList": [
          "x",
          "['hot', '100', True]",
          "'hot', '100', True",
          "hot 100 True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['hot', '100', True] \nweather = x[0] \ntemperature = x[1] \nhumid = x[2]\nprint(weather, temperature, humid)",
        "answer": 3
      },
      {
        "Id": 500,
        "optionList": [
          "ValueError",
          "['hot', '100', True]",
          "'hot', '100', True",
          "hot 100 True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['hot', '100', True] \nweather, temperature, humid = x \nprint(weather, temperature, humid)",
        "answer": 3
      },
      {
        "Id": 501,
        "optionList": [
          "ValueError",
          "hot 100",
          "hot True",
          "hot 100 True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['hot', '100', True] \nweather, humid = x \nprint(weather, humid)",
        "answer": 0
      },
      {
        "Id": 502,
        "optionList": [
          "ValueError",
          "hot 100",
          "hot True",
          "hot 100 True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['hot', '100', True]\nx.remove('100') \nweather, humid = x \nprint(weather, humid)",
        "answer": 2
      },
      {
        "Id": 503,
        "optionList": [
          "SortError",
          "['a', 'b', 'c', 'A', 'B', 'C']",
          "['a', 'A', 'b', 'B', 'c', 'C']",
          "['A', 'B', 'C', 'a', 'b', 'c']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['a', 'b', 'c', 'A', 'B', 'C']\nx.sort() \nprint(x)",
        "answer": 3
      },
      {
        "Id": 504,
        "optionList": [
          "SortError",
          "['a', 'b', 'c', 'A', 'B', 'C']",
          "['a', 'A', 'b', 'B', 'c', 'C']",
          "['A', 'B', 'C', 'a', 'b', 'c']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['a', 'b', 'c', 'A', 'B', 'C']\nx.sort(key=str.lower) \nprint(x)",
        "answer": 2
      },
      {
        "Id": 505,
        "optionList": [
          "TypeError",
          "['a', 'b', 'c', 'A', 'B', 'C']",
          "['a', 'A', 'b', 'B', 'c', 'C']",
          "['A', 'B', 'C', 'a', 'b', 'c']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['a', 'b', 'c', 'A', 'B', 'C']\nx.sort(key=str.swapcase) \nprint(x)",
        "answer": 1
      },
      {
        "Id": 506,
        "optionList": [
          "TypeError",
          "['a', 'b', 'c', 'A', 'B', 'C']",
          "['a', 'A', 'b', 'B', 'c', 'C']",
          "['A', 'B', 'C', 'a', 'b', 'c']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['a', 'b', 1, 2, 'A', 'B']\nx.sort() \nprint(x)",
        "answer": 0
      },
      {
        "Id": 507,
        "optionList": [
          "IndexError",
          "A random day from all the seven days",
          "A random day from all the days except Sunday",
          "A random day from all the days except Monday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import random\nx = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']\nprint(x[random.randint(0, len(x) - 1)])",
        "answer": 1
      },
      {
        "Id": 508,
        "optionList": [
          "SyntaxError",
          "Today is a nice day",
          "I will go for a walk today",
          "Today is a nice day I will go for a walk today"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Today is a nice day' + \\\n' I will go for a walk today' \nprint(x)",
        "answer": 3
      },
      {
        "Id": 509,
        "optionList": [
          "TypeError",
          "Today is a nice day",
          "SyntaxError",
          "Today is not a nice day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Today is a nice day' \nx[9] =  'not ' \nprint(x)",
        "answer": 0
      },
      {
        "Id": 510,
        "optionList": [
          "TypeError",
          "Today is a nice day",
          "SyntaxError",
          "Today is not a nice day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Today is a nice day' \ny =  x[:9] + 'not ' + x[9:] \nprint(y)",
        "answer": 3
      },
      {
        "Id": 511,
        "optionList": [
          "TypeError",
          "Today is a nice day",
          "SyntaxError",
          "Today is not a nice day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Today is a nice day' \ny =  x[:9] + 'not ' + x[9:] \nprint(x)",
        "answer": 1
      },
      {
        "Id": 512,
        "optionList": [
          "TypeError",
          "Today is a nice day",
          "SyntaxError",
          "Today is not a nice day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x =  'Today is not a nice day' \nx = 'Today is a nice day' \nprint(x)",
        "answer": 1
      },
      {
        "Id": 513,
        "optionList": [
          "TypeError",
          "('Today', 'nice', 'day')",
          "SyntaxError",
          "('Today', 'not', 'nice', 'day')"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x =  ('Today', 'nice', 'day') \nx[1] = 'not' \nprint(x)",
        "answer": 0
      },
      {
        "Id": 514,
        "optionList": [
          "TypeError",
          "String",
          "Tuple",
          "List"
        ],
        "question": "What will be the data type of the output after the following statements?",
        "codeBlock": "x =  ('Today') \nprint(x)",
        "answer": 1
      },
      {
        "Id": 515,
        "optionList": [
          "TypeError",
          "String",
          "Tuple",
          "List"
        ],
        "question": "What will be the data type of the output after the following statements?",
        "codeBlock": "x =  ('Today',) \nprint(x)",
        "answer": 2
      },
      {
        "Id": 516,
        "optionList": [
          "TypeError",
          "String",
          "Tuple",
          "List"
        ],
        "question": "What will be the data type of y after the following statements?",
        "codeBlock": "x =  [1, 2, 3, 4] \ny = tuple(x)",
        "answer": 2
      },
      {
        "Id": 517,
        "optionList": [
          "TypeError",
          "String",
          "Tuple",
          "List"
        ],
        "question": "What will be the data type of z after the following statements?",
        "codeBlock": "x =  [1, 2, 3, 4] \ny = tuple(x) \nz = list(y)",
        "answer": 3
      },
      {
        "Id": 518,
        "optionList": [
          "TypeError",
          "String",
          "Tuple",
          "List"
        ],
        "question": "What will be the data type of the output after the following statements?",
        "codeBlock": "x =  'Python' \ny =  list(x) \nprint(y)",
        "answer": 3
      },
      {
        "Id": 519,
        "optionList": [
          "TypeError",
          "String",
          "Tuple",
          "List"
        ],
        "question": "What will be the data type of the output after the following statements?",
        "codeBlock": "x =  'Python' \ny =  tuple(x) \nprint(y)",
        "answer": 2
      },
      {
        "Id": 520,
        "optionList": [
          "('P', 'y', 't', 'h', 'o', 'n')",
          "Python",
          "P y t h o n",
          "('Python')"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x =  ('Python') \nprint(x)",
        "answer": 1
      },
      {
        "Id": 521,
        "optionList": [
          "('Python',)",
          "Python",
          "P y t h o n",
          "('Python')"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x =  ('Python',) \nprint(x)",
        "answer": 0
      },
      {
        "Id": 522,
        "optionList": [
          "[0, 2, 4, 6]",
          "(0, 2, 4, 6)",
          "0, 2, 4, 6",
          "0 2 4 6"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x =  [0, 2, 4, 6] \nprint(tuple(x))",
        "answer": 1
      },
      {
        "Id": 523,
        "optionList": [
          "[0, 2, 4, 6]",
          "(0, 2, 4, 6)",
          "0, 2, 4, 6",
          "0 2 4 6"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x =  (0, 2, 4, 6) \nprint(list(x))",
        "answer": 0
      },
      {
        "Id": 524,
        "optionList": [
          "('P', 'y', 't', 'h', 'o', 'n')",
          "(Python)",
          "['P', 'y', 't', 'h', 'o', 'n']",
          "['Python']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x =  'Python' \nprint(list(x))",
        "answer": 2
      },
      {
        "Id": 525,
        "optionList": [
          "('P', 'y', 't', 'h', 'o', 'n')",
          "(Python)",
          "['P', 'y', 't', 'h', 'o', 'n']",
          "['Python']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x =  'Python' \nprint(tuple(x))",
        "answer": 0
      },
      {
        "Id": 526,
        "optionList": [
          "[4, 5, 7, 8, 9]",
          "[4, 5, 6, 7, 8, 9]",
          "[4, 6, 7, 8, 9]",
          "[4, 7, 8, 9]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x =  [4, 5, 7, 8, 9] \ny = x \ny[1] = 6 \nprint(y)",
        "answer": 2
      },
      {
        "Id": 527,
        "optionList": [
          "[4, 5, 7, 8, 9]",
          "[4, 5, 6, 7, 8, 9]",
          "[4, 6, 7, 8, 9]",
          "[4, 7, 8, 9]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x =  [4, 5, 7, 8, 9] \ny = x \ny[1] = 6 \nprint(x)",
        "answer": 2
      },
      {
        "Id": 528,
        "optionList": [
          "[7, 8, 9]",
          "[7, 8, 9, 44]",
          "[7, 44, 8, 9]",
          "[44, 7, 8, 9]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "def abc(z):\n    z.append(44) \n    \nx =  [7, 8, 9] \nabc(x) \nprint(x)",
        "answer": 1
      },
      {
        "Id": 529,
        "optionList": [
          "5",
          "6",
          "[5, 4, 3, 2, 1, 6]",
          "1"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import copy \nx = [5, 4, 3, 2, 1] \ny = copy.copy(x)\nx.append(6) \nprint(y[-1])",
        "answer": 3
      },
      {
        "Id": 530,
        "optionList": [
          "3",
          "6",
          "[5, 4, 6, 3, 2, 1]",
          "4"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import copy \nx = [5, 4, 3, 2, 1] \ny = copy.copy(x) \nx[2] = 6 \nprint(y[2])",
        "answer": 0
      },
      {
        "Id": 531,
        "optionList": [
          "[[5, 4, 3, 2, 1], [7, 8, 9]]",
          "[[5, 4, 6, 2, 1], [7, 8, 9]]",
          "[5, 4, 6, 3, 2, 1]",
          "[5, 4, 6, 2, 1, 7, 8, 9]"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import copy \nx = [5, 4, 3, 2, 1] \ny = [7, 8, 9] \nz = [x, y] \na = copy.copy(z) \nx[2] = 6 \nprint(a)",
        "answer": 1
      },
      {
        "Id": 533,
        "optionList": [
          "day",
          "KeyError",
          "Sunday",
          "10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint(x['year'])",
        "answer": 1
      },
      {
        "Id": 534,
        "optionList": [
          "Sunday 10",
          "KeyError",
          "Sunday",
          "10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nfor i in x.values():     \n    print(i, end=' ')",
        "answer": 0
      },
      {
        "Id": 535,
        "optionList": [
          "Sunday 10",
          "day week",
          "Sunday",
          "10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nfor i in x.keys():     \n    print(i, end=' ')",
        "answer": 1
      },
      {
        "Id": 536,
        "optionList": [
          "('day', 'Sunday') ('week', 10)",
          "day week",
          "('week', 10)",
          "('day', 'Sunday')"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nfor i in x.items():     \n    print(i, end=' ')",
        "answer": 0
      },
      {
        "Id": 537,
        "optionList": [
          "(('week', 10), ('day', 'Sunday'))",
          "('day', 'Sunday') ('week', 10)",
          "['day', 'week']",
          "(day, week)"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint(list(x.keys()))",
        "answer": 2
      },
      {
        "Id": 538,
        "optionList": [
          "(('week', 10), ('day', 'Sunday'))",
          "('day', 'Sunday') ('week', 10)",
          "['day', 'week']",
          "(day, week)"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint(tuple(x.items()))",
        "answer": 0
      },
      {
        "Id": 539,
        "optionList": [
          "Sunday 10",
          "('Sunday', 10)",
          "['Sunday', 10]",
          "10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint(tuple(x.values()))",
        "answer": 1
      },
      {
        "Id": 540,
        "optionList": [
          "('day', 'Sunday') ('week', 10)",
          "{'day':'Sunday', 'week':10}",
          "'day':'Sunday', 'week':10",
          "day Sunday week 10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nfor i, j in x.items():     \n    print(i, j, end=' ')",
        "answer": 3
      },
      {
        "Id": 541,
        "optionList": [
          "Sunday",
          "True",
          "False",
          "day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint('day' in x.values())",
        "answer": 2
      },
      {
        "Id": 542,
        "optionList": [
          "Sunday",
          "True",
          "False",
          "day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint('day' in x.keys())",
        "answer": 1
      },
      {
        "Id": 543,
        "optionList": [
          "Friday",
          "True",
          "Sunday",
          "day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint(x.get('day', 'Friday'))",
        "answer": 2
      },
      {
        "Id": 544,
        "optionList": [
          "Friday",
          "True",
          "Sunday",
          "day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint(x.get('days', 'Friday'))",
        "answer": 0
      },
      {
        "Id": 545,
        "optionList": [
          "10",
          "5",
          "Sunday",
          "day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint(x.get('weak', 5))",
        "answer": 1
      },
      {
        "Id": 546,
        "optionList": [
          "10",
          "5",
          "Sunday",
          "day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint(x.get('week', 5))",
        "answer": 0
      },
      {
        "Id": 547,
        "optionList": [
          "year",
          "2016",
          "Sunday",
          "10"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'day':'Sunday', 'week':10} \nprint(x.get('year', 2016))",
        "answer": 1
      },
      {
        "Id": 548,
        "optionList": [
          "('day', 'Tuesday')",
          "{'day': 'Tuesday', 'month': 'March'}",
          "'day': 'Tuesday', 'month': 'March', 'year': 2016",
          "{'day': 'Tuesday', 'month': 'March', 'year': 2016}"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'year': 2016, 'month': 'March'} \nif 'day' not in x:\n    x['day'] = 'Tuesday' \n    \nprint(x)",
        "answer": 3
      },
      {
        "Id": 549,
        "optionList": [
          "('day', 'Tuesday')",
          "{'day': 'Tuesday', 'month': 'March'}",
          "'day': 'Tuesday', 'month': 'March', 'year': 2016",
          "{'day': 'Tuesday', 'month': 'March', 'year': 2016}"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'year': 2016, 'month': 'March'}\nx.setdefault('day', 'Tuesday') \nprint(x)",
        "answer": 3
      },
      {
        "Id": 550,
        "optionList": [
          "('day', 'Monday')",
          "{'day': 'Monday', 'month': 'March'}",
          "{'day': 'Tuesday', 'month': 'March', 'year': 2016}",
          "{'day': 'Monday', 'month': 'March', 'year': 2016}"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = {'year': 2016, 'month': 'March'}\nx.setdefault('day', 'Tuesday')\nx.setdefault('day', 'Monday') \nprint(x)",
        "answer": 2
      },
      {
        "Id": 551,
        "optionList": [
          "Tuple",
          "Set",
          "List",
          "Dictionary"
        ],
        "question": "What will be the data type of x after the following statement?",
        "codeBlock": "x = {}",
        "answer": 3
      },
      {
        "Id": 552,
        "optionList": [
          "Today is a \\n nice day",
          "Today is a nice day",
          "Today is a nice day",
          "'Today is a \\n nice day'"
        ],
        "question": "What will be the output after the following statement?",
        "codeBlock": "print(r'Today is a \\n nice day')",
        "answer": 0
      },
      {
        "Id": 553,
        "optionList": [
          "PYTHON JOBS",
          "Python jobs",
          "Python Jobs",
          "python jobs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'python jobs'\nx.upper()\nprint(x)",
        "answer": 3
      },
      {
        "Id": 554,
        "optionList": [
          "PYTHON JOBS",
          "Python jobs",
          "Python Jobs",
          "python jobs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python Jobs'\nx.lower() \nprint(x)",
        "answer": 2
      },
      {
        "Id": 555,
        "optionList": [
          "python 3 jobs",
          "Python jobs",
          "Python Jobs",
          "python jobs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python Jobs' \nif x.lower() == 'python jobs':\n    print('Python jobs') \nelse:     \n    print('python 3 jobs')",
        "answer": 1
      },
      {
        "Id": 556,
        "optionList": [
          "python 3 jobs",
          "Python jobs",
          "Python Jobs",
          "python jobs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python Jobs' \nif x.isupper():\n    print('Python jobs') \nelse:     \n    print('python 3 jobs')",
        "answer": 0
      },
      {
        "Id": 557,
        "optionList": [
          "python Jobs",
          "PYTHON JOBS",
          "Python Jobs",
          "python jobs"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python Jobs' \ny = x.upper().lower().upper() \nprint(y)",
        "answer": 1
      },
      {
        "Id": 558,
        "optionList": [
          "python jobs",
          "PYTHON JOBS",
          "False",
          "True"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python Jobs' \ny = x.upper().lower().isupper() \nprint(y)",
        "answer": 2
      },
      {
        "Id": 559,
        "optionList": [
          "'Python', 'is', 'interesting'",
          "Python is interesting",
          "Pythonisinteresting",
          "['Python', 'is', 'interesting']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = ['Python', 'is', 'interesting'] \ny = ' '.join(x) \nprint(y)",
        "answer": 1
      },
      {
        "Id": 560,
        "optionList": [
          "'Python', 'is', 'interesting'",
          "Python is interesting",
          "Pythonisinteresting",
          "['Python', 'is', 'interesting']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python is interesting' \ny = x.split() \nprint(y)",
        "answer": 3
      },
      {
        "Id": 561,
        "optionList": [
          "['Today is a nice day.', \"Let's go for a walk.\", \"We'll also go to the park.\"]",
          "Today is a nice day.",
          "Let's go for a walk.",
          "We'll also go to the park."
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = '''Today is a nice day.\nLet's go for a walk. We'll also go to the park.''' \ny = x.split('\\n') \nprint(y)",
        "answer": 0
      },
      {
        "Id": 562,
        "optionList": [
          "Python 2",
          "Python 3",
          "Python 2 and Python 3",
          "Python 2 Python 3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python 2 and Python 3' \nprint(x.strip('and'))",
        "answer": 2
      },
      {
        "Id": 563,
        "optionList": [
          "Python 2",
          "Python 2 and Py",
          "Python 2 and Python 3",
          "Python 2 Python 3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 'Python 2 and Python 3' \nprint(x.strip('thon 3'))",
        "answer": 1
      },
      {
        "Id": 564,
        "optionList": [
          "A comment",
          "Python String",
          "Shebang line",
          "Python Variable"
        ],
        "question": "What is the first line of the following statements on Windows?",
        "codeBlock": "#! python3 x = 'Python 3'",
        "answer": 2
      },
      {
        "Id": 565,
        "optionList": [
          "The phone number is 444-4444",
          "\\d\\d\\d-\\d\\d\\d\\d",
          "444-4444",
          "r'\\d\\d\\d-\\d\\d\\d\\d'"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re x = re.compile(r'\\d\\d\\d-\\d\\d\\d\\d') \ny = x.search('The phone number is 444-4444') \nprint(y.group())",
        "answer": 2
      },
      {
        "Id": 566,
        "optionList": [
          "The phone number is 444-4444",
          "4444",
          "444-4444",
          "444"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(\\d\\d\\d)-(\\d\\d\\d\\d)') \ny = x.search('The phone number is 444-4444') \nprint(y.group(2))",
        "answer": 1
      },
      {
        "Id": 567,
        "optionList": [
          "The phone number is 444-4444",
          "4444",
          "444-4444",
          "444"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(\\d\\d\\d)-(\\d\\d\\d\\d)') \ny = x.search('The phone number is 444-4444') \nprint(y.group(1))",
        "answer": 3
      },
      {
        "Id": 568,
        "optionList": [
          "The phone number is 444-4444",
          "4444",
          "444-4444",
          "444"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(\\d\\d\\d)-(\\d\\d\\d\\d)') \ny = x.search('The phone number is 444-4444') \nprint(y.group(0))",
        "answer": 2
      },
      {
        "Id": 569,
        "optionList": [
          "('444', '4444')",
          "4444",
          "444-4444",
          "444"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(\\d\\d\\d)-(\\d\\d\\d\\d)') \ny = x.search('The phone number is 444-4444') \nprint(y.groups())",
        "answer": 0
      },
      {
        "Id": 570,
        "optionList": [
          "('444', '4444')",
          "444",
          "444-4444",
          "(444)"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(\\(\\d\\d\\d\\))-(\\d\\d\\d\\d)') \ny = x.search('The phone number is (444)-4444') \nprint(y.group(1))",
        "answer": 3
      },
      {
        "Id": 571,
        "optionList": [
          "Python 2|Python 3",
          "Python 2",
          "Python 3",
          "Python 3 MCQ"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'Python 2|Python 3') \ny = x.search('Python 3 MCQ') \nprint(y.group())",
        "answer": 2
      },
      {
        "Id": 572,
        "optionList": [
          "Python 2.7",
          "Python 2",
          "Python 3",
          "Python 2|Python 3"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'Python 2|Python 3') \ny = x.search('Python 2.7') \nprint(y.group())",
        "answer": 1
      },
      {
        "Id": 573,
        "optionList": [
          "day",
          "Today",
          "nice day",
          "Sunday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'day') \ny = x.search('Today is a nice day and a Sunday') \nprint(y.group())",
        "answer": 0
      },
      {
        "Id": 574,
        "optionList": [
          "day",
          "Today",
          "nice day",
          "Sunday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Sun)?day') \ny = x.search('Today is a nice day and a Sunday') \nprint(y.group())",
        "answer": 0
      },
      {
        "Id": 575,
        "optionList": [
          "day",
          "Today",
          "nice day",
          "Sunday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Sun|To)?day') \ny = x.search('Today is a nice day and a Sunday') \nprint(y.group())",
        "answer": 1
      },
      {
        "Id": 576,
        "optionList": [
          "nice day",
          "Today",
          "day",
          "Sunday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Sun)*day') \ny = x.search('Today is a nice day and a Sunday') \nprint(y.group())",
        "answer": 2
      },
      {
        "Id": 577,
        "optionList": [
          "day",
          "Today",
          "nice day",
          "Sunday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Sun)+day') \ny = x.search('Today is a nice day and a Sunday') \nprint(y.group())",
        "answer": 3
      },
      {
        "Id": 578,
        "optionList": [
          "PythonPythonPython",
          "PythonPython",
          "Python",
          "Python 2"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Python){2}') \ny = x.search('PythonPythonPython') \nprint(y.group())",
        "answer": 1
      },
      {
        "Id": 579,
        "optionList": [
          "PythonPythonPython",
          "PythonPython",
          "Python",
          "Python 2"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Python){2,3}') \ny = x.search('PythonPythonPython') \nprint(y.group())",
        "answer": 0
      },
      {
        "Id": 580,
        "optionList": [
          "PythonPythonPython",
          "PythonPython",
          "Python",
          "Python 2"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Python){1,3}?') \ny = x.search('PythonPythonPython') \nprint(y.group())",
        "answer": 2
      },
      {
        "Id": 581,
        "optionList": [
          "day",
          "Today",
          "['day', 'day', 'day']",
          "('day', 'day', 'day')"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'day') \ny = x.findall('Today is a nice day and a Sunday') \nprint(y)",
        "answer": 2
      },
      {
        "Id": 582,
        "optionList": [
          "('day', 'day', 'day')",
          "['', '', 'Sun']",
          "['day', 'day', 'day']",
          "Sunday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Sun)?day') \ny = x.findall('Today is a nice day and a Sunday') \nprint(y)",
        "answer": 1
      },
      {
        "Id": 583,
        "optionList": [
          "('day', 'day', 'day')",
          "['', '', 'Sun']",
          "['day', 'day', 'day']",
          "['To', '', 'Sun']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Sun|To)?day') \ny = x.findall('Today is a nice day and a Sunday') \nprint(y)",
        "answer": 3
      },
      {
        "Id": 584,
        "optionList": [
          "('day', 'day', 'day')",
          "['', '', 'Sun']",
          "['day', 'day', 'day']",
          "['To', '', 'Sun']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Sun)*day') \ny = x.findall('Today is a nice day and a Sunday') \nprint(y)",
        "answer": 1
      },
      {
        "Id": 585,
        "optionList": [
          "['', '', 'Sun']",
          "['Sun']",
          "['day', 'day', 'day']",
          "['To', '', 'Sun']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(Sun)+day') \ny = x.findall('Today is a nice day and a Sunday') \nprint(y)",
        "answer": 1
      },
      {
        "Id": 586,
        "optionList": [
          "[('(444)', '4444')]",
          "[('444)', '4444']",
          "(('(444)', '4444'))",
          "('444', '4444')"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(\\(\\d\\d\\d\\))-(\\d\\d\\d\\d)') \ny = x.findall('The phone number is (444)-4444') \nprint(y)",
        "answer": 0
      },
      {
        "Id": 587,
        "optionList": [
          "[('(444)', '4444')]",
          "'4', '4', '4', '4', '4', '4', '4'",
          "(('(444)', '4444'))",
          "['4', '4', '4', '4', '4', '4', '4']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'\\d') \ny = x.findall('The phone number is (444)-4444') \nprint(y)",
        "answer": 3
      },
      {
        "Id": 588,
        "optionList": [
          "['Python', '3']",
          "['P', 'y', 't', 'h', 'o', 'n', ' ', '3']",
          "['P', 'y', 't', 'h', 'o', 'n', ' ']",
          "['P', 'y', 't', 'h', 'o', 'n']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'\\D') \ny = x.findall('Python 3') \nprint(y)",
        "answer": 2
      },
      {
        "Id": 589,
        "optionList": [
          "['Python', '3']",
          "['P', 'y', 't', 'h', 'o', 'n', '3']",
          "['P', 'y', 't', 'h', 'o', 'n', ' ']",
          "['P', 'y', 't', 'h', 'o', 'n', '_', '3']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'\\w') \ny = x.findall('Python_3') \nprint(y)",
        "answer": 3
      },
      {
        "Id": 590,
        "optionList": [
          "['Python', '3']",
          "[]",
          "['P', 'y', 't', 'h', 'o', 'n', ' ']",
          "[' ']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'\\W') \ny = x.findall('Python_3') \nprint(y)",
        "answer": 1
      },
      {
        "Id": 591,
        "optionList": [
          "['Python', '3']",
          "[]",
          "['P', 'y', 't', 'h', 'o', 'n', ' ']",
          "[' ']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'\\s') \ny = x.findall('Python 3') \nprint(y)",
        "answer": 3
      },
      {
        "Id": 592,
        "optionList": [
          "['P', 'y', 't', 'h', 'o', 'n', '3']",
          "[]",
          "['P', 'y', 't', 'h', 'o', 'n', ' ']",
          "[' ']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'\\S') \ny = x.findall('Python 3') \nprint(y)",
        "answer": 0
      },
      {
        "Id": 593,
        "optionList": [
          "['P', 'y', 't', 'h', 'o', 'n', '3']",
          "[]",
          "['3']",
          "[' ']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'[0-9]') \ny = x.findall('Python 3') \nprint(y)",
        "answer": 2
      },
      {
        "Id": 594,
        "optionList": [
          "['P', 't', 'h', 'o', 'n']",
          "['P', 't']",
          "[]",
          "[' ']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'[ptPT]') \ny = x.findall('Python 3') \nprint(y)",
        "answer": 1
      },
      {
        "Id": 595,
        "optionList": [
          "['P', 't', '3']",
          "['P', 't']",
          "[]",
          "['t', '3']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'[p-t0-6]') \ny = x.findall('Python 3') \nprint(y)",
        "answer": 3
      },
      {
        "Id": 596,
        "optionList": [
          "['P', 't', '3']",
          "['P', 't']",
          "['P']",
          "['t', '3']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'[D-S0-2]') \ny = x.findall('Python 3') \nprint(y)",
        "answer": 2
      },
      {
        "Id": 597,
        "optionList": [
          "['P', 't']",
          "[' ', '3']",
          "['t', '3']"
        ],
        "question": "What will be the output after the following statements?",
        "answer": 0
      },
      {
        "Id": 598,
        "optionList": [
          "['Py']",
          "Py",
          "['P', 'y']",
          "['P', 'y', '3']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'^Py') \ny = x.search('Python_3') \nprint(y.group())",
        "answer": 1
      },
      {
        "Id": 599,
        "optionList": [
          "['3']",
          "Python_3",
          "True",
          "False"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'3$') \nprint(x.search('Python_3') == None)",
        "answer": 3
      },
      {
        "Id": 600,
        "optionList": [
          "['oday', 'nday']",
          "['oday', ' day', 'nday']",
          "['day', 'day', 'day']",
          "['Today', ' day', 'Sunday']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'.day') \ny = x.findall('Today is a nice day and a Sunday') \nprint(y)",
        "answer": 1
      },
      {
        "Id": 601,
        "optionList": [
          "['To']",
          "['Today is a nice day and a Sunday']",
          "['Today is a nice day and a Sun']",
          "['Today is a nice day']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(.*)day') \ny = x.findall('Today is a nice day and a Sunday') \nprint(y)",
        "answer": 2
      },
      {
        "Id": 602,
        "optionList": [
          "['To', ' is a nice ', ' and a Sun']",
          "['Today is a nice day and a Sunday']",
          "['Today is a nice day and a Sun']",
          "['Today is a nice day']"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile(r'(.*?)day') \ny = x.findall('Today is a nice day and a Sunday') \nprint(y)",
        "answer": 0
      },
      {
        "Id": 603,
        "optionList": [
          "Today is a nice day.\\n Let's go for a walk.\\n We'll also go to the park.",
          "Today is a nice day.\\n Let's go for a walk.",
          "['Today is a nice day.']",
          "Today is a nice day."
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile('.*') \ny = x.search(\"Today is a nice day.\\n Let's go for a walk.\\n We'll also go to the park.\") \nprint(y.group())",
        "answer": 3
      },
      {
        "Id": 604,
        "optionList": [
          "Today is a nice day. Let's go for a walk. We'll also go to the park.",
          "Today is a nice day.\\n Let's go for a walk.",
          "['Today is a nice day.']",
          "Today is a nice day."
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile('.*', re.DOTALL) \ny = x.search(\"Today is a nice day.\\n Let's go for a walk.\\n We'll also go to the park.\") \nprint(y.group())",
        "answer": 0
      },
      {
        "Id": 605,
        "optionList": [
          "Today is a nice day.",
          "None",
          "['Today is a nice day.']",
          "(Today is a nice day.)"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile('Day') \ny = x.search('Today is a nice day') \nprint(y)",
        "answer": 1
      },
      {
        "Id": 606,
        "optionList": [
          "Today is a nice day.",
          "None",
          "['Today is a nice day.']",
          "day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile('Day', re.I) \ny = x.search('Today is a nice day') \nprint(y.group())",
        "answer": 3
      },
      {
        "Id": 607,
        "optionList": [
          "[Today is a nice day.]",
          "['day', 'day']",
          "['day', 'day', 'day']",
          "day"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile('day', re.IGNORECASE) \ny = x.findall('Today is a nice day and a Sunday') \nprint(y)",
        "answer": 2
      },
      {
        "Id": 608,
        "optionList": [
          "Today is a nice day",
          "Today is a nice day and a Sunday",
          "['Sunday']",
          "Today is a nice day and a Wednesday"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import re \nx = re.compile('Sunday') \ny = x.sub('Wednesday', 'Today is a nice day and a Sunday') \nprint(y)",
        "answer": 3
      },
      {
        "Id": 609,
        "optionList": [
          "Name of the operating system",
          "Version of the operating system",
          "The current working directory",
          "Name of the current file"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import os \nx = os.getcwd() \nprint(x)",
        "answer": 2
      },
      {
        "Id": 610,
        "optionList": [
          "Ping http://google.com",
          "Display http://google.com in the shell",
          "Download http://google.com as a text file",
          "Launch a browser window to http://google.com"
        ],
        "question": "What do the following statements do?",
        "codeBlock": "import webbrowser\nwebbrowser.open('http://google.com')",
        "answer": 3
      },
      {
        "Id": 611,
        "optionList": [
          "A set of the program's filename and command line arguments",
          "A list of the program's filename and command line arguments",
          "A tuple of the program's filename and command line arguments",
          "A dictionary of the program's filename and command line arguments"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "import sys \nprint(sys.argv)",
        "answer": 1
      }
    ];

    return questionList;
  }
}