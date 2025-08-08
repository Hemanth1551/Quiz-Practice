import React, { useState, useEffect } from "react";

// Sample questions JSON - replace or extend with your full question bank
const fullQuestionBank = [
  {
    question: "What is the worst-case time complexity of inserting an element at the end of a dynamic array in C++?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(1)"
  },
  {
    question: "Which data structure uses LIFO (Last-In-First-Out) ordering?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack"
  },
  {
    question: "In a binary search tree, which traversal yields a sorted order?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    answer: "In-order"
  },
  {
    question: "Which SQL clause is used to filter records?",
    options: ["SELECT", "WHERE", "ORDER BY", "GROUP BY"],
    answer: "WHERE"
  },
  {
    question: "Which OOP principle allows using the same method name with different implementations?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    answer: "Polymorphism"
  },
  {
    question: "What will be printed by: print(2 ** 3) in Python?",
    options: ["6", "9", "8", "5"],
    answer: "8"
  },
  {
    question: "If A is the father of B and C is the mother of B, then C is the ____ of A.",
    options: ["Mother", "Wife", "Sister", "Aunt"],
    answer: "Wife"
  },
  {
    question: "Which sorting algorithm has the best worst-case time complexity?",
    options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
    answer: "Merge Sort"
  },
  {
    question: "Which data structure is best for implementing a priority queue?",
    options: ["Stack", "Binary Heap", "Queue", "Linked List"],
    answer: "Binary Heap"
  },
  {
    question: "In a linked list, what is the time complexity to insert at the beginning?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(1)"
  },
  // Add more questions here as needed, total 50+ preferred for choice
  {
    question: "Which traversal method in Binary Search Trees retrieves the smallest value first?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    answer: "In-order"
  },
  {
    question: "Which Python keyword is used to define a function?",
    options: ["func", "def", "function", "lambda"],
    answer: "def"
  },
  {
    question: "The average of 5, 10, 15, 20, and 25 is:",
    options: ["15", "18", "20", "17"],
    answer: "15"
  },
  {
    question: "Which data structure uses FIFO (First-In, First-Out)?",
    options: ["Stack", "Queue", "Priority Queue", "Binary Tree"],
    answer: "Queue"
  },
  {
    question: "If 5 workers can complete a job in 12 days, how many days will 3 workers take to complete the same job?",
    options: ["20 days", "15 days", "18 days", "25 days"],
    answer: "20 days"
  },
  {
    question: "Find the missing number: 1, 4, 9, 16, 25, __?",
    options: ["30", "35", "36", "42"],
    answer: "36"
  },
  {
    question: "Which logical gate's output is true only if both inputs are true?",
    options: ["OR", "AND", "XOR", "NAND"],
    answer: "AND"
  },

  // main coding qustions

  {
    "question": "What is the worst-case time complexity of inserting an element at the end of a dynamic array in C++?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(1)"
  },
  {
    "question": "Which data structure uses LIFO (Last-In-First-Out) ordering?",
    "options": ["Queue", "Stack", "Array", "Linked List"],
    "answer": "Stack"
  },
  {
    "question": "In a binary search tree, which traversal yields a sorted order?",
    "options": ["In-order", "Pre-order", "Post-order", "Level-order"],
    "answer": "In-order"
  },
  {
    "question": "Which SQL clause is used to filter records?",
    "options": ["SELECT", "WHERE", "ORDER BY", "GROUP BY"],
    "answer": "WHERE"
  },
  {
    "question": "Which OOP principle allows using the same method name with different implementations?",
    "options": ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    "answer": "Polymorphism"
  },
  {
    "question": "What will be printed by: print(2 ** 3) in Python?",
    "options": ["6", "9", "8", "5"],
    "answer": "8"
  },
  {
    "question": "The average of 5, 10, 15, 20, and 25 is:",
    "options": ["15", "18", "20", "17"],
    "answer": "15"
  },
  {
    "question": "If A is the father of B and C is the mother of B, then C is the ____ of A.",
    "options": ["Mother", "Wife", "Sister", "Aunt"],
    "answer": "Wife"
  },
  {
    "question": "Which sorting algorithm has the best worst-case time complexity?",
    "options": ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
    "answer": "Merge Sort"
  },
  {
    "question": "Which data structure is best for implementing a priority queue?",
    "options": ["Stack", "Binary Heap", "Queue", "Linked List"],
    "answer": "Binary Heap"
  },
  {
    "question": "In a linked list, what is the time complexity to insert at the beginning?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(1)"
  },
  {
    "question": "Hash table collisions can be resolved by:",
    "options": ["Chaining", "Open addressing", "Rehashing", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "What is the worst-case time complexity of quicksort?",
    "options": ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
    "answer": "O(n^2)"
  },
  {
    "question": "Which SQL keyword is used to group rows that have the same values?",
    "options": ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
    "answer": "GROUP BY"
  },
  {
    "question": "In DBMS, the term 'ACID' stands for:",
    "options": [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Consistency, Integrity, Durability",
      "Atomicity, Clarity, Isolation, Data",
      "Access, Control, Integration, Data"
    ],
    "answer": "Atomicity, Consistency, Isolation, Durability"
  },
  {
    "question": "Which join returns only the rows that have matching values in both tables?",
    "options": ["LEFT JOIN", "FULL JOIN", "INNER JOIN", "RIGHT JOIN"],
    "answer": "INNER JOIN"
  },
  {
    "question": "What indexing technique is commonly used in databases?",
    "options": ["B-tree", "Binary heap", "AVL tree", "Stack"],
    "answer": "B-tree"
  },
  {
    "question": "Which of these is NOT a type of SQL constraint?",
    "options": ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "FOR EACH"],
    "answer": "FOR EACH"
  },
  {
    "question": "Which data structure is used in depth-first search (DFS)?",
    "options": ["Queue", "Stack", "Priority Queue", "Hash Table"],
    "answer": "Stack"
  },
  {
    "question": "What is the space complexity of merge sort?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(n)"
  },
  {
    "question": "Which keyword is used in Python to define a function?",
    "options": ["func", "def", "function", "lambda"],
    "answer": "def"
  },
  {
    "question": "If 3x = 27, what is the value of x?",
    "options": ["3", "6", "9", "12"],
    "answer": "9"
  },
  {
    "question": "Which of the following is a mutable data type in Python?",
    "options": ["list", "tuple", "str", "int"],
    "answer": "list"
  },
  {
    "question": "Which traversal method in binary trees uses FIFO?",
    "options": ["DFS", "BFS", "In-order", "Post-order"],
    "answer": "BFS"
  },
  {
    "question": "Which operator in Python is used for floor division?",
    "options": ["/", "//", "%", "**"],
    "answer": "//"
  },
  {
    "question": "Which SQL statement is used to delete a table?",
    "options": ["DELETE TABLE tablename", "DROP TABLE tablename", "REMOVE TABLE tablename", "CLEAR TABLE tablename"],
    "answer": "DROP TABLE tablename"
  },
  {
    "question": "The modulus operator in Python is used to:",
    "options": ["Divide numbers", "Find remainder", "Find square root", "Find quotient"],
    "answer": "Find remainder"
  },
  {
    "question": "What is the default access specifier in a C++ class?",
    "options": ["public", "private", "protected", "internal"],
    "answer": "private"
  },
  {
    "question": "Which function is used to find the length of a string in Python?",
    "options": ["length()", "count()", "len()", "size()"],
    "answer": "len()"
  },
  {
    "question": "What data structure uses FIFO (First-In, First-Out)?",
    "options": ["Stack", "Queue", "Priority Queue", "Binary Tree"],
    "answer": "Queue"
  },
  {
    "question": "Which symbol is used for comments in SQL?",
    "options": ["--", "//", "#", "/* */"],
    "answer": "--"
  },
  {
    "question": "Which search has O(1) average time complexity?",
    "options": ["Binary search", "Hash table lookup", "Linear search", "BST search"],
    "answer": "Hash table lookup"
  },
  {
    "question": "Encapsulation in OOP means:",
    "options": [
      "Wrapping data and methods together",
      "Hiding code implementation",
      "Using many classes",
      "None of the above"
    ],
    "answer": "Wrapping data and methods together"
  },
  {
    "question": "Which SQL keyword is used to sort results?",
    "options": ["SORT BY", "ORDER", "ORDER BY", "SORT"],
    "answer": "ORDER BY"
  },
  {
    "question": "Which number is missing: 2, 4, 8, 16, ___, 64?",
    "options": ["32", "24", "20", "48"],
    "answer": "32"
  },
  {
    "question": "In Python, which keyword creates an anonymous function?",
    "options": ["func", "lambda", "anon", "inline"],
    "answer": "lambda"
  },
  {
    "question": "Which data structure uses hierarchical ordering?",
    "options": ["Array", "Tree", "Hash table", "Queue"],
    "answer": "Tree"
  },
  {
    "question": "Which logic gate's output is true only if both inputs are true?",
    "options": ["OR", "AND", "XOR", "NAND"],
    "answer": "AND"
  },
  {
    "question": "Which SQL clause is used to limit the number of returned rows?",
    "options": ["TOP", "LIMIT", "ROWNUM", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "Which of the following is NOT an OOP concept?",
    "options": ["Polymorphism", "Inheritance", "Abstraction", "Iteration"],
    "answer": "Iteration"
  },
  {
    "question": "Which of these is a divide and conquer algorithm?",
    "options": ["Merge Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
    "answer": "Merge Sort"
  },
  {
    "question": "Which method is called automatically in Python classes when creating an object?",
    "options": ["__init__", "__del__", "__call__", "__create__"],
    "answer": "__init__"
  },
  {
    "question": "What is the output of: max(4, 7, 2)?",
    "options": ["2", "4", "7", "Error"],
    "answer": "7"
  },
  {
    "question": "In a database, a Foreign Key is used to:",
    "options": ["Ensure uniqueness", "Link two tables", "Speed up queries", "Store binary data"],
    "answer": "Link two tables"
  },
  {
    "question": "Which sorting algorithm works by repeatedly swapping adjacent elements?",
    "options": ["Bubble Sort", "Quick Sort", "Merge Sort", "Heap Sort"],
    "answer": "Bubble Sort"
  },
  {
    "question": "Which Python data type is immutable?",
    "options": ["list", "dict", "set", "tuple"],
    "answer": "tuple"
  },
  {
    "question": "Which SQL function returns the number of rows?",
    "options": ["NUM()", "COUNT()", "SUM()", "ROWS()"],
    "answer": "COUNT()"
  },
  {
    "question": "Which data structure is most suitable for Undo functionality in editors?",
    "options": ["Queue", "Stack", "Hash table", "Linked list"],
    "answer": "Stack"
  },
  {
    "question": "Which operator is used for exponentiation in Python?",
    "options": ["^", "**", "exp", "pow"],
    "answer": "**"
  },
  {
    "question": "Which traversal method in Binary Search Trees retrieves the smallest value first?",
    "options": ["In-order", "Pre-order", "Post-order", "Level-order"],
    "answer": "In-order"
  },
  {
    "question": "In Python, what will be the data type of the result of 5 / 2?",
    "options": ["int", "float", "double", "long"],
    "answer": "float"
  },
  {
    "question": "Which SQL statement is used to update data in a database?",
    "options": ["UPDATE", "MODIFY", "CHANGE", "SET"],
    "answer": "UPDATE"
  },
  {
    "question": "Which searching algorithm works efficiently only for a sorted list?",
    "options": ["Linear Search", "Binary Search", "Jump Search", "Both Binary and Jump Search"],
    "answer": "Both Binary and Jump Search"
  },
  {
    "question": "What will be the output of: len([1, [2, 3], 4])?",
    "options": ["3", "4", "5", "Error"],
    "answer": "3"
  },
  {
    "question": "In databases, a UNIQUE constraint ensures:",
    "options": ["No NULL values", "No duplicate values", "No duplicate and no NULL", "Only positive numbers"],
    "answer": "No duplicate values"
  },
  {
    "question": "Which data structure uses key-value pairs for storage?",
    "options": ["Array", "List", "Dictionary", "Queue"],
    "answer": "Dictionary"
  },
  {
    "question": "In OOP, inheritance provides:",
    "options": ["Code reuse", "Encapsulation", "Abstraction", "All of these"],
    "answer": "Code reuse"
  },
  {
    "question": "Which Python function converts a string to an integer?",
    "options": ["int()", "str()", "float()", "eval()"],
    "answer": "int()"
  },
  {
    "question": "In C++, which keyword is used to create an object dynamically?",
    "options": ["malloc", "alloc", "new", "create"],
    "answer": "new"
  },
  {
    "question": "What is the default index base in Python lists?",
    "options": ["0", "1", "-1", "Depends on data"],
    "answer": "0"
  },
  {
    "question": "In SQL, which function is used to find the largest value?",
    "options": ["MAX()", "HIGH()", "LARGE()", "TOP()"],
    "answer": "MAX()"
  },
  {
    "question": "Which operation has O(1) complexity in a stack?",
    "options": ["Push", "Pop", "Peek", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "Which of these is not a primitive data structure?",
    "options": ["Integer", "String", "Stack", "Boolean"],
    "answer": "Stack"
  },
  {
    "question": "Which protocol is used by web browsers to communicate with web servers?",
    "options": ["FTP", "SMTP", "HTTP", "SSH"],
    "answer": "HTTP"
  },
  {
    "question": "What will be the output of: bool('False') in Python?",
    "options": ["True", "False", "Error", "None"],
    "answer": "True"
  },
  {
    "question": "Which SQL command is used to remove duplicates?",
    "options": ["REMOVE DUP", "DISTINCT", "UNIQUE", "CLEAR"],
    "answer": "DISTINCT"
  },
  {
    "question": "Which sorting technique is the fastest on average for large datasets?",
    "options": ["Merge Sort", "Quick Sort", "Insertion Sort", "Bubble Sort"],
    "answer": "Quick Sort"
  },
  {
    "question": "In Python, range(5) generates numbers:",
    "options": ["0 to 5", "1 to 5", "0 to 4", "1 to 4"],
    "answer": "0 to 4"
  },
  {
    "question": "Which data structure is most suitable for breadth-first search (BFS)?",
    "options": ["Stack", "Queue", "Priority Queue", "Deque"],
    "answer": "Queue"
  },
  {
    "question": "In DBMS, redundancy of data is reduced by:",
    "options": ["Normalization", "Replication", "Indexing", "Denormalization"],
    "answer": "Normalization"
  },
  {
    "question": "In Python, what does list.append(x) do?",
    "options": ["Adds x to start", "Adds x to end", "Removes x", "Sorts list"],
    "answer": "Adds x to end"
  },
  {
    "question": "Which of the following is not a Python logical operator?",
    "options": ["and", "or", "not", "xor"],
    "answer": "xor"
  },
  {
    "question": "The PRIMARY KEY constraint in SQL ensures:",
    "options": ["Uniqueness only", "Not Null only", "Both Uniqueness and Not Null", "Neither"],
    "answer": "Both Uniqueness and Not Null"
  },
  {
    "question": "Which traversal visits the root node, then left subtree, then right subtree?",
    "options": ["Pre-order", "Post-order", "In-order", "Level-order"],
    "answer": "Pre-order"
  },
  {
    "question": "Which method in Python returns the number of elements in a list?",
    "options": ["count()", "len()", "size()", "length()"],
    "answer": "len()"
  },
  {
    "question": "In C++, how is a class method defined outside the class?",
    "options": ["Using scope resolution ::", "Using ->", "Using ::=", "Not Possible"],
    "answer": "Using scope resolution ::"
  },
  {
    "question": "In SQL, 'HAVING' is used with:",
    "options": ["GROUP BY", "ORDER BY", "WHERE", "JOIN"],
    "answer": "GROUP BY"
  },
  {
    "question": "Which is NOT a type of Join in SQL?",
    "options": ["INNER", "FULL", "OUTER", "TOP"],
    "answer": "TOP"
  },
  {
    "question": "Which function in Python creates an iterator from any iterable?",
    "options": ["iter()", "it()", "generate()", "iterator()"],
    "answer": "iter()"
  },
  {
    "question": "Which searching algorithm is best for linked lists?",
    "options": ["Linear Search", "Binary Search", "Jump Search", "Hashing"],
    "answer": "Linear Search"
  },
  {
    "question": "Which method removes and returns the last element in a Python list?",
    "options": ["delete()", "remove()", "pop()", "discard()"],
    "answer": "pop()"
  },
  {
    "question": "In SQL, which statement removes rows without removing table?",
    "options": ["DROP", "DELETE", "REMOVE", "DESTROY"],
    "answer": "DELETE"
  },
  {
    "question": "Which memory allocation is done at runtime?",
    "options": ["Static", "Dynamic", "Fixed", "Constant"],
    "answer": "Dynamic"
  },
  {
    "question": "Which algorithm uses a pivot for partitioning?",
    "options": ["Merge Sort", "Insertion Sort", "Quick Sort", "Heap Sort"],
    "answer": "Quick Sort"
  },
  {
    "question": "In Python, strings are:",
    "options": ["Mutable", "Immutable", "Changeable", "None"],
    "answer": "Immutable"
  },
  {
    "question": "Which DBMS level deals with physical storage?",
    "options": ["Physical", "Logical", "View", "Schema"],
    "answer": "Physical"
  },
  {
    "question": "Which SQL keyword specifies the sort order as descending?",
    "options": ["DESC", "DOWN", "REVERSE", "DSC"],
    "answer": "DESC"
  },
  {
    "question": "Which function in Python returns absolute value?",
    "options": ["absolute()", "abs()", "fabs()", "val()"],
    "answer": "abs()"
  },
  {
    "question": "Which clause filters groups in SQL?",
    "options": ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
    "answer": "HAVING"
  },
  {
    "question": "In stack implementation, which operation removes the top element?",
    "options": ["pop()", "push()", "peek()", "remove()"],
    "answer": "pop()"
  },
  {
    "question": "Which Python function converts a list to a set?",
    "options": ["to_set()", "set()", "list_to_set()", "convertSet()"],
    "answer": "set()"
  },
  {
    "question": "Which traversal visits nodes on the same level before going deeper?",
    "options": ["DFS", "BFS", "In-order", "Post-order"],
    "answer": "BFS"
  },
  {
    "question": "Which keyword is used in SQL to combine rows from two tables?",
    "options": ["COMBINE", "JOIN", "MERGE", "UNION"],
    "answer": "JOIN"
  },
  {
    "question": "Which operator is used to check equality in Python?",
    "options": ["=", "==", "===", "equals"],
    "answer": "=="
  },
  {
    "question": "Which clause in SQL is used to rename a column in output?",
    "options": ["AS", "RENAME", "ALIAS", "NAME"],
    "answer": "AS"
  },
  {
    "question": "In DBMS, which index is based on sorting the primary key?",
    "options": ["Clustered index", "Non-clustered index", "Bitmap index", "Hash index"],
    "answer": "Clustered index"
  },
  {
    "question": "Which of these is a self-referential data structure?",
    "options": ["Array", "Linked List", "Queue", "Heap"],
    "answer": "Linked List"
  },
  {
    "question": "Which SQL statement is used to add new records to a table?",
    "options": ["INSERT INTO", "ADD RECORD", "UPDATE", "APPEND"],
    "answer": "INSERT INTO"
  },
  {
    "question": "What is the time complexity of searching in a balanced binary search tree?",
    "options": ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    "answer": "O(log n)"
  },
  {
    "question": "In Python, what is the output of 10 // 3?",
    "options": ["3.3", "3", "4", "0.3"],
    "answer": "3"
  },
  {
    "question": "Which scheduling algorithm is used in most operating systems?",
    "options": ["First Come First Serve", "Shortest Job First", "Round Robin", "Priority Scheduling"],
    "answer": "Round Robin"
  },
  {
    "question": "In DBMS, which key uniquely identifies a record in a table?",
    "options": ["Foreign key", "Primary key", "Candidate key", "Alternate key"],
    "answer": "Primary key"
  },
  {
    "question": "Which Python collection does not allow duplicate elements?",
    "options": ["List", "Tuple", "Set", "Dictionary"],
    "answer": "Set"
  },
  {
    "question": "Which OOP concept focuses on hiding internal implementation details?",
    "options": ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
    "answer": "Abstraction"
  },
  {
    "question": "Which SQL clause is used to define a condition for aggregation?",
    "options": ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    "answer": "HAVING"
  },
  {
    "question": "Which sorting algorithm works best for small datasets?",
    "options": ["Merge Sort", "Insertion Sort", "Quick Sort", "Heap Sort"],
    "answer": "Insertion Sort"
  },
  {
    "question": "What will be the output of type( (1,) ) in Python?",
    "options": ["<class 'tuple'>", "<class 'int'>", "<class 'list'>", "<class 'set'>"],
    "answer": "<class 'tuple'>"
  },
  {
    "question": "Which data structure is used to implement recursion?",
    "options": ["Queue", "Stack", "Heap", "Tree"],
    "answer": "Stack"
  },
  {
    "question": "In SQL, which operator is used for pattern matching?",
    "options": ["MATCHES", "SEARCH", "LIKE", "REGEX"],
    "answer": "LIKE"
  },
  {
    "question": "Which function in Python returns the largest item in an iterable?",
    "options": ["largest()", "max()", "biggest()", "top()"],
    "answer": "max()"
  },
  {
    "question": "Which traversal in trees visits root, then left child, then right child?",
    "options": ["Pre-order", "In-order", "Post-order", "Level-order"],
    "answer": "Pre-order"
  },
  {
    "question": "Which database operation retrieves information?",
    "options": ["INSERT", "UPDATE", "SELECT", "DELETE"],
    "answer": "SELECT"
  },
  {
    "question": "What is the default return type of input() in Python?",
    "options": ["string", "int", "float", "bool"],
    "answer": "string"
  },
  {
    "question": "Which SQL keyword is used to arrange values in ascending order?",
    "options": ["ASC", "UP", "ORDER BY ASC", "SORT ASC"],
    "answer": "ORDER BY ASC"
  },
  {
    "question": "Which of these is a non-linear data structure?",
    "options": ["Stack", "Queue", "Graph", "Array"],
    "answer": "Graph"
  },
  {
    "question": "In Python, how do you get the ASCII value of a character?",
    "options": ["asc()", "ord()", "charCode()", "ascii()"],
    "answer": "ord()"
  },
  {
    "question": "In DBMS, what is the full form of DML?",
    "options": ["Data Machine Language", "Data Manipulation Language", "Data Markup Language", "Database Management Language"],
    "answer": "Data Manipulation Language"
  },
  {
    "question": "Which algorithm is used for shortest path in a graph?",
    "options": ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Prim's Algorithm", "Floyd-Warshall Algorithm"],
    "answer": "Dijkstra's Algorithm"
  },
  {
    "question": "In Python, which keyword declares a variable as global?",
    "options": ["global", "Global", "var", "declare"],
    "answer": "global"
  },
  {
    "question": "Which SQL constraint ensures that a column cannot have NULL values?",
    "options": ["PRIMARY KEY", "NOT NULL", "UNIQUE", "CHECK"],
    "answer": "NOT NULL"
  },
  {
    "question": "Which type of array has indices starting from 0?",
    "options": ["Zero-based array", "One-based array", "Dynamic array", "Sparse array"],
    "answer": "Zero-based array"
  },
  {
    "question": "What will 3 * 1 ** 3 evaluate to in Python?",
    "options": ["3", "1", "9", "0"],
    "answer": "3"
  },
  {
    "question": "In SQL, which statement is used to remove a database?",
    "options": ["DROP DATABASE", "DELETE DATABASE", "REMOVE DATABASE", "DESTROY DATABASE"],
    "answer": "DROP DATABASE"
  },
  {
    "question": "Which data structure gives the fastest search in average case?",
    "options": ["Array", "Linked List", "Hash Table", "Binary Tree"],
    "answer": "Hash Table"
  },
  {
    "question": "In OOP, which concept allows the creation of different forms of a method?",
    "options": ["Abstraction", "Polymorphism", "Encapsulation", "Composition"],
    "answer": "Polymorphism"
  },
  {
    "question": "Which Python statement is used to handle exceptions?",
    "options": ["try-except", "catch", "handle", "error"],
    "answer": "try-except"
  },
  {
    "question": "Which clause is used in SQL to filter rows before grouping?",
    "options": ["HAVING", "WHERE", "ORDER BY", "GROUP BY"],
    "answer": "WHERE"
  },
  {
    "question": "Which data structure is used to implement BFS?",
    "options": ["Stack", "Queue", "Deque", "Heap"],
    "answer": "Queue"
  },
  {
    "question": "What is the output of bool(0) in Python?",
    "options": ["True", "False", "0", "Error"],
    "answer": "False"
  },
  {
    "question": "Which function in Python returns the smallest item in an iterable?",
    "options": ["smallest()", "min()", "low()", "bottom()"],
    "answer": "min()"
  },
  {
    "question": "Which SQL statement is used to assign an alias to a table?",
    "options": ["ALIAS", "AS", "RENAME", "NAME"],
    "answer": "AS"
  },
  {
    "question": "Which search algorithm repeatedly divides the sorted array in half?",
    "options": ["Linear Search", "Binary Search", "Jump Search", "Interpolation Search"],
    "answer": "Binary Search"
  },
  {
    "question": "In Python, which method removes whitespace from both ends of a string?",
    "options": ["strip()", "trim()", "clean()", "rstrip()"],
    "answer": "strip()"
  },
  {
    "question": "In DBMS, which normal form removes transitive dependencies?",
    "options": ["1NF", "2NF", "3NF", "BCNF"],
    "answer": "3NF"
  },
  {
    "question": "Which operator is used for modulus in Python?",
    "options": ["%", "mod", "MOD()", "REM()"],
    "answer": "%"
  },
  {
    "question": "Which traversal in BST gives descending order?",
    "options": ["In-order (Right-Root-Left)", "Pre-order", "Post-order", "Level-order"],
    "answer": "In-order (Right-Root-Left)"
  },
  {
    "question": "Which clause in SQL is used to limit number of rows returned?",
    "options": ["LIMIT", "ROW NUM", "TOP", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "In OOP, which concept is implemented using private and public keywords?",
    "options": ["Encapsulation", "Polymorphism", "Abstraction", "Inheritance"],
    "answer": "Encapsulation"
  },
  {
    "question": "What is the output of 'python'[::-1]?",
    "options": ["nohtyp", "python", "error", "nopyth"],
    "answer": "nohtyp"
  },
  {
    "question": "In SQL, which function returns the average value?",
    "options": ["AVG()", "MEAN()", "AVERAGE()", "MID()"],
    "answer": "AVG()"
  },
  {
    "question": "Which data structure is a collection of nodes with hierarchical relationships?",
    "options": ["Array", "Tree", "Queue", "Graph"],
    "answer": "Tree"
  },
  {
    "question": "Which Python keyword is used to create a class?",
    "options": ["function", "class", "def", "object"],
    "answer": "class"
  },
  {
    "question": "Which join includes all rows from both tables, with NULLs where there is no match?",
    "options": ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "RIGHT JOIN"],
    "answer": "FULL OUTER JOIN"
  },
  {
    "question": "Which expression returns the remainder of division in SQL?",
    "options": ["MOD()", "REM()", "%", "DIV()"],
    "answer": "MOD()"
  },
  {
    "question": "In Python, what is output of ' '.join(['a','b','c'])?",
    "options": ["'abc'", "'a b c'", "'a,b,c'", "Error"],
    "answer": "'a b c'"
  },
  {
    "question": "Which SQL command is used to sort the result set?",
    "options": ["SORT", "ORDER BY", "GROUP BY", "ARRANGE BY"],
    "answer": "ORDER BY"
  },
  {
    "question": "Which data structure is used for implementing function call stacks?",
    "options": ["Queue", "Stack", "Tree", "Graph"],
    "answer": "Stack"
  },
  {
    "question": "Which function in Python converts a number to a string?",
    "options": ["toString()", "str()", "string()", "cast()"],
    "answer": "str()"
  },
  {
    "question": "In DBMS indexing, B+ tree is preferred over B tree because:",
    "options": ["It supports duplicate keys", "It allows faster search", "All data is stored in leaves", "It uses less space"],
    "answer": "All data is stored in leaves"
  },
  {
    "question": "Which SQL keyword combines results of two queries and removes duplicates?",
    "options": ["UNION", "JOIN", "INTERSECT", "MERGE"],
    "answer": "UNION"
  },
  {
    "question": "In Python, what is output of bool([])?",
    "options": ["True", "False", "0", "Error"],
    "answer": "False"
  },
  {
    "question": "Which traversal in trees visits all left nodes before right nodes at each level?",
    "options": ["In-order", "Pre-order", "Post-order", "Level-order"],
    "answer": "Level-order"
  },
  {
    "question": "Which operator in SQL checks for NULL values?",
    "options": ["= NULL", "IS NULL", "== NULL", "EQUAL NULL"],
    "answer": "IS NULL"
  },
  {
    "question": "What is time complexity of accessing an element in an array by index?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(1)"
  },
  {
    "question": "In OOP, which concept refers to using a single interface for different data types?",
    "options": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    "answer": "Polymorphism"
  },
  {
    "question": "Which SQL function returns total sum of a column?",
    "options": ["SUM()", "TOTAL()", "ADD()", "COUNT()"],
    "answer": "SUM()"
  },
  {
    "question": "In Python, how do you create a tuple with one element?",
    "options": ["(1)", "(1,)", "[1]", "{1}"],
    "answer": "(1,)"
  },
  {
    "question": "Which normal form removes partial dependency in DBMS?",
    "options": ["1NF", "2NF", "3NF", "BCNF"],
    "answer": "2NF"
  },
  {
    "question": "Which data structure uses hashing to store elements?",
    "options": ["Array", "Hash Table", "Linked List", "Heap"],
    "answer": "Hash Table"
  },
  {
    "question": "Which SQL join returns unmatched rows from left table?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    "answer": "LEFT JOIN"
  },
  {
    "question": "In Python, what is the output of len('Hello\\nWorld')?",
    "options": ["10", "11", "12", "None"],
    "answer": "11"
  },
  {
    "question": "Which sorting method is in-place and stable?",
    "options": ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"],
    "answer": "Insertion Sort"
  },
  {
    "question": "Which SQL operator checks if a value matches any value in a list?",
    "options": ["IN", "ANY", "ALL", "BETWEEN"],
    "answer": "IN"
  },
  {
    "question": "Which data structure is best for LRU Cache implementation?",
    "options": ["Queue", "Deque with Hash Map", "Stack", "Binary Tree"],
    "answer": "Deque with Hash Map"
  },
  {
    "question": "In Python, what will be output of 5 == 5.0?",
    "options": ["True", "False", "Error", "None"],
    "answer": "True"
  },
  {
    "question": "Which aggregate function in SQL ignores NULL values?",
    "options": ["SUM()", "AVG()", "COUNT()", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "Which data structure is used for undo operations in a text editor?",
    "options": ["Stack", "Queue", "Deque", "Linked List"],
    "answer": "Stack"
  },
  {
    "question": "In Python, '==' compares:",
    "options": ["Identity", "Values", "Type", "Memory address"],
    "answer": "Values"
  },
  {
    "question": "Which SQL function counts distinct values?",
    "options": ["COUNT(DISTINCT col)", "DISTINCT COUNT(col)", "COUNT UNIQUE(col)", "UNIQUE COUNT(col)"],
    "answer": "COUNT(DISTINCT col)"
  },
  {
    "question": "Which algorithm is used in finding Minimum Spanning Tree?",
    "options": ["Kruskal's", "Prim's", "Both Kruskal's and Prim's", "Dijkstra's"],
    "answer": "Both Kruskal's and Prim's"
  },
  {
    "question": "In Python, what is '5' + '5'?",
    "options": ["10", "'55'", "Error", "None"],
    "answer": "'55'"
  },
  {
    "question": "Which DBMS concept avoids update anomalies?",
    "options": ["Indexing", "Normalization", "Backup", "Replication"],
    "answer": "Normalization"
  },
  {
    "question": "Which operator is used for bitwise AND in Python?",
    "options": ["&", "and", "&&", "|"],
    "answer": "&"
  },
  {
    "question": "What is time complexity of inserting at head in singly linked list?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(1)"
  },
  {
    "question": "In SQL, which keyword is used to change table structure?",
    "options": ["ALTER", "UPDATE", "MODIFY", "CHANGE"],
    "answer": "ALTER"
  },
  {
    "question": "In Python, which method returns dict keys?",
    "options": ["keys()", "getKeys()", "dictKeys()", "allKeys()"],
    "answer": "keys()"
  },
  {
    "question": "Which joins in SQL produce Cartesian product?",
    "options": ["CROSS JOIN", "INNER JOIN", "LEFT JOIN", "FULL JOIN"],
    "answer": "CROSS JOIN"
  },
  {
    "question": "What is the height of a balanced binary tree with n nodes?",
    "options": ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    "answer": "O(log n)"
  },
  {
    "question": "In Python, which function is used to open files?",
    "options": ["open()", "file()", "fopen()", "read()"],
    "answer": "open()"
  },
  {
    "question": "What will be the output of sum([2,4,6])?",
    "options": ["12", "10", "14", "8"],
    "answer": "12"
  },
  {
    "question": "Which index in SQL improves query speed on non-primary key columns?",
    "options": ["Non-clustered index", "Clustered index", "Bitmap index", "Hash index"],
    "answer": "Non-clustered index"
  },
  {
    "question": "Which data structure allows insertion at both ends?",
    "options": ["Deque", "Stack", "Queue", "Priority Queue"],
    "answer": "Deque"
  },
  {
    "question": "In DBMS, entity relationship is represented in:",
    "options": ["ER Diagram", "Flowchart", "Class Diagram", "Sequence Diagram"],
    "answer": "ER Diagram"
  },
  {
    "question": "Which Python data type is a sequence of immutable Unicode characters?",
    "options": ["str", "list", "tuple", "set"],
    "answer": "str"
  },
  {
    "question": "Which SQL condition checks if value lies between two numbers?",
    "options": ["BETWEEN", "IN", "RANGE", "WITHIN"],
    "answer": "BETWEEN"
  },
  {
    "question": "What is the time complexity of enqueue operation in a queue using array?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(1)"
  },
  {
    "question": "Which function in Python returns character of an ASCII value?",
    "options": ["char()", "chr()", "ascii()", "ord()"],
    "answer": "chr()"
  },
  {
    "question": "Which SQL sublanguage is used to define database structure?",
    "options": ["DDL", "DML", "DCL", "TCL"],
    "answer": "DDL"
  },
  {
    "question": "Which data structure is used in undo-redo features?",
    "options": ["Two stacks", "Queue", "Deque", "Linked list"],
    "answer": "Two stacks"
  },
  {
    "question": "In Python, 'is' operator checks:",
    "options": ["Value", "Identity", "Equality", "Reference count"],
    "answer": "Identity"
  },
  {
    "question": "Which SQL statement creates a new table?",
    "options": ["CREATE TABLE", "ADD TABLE", "MAKE TABLE", "NEW TABLE"],
    "answer": "CREATE TABLE"
  },
  {
    "question": "Which algorithm is best for finding shortest path in weighted graphs without negative weights?",
    "options": ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "DFS"],
    "answer": "Dijkstra's"
  },
  {
    "question": "Which Python method returns the largest key from a dictionary?",
    "options": ["max()", "max(dict)", "max(dict.keys())", "largest()"],
    "answer": "max(dict.keys())"
  },
  {
    "question": "In SQL, which command is used to remove all rows from a table but keep the structure?",
    "options": ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    "answer": "TRUNCATE"
  },
  {
    "question": "Which data structure is best for implementing recursion internally?",
    "options": ["Stack", "Queue", "Deque", "Array"],
    "answer": "Stack"
  },
  {
    "question": "In Python, what will be output of len({'a':1,'b':2})?",
    "options": ["1", "2", "3", "4"],
    "answer": "2"
  },
  {
    "question": "Which SQL statement is used to change the data type of a column?",
    "options": ["ALTER TABLE", "MODIFY TYPE", "CHANGE TYPE", "UPDATE TYPE"],
    "answer": "ALTER TABLE"
  },
  {
    "question": "Which sorting algorithm has O(n^2) worst-case complexity but is adaptive for nearly sorted data?",
    "options": ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"],
    "answer": "Insertion Sort"
  },
  {
    "question": "What will be the output of 'Hello'.lower()?",
    "options": ["HELLO", "hello", "Hello", "Error"],
    "answer": "hello"
  },
  {
    "question": "In DBMS, which key is a set of attributes that can uniquely identify a tuple but is not the primary key?",
    "options": ["Super Key", "Foreign Key", "Alternate Key", "Composite Key"],
    "answer": "Alternate Key"
  },
  {
    "question": "In Python, which function is used to get current working directory?",
    "options": ["getcwd()", "pwd()", "cwd()", "path()"],
    "answer": "getcwd()"
  },
  {
    "question": "Which SQL clause is used to filter rows returned by a GROUP BY statement?",
    "options": ["HAVING", "WHERE", "ORDER BY", "LIMIT"],
    "answer": "HAVING"
  },
  {
    "question": "Which data structure can be used to find the median in streaming data efficiently?",
    "options": ["Two Heaps", "Queue", "Stack", "BST"],
    "answer": "Two Heaps"
  },
  {
    "question": "In Python, what is the output of bool(1) == True?",
    "options": ["True", "False", "Error", "None"],
    "answer": "True"
  },
  {
    "question": "Which SQL function returns the number of non-null values?",
    "options": ["COUNT()", "SUM()", "MAX()", "AVG()"],
    "answer": "COUNT()"
  },
  {
    "question": "In Big-O notation, what represents constant time?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    "answer": "O(1)"
  },
  {
    "question": "Which Python method returns a sorted list of dictionary keys?",
    "options": ["sorted(dict)", "dict.sort()", "dict.keys().sort()", "sort(dict)"],
    "answer": "sorted(dict)"
  },
  {
    "question": "Which join returns all records from the right table and matching rows from the left table?",
    "options": ["RIGHT JOIN", "LEFT JOIN", "FULL JOIN", "INNER JOIN"],
    "answer": "RIGHT JOIN"
  },
  {
    "question": "What is the main feature of heap data structure?",
    "options": ["Sorted array", "Partial ordering", "Graph representation", "No duplicates"],
    "answer": "Partial ordering"
  },
  {
    "question": "In Python, which module is used for regular expressions?",
    "options": ["regex", "re", "regexp", "rex"],
    "answer": "re"
  },
  {
    "question": "Which SQL keyword is used to apply a condition over aggregated data?",
    "options": ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
    "answer": "HAVING"
  },
  {
    "question": "What is the best case time complexity of bubble sort?",
    "options": ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
    "answer": "O(n)"
  },
  {
    "question": "In Python, how do you check the type of variable x?",
    "options": ["type(x)", "typeof(x)", "checktype(x)", "instanceof(x)"],
    "answer": "type(x)"
  },
  {
    "question": "Which SQL command removes a view?",
    "options": ["DROP VIEW", "DELETE VIEW", "REMOVE VIEW", "CLEAR VIEW"],
    "answer": "DROP VIEW"
  },
  {
    "question": "Which traversal of BST outputs values in non-decreasing order?",
    "options": ["In-order", "Pre-order", "Post-order", "Level-order"],
    "answer": "In-order"
  },
  {
    "question": "In Python, which method returns a copy of a list?",
    "options": ["copy()", "clone()", "duplicate()", "listcopy()"],
    "answer": "copy()"
  },
  {
    "question": "Which key in DBMS uniquely identifies rows and also acts as a foreign key in another table?",
    "options": ["Composite Key", "Primary Key", "Alternate Key", "Secondary Key"],
    "answer": "Primary Key"
  },
  {
    "question": "Which searching technique is used in hash tables?",
    "options": ["Direct Addressing", "Chaining", "Open Addressing", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "Which Python keyword is used to exit a loop prematurely?",
    "options": ["break", "continue", "exit", "stop"],
    "answer": "break"
  },
  {
    "question": "In SQL, which keyword is used to sort results in descending order?",
    "options": ["DESC", "DOWN", "DSC", "REVERSE"],
    "answer": "DESC"
  },
  {
    "question": "What is the auxiliary space complexity of merge sort?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    "answer": "O(n)"
  },
  {
    "question": "In Python, which method is used to add all items from another list to the current list?",
    "options": ["appendAll()", "extend()", "merge()", "insertAll()"],
    "answer": "extend()"
  },
  {
    "question": "Which SQL operator is used to perform pattern matching with wildcards?",
    "options": ["LIKE", "MATCH", "PATTERN", "REGEXP"],
    "answer": "LIKE"
  },
  {
    "question": "In OOP, which method is automatically called when object is deleted?",
    "options": ["__del__", "__destroy__", "__delete__", "__remove__"],
    "answer": "__del__"
  },
  {
    "question": "Which data structure can be used to implement a queue with O(1) amortized complexity for enqueue and dequeue?",
    "options": ["Two Stacks", "Linked List", "Circular Buffer", "Heap"],
    "answer": "Circular Buffer"
  },
  {
    "question": "In Python, which function is used to get the length of a dictionary?",
    "options": ["len()", "count()", "size()", "length()"],
    "answer": "len()"
  },
  {
    "question": "Which SQL statement is used to grant privileges?",
    "options": ["GRANT", "PERMIT", "ALLOW", "ACCESS"],
    "answer": "GRANT"
  },
  {
    "question": "Which sorting algorithm is best if the array is almost sorted?",
    "options": ["Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
    "answer": "Insertion Sort"
  },
  {
    "question": "In Python, what does dict.get(key, default) return if key is missing?",
    "options": ["None", "Error", "default", "False"],
    "answer": "default"
  },
  {
    "question": "Which SQL keyword is used to remove duplicates from SELECT results?",
    "options": ["DISTINCT", "UNIQUE", "NODUP", "CLEAN"],
    "answer": "DISTINCT"
  },
  {
    "question": "In Python, what will be the result of 2 ** 3 ** 2?",
    "options": ["64", "512", "256", "16"],
    "answer": "512"
  },
  {
    "question": "Which DBMS property ensures that transactions are executed completely or not at all?",
    "options": ["Atomicity", "Consistency", "Isolation", "Durability"],
    "answer": "Atomicity"
  },
  {
    "question": "In OOP, which access modifier allows access only within the same class?",
    "options": ["public", "protected", "private", "internal"],
    "answer": "private"
  },
  {
    "question": "Which SQL statement is used to rename a column?",
    "options": ["ALTER TABLE ... RENAME COLUMN", "RENAME COLUMN", "CHANGE COLUMN", "MODIFY COLUMN"],
    "answer": "ALTER TABLE ... RENAME COLUMN"
  },
  {
    "question": "Which function in Python returns a sequence of numbers?",
    "options": ["range()", "list()", "seq()", "numbers()"],
    "answer": "range()"
  },
  {
    "question": "In SQL, which command is used to permanently save changes?",
    "options": ["COMMIT", "SAVE", "STORE", "END"],
    "answer": "COMMIT"
  },
  {
    "question": "What is the average case time complexity of quicksort?",
    "options": ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
    "answer": "O(n log n)"
  },
  {
    "question": "In Python, what is the output of bool('0')?",
    "options": ["True", "False", "Error", "None"],
    "answer": "True"
  },
  {
    "question": "Which clause in SQL is used with UPDATE to modify only specific rows?",
    "options": ["WHERE", "HAVING", "FILTER", "GROUP BY"],
    "answer": "WHERE"
  },
  {
    "question": "What is the worst-case time complexity of inserting an element at the end of a dynamic array?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(1)"
  },
  {
    "question": "Queue follows which order of element processing?",
    "options": ["LIFO", "FIFO", "Random", "Priority-based"],
    "answer": "FIFO"
  },
  {
    "question": "Which SQL clause is used to filter records in a query?",
    "options": ["SELECT", "WHERE", "ORDER BY", "GROUP BY"],
    "answer": "WHERE"
  },
  {
    "question": "In OOP, what does 'polymorphism' mean?",
    "options": ["Code reusability", "Encapsulation", "Multiple forms of a method", "Data hiding"],
    "answer": "Multiple forms of a method"
  },
  {
    "question": "Python's 'lambda' keyword is used to define what?",
    "options": ["Anonymous function", "Class", "Loop", "Conditional statement"],
    "answer": "Anonymous function"
  },
  {
    "question": "What is the average of 12, 15, 20, 25, and 30?",
    "options": ["20", "18.4", "22", "24.4"],
    "answer": "20"
  },
  {
    "question": "In a binary search tree, which traversal method returns nodes in ascending order?",
    "options": ["Pre-order", "Post-order", "In-order", "Level-order"],
    "answer": "In-order"
  },
  {
    "question": "Which of the following sorting algorithms has the best worst-case time complexity?",
    "options": ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
    "answer": "Merge Sort"
  },
  {
    "question": "What is a primary key in SQL?",
    "options": ["A key used for sorting", "Unique identifier for records", "Foreign key", "A key with duplicates"],
    "answer": "Unique identifier for records"
  },
  {
    "question": "In Python, which function is used to get the length of a list or string?",
    "options": ["length()", "count()", "len()", "size()"],
    "answer": "len()"
  },
  {
    "question": "Which normal form removes partial dependencies in database normalization?",
    "options": ["1NF", "2NF", "3NF", "BCNF"],
    "answer": "2NF"
  },
  {
    "question": "Logical reasoning questions test which skill?",
    "options": ["Memory recall", "Critical thinking", "Typing speed", "Physical stamina"],
    "answer": "Critical thinking"
  },
  {
    "question": "What data structure uses nodes and has hierarchical relationships?",
    "options": ["Array", "Stack", "Tree", "Queue"],
    "answer": "Tree"
  },
  {
    "question": "Which operator is used for exponentiation in Python?",
    "options": ["^", "**", "exp", "pow"],
    "answer": "**"
  },
  {
    "question": "In database terminology, what does ACID stand for?",
    "options": ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Control, Integrity, Data", "Access, Control, Isolation, Data", "Atomicity, Clarity, Isolation, Data"],
    "answer": "Atomicity, Consistency, Isolation, Durability"
  },
  {
    "question": "Which of the following is NOT an OOP principle?",
    "options": ["Inheritance", "Polymorphism", "Abstraction", "Recursion"],
    "answer": "Recursion"
  },
  {
    "question": "In Python, which keyword is used to define a function?",
    "options": ["func", "def", "function", "lambda"],
    "answer": "def"
  },
  {
    "question": "If a train 120 meters long runs at 60 km/h, how long will it take to pass a man standing on the platform?",
    "options": ["6 seconds", "7.2 seconds", "8 seconds", "5 seconds"],
    "answer": "7.2 seconds"
  },
  {
    "question": "What SQL command is used to insert new data into a table?",
    "options": ["UPDATE", "INSERT INTO", "ADD", "CREATE"],
    "answer": "INSERT INTO"
  },
  {
    "question": "Which data structure uses LIFO order?",
    "options": ["Queue", "Stack", "Heap", "Graph"],
    "answer": "Stack"
  },
  {
    "question": "What is the default index start in Python lists?",
    "options": ["0", "1", "-1", "Depends on data type"],
    "answer": "0"
  },
  {
    "question": "Which SQL keyword removes records from a database table?",
    "options": ["DROP", "DELETE", "REMOVE", "CLEAR"],
    "answer": "DELETE"
  },
  {
    "question": "What is the purpose of the 'HAVING' clause in SQL?",
    "options": ["Filter before grouping", "Filter after grouping", "Sort data", "Limit rows"],
    "answer": "Filter after grouping"
  },
  {
    "question": "If the ratio of boys to girls in a class is 3:4 and there are 21 boys, how many girls are there?",
    "options": ["27", "28", "29", "30"],
    "answer": "28"
  },
  {
    "question": "Which sorting algorithm repeatedly swaps adjacent elements?",
    "options": ["Heap Sort", "Bubble Sort", "Quick Sort", "Merge Sort"],
    "answer": "Bubble Sort"
  },
  {
    "question": "Which Python data type is immutable?",
    "options": ["list", "set", "tuple", "dict"],
    "answer": "tuple"
  },
  {
    "question": "The SQL function COUNT(*) does what?",
    "options": ["Counts non-null values", "Counts all rows", "Counts unique values", "Counts null values"],
    "answer": "Counts all rows"
  },
  {
    "question": "Which of the following is a prime number?",
    "options": ["15", "21", "23", "25"],
    "answer": "23"
  },
  {
    "question": "In OOP, which access modifier restricts access only within the same class?",
    "options": ["public", "protected", "private", "global"],
    "answer": "private"
  },
  {
    "question": "What is the next number in the sequence: 2, 4, 8, 16, ?",
    "options": ["20", "24", "32", "36"],
    "answer": "32"
  },
  {
    "question": "Which method is automatically called when a Python class instance is created?",
    "options": ["__init__", "__start__", "__create__", "__call__"],
    "answer": "__init__"
  },
  {
    "question": "What is the term for breaking a program into smaller manageable chunks in OOP?",
    "options": ["Inheritance", "Modularity", "Encapsulation", "Polymorphism"],
    "answer": "Modularity"
  },
  {
    "question": "What is the output of print(3 * 1 ** 3) in Python?",
    "options": ["3", "1", "0", "9"],
    "answer": "3"
  },
  {
    "question": "Which data structure is generally used to implement recursion?",
    "options": ["Stack", "Queue", "Tree", "Graph"],
    "answer": "Stack"
  },
  {
    "question": "Which SQL keyword is used to sort a result set?",
    "options": ["SORT BY", "ORDER BY", "GROUP BY", "FILTER BY"],
    "answer": "ORDER BY"
  },
  {
    "question": "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
    "options": ["Yes", "No", "Cannot be determined", "Only some"],
    "answer": "Yes"
  },
  {
    "question": "In a code, if GREEN is coded as TIIVG, how is YELLOW coded?",
    "options": ["BOVVLI", "ABLLOW", "BMMVIL", "BLVOVI"],
    "answer": "BMMVIL"
  },
  {
    "question": "In Python, what type is the result of 5/2?",
    "options": ["int", "float", "double", "long"],
    "answer": "float"
  },
  {
    "question": "Which SQL operation is used to remove a table from the database?",
    "options": ["DROP TABLE", "DELETE", "REMOVE", "CLEAR TABLE"],
    "answer": "DROP TABLE"
  },
  {
    "question": "Which data structure is best to implement a priority queue?",
    "options": ["Stack", "Binary Heap", "Queue", "Linked List"],
    "answer": "Binary Heap"
  },
  {
    "question": "Which operator in Python checks object identity?",
    "options": ["==", "is", "=", "equals"],
    "answer": "is"
  },
  {
    "question": "What is the output of bool('False') in Python?",
    "options": ["True", "False", "Error", "None"],
    "answer": "True"
  },
  {
    "question": "What is the next number in the series: 7, 14, 28, 56, __, 224?",
    "options": ["112", "110", "108", "120"],
    "answer": "112"
  },
  {
    "question": "Which SQL keyword combines results from two queries and removes duplicates?",
    "options": ["UNION", "JOIN", "INTERSECT", "MERGE"],
    "answer": "UNION"
  },
  {
    "question": "What is the size of int variable in Java?",
    "options": ["8 bit", "16 bit", "32 bit", "64 bit"],
    "answer": "32 bit"
  },
  {
    "question": "Which keyword is used to inherit a class in Java?",
    "options": ["this", "super", "extends", "implements"],
    "answer": "extends"
  },
  {
    "question": "Which package contains the Random class?",
    "options": ["java.util", "java.lang", "java.io", "java.net"],
    "answer": "java.util"
  },
  {
    "question": "What is the default value of a boolean variable in Java?",
    "options": ["true", "false", "null", "0"],
    "answer": "false"
  },
  {
    "question": "How many primitive data types are there in Java?",
    "options": ["6", "7", "8", "9"],
    "answer": "8"
  },
  {
    "question": "Which method is the entry point for a Java program?",
    "options": ["main()", "start()", "run()", "init()"],
    "answer": "main()"
  },
  {
    "question": "Which of the following is not a Java feature?",
    "options": ["Object-oriented", "Use of pointers", "Portable", "Dynamic"],
    "answer": "Use of pointers"
  },
  {
    "question": "Which modifier makes a class member accessible only inside its package?",
    "options": ["private", "public", "protected", "default"],
    "answer": "default"
  },
  {
    "question": "Which collection class allows you to grow or shrink its size and provides indexed access to its elements?",
    "options": ["ArrayList", "LinkedList", "HashSet", "TreeSet"],
    "answer": "ArrayList"
  },
  {
    "question": "What does the 'final' keyword mean when applied to a method?",
    "options": ["The method cannot be overridden", "The method cannot be overloaded", "The method cannot be called", "The method is abstract"],
    "answer": "The method cannot be overridden"
  },
  {
    "question": "What is the output of 'System.out.println(10 + 20 + \"30\")'?",
    "options": ["3030", "102030", "3030", "30"],
    "answer": "3030"
  },
  {
    "question": "What is the parent class of all classes in Java?",
    "options": ["Object", "Class", "Interface", "Main"],
    "answer": "Object"
  },
  {
    "question": "Which of these is used to handle exceptions in Java?",
    "options": ["try-catch", "throw", "throws", "finally"],
    "answer": "try-catch"
  },
  {
    "question": "What is the use of the 'static' keyword?",
    "options": ["To create instance variables", "To create variables or methods that belong to the class", "To hide variables", "To overload methods"],
    "answer": "To create variables or methods that belong to the class"
  },
  {
    "question": "Which of these is NOT a valid Java identifier?",
    "options": ["myVariable", "2variable", "_variable", "variable2"],
    "answer": "2variable"
  },
  {
    "question": "Which interface provides default implementation methods in Java 8 and onwards?",
    "options": ["Functional Interface", "Marker Interface", "Default Interface", "Static Interface"],
    "answer": "Functional Interface"
  },
  {
    "question": "What is the default value of an object reference in Java?",
    "options": ["null", "undefined", "0", "Empty string"],
    "answer": "null"
  },
  {
    "question": "What is the output of 'System.out.println(5/2)'?",
    "options": ["2.5", "2", "3", "Error"],
    "answer": "2"
  },
  {
    "question": "Which access specifier makes a member accessible everywhere?",
    "options": ["private", "public", "protected", "default"],
    "answer": "public"
  },
  {
    "question": "Which method is called when an object is garbage collected?",
    "options": ["finalize()", "destroy()", "delete()", "dispose()"],
    "answer": "finalize()"
  },
  {
    "question": "Which keyword is used to create an instance of a class?",
    "options": ["new", "create", "instantiate", "build"],
    "answer": "new"
  },
  {
    "question": "What is an abstract class?",
    "options": ["A class that cannot be instantiated", "A class that has no methods", "A class without variables", "A concrete class"],
    "answer": "A class that cannot be instantiated"
  },
  {
    "question": "What will 'this' keyword refer to?",
    "options": ["Current object", "Parent class", "Main method", "Another class"],
    "answer": "Current object"
  },
  {
    "question": "Which method is overridden to provide a string representation of the object?",
    "options": ["toString()", "print()", "display()", "show()"],
    "answer": "toString()"
  },
  {
    "question": "What is method overloading in Java?",
    "options": ["Having multiple methods with the same name but different parameters", "Creating methods with same name and same parameters", "Overriding a method", "Abstracting a method"],
    "answer": "Having multiple methods with the same name but different parameters"
  },
  {
    "question": "Which method is used to compare two strings for equality in Java?",
    "options": ["equals()", "==", "compare()", "equalsIgnoreCase()"],
    "answer": "equals()"
  },
  {
    "question": "Which exception is thrown when an array is accessed with an illegal index?",
    "options": ["ArrayIndexOutOfBoundsException", "NullPointerException", "IOException", "ArithmeticException"],
    "answer": "ArrayIndexOutOfBoundsException"
  },
  {
    "question": "Which collection class maintains insertion order and allows duplicate elements?",
    "options": ["ArrayList", "HashSet", "TreeSet", "LinkedHashSet"],
    "answer": "ArrayList"
  },
  {
    "question": "What is the parent class of Throwable class in Java?",
    "options": ["Object", "Exception", "Error", "None"],
    "answer": "Object"
  },
  {
    "question": "Which of the following is NOT a valid Java identifier?",
    "options": ["$amount", "_value", "9data", "data9"],
    "answer": "9data"
  },
  {
    "question": "What does JVM stand for?",
    "options": ["Java Virtual Machine", "Java Variable Method", "Java Verified Memory", "Java Visual Mode"],
    "answer": "Java Virtual Machine"
  },
  {
    "question": "Which of the following is not a feature of Java?",
    "options": ["Platform independent", "Object-oriented", "Use of pointers", "Multithreaded"],
    "answer": "Use of pointers"
  },
  {
    "question": "Which of these classes is thread-safe?",
    "options": ["Vector", "ArrayList", "LinkedList", "HashSet"],
    "answer": "Vector"
  },
  {
    "question": "What is the use of 'super' keyword?",
    "options": ["Refer to current class", "Refer to parent class", "Refer to static members", "Refer to this class methods"],
    "answer": "Refer to parent class"
  },
  {
    "question": "Which of these types represent floating point numbers?",
    "options": ["int, double", "double, float", "float, long", "int, float"],
    "answer": "double, float"
  },
  {
    "question": "What is Polymorphism in Java?",
    "options": ["Ability to take many forms", "Inheritance", "Encapsulation", "Abstraction"],
    "answer": "Ability to take many forms"
  },
  {
    "question": "Which cycle is used by Garbage Collector in Java?",
    "options": ["Mark and Sweep", "Reference Counting", "Copying", "All of the above"],
    "answer": "Mark and Sweep"
  },
  {
    "question": "What keyword is used to prevent inheritance?",
    "options": ["final", "static", "private", "protected"],
    "answer": "final"
  },
  {
    "question": "Which of the following are checked exceptions in Java?",
    "options": ["IOException", "NullPointerException", "ArithmeticException", "StackOverflowError"],
    "answer": "IOException"
  },
  {
    "question": "In Java, String is:",
    "options": ["Mutable", "Immutable", "Static", "Final"],
    "answer": "Immutable"
  },
  {
    "question": "Which method signature is correct for main method?",
    "options": ["public static void main(String[] args)", "public void main(String args[])", "public static int main(String[] args)", "private static void main(String[] args)"],
    "answer": "public static void main(String[] args)"
  },
  {
    "question": "Which interface is used for threading in Java?",
    "options": ["Runnable", "Threadable", "Executor", "Callable"],
    "answer": "Runnable"
  },
  {
    "question": "Which collection allows null keys?",
    "options": ["HashMap", "Hashtable", "TreeMap", "HashSet"],
    "answer": "HashMap"
  },
  {
    "question": "What does Collections.sort() use?",
    "options": ["Merge sort", "Bubble sort", "Quick sort", "Timsort"],
    "answer": "Timsort"
  },
  {
    "question": "Which operator can be used to implement the Singleton design pattern?",
    "options": ["private constructor", "static keyword", "final class", "public constructor"],
    "answer": "private constructor"
  },
  {
    "question": "What does the 'transient' keyword indicate?",
    "options": ["Variable is not serialized", "Variable is immutable", "Variable is static", "Variable is volatile"],
    "answer": "Variable is not serialized"
  },
  {
    "question": "Which Java feature identifies at runtime which method to invoke?",
    "options": ["Dynamic method dispatch", "Method overloading", "Method overriding", "Polymorphism"],
    "answer": "Dynamic method dispatch"
  },
  {
    "question": "Which keyword is used for exception handling?",
    "options": ["try", "catch", "finally", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "What type of database is MongoDB?",
    "options": ["Relational", "Document-oriented NoSQL", "Key-value store", "Graph database"],
    "answer": "Document-oriented NoSQL"
  },
  {
    "question": "Which data format does MongoDB primarily use for documents?",
    "options": ["JSON", "XML", "BSON", "CSV"],
    "answer": "BSON"
  },
  {
    "question": "What command is used to create a new collection in MongoDB?",
    "options": ["db.createCollection()", "db.newCollection()", "db.addCollection()", "db.insert()"],
    "answer": "db.createCollection()"
  },
  {
    "question": "What is the default primary key field in MongoDB collections?",
    "options": ["_id", "id", "key", "primaryKey"],
    "answer": "_id"
  },
  {
    "question": "Which operator is used to specify AND condition in MongoDB query?",
    "options": ["$and", "$or", "$not", "$nor"],
    "answer": "$and"
  },
  {
    "question": "What command is used to find all documents in a collection?",
    "options": ["db.collection.find()", "db.collection.queryAll()", "db.collection.getAll()", "db.collection.fetch()"],
    "answer": "db.collection.find()"
  },
  {
    "question": "MongoDB stores data in which units?",
    "options": ["Documents", "Tables", "Rows", "Columns"],
    "answer": "Documents"
  },
  {
    "question": "What is the nature of a MongoDB schema?",
    "options": ["Flexible", "Rigid", "Predefined", "Fixed"],
    "answer": "Flexible"
  },
  {
    "question": "Which command is used to update a document in MongoDB?",
    "options": ["db.collection.updateOne()", "db.collection.replace()", "db.collection.modify()", "db.collection.change()"],
    "answer": "db.collection.updateOne()"
  },
  {
    "question": "Which of the following is NOT a valid MongoDB data type?",
    "options": ["String", "Boolean", "Date", "Float64"],
    "answer": "Float64"
  },
  {
    "question": "How does MongoDB handle joins?",
    "options": ["No joins, data is embedded or referenced", "Supports SQL-style JOIN", "Full outer joins only", "Only inner joins"],
    "answer": "No joins, data is embedded or referenced"
  },
  {
    "question": "What is a replica set in MongoDB?",
    "options": ["Set of MongoDB servers for high availability", "Cluster of databases", "Group of collections", "Set of indices"],
    "answer": "Set of MongoDB servers for high availability"
  },
  {
    "question": "Which operation is atomic in MongoDB?",
    "options": ["Single document update", "Multi-document transaction", "Aggregation pipeline", "MapReduce"],
    "answer": "Single document update"
  },
  {
    "question": "Which MongoDB function removes documents matching a filter?",
    "options": ["db.collection.deleteMany()", "db.collection.remove()", "db.collection.drop()", "db.collection.deleteAll()"],
    "answer": "db.collection.deleteMany()"
  },
  {
    "question": "Which method is used to insert multiple documents in one call?",
    "options": ["insertMany()", "bulkInsert()", "saveMany()", "addMultiple()"],
    "answer": "insertMany()"
  },
  {
    "question": "What data model MongoDB uses?",
    "options": ["Collection of JSON-like documents", "Row-column model", "Graph model", "Key-value pairs"],
    "answer": "Collection of JSON-like documents"
  },
  {
    "question": "Which aggregation stage is used for grouping documents in MongoDB?",
    "options": ["$group", "$match", "$sort", "$project"],
    "answer": "$group"
  },
  {
    "question": "MongoDB supports which type of indexing?",
    "options": ["Single field, compound, multi-key", "Only single field", "Only full text", "None"],
    "answer": "Single field, compound, multi-key"
  },
  {
    "question": "Which MongoDB feature allows ACID transactions?",
    "options": ["Multi-document transactions", "Single-document transactions", "No transactions", "Eventual consistency"],
    "answer": "Multi-document transactions"
  },
  {
    "question": "The command to show all databases in MongoDB is?",
    "options": ["show dbs", "list databases", "show databases", "list dbs"],
    "answer": "show dbs"
  },
  {
    "question": "How do you start a MongoDB shell?",
    "options": ["mongo", "mongoshell", "mongod", "mongocli"],
    "answer": "mongo"
  },
  {
    "question": "Which tool is used for managing MongoDB backups?",
    "options": ["mongodump", "mongorestore", "mongoexport", "mongorestore"],
    "answer": "mongodump"
  },
  {
    "question": "What type of database scaling does MongoDB support?",
    "options": ["Horizontal (sharding)", "Vertical only", "Neither", "Only replication"],
    "answer": "Horizontal (sharding)"
  },
  {
    "question": "Which of these commands removes an entire database in MongoDB?",
    "options": ["db.dropDatabase()", "db.remove()", "db.delete()", "db.clear()"],
    "answer": "db.dropDatabase()"
  },
  {
    "question": "Which method can replace a document in MongoDB?",
    "options": ["replaceOne()", "updateOne()", "insertOne()", "updateMany()"],
    "answer": "replaceOne()"
  },
  {
    "question": "What datatype does MongoDB use for unique ids?",
    "options": ["ObjectId", "UUID", "String", "Integer"],
    "answer": "ObjectId"
  },
  {
    "question": "Which of the following is a NoSQL database?",
    "options": ["MongoDB", "MySQL", "Oracle", "SQL Server"],
    "answer": "MongoDB"
  },
  {
    "question": "MongoDB stores data as:",
    "options": ["Collections", "Documents", "Rows", "Both collections and documents"],
    "answer": "Both collections and documents"
  },
  {
    "question": "Which method is used to add an index in MongoDB?",
    "options": ["createIndex()", "addIndex()", "newIndex()", "insertIndex()"],
    "answer": "createIndex()"
  },
  {
    "question": "Which query operator matches values greater than a specified value?",
    "options": ["$gt", "$lt", "$gte", "$lte"],
    "answer": "$gt"
  },
  {
    "question": "Which query operator matches array elements?",
    "options": ["$elemMatch", "$arrayMatch", "$in", "$all"],
    "answer": "$elemMatch"
  },
  {
    "question": "Which method updates values in MongoDB based on a condition?",
    "options": ["updateMany()", "replace()", "insertOne()", "findOne()"],
    "answer": "updateMany()"
  },
  {
    "question": "What does 'sharding' do in MongoDB?",
    "options": ["Distributes data across multiple servers", "Duplicates data", "Backs up data", "Indexes data"],
    "answer": "Distributes data across multiple servers"
  },
  {
    "question": "Which feature in MongoDB supports real-time analytics?",
    "options": ["Aggregation Framework", "Replication", "Query Optimization", "Sharding"],
    "answer": "Aggregation Framework"
  },
  {
    "question": "MongoDB was developed by which company?",
    "options": ["10gen", "Google", "Microsoft", "IBM"],
    "answer": "10gen"
  },
  {
    "question": "Which command returns the count of documents in a collection?",
    "options": ["countDocuments()", "count()", "total()", "length()"],
    "answer": "countDocuments()"
  },
  {
    "question": "Which of the following is NOT a MongoDB storage engine?",
    "options": ["WiredTiger", "MMAPv1", "MyISAM", "In-Memory"],
    "answer": "MyISAM"
  },
  {
    "question": "What does the MongoDB 'db.stats()' command return?",
    "options": ["Database statistics", "Collection stats", "Index info", "Server status"],
    "answer": "Database statistics"
  },
  {
    "question": "Which method is used to rename a collection?",
    "options": ["renameCollection()", "modifyCollection()", "changeCollection()", "updateCollection()"],
    "answer": "renameCollection()"
  },
  {
    "question": "MongoDB supports which query language?",
    "options": ["MQL (MongoDB Query Language)", "SQL", "No query language", "NoSQL"],
    "answer": "MQL (MongoDB Query Language)"
  },
  {
    "question": "Which MongoDB command lists all collections in a database?",
    "options": ["show collections", "listAll()", "collections()", "show tables"],
    "answer": "show collections"
  },
  {
    "question": "What is the default port number of MongoDB server?",
    "options": ["27017", "5432", "3306", "8080"],
    "answer": "27017"
  },
  {
    "question": "Which method is used to create a capped collection?",
    "options": ["db.createCollection('name', {capped:true})", "db.newCollection('name')", "db.createCapped()", "db.cappedCollection()"],
    "answer": "db.createCollection('name', {capped:true})"
  },
  {
    "question": "Which method is used for MongoDB backup restoration?",
    "options": ["mongorestore", "mongobackup", "mongoback", "mongorecovery"],
    "answer": "mongorestore"
  },
  {
    "question": "What type of consistency model does MongoDB provide?",
    "options": ["Eventual consistency", "Strong consistency", "Weak consistency", "No consistency"],
    "answer": "Eventual consistency"
  },

  // crt 

  {
    "question": "If 5 workers can complete a job in 12 days, how many days will 3 workers take to complete the same job?",
    "options": ["20 days", "15 days", "18 days", "25 days"],
    "answer": "20 days"
  },
  {
    "question": "What is the next number in the series: 2, 6, 12, 20, 30, ?",
    "options": ["36", "40", "42", "44"],
    "answer": "42"
  },
  {
    "question": "A train 120 meters long is running at 60 km/h. How long will it take to pass a man standing on the platform?",
    "options": ["6 seconds", "7.2 seconds", "8 seconds", "5 seconds"],
    "answer": "7.2 seconds"
  },
  {
    "question": "If the ratio of boys to girls in a class is 3:4 and there are 21 boys, how many girls are there?",
    "options": ["28", "24", "30", "27"],
    "answer": "28"
  },
  {
    "question": "What is the value of x if 3x - 7 = 11?",
    "options": ["6", "5", "9", "18"],
    "answer": "6"
  },
  {
    "question": "Which of the following options is the odd one out: Apple, Orange, Banana, Potato?",
    "options": ["Apple", "Orange", "Banana", "Potato"],
    "answer": "Potato"
  },
  {
    "question": "Complete the analogy: Cat is to Kitten as Dog is to __?",
    "options": ["Puppy", "Cub", "Cubby", "Doggy"],
    "answer": "Puppy"
  },
  {
    "question": "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
    "options": ["Yes", "No", "Cannot be determined", "Some are"],
    "answer": "Yes"
  },
  {
    "question": "Find the missing number: 7, 14, 28, 56, __, 224",
    "options": ["112", "108", "110", "114"],
    "answer": "112"
  },
  {
    "question": "If 8x = 40, what is the value of x?",
    "options": ["3", "4", "5", "6"],
    "answer": "5"
  },
  {
    "question": "What comes next in the series: J, F, M, A, M, __?",
    "options": ["J", "S", "O", "N"],
    "answer": "J"
  },
  {
    "question": "In a certain code, if GREEN is coded as TIIVG, how is YELLOW coded?",
    "options": ["BOVVLI", "ABLLOW", "BMMVIL", "BLVOVI"],
    "answer": "BMMVIL"
  },
  {
    "question": "If 3 pencils cost 36 cents, how much do 5 pencils cost?",
    "options": ["60 cents", "50 cents", "45 cents", "48 cents"],
    "answer": "60 cents"
  },
  {
    "question": "Spot the pattern: A is to Z as B is to __?",
    "options": ["Y", "X", "W", "V"],
    "answer": "Y"
  },
  {
    "question": "If the day before yesterday was Thursday, what day will it be two days after tomorrow?",
    "options": ["Sunday", "Monday", "Tuesday", "Wednesday"],
    "answer": "Sunday"
  },
  {
    "question": "A clock shows the time as 3:15. What is the angle between the hour and the minute hands?",
    "options": ["7.5 degrees", "30 degrees", "37.5 degrees", "45 degrees"],
    "answer": "7.5 degrees"
  },
  {
    "question": "In a code language, if 'GOOD' is written as 'INFG', how is 'DAY' written?",
    "options": ["FCB", "FCZ", "FBA", "FCY"],
    "answer": "FCZ"
  },
  {
    "question": "Which number replaces the question mark? 4, 9, 16, 25, ?, 49",
    "options": ["30", "36", "35", "42"],
    "answer": "36"
  },
  {
    "question": "If the sum of two numbers is 64 and their difference is 8, what is the smaller number?",
    "options": ["26", "28", "18", "20"],
    "answer": "28"
  },
  {
    "question": "Arrange the words in the correct alphabetical order: Balloon, Ball, Bake, Ballot",
    "options": ["Ball, Balloon, Ballot, Bake", "Ball, Ballot, Balloon, Bake", "Ball, Ballot, Bake, Balloon", "Ball, Bake, Balloon, Ballot"],
    "answer": "Ball, Balloon, Ballot, Bake"
  },
  {
    "question": "Find the odd one out: 2, 3, 5, 9, 11, 15",
    "options": ["5", "3", "9", "11"],
    "answer": "9"
  },
  {
    "question": "If the code for 52 is 'CD', what is the code for 42?",
    "options": ["BC", "BD", "DC", "CB"],
    "answer": "BC"
  },
  {
    "question": "Which number completes the series: 1, 4, 9, 16, 25, __?",
    "options": ["30", "35", "36", "49"],
    "answer": "36"
  },
  {
    "question": "What is the next shape in the series: Circle, Triangle, Square, Pentagon, __?",
    "options": ["Hexagon", "Rectangle", "Hexagon", "Octagon"],
    "answer": "Hexagon"
  },
  {
    "question": "If 7 workers can do a job in 10 days, how many days will 14 workers take to do the same job?",
    "options": ["5", "7", "10", "14"],
    "answer": "5"
  },
  {
    "question": "In a code language, 'EARTH' is coded as 'DZSJG'. How is 'OCEAN' coded?",
    "options": ["NBFZM", "NBFZM", "NCAEM", "OBFAN"],
    "answer": "NBFZM"
  },
  {
    "question": "What is the next number in the sequence: 2, 6, 12, 20, 30, __?",
    "options": ["40", "42", "36", "32"],
    "answer": "42"
  },
  {
    "question": "Which of the following figures has four sides?",
    "options": ["Triangle", "Quadrilateral", "Pentagon", "Hexagon"],
    "answer": "Quadrilateral"
  },
  {
    "question": "Find the missing term in the series: 3, 6, 12, 24, __, 96",
    "options": ["36", "48", "64", "72"],
    "answer": "48"
  },
  {
    "question": "If the word 'FOUR' is coded as 6789, what is the code for 'OUR'?",
    "options": ["789", "678", "879", "987"],
    "answer": "789"
  },
  {
    "question": "In a clock, what is the angle between the hands at 6:30?",
    "options": ["105 degrees", "90 degrees", "75 degrees", "180 degrees"],
    "answer": "105 degrees"
  },
  {
    "question": "Which number is the square root of 256?",
    "options": ["12", "14", "16", "18"],
    "answer": "16"
  },
  {
    "question": "Find the odd one out: 2, 4, 6, 9, 10",
    "options": ["4", "6", "9", "10"],
    "answer": "9"
  },
  {
    "question": "Complete the analogy: Tree is to Leaf as Book is to __?",
    "options": ["Page", "Cover", "Chapter", "Paragraph"],
    "answer": "Page"
  },
  {
    "question": "If the cost price of 20 articles is equal to the selling price of 15 articles, find the profit percentage.",
    "options": ["20%", "25%", "30%", "33.33%"],
    "answer": "33.33%"
  },
  {
    "question": "Which of the following is not a prime number?",
    "options": ["2", "3", "4", "5"],
    "answer": "4"
  },
  {
    "question": "If the ratio of length to breadth of a rectangle is 3:2 and the perimeter is 50, find the length.",
    "options": ["15", "18", "20", "22"],
    "answer": "15"
  },
  {
    "question": "What number is missing: 5, 7, 10, 14, 19, __?",
    "options": ["24", "25", "26", "27"],
    "answer": "25"
  },
  {
    "question": "If the sum of the ages of father and son is 50 and father's age is 30 years more than son's age, find the son's age.",
    "options": ["10", "15", "20", "25"],
    "answer": "10"
  },
  {
    "question": "Find the missing number: 1, 4, 9, 16, 25, __?",
    "options": ["30", "35", "36", "42"],
    "answer": "36"
  },
  {
    "question": "A person runs at 6 km/hr. How long will he take to cover 1 km?",
    "options": ["10 minutes", "12 minutes", "8 minutes", "15 minutes"],
    "answer": "10 minutes"
  },
  {
    "question": "Which of the following words is an anagram of 'LISTEN'?",
    "options": ["SILENT", "ENLIST", "TINSEL", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "In a code, if 'CLOUD' is written as 'DQMPF', how is 'SILENT' written?",
    "options": ["TJMFDU", "TJMFDV", "TJMEFU", "TJMEFV"],
    "answer": "TJMFDU"
  },
  {
    "question": "Which of the following is the largest number?",
    "options": ["1/2", "2/5", "3/7", "4/9"],
    "answer": "1/2"
  },
  {
    "question": "Find the missing number: 13, 26, 39, __, 65",
    "options": ["50", "52", "55", "60"],
    "answer": "52"
  },
  {
    "question": "Which figure has no sides and no corners?",
    "options": ["Circle", "Triangle", "Rectangle", "Square"],
    "answer": "Circle"
  },
  {
    "question": "What is 15% of 200?",
    "options": ["15", "30", "25", "35"],
    "answer": "30"
  },
  {
    "question": "From the given options, identify the word that is a synonym of 'Eloquent'.",
    "options": ["Fluent", "Silent", "Shy", "Awkward"],
    "answer": "Fluent"
  },
  {
    "question": "If a bag contains 3 red, 4 green, and 5 blue balls, what is the probability of picking a green ball?",
    "options": ["4/12", "3/12", "5/12", "1/3"],
    "answer": "4/12"
  },
  {
    "question": "Which of the following is not a multiple of 3?",
    "options": ["21", "24", "28", "30"],
    "answer": "28"
  },
  {
    "question": "If 5 workers can complete a job in 12 days, how many days will 3 workers take to complete the same job?",
    "options": ["20 days", "15 days", "18 days", "25 days"],
    "answer": "20 days"
  },
  {
    "question": "What is the next number in the series: 2, 6, 12, 20, 30, ?",
    "options": ["36", "40", "42", "44"],
    "answer": "42"
  },
  {
    "question": "A train 120 meters long is running at 60 km/h. How long will it take to pass a man standing on the platform?",
    "options": ["6 seconds", "7.2 seconds", "8 seconds", "5 seconds"],
    "answer": "7.2 seconds"
  },
  {
    "question": "If the ratio of boys to girls in a class is 3:4 and there are 21 boys, how many girls are there?",
    "options": ["28", "24", "30", "27"],
    "answer": "28"
  },
  {
    "question": "What is the value of x if 3x - 7 = 11?",
    "options": ["6", "5", "9", "18"],
    "answer": "6"
  },
  {
    "question": "Which of the following options is the odd one out: Apple, Orange, Banana, Potato?",
    "options": ["Apple", "Orange", "Banana", "Potato"],
    "answer": "Potato"
  },
  {
    "question": "Complete the analogy: Cat is to Kitten as Dog is to __?",
    "options": ["Puppy", "Cub", "Cubby", "Doggy"],
    "answer": "Puppy"
  },
  {
    "question": "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
    "options": ["Yes", "No", "Cannot be determined", "Some are"],
    "answer": "Yes"
  },
  {
    "question": "Find the missing number: 7, 14, 28, 56, __, 224",
    "options": ["112", "108", "110", "114"],
    "answer": "112"
  },
  {
    "question": "If 8x = 40, what is the value of x?",
    "options": ["3", "4", "5", "6"],
    "answer": "5"
  },
  {
    "question": "What comes next in the series: J, F, M, A, M, __?",
    "options": ["J", "S", "O", "N"],
    "answer": "J"
  },
  {
    "question": "In a certain code, if GREEN is coded as TIIVG, how is YELLOW coded?",
    "options": ["BOVVLI", "ABLLOW", "BMMVIL", "BLVOVI"],
    "answer": "BMMVIL"
  },
  {
    "question": "If 3 pencils cost 36 cents, how much do 5 pencils cost?",
    "options": ["60 cents", "50 cents", "45 cents", "48 cents"],
    "answer": "60 cents"
  },
  {
    "question": "Spot the pattern: A is to Z as B is to __?",
    "options": ["Y", "X", "W", "V"],
    "answer": "Y"
  },
  {
    "question": "If the day before yesterday was Thursday, what day will it be two days after tomorrow?",
    "options": ["Sunday", "Monday", "Tuesday", "Wednesday"],
    "answer": "Sunday"
  },
  {
    "question": "A clock shows the time as 3:15. What is the angle between the hour and the minute hands?",
    "options": ["7.5 degrees", "30 degrees", "37.5 degrees", "45 degrees"],
    "answer": "7.5 degrees"
  },
  {
    "question": "In a code language, if 'GOOD' is written as 'INFG', how is 'DAY' written?",
    "options": ["FCB", "FCZ", "FBA", "FCY"],
    "answer": "FCZ"
  },
  {
    "question": "Which number replaces the question mark? 4, 9, 16, 25, ?, 49",
    "options": ["30", "36", "35", "42"],
    "answer": "36"
  },
  {
    "question": "If the sum of two numbers is 64 and their difference is 8, what is the smaller number?",
    "options": ["26", "28", "18", "20"],
    "answer": "28"
  },
  {
    "question": "Arrange the words in the correct alphabetical order: Balloon, Ball, Bake, Ballot",
    "options": ["Ball, Balloon, Ballot, Bake", "Ball, Ballot, Balloon, Bake", "Ball, Ballot, Bake, Balloon", "Ball, Bake, Balloon, Ballot"],
    "answer": "Ball, Balloon, Ballot, Bake"
  },
  {
    "question": "Find the odd one out: 2, 3, 5, 9, 11, 15",
    "options": ["5", "3", "9", "11"],
    "answer": "9"
  },
  {
    "question": "If the code for 52 is 'CD', what is the code for 42?",
    "options": ["BC", "BD", "DC", "CB"],
    "answer": "BC"
  },
  {
    "question": "Which number completes the series: 1, 4, 9, 16, 25, __?",
    "options": ["30", "35", "36", "49"],
    "answer": "36"
  },
  {
    "question": "What is the next shape in the series: Circle, Triangle, Square, Pentagon, __?",
    "options": ["Hexagon", "Rectangle", "Hexagon", "Octagon"],
    "answer": "Hexagon"
  },
  {
    "question": "If 7 workers can do a job in 10 days, how many days will 14 workers take to do the same job?",
    "options": ["5", "7", "10", "14"],
    "answer": "5"
  },
  {
    "question": "In a code language, 'EARTH' is coded as 'DZSJG'. How is 'OCEAN' coded?",
    "options": ["NBFZM", "NBFZM", "NCAEM", "OBFAN"],
    "answer": "NBFZM"
  },
  {
    "question": "What is the next number in the sequence: 2, 6, 12, 20, 30, __?",
    "options": ["40", "42", "36", "32"],
    "answer": "42"
  },
  {
    "question": "Which of the following figures has four sides?",
    "options": ["Triangle", "Quadrilateral", "Pentagon", "Hexagon"],
    "answer": "Quadrilateral"
  },
  {
    "question": "Find the missing term in the series: 3, 6, 12, 24, __, 96",
    "options": ["36", "48", "64", "72"],
    "answer": "48"
  },
  {
    "question": "If the word 'FOUR' is coded as 6789, what is the code for 'OUR'?",
    "options": ["789", "678", "879", "987"],
    "answer": "789"
  },
  {
    "question": "In a clock, what is the angle between the hands at 6:30?",
    "options": ["105 degrees", "90 degrees", "75 degrees", "180 degrees"],
    "answer": "105 degrees"
  },
  {
    "question": "Which number is the square root of 256?",
    "options": ["12", "14", "16", "18"],
    "answer": "16"
  },
  {
    "question": "Find the odd one out: 2, 4, 6, 9, 10",
    "options": ["4", "6", "9", "10"],
    "answer": "9"
  },
  {
    "question": "Complete the analogy: Tree is to Leaf as Book is to __?",
    "options": ["Page", "Cover", "Chapter", "Paragraph"],
    "answer": "Page"
  },
  {
    "question": "If the cost price of 20 articles is equal to the selling price of 15 articles, find the profit percentage.",
    "options": ["20%", "25%", "30%", "33.33%"],
    "answer": "33.33%"
  },
  {
    "question": "Which of the following is not a prime number?",
    "options": ["2", "3", "4", "5"],
    "answer": "4"
  },
  {
    "question": "If the ratio of length to breadth of a rectangle is 3:2 and the perimeter is 50, find the length.",
    "options": ["15", "18", "20", "22"],
    "answer": "15"
  },
  {
    "question": "What number is missing: 5, 7, 10, 14, 19, __?",
    "options": ["24", "25", "26", "27"],
    "answer": "25"
  },
  {
    "question": "If the sum of the ages of father and son is 50 and father's age is 30 years more than son's age, find the son's age.",
    "options": ["10", "15", "20", "25"],
    "answer": "10"
  },
  {
    "question": "Find the missing number: 1, 4, 9, 16, 25, __?",
    "options": ["30", "35", "36", "42"],
    "answer": "36"
  },
  {
    "question": "A person runs at 6 km/hr. How long will he take to cover 1 km?",
    "options": ["10 minutes", "12 minutes", "8 minutes", "15 minutes"],
    "answer": "10 minutes"
  },
  {
    "question": "Which of the following words is an anagram of 'LISTEN'?",
    "options": ["SILENT", "ENLIST", "TINSEL", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "In a code, if 'CLOUD' is written as 'DQMPF', how is 'SILENT' written?",
    "options": ["TJMFDU", "TJMFDV", "TJMEFU", "TJMEFV"],
    "answer": "TJMFDU"
  },
  {
    "question": "Which of the following is the largest number?",
    "options": ["1/2", "2/5", "3/7", "4/9"],
    "answer": "1/2"
  },
  {
    "question": "Find the missing number: 13, 26, 39, __, 65",
    "options": ["50", "52", "55", "60"],
    "answer": "52"
  },
  {
    "question": "Which figure has no sides and no corners?",
    "options": ["Circle", "Triangle", "Rectangle", "Square"],
    "answer": "Circle"
  },
  {
    "question": "What is 15% of 200?",
    "options": ["15", "30", "25", "35"],
    "answer": "30"
  },
  {
    "question": "From the given options, identify the word that is a synonym of 'Eloquent'.",
    "options": ["Fluent", "Silent", "Shy", "Awkward"],
    "answer": "Fluent"
  },
  {
    "question": "If a bag contains 3 red, 4 green, and 5 blue balls, what is the probability of picking a green ball?",
    "options": ["4/12", "3/12", "5/12", "1/3"],
    "answer": "4/12"
  },
  {
    "question": "Which of the following is not a multiple of 3?",
    "options": ["21", "24", "28", "30"],
    "answer": "28"
  },
  {
    "question": "If 6 workers can complete a task in 8 days, how many days will 4 workers take to complete the same task?",
    "options": ["12 days", "10 days", "9 days", "8 days"],
    "answer": "12 days"
  },
  {
    "question": "What is the next number in the series: 3, 9, 27, 81, __?",
    "options": ["108", "162", "243", "324"],
    "answer": "243"
  },
  {
    "question": "A train 150 meters long passes a pole in 15 seconds. What is the speed of the train?",
    "options": ["30 km/h", "36 km/h", "40 km/h", "54 km/h"],
    "answer": "36 km/h"
  },
  {
    "question": "If the ratio of cats to dogs is 5:3 and there are 40 cats, how many dogs are there?",
    "options": ["20", "24", "25", "27"],
    "answer": "24"
  },
  {
    "question": "Solve for x: 2x + 3 = 15",
    "options": ["5", "6", "7", "8"],
    "answer": "6"
  },
  {
    "question": "Identify the odd one out: Carrot, Potato, Tomato, Cucumber",
    "options": ["Carrot", "Potato", "Tomato", "Cucumber"],
    "answer": "Tomato"
  },
  {
    "question": "Complete the analogy: Bird is to Fly as Fish is to __?",
    "options": ["Swim", "Jump", "Run", "Dive"],
    "answer": "Swim"
  },
  {
    "question": "If all Alphabets are Numerals and all Numerals are Symbols, are all Alphabets Symbols?",
    "options": ["Yes", "No", "Cannot be determined", "Some are"],
    "answer": "Yes"
  },
  {
    "question": "Find the missing number: 10, 20, 40, 80, __, 320",
    "options": ["120", "160", "200", "240"],
    "answer": "160"
  },
  {
    "question": "If 7x = 49, what is the value of x?",
    "options": ["6", "7", "8", "9"],
    "answer": "7"
  },
  {
    "question": "What comes next in the sequence: A, C, E, G, __?",
    "options": ["I", "H", "J", "K"],
    "answer": "I"
  },
  // {
  //   "question": "In a certain code, if "FOOD" is coded as "GPPF", how is 'WATER' coded?",
  //   "options": ["XBTFQ", "VZSDQ", "XZTFQ", "YBTFQ"],
  //   "answer": "XBTFQ"
  // },
  {
    "question": "If 4 pencils cost 28 cents, how much do 7 pencils cost?",
    "options": ["49 cents", "44 cents", "42 cents", "45 cents"],
    "answer": "49 cents"
  },
  {
    "question": "Spot the pattern: Z is to A as Y is to __?",
    "options": ["B", "X", "C", "D"],
    "answer": "B"
  },
  {
    "question": "If yesterday was Thursday, what day will it be 4 days after tomorrow?",
    "options": ["Sunday", "Monday", "Tuesday", "Wednesday"],
    "answer": "Tuesday"
  },
  {
    "question": "A clock shows the time as 2:20. What is the angle between the hour and minute hands?",
    "options": ["50 degrees", "40 degrees", "45 degrees", "60 degrees"],
    "answer": "50 degrees"
  },
  {
    "question": "In a code language, if 'KING' is written as 'LJMP', how is 'QUEEN' written?",
    "options": ["SWGGP", "SWEER", "SVFFO", "SVGFP"],
    "answer": "SWGGP"
  },
  {
    "question": "Which number replaces the question mark? 5, 11, 17, 23, ?, 35",
    "options": ["29", "28", "30", "31"],
    "answer": "29"
  },
  {
    "question": "If the sum of two numbers is 100 and their difference is 40, what is the smaller number?",
    "options": ["30", "40", "20", "50"],
    "answer": "30"
  },
  {
    "question": "Arrange the words in the correct alphabetical order: Apple, Apricot, Avocado, Banana",
    "options": ["Apple, Apricot, Avocado, Banana", "Apricot, Apple, Avocado, Banana", "Apple, Avocado, Apricot, Banana", "Avocado, Apricot, Apple, Banana"],
    "answer": "Apple, Apricot, Avocado, Banana"
  },
  {
    "question": "Find the odd one out: 4, 7, 12, 15, 18",
    "options": ["7", "12", "15", "18"],
    "answer": "12"
  },
  {
    "question": "If the code for 31 is 'CE', what is the code for 42?",
    "options": ["BD", "DC", "AB", "CB"],
    "answer": "BD"
  },
  {
    "question": "Which number completes the series: 4, 9, 16, 25, 36, __?",
    "options": ["42", "49", "50", "56"],
    "answer": "49"
  },
  {
    "question": "What is the next shape in the series: Square, Triangle, Square, Triangle, __?",
    "options": ["Square", "Triangle", "Circle", "Rectangle"],
    "answer": "Square"
  },
  {
    "question": "If 5 workers can do a job in 15 days, how many days will 10 workers take?",
    "options": ["5", "6", "7", "8"],
    "answer": "7.5"
  },
  {
    "question": "In a code language, 'EARTH' is coded as 'DZQTI'. How is 'OCEAN' coded?",
    "options": ["NBDZM", "NBCDM", "OBFAN", "NBDAN"],
    "answer": "NBDZM"
  },
  {
    "question": "What is the next number in the sequence: 3, 6, 9, 12, __?",
    "options": ["14", "15", "18", "21"],
    "answer": "15"
  },
  {
    "question": "Which of the following shapes has four equal sides and four right angles?",
    "options": ["Rectangle", "Square", "Rhombus", "Parallelogram"],
    "answer": "Square"
  },
  {
    "question": "Find the missing term in the series: 5, 10, 20, 40, __, 160",
    "options": ["50", "60", "80", "90"],
    "answer": "80"
  },
  {
    "question": "If the word 'CAST' is written as 'DBTU', how is 'PLAN' written?",
    "options": ["QMBO", "PLOB", "QMZN", "QLAN"],
    "answer": "QMBO"
  },
  {
    "question": "In a clock, what is the angle between the hands at 9:00?",
    "options": ["90 degrees", "180 degrees", "270 degrees", "0 degrees"],
    "answer": "90 degrees"
  },
  {
    "question": "Which number is the square root of 49?",
    "options": ["6", "7", "8", "9"],
    "answer": "7"
  },
  {
    "question": "Find the odd one out: 5, 10, 15, 21, 25",
    "options": ["10", "15", "21", "25"],
    "answer": "21"
  },
  {
    "question": "Complete the analogy: Book is to Page as Tree is to __?",
    "options": ["Leaf", "Root", "Branch", "Trunk"],
    "answer": "Leaf"
  },
  {
    "question": "If the cost price of 10 articles is equal to the selling price of 8 articles, find the profit percentage.",
    "options": ["15%", "20%", "25%", "30%"],
    "answer": "25%"
  },
  {
    "question": "Which of the following is not a prime number?",
    "options": ["2", "5", "6", "7"],
    "answer": "6"
  },
  {
    "question": "If the ratio of length to breadth of a rectangle is 4:3 and the perimeter is 56, find the length.",
    "options": ["16", "18", "20", "22"],
    "answer": "16"
  },
  {
    "question": "What number is missing: 3, 6, 9, 12, 15, __?",
    "options": ["18", "20", "21", "22"],
    "answer": "18"
  },
  {
    "question": "If the sum of the ages of father and son is 54 and father's age is 30 years more than son's age, find the son's age.",
    "options": ["12", "15", "24", "25"],
    "answer": "12"
  },
  {
    "question": "Find the missing number: 2, 5, 10, 17, __, 37",
    "options": ["24", "26", "28", "30"],
    "answer": "26"
  },
  {
    "question": "A person walks at 4 km/hr. How long will he take to cover 2 km?",
    "options": ["15 minutes", "20 minutes", "25 minutes", "30 minutes"],
    "answer": "30 minutes"
  },
  {
    "question": "Which of the following words is an anagram of 'ENLIST'?",
    "options": ["SILENT", "LISTEN", "TINSEL", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "In a code, if 'LIGHT' is written as 'MJHIU', how is 'SOUND' written?",
    "options": ["TPVOE", "TPOUE", "TPUNE", "TPVNE"],
    "answer": "TPVOE"
  },
  {
    "question": "Which of the following is the smallest number?",
    "options": ["2/3", "3/4", "4/5", "5/6"],
    "answer": "2/3"
  },
  {
    "question": "Find the missing number: 11, 22, 33, 44, __, 66",
    "options": ["54", "55", "56", "57"],
    "answer": "55"
  },
  {
    "question": "Which figure has no corners and no edges?",
    "options": ["Circle", "Square", "Rectangle", "Triangle"],
    "answer": "Circle"
  },
  {
    "question": "What is 20% of 150?",
    "options": ["25", "30", "35", "20"],
    "answer": "30"
  },
  {
    "question": "From the given options, identify the synonym of 'Brilliant'.",
    "options": ["Intelligent", "Dull", "Shy", "Awkward"],
    "answer": "Intelligent"
  },
  {
    "question": "If a bag contains 5 blue, 6 red, and 9 green balls, what is the probability of picking a red ball?",
    "options": ["5/20", "6/20", "9/20", "6/19"],
    "answer": "6/20"
  },
  {
    "question": "Which of the following is not a multiple of 4?",
    "options": ["16", "20", "23", "24"],
    "answer": "23"
  },


  {
    "question": "A man with a PhD in political science is running for office. Does his academic background guarantee he will be an effective politician?",
    "options": ["Yes, always", "No, not necessarily", "Only if he has political experience", "Only if voters like him"],
    "answer": "No, not necessarily"
  },
  {
    "question": "What questions should you ask to evaluate the adequacy of information before making a decision?",
    "options": ["What’s happening?", "Why is it important?", "What don’t I see?", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "Which of the following represents a logical fallacy?",
    "options": [
      "Appealing to emotion", 
      "Using statistical data", 
      "Providing evidence", 
      "Asking for clarification"
    ],
    "answer": "Appealing to emotion"
  },
  {
    "question": "How does one verify the credibility of a source?",
    "options": [
      "Based on reputation and evidence", 
      "By trusting the speaker blindly", 
      "Ignoring conflicting information", 
      "Assuming all online sources are credible"
    ],
    "answer": "Based on reputation and evidence"
  },
  {
    "question": "If a conclusion is based on incomplete data, what is this called?",
    "options": [
      "Hasty generalization", 
      "Strong argument", 
      "Reasoned conclusion", 
      "Valid assumption"
    ],
    "answer": "Hasty generalization"
  },
  {
    "question": "When faced with conflicting information, what should you do?",
    "options": [
      "Accept the first version", 
      "Examine evidence carefully", 
      "Ignore conflicting details", 
      "Ask for no more information"
    ],
    "answer": "Examine evidence carefully"
  },
  {
    "question": "What is the importance of clarifying assumptions in critical thinking?",
    "options": [
      "They affect the validity of conclusions", 
      "They are irrelevant to arguments", 
      "They should never be questioned", 
      "They always guarantee truth"
    ],
    "answer": "They affect the validity of conclusions"
  },
  {
    "question": "Which question helps evaluate the perspective of a speaker?",
    "options": [
      "Who is saying it?", 
      "What is being said?", 
      "When was it said?", 
      "How long ago?"
    ],
    "answer": "Who is saying it?"
  },
  {
    "question": "If an argument depends mostly on feelings rather than facts, it is:",
    "options": [
      "Emotionally biased", 
      "Logically sound", 
      "Fact-based", 
      "Strong"
    ],
    "answer": "Emotionally biased"
  },
  {
    "question": "What is a key habit of mind for critical thinkers?",
    "options": [
      "Being open to changing opinions", 
      "Sticking strictly to first impressions", 
      "Accepting all information as true", 
      "Ignoring evidence"
    ],
    "answer": "Being open to changing opinions"
  },
  {
    "question": "Critical thinking means asking questions that:",
    "options": [
      "Seek to understand thoroughly", 
      "Ignore details", 
      "Focus on opinions only", 
      "Assume information is complete"
    ],
    "answer": "Seek to understand thoroughly"
  },
  {
    "question": "Which of the following best describes 'confirmation bias'?",
    "options": [
      "Searching for information that supports a belief", 
      "Considering all evidence equally", 
      "Ignoring personal beliefs", 
      "Evaluating arguments objectively"
    ],
    "answer": "Searching for information that supports a belief"
  },
  {
    "question": "When analyzing an argument, what should you first identify?",
    "options": [
      "Main and sub-claims", 
      "The speaker’s tone", 
      "The length of the argument", 
      "Humor used"
    ],
    "answer": "Main and sub-claims"
  },
  {
    "question": "What does it mean to be 'fair-minded' in critical thinking?",
    "options": [
      "Considering multiple points of view impartially", 
      "Rejecting alternative views", 
      "Agreeing only with your own opinion", 
      "Ignoring evidence"
    ],
    "answer": "Considering multiple points of view impartially"
  },
  {
    "question": "Which of the following is NOT a characteristic of critical thinking?",
    "options": [
      "Open-mindedness", 
      "Intellectual humility", 
      "Unquestioning acceptance", 
      "Rational analysis"
    ],
    "answer": "Unquestioning acceptance"
  },
  {
    "question": "Why is it important to question your own conclusions?",
    "options": [
      "To avoid errors and bias", 
      "Because your conclusions are always wrong", 
      "To confuse others", 
      "To delay decision-making"
    ],
    "answer": "To avoid errors and bias"
  },
  {
    "question": "What is the purpose of the 'spectrum of authority' when evaluating arguments?",
    "options": [
      "To distinguish emotional from scientific arguments", 
      "To rate speakers by popularity", 
      "To accept all opinions equally", 
      "To judge grammar"
    ],
    "answer": "To distinguish emotional from scientific arguments"
  },
  {
    "question": "In critical thinking, asking 'What else?' encourages:",
    "options": [
      "Exploring alternative ideas", 
      "Stopping at the first answer", 
      "Ignoring other perspectives", 
      "Making quick assumptions"
    ],
    "answer": "Exploring alternative ideas"
  },
  {
    "question": "What is an example of a 'hot' end argument in the spectrum of authority?",
    "options": [
      "Appeals to feelings or beliefs", 
      "Scientific data", 
      "Empirical evidence", 
      "Facts"
    ],
    "answer": "Appeals to feelings or beliefs"
  },
  {
    "question": "What does it mean to 'examine arguments' in critical thinking?",
    "options": [
      "Identify facts and separate them from opinions", 
      "Accept all statements", 
      "Ignore evidence", 
      "Follow popular belief"
    ],
    "answer": "Identify facts and separate them from opinions"
  },
  {
    "question": "A man with a PhD in political science is running for office. Does his academic background guarantee he will be an effective politician?",
    "options": ["Yes, always", "No, not necessarily", "Only if he has political experience", "Only if voters like him"],
    "answer": "No, not necessarily"
  },
  {
    "question": "What questions should you ask to evaluate the adequacy of information before making a decision?",
    "options": ["What’s happening?", "Why is it important?", "What don’t I see?", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "Which of the following represents a logical fallacy?",
    "options": ["Appealing to emotion", "Using statistical data", "Providing evidence", "Asking for clarification"],
    "answer": "Appealing to emotion"
  },
  {
    "question": "How does one verify the credibility of a source?",
    "options": ["Based on reputation and evidence", "By trusting the speaker blindly", "Ignoring conflicting information", "Assuming all online sources are credible"],
    "answer": "Based on reputation and evidence"
  },
  {
    "question": "If a conclusion is based on incomplete data, what is this called?",
    "options": ["Hasty generalization", "Strong argument", "Reasoned conclusion", "Valid assumption"],
    "answer": "Hasty generalization"
  },
  {
    "question": "When faced with conflicting information, what should you do?",
    "options": ["Accept the first version", "Examine evidence carefully", "Ignore conflicting details", "Ask for no more information"],
    "answer": "Examine evidence carefully"
  },
  {
    "question": "What is the importance of clarifying assumptions in critical thinking?",
    "options": ["They affect the validity of conclusions", "They are irrelevant to arguments", "They should never be questioned", "They always guarantee truth"],
    "answer": "They affect the validity of conclusions"
  },
  {
    "question": "Which question helps evaluate the perspective of a speaker?",
    "options": ["Who is saying it?", "What is being said?", "When was it said?", "How long ago?"],
    "answer": "Who is saying it?"
  },
  {
    "question": "If an argument depends mostly on feelings rather than facts, it is:",
    "options": ["Emotionally biased", "Logically sound", "Fact-based", "Strong"],
    "answer": "Emotionally biased"
  },
  {
    "question": "What is a key habit of mind for critical thinkers?",
    "options": ["Being open to changing opinions", "Sticking strictly to first impressions", "Accepting all information as true", "Ignoring evidence"],
    "answer": "Being open to changing opinions"
  },
  {
    "question": "Critical thinking means asking questions that:",
    "options": ["Seek to understand thoroughly", "Ignore details", "Focus on opinions only", "Assume information is complete"],
    "answer": "Seek to understand thoroughly"
  },
  {
    "question": "Which of the following best describes 'confirmation bias'?",
    "options": ["Searching for information that supports a belief", "Considering all evidence equally", "Ignoring personal beliefs", "Evaluating arguments objectively"],
    "answer": "Searching for information that supports a belief"
  },
  {
    "question": "When analyzing an argument, what should you first identify?",
    "options": ["Main and sub-claims", "The speaker’s tone", "The length of the argument", "Humor used"],
    "answer": "Main and sub-claims"
  },
  {
    "question": "What does it mean to be 'fair-minded' in critical thinking?",
    "options": ["Considering multiple points of view impartially", "Rejecting alternative views", "Agreeing only with your own opinion", "Ignoring evidence"],
    "answer": "Considering multiple points of view impartially"
  },
  {
    "question": "Which of the following is NOT a characteristic of critical thinking?",
    "options": ["Open-mindedness", "Intellectual humility", "Unquestioning acceptance", "Rational analysis"],
    "answer": "Unquestioning acceptance"
  },
  {
    "question": "Why is it important to question your own conclusions?",
    "options": ["To avoid errors and bias", "Because your conclusions are always wrong", "To confuse others", "To delay decision-making"],
    "answer": "To avoid errors and bias"
  },
  {
    "question": "What is the purpose of the 'spectrum of authority' when evaluating arguments?",
    "options": ["To distinguish emotional from scientific arguments", "To rate speakers by popularity", "To accept all opinions equally", "To judge grammar"],
    "answer": "To distinguish emotional from scientific arguments"
  },
  {
    "question": "In critical thinking, asking 'What else?' encourages:",
    "options": ["Exploring alternative ideas", "Stopping at the first answer", "Ignoring other perspectives", "Making quick assumptions"],
    "answer": "Exploring alternative ideas"
  },
  {
    "question": "What is an example of a 'hot' end argument in the spectrum of authority?",
    "options": ["Appeals to feelings or beliefs", "Scientific data", "Empirical evidence", "Facts"],
    "answer": "Appeals to feelings or beliefs"
  },
  {
    "question": "What does it mean to 'examine arguments' in critical thinking?",
    "options": ["Identify facts and separate them from opinions", "Accept all statements", "Ignore evidence", "Follow popular belief"],
    "answer": "Identify facts and separate them from opinions"
  },
  {
    "question": "If all cats are animals and some animals are dogs, are all cats dogs?",
    "options": ["Yes", "No", "Cannot be determined", "Some are"],
    "answer": "No"
  },
  {
    "question": "Find the next number in the sequence: 2, 4, 8, 16, __?",
    "options": ["18", "24", "32", "64"],
    "answer": "32"
  },
  {
    "question": "Which figure completes the series: Circle, Triangle, Square, Circle, Triangle, __?",
    "options": ["Square", "Circle", "Pentagon", "Hexagon"],
    "answer": "Square"
  },
  {
    "question": "If John is older than Mary and Mary is older than Alice, who is the youngest?",
    "options": ["John", "Mary", "Alice", "Cannot be determined"],
    "answer": "Alice"
  },
  {
    "question": "If six men can build six houses in six days, how many days will 12 men take to build 12 houses?",
    "options": ["3", "6", "12", "9"],
    "answer": "6"
  },
  {
    "question": "A clock shows the time as 3:15. What is the angle between the hour and minute hands?",
    "options": ["7.5°", "30°", "37.5°", "45°"],
    "answer": "7.5°"
  },
  {
    "question": "Which number is missing in the series: 1, 4, 9, 16, __, 36?",
    "options": ["20", "25", "30", "24"],
    "answer": "25"
  },
  {
    "question": "If in a certain code 'LAB' means 'OMB', what does 'CAT' mean?",
    "options": ["ENV", "BDU", "DBU", "ENW"],
    "answer": "ENV"
  },
  {
    "question": "Find the odd one out: 2, 3, 5, 7, 9, 11",
    "options": ["2", "3", "9", "11"],
    "answer": "9"
  },
  {
    "question": "Which word does not belong: Apple, Banana, Carrot, Mango",
    "options": ["Apple", "Banana", "Carrot", "Mango"],
    "answer": "Carrot"
  },
  {
    "question": "If two pencils cost 8 cents, how much do five pencils cost?",
    "options": ["18", "20", "22", "24"],
    "answer": "20"
  },
  {
    "question": "Select the word that best fits the analogy: Book is to Reading as Fork is to __?",
    "options": ["Drawing", "Writing", "Eating", "Stirring"],
    "answer": "Eating"
  },
  {
    "question": "If it takes 10 hours for 3 workers to paint a wall, how long will it take 5 workers?",
    "options": ["6 hours", "8 hours", "4 hours", "5 hours"],
    "answer": "6 hours"
  },
  {
    "question": "Find the next number in the progression: 3, 6, 12, 24, __?",
    "options": ["36", "48", "60", "72"],
    "answer": "48"
  },
  {
    "question": "Determine the number of triangles in the figure drawn with overlapping shapes.",
    "options": ["16", "18", "20", "22"],
    "answer": "Depends on figure"
  },
  {
    "question": "What is the next letter in the series: A, C, F, J, O, __?",
    "options": ["S", "T", "U", "V"],
    "answer": "U"
  },
  {
    "question": "If all roses are flowers and some flowers fade quickly, do all roses fade quickly?",
    "options": ["Yes", "No", "Not necessarily", "Cannot be determined"],
    "answer": "Not necessarily"
  },
  {
    "question": "Which of the following does not belong: Bike, Car, Train, Helicopter",
    "options": ["Bike", "Car", "Train", "Helicopter"],
    "answer": "Bike"
  },
  {
    "question": "If today is Monday, what day will it be after 50 days?",
    "options": ["Wednesday", "Thursday", "Friday", "Saturday"],
    "answer": "Wednesday"
  },
  {
    "question": "Find the missing number: 5, 10, 20, 40, ?",
    "options": ["70", "75", "80", "85"],
    "answer": "80"
  },
  {
    "question": "John is twice as old as Mark. Mark is three years older than Tim. What is Tim's age if John is 30?",
    "options": ["9", "12", "15", "8"],
    "answer": "9"
  },
  {
    "question": "In a family, father is twice as old as son. After 10 years, father will be 1.5 times the age of son. What is the son's current age?",
    "options": ["20", "25", "30", "15"],
    "answer": "20"
  },
  {
    "question": "If 2x + 3 = 15, find the value of x.",
    "options": ["5", "6", "7", "8"],
    "answer": "6"
  },
  {
    "question": "Select the odd one out: Monday, Tuesday, Wednesday, January",
    "options": ["Monday", "Tuesday", "Wednesday", "January"],
    "answer": "January"
  },
  {
    "question": "What is the next number in the series: 1, 3, 6, 10, 15, ?",
    "options": ["18", "20", "21", "22"],
    "answer": "21"
  },
  {
    "question": "Which word best completes the analogy: Hand is to Glove as Foot is to __?",
    "options": ["Shoe", "Sock", "Slipper", "Boot"],
    "answer": "Shoe"
  },
  {
    "question": "There are 5 green balls, 6 red balls, and 4 blue balls in a bag. What is the probability of picking a green ball?",
    "options": ["5/15", "6/15", "4/15", "5/12"],
    "answer": "5/15"
  },
  {
    "question": "Which pair of words are opposites?",
    "options": ["Win-Lose", "Happy-Joy", "Big-Bigger", "Old-Older"],
    "answer": "Win-Lose"
  },
  {
    "question": "Which number replaces the question mark: 4, 6, 9, 6, 14, 6, ?",
    "options": ["6", "19", "20", "21"],
    "answer": "19"
  },
  {
    "question": "In logic, if p -> q and q -> r are true, then what can be concluded?",
    "options": ["p -> r", "r -> p", "q -> p", "r -> q"],
    "answer": "p -> r"
  },
  {
    "question": "If two dice are rolled, what is the probability that the sum is 7?",
    "options": ["1/6", "1/12", "1/36", "1/9"],
    "answer": "1/6"
  },
  {
    "question": "Find the code for 'APPLE' if each letter is shifted by one position in the alphabet.",
    "options": ["BQMMF", "AQPLA", "BQOKF", "BPPLA"],
    "answer": "BQMMF"
  },
  {
    "question": "What comes next in the pattern: Z, X, V, T, __?",
    "options": ["S", "R", "P", "Q"],
    "answer": "R"
  },
  {
    "question": "If 4 people can paint a wall in 6 hours, how many hours will 2 people take to paint the same wall?",
    "options": ["3", "6", "12", "15"],
    "answer": "12"
  },
  {
    "question": "Which word does not belong: Apple, Banana, Orange, Carrot",
    "options": ["Apple", "Banana", "Orange", "Carrot"],
    "answer": "Carrot"
  },
  {
    "question": "Choose the missing number: 7, 10, 8, 11, 9, 12, __?",
    "options": ["11", "10", "13", "14"],
    "answer": "10"
  },
  {
    "question": "If all roses are flowers and some flowers wilt quickly, are all roses wilt quickly?",
    "options": ["Yes", "No", "Cannot be determined", "Some are"],
    "answer": "No"
  },
  {
    "question": "Find the odd one out: Square, Rectangle, Circle, Triangle",
    "options": ["Circle", "Square", "Rectangle", "Triangle"],
    "answer": "Circle"
  },
  {
    "question": "What is the next number in the series: 0, 1, 1, 2, 3, 5, ?",
    "options": ["7", "8", "9", "10"],
    "answer": "8"
  },
  {
    "question": "Select the odd one out: Dog, Cat, Lion, Bird",
    "options": ["Dog", "Cat", "Lion", "Bird"],
    "answer": "Bird"
  },
  {
    "question": "An object is thrown vertically upward. What is its velocity at the highest point?",
    "options": ["Highest", "Zero", "Minimum", "Maximum"],
    "answer": "Zero"
  },
  {
    "question": "If y is directly proportional to x and y=10 when x=2, what is y when x=5?",
    "options": ["20", "25", "30", "35"],
    "answer": "25"
  },
  {
    "question": "If A is older than B and B is older than C, which of the following is true?",
    "options": ["A is youngest", "B is youngest", "C is youngest", "Cannot be determined"],
    "answer": "C is youngest"
  },
  {
    "question": "How many sides does a hexagon have?",
    "options": ["5", "6", "7", "8"],
    "answer": "6"
  },
  {
    "question": "What is the code for 'HAPPY' if each letter is shifted 2 positions forward in the alphabet?",
    "options": ["JC RRAA", "JC RRDA", "JA RRCA", "JB RRAA"],
    "answer": "JC RRCA"
  },
  {
    "question": "If a factory produces 400 units in 5 hours, what is the production rate per hour?",
    "options": ["100", "80", "120", "90"],
    "answer": "80"
  },
  {
    "question": "Choose the odd one out: Diamond, Ruby, Sapphire, Emerald",
    "options": ["Diamond", "Ruby", "Sapphire", "Emerald"],
    "answer": "Diamond"
  },
  {
    "question": "In a code, if CAT is written as DBU, what is DOG written as?",
    "options": ["EPH", "CNG", "EOG", "DPH"],
    "answer": "EPH"
  },
  {
    "question": "What is the next number: 2, 6, 12, 20, 30, __?",
    "options": ["36", "40", "42", "48"],
    "answer": "42"
  },
  {
    "question": "If today is Tuesday, what day was 3 days before yesterday?",
    "options": ["Friday", "Saturday", "Sunday", "Monday"],
    "answer": "Friday"
  },
  {
    "question": "Find the missing number in the sequence: 3, 8, 15, 24, 35, __?",
    "options": ["46", "47", "49", "50"],
    "answer": "48"
  }
];

function shuffleArray(arr) {
  // Fisher–Yates shuffle
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function App() {
  const quizSizes = [10, 20, 30, 40, 50];
  const [stage, setStage] = useState("home"); // 'home' | 'quiz' | 'result'
  const [quizSize, setQuizSize] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Start quiz with selected size
  const startQuiz = (size) => {
    // Pick random 'size' questions
    const selectedQuestions = shuffleArray(fullQuestionBank).slice(0, size);
    setQuizSize(size);
    setQuestions(selectedQuestions);
    setCurrentQIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setStage("quiz");
  };

  const currentQuestion = questions[currentQIndex];

  const handleOptionClick = (option) => {
    if (showAnswer) return; // prevent changing after submit

    setSelectedOption(option);
    setShowAnswer(true);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentQIndex + 1 < quizSize) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      setStage("result");
    }
  };

  const goHome = () => {
    setStage("home");
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f2f5;
          margin: 0; padding: 0;
          display: flex; justify-content: center; align-items: flex-start;
          min-height: 100vh;
          padding: 20px;
        }
        .app-container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
          padding: 20px;
          max-width: 600px;
          width: 100%;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        .button-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        button {
          font-size: 16px;
          padding: 10px 25px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          background-color: #007bff;
          color: white;
          transition: background-color 0.3s ease;
          user-select: none;
        }
        button:hover:not(:disabled) {
          background-color: #0056b3;
        }
        button:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
        .scoreboard {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #222;
          color: #0f0;
          font-weight: bold;
          font-size: 18px;
          padding: 8px 15px;
          border-radius: 5px;
          user-select: none;
          z-index: 100;
        }
        .question-container {
          margin-bottom: 20px;
          font-weight: bold;
          font-size: 18px;
        }
        .options-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: black;
        }
        .option-btn {
          padding: 12px 15px;
          font-size: 16px;
          border-radius: 5px;
          border: 2px solid transparent;
          cursor: pointer;
          color: black;
          text-align: left;
          transition: background-color 0.4s ease, border-color 0.4s ease;
          user-select: none;
          background-color: #f9f9f9;
        }
        .option-btn:hover:not(:disabled) {
          background-color: #e6f0ff;
        }
        .option-btn.correct {
          background-color: #d4edda !important;
          border-color: #28a745 !important;
          color: #155724;
          cursor: default;
        }
        .option-btn.incorrect {
          background-color: #f8d7da !important;
          border-color: #dc3545 !important;
          color: #721c24;
          cursor: default;
        }
        .submit-btn {
          margin-top: 20px;
          background-color: #28a745;
          font-weight: bold;
        }
        .submit-btn:disabled {
          background-color: #94d3a2;
          cursor: not-allowed;
        }
        .next-btn {
          margin-top: 20px;
          background-color: #17a2b8;
        }
        .home-btn {
          display: block;
          margin: 30px auto 0 auto;
          background-color: #6c757d;
        }
      `}</style>

      <div className="app-container" role="main" aria-live="polite" aria-atomic="true">
        <h1>Lumen Quiz App</h1>

        {stage === "home" && (
          <>
            <p style={{ textAlign: "center", marginBottom: "25px" }}>
              Select the number of quiz questions:
            </p>
            <div className="button-group" role="group" aria-label="Select quiz size">
              {quizSizes.map((size) => (
                <button key={size} onClick={() => startQuiz(size)}>
                  Quiz for {size} Questions
                </button>
              ))}
            </div>
          </>
        )}

        {stage === "quiz" && currentQuestion && (
          <>
            <div className="scoreboard" aria-label={`Score: ${score} out of ${quizSize}`}>
              Score: {score} / {quizSize}
            </div>

            <div className="question-container" aria-live="polite" tabIndex={-1}>
              Question {currentQIndex + 1} of {quizSize}:
              <br />
              {currentQuestion.question}
            </div>

            <div className="options-container" role="list" aria-label="Answer options">
              {currentQuestion.options.map((option, idx) => {
                let className = "option-btn";
                if (showAnswer) {
                  if (option === currentQuestion.answer) {
                    className += " correct";
                  } else if (option === selectedOption) {
                    className += " incorrect";
                  }
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className={className}
                    disabled={showAnswer}
                    role="listitem"
                    aria-pressed={selectedOption === option}
                    aria-disabled={showAnswer}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {showAnswer ? (
              <button className="next-btn" onClick={nextQuestion} autoFocus>
                {currentQIndex + 1 === quizSize ? "See Results" : "Next Question"}
              </button>
            ) : (
              <p style={{ marginTop: 20, fontStyle: "italic" }}>
                Please select an option to submit your answer
              </p>
            )}
          </>
        )}

        {stage === "result" && (
          <>
            <div style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>
              Quiz complete! <br />
              Your score: {score} / {quizSize}
            </div>
            <button className="home-btn" onClick={goHome} autoFocus>
              Go to Home
            </button>
          </>
        )}
      </div>
    </>
  );
}
