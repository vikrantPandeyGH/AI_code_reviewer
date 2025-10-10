AI Code Reviewer
A full-stack collaborative code review platform powered by AI and real-time communication.

Project Description
This MERN-based project enables users to create and collaborate on coding projects with integrated AI support for code review. On visiting the homepage, users can create a new project. Once created, the user is redirected to the homepage where the project appears in a list.

Clicking on any project navigates to a dedicated collaboration page. Here, a Socket.IO connection is established between all users associated with that project. The screen is divided into three main sections:

Chat Section – Users can communicate in real-time about the project.
Code Editor – A simple code editor where participants can write and edit code live.
Review Section – A "Review" button sends the current code to Google's Gemini AI for analysis and feedback. The response is then displayed on the screen.
All chat messages and code edits are synchronized in real-time using Socket.IO, and simultaneously saved in a backend database. This ensures persistence — even after a page refresh, previous history is retrieved from the database using React lifecycle methods and shown on the UI.

Key Features
Real-time collaborative chat and code editing.
Socket.IO integration for live synchronization.
Gemini AI integration for intelligent code reviews.
Persistent data storage using MongoDB.
Clean and intuitive UI built with plain CSS (no Tailwind).
Tech Stack
Frontend: React.js, CSS
Backend: Node.js, Express.js, MongoDB
Real-Time Communication: Socket.IO
AI Integration: Gemini API
