import { CardsType, NavSection, Navtypes, QuizzDataTypes } from "./types";

export const Navdata: Navtypes[] = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Features",
        link: "/about"
    },
    {
        title: "Create Quiz",
        link: "/quiz"
    },
]

export const navItems: NavSection[] = [
    {
        title: "Company",
        links: [
            { title: "About Us", to: "/about" },
            { title: "Contact", to: "/contact" }
        ]
    },
    {
        title: "Services",
        links: [
            { title: "Web Development", to: "/services/web-development" },
            { title: "Digital Marketing", to: "/services/digital-marketing" },
            { title: "UI/UX Design", to: "/services/ui-ux-design" }
        ]
    },
    {
        title: "Courses",
        links: [
            { title: "Web Development Bootcamp", to: "/courses/web-development-bootcamp" },
            { title: "Digital Marketing Mastery", to: "/courses/digital-marketing-mastery" },
            { title: "UI/UX Fundamentals", to: "/courses/ui-ux-fundamentals" }
        ]
    }
];

export const CardsData: CardsType[] = [
    {
        title: "Question Generator",
        description: "Generate a diverse range of question types from a multitude of source materials, including PDFs, Word documents, video and audio files, images, web links, and specified topics."

    },
    {
        title: "Question Generator",
        description: "Generate a diverse range of question types from a multitude of source materials, including PDFs, Word documents, video and audio files, images, web links, and specified topics."

    },
    {
        title: "Question Generator",
        description: "Generate a diverse range of question types from a multitude of source materials, including PDFs, Word documents, video and audio files, images, web links, and specified topics."

    },
    {
        title: "Question Generator",
        description: "Generate a diverse range of question types from a multitude of source materials, including PDFs, Word documents, video and audio files, images, web links, and specified topics."

    },
    {
        title: "Question Generator",
        description: "Generate a diverse range of question types from a multitude of source materials, including PDFs, Word documents, video and audio files, images, web links, and specified topics."

    },
    {
        title: "Question Generator",
        description: "Generate a diverse range of question types from a multitude of source materials, including PDFs, Word documents, video and audio files, images, web links, and specified topics."

    },
]


export const dummyData: QuizzDataTypes = {
    "id": 10,
    "title": "Javascript Beginner Quiz",
    "description": "A beginner level quiz about Javascript",
    "timeLimit": 12,
    "isPublic": true,
    "authorId": 2,
    "topic": "Javascript",
    "createdAt": "2025-05-18T10:53:04.748Z",
    "updatedAt": "2025-05-18T10:53:04.748Z",
    "questions": [
        {
            "id": 39,
            "quizId": 10,
            "text": "Which of the following code snippets will output 10 to the console in Javascript?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 185,
                    "text": "'console.log(5 + 5);'",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 186,
                    "text": "'console.log(5 + \"5\");'",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 187,
                    "text": "'console.log(\"5\" + \"5\");'",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 188,
                    "text": "'console.log(5 - 5);'",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 40,
            "quizId": 10,
            "text": "What is the data type of the value 'true' in Javascript?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 189,
                    "text": "number",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 190,
                    "text": "string",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 191,
                    "text": "boolean",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 192,
                    "text": "object",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 41,
            "quizId": 10,
            "text": "Which keyword is used to declare a variable in Javascript that can be reassigned?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 193,
                    "text": "let",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 194,
                    "text": "var",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 195,
                    "text": "const",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 196,
                    "text": "int",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 42,
            "quizId": 10,
            "text": "What is the data type of the value 'Hello, world!' in Javascript?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 197,
                    "text": "'Hello, world!'",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 198,
                    "text": "123",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 199,
                    "text": "true",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 200,
                    "text": "null",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 43,
            "quizId": 10,
            "text": "Which of the following is a valid way to write a multi-line comment in Javascript?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 201,
                    "text": "// This is a comment",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 202,
                    "text": "'This is a comment'",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 203,
                    "text": "/* This is a comment */",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 204,
                    "text": "<!-- This is a comment -->",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 44,
            "quizId": 10,
            "text": "Which of the following expressions will result in '105' in Javascript?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 205,
                    "text": "'10' + 5",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 206,
                    "text": "'10' - 5",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 207,
                    "text": "10 + '5'",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 208,
                    "text": "10 - '5'",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 45,
            "quizId": 10,
            "text": "Which of the following comparison operators checks for both value and type equality in Javascript?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 209,
                    "text": "'5' == 5",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 210,
                    "text": "'5' === 5",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 211,
                    "text": "5 == 5",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 212,
                    "text": "5 === '5'",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 46,
            "quizId": 10,
            "text": "Which of the following code snippets correctly checks if the variable x is equal to 5 in Javascript?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 213,
                    "text": "if (x == 5) { ... }",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 214,
                    "text": "if (x = 5) { ... }",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 215,
                    "text": "if (x > 5) { ... }",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 216,
                    "text": "if (x < 5) { ... }",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 47,
            "quizId": 10,
            "text": "Which of the following methods will display the text 'Hello' in a web browser using Javascript?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 217,
                    "text": "alert('Hello')",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 218,
                    "text": "console.log('Hello')",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 219,
                    "text": "print('Hello')",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 220,
                    "text": "document.write('Hello')",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 48,
            "quizId": 10,
            "text": "Which of the following is a valid way to define a function that returns 10 in Javascript, using arrow notation?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 221,
                    "text": "function myFunction() { return 10; }",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 222,
                    "text": "const myFunction = () => { return 10; }",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 223,
                    "text": "myFunction = function() { return 10; }",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 224,
                    "text": "var myFunction = function() { return 10; }",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 49,
            "quizId": 10,
            "text": "Which of the following is a valid way to loop 10 times in Javascript?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 225,
                    "text": "for (let i = 0; i < 10; i++) { ... }",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 226,
                    "text": "while (i < 10) { ... }",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 227,
                    "text": "do { ... } while (i < 10);",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 228,
                    "text": "repeat (10) { ... }",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        },
        {
            "id": 50,
            "quizId": 10,
            "text": "What is [1, 2, 3] in Javascript?",
            "createdAt": "2025-05-18T10:53:04.748Z",
            "updatedAt": "2025-05-18T10:53:04.748Z",
            "options": [
                {
                    "id": 229,
                    "text": "an array",
                    "isCorrect": true,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 230,
                    "text": "an object",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 231,
                    "text": "a function",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                },
                {
                    "id": 232,
                    "text": "a variable",
                    "isCorrect": false,
                    "createdAt": "2025-05-18T10:53:04.748Z",
                    "updatedAt": "2025-05-18T10:53:04.748Z"
                }
            ]
        }
    ],
    author: undefined,
    attempts: []
}