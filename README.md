# AI Workplace Productivity Assistant

A modern, responsive SaaS-style prototype created for the **CAPACITI AI-Powered Workplace Productivity Assistant** project.

## Project purpose

The project demonstrates how AI can be applied to common workplace tasks including:

- Smart email generation
- Meeting note summarization
- Task prioritization and planning
- Research assistance
- Conversational workplace support

The project brief requires at least three of these features; this prototype implements all five. The brief also emphasizes prompt engineering, responsible AI, productivity value, functionality and professional presentation.

## Features

### 1. Smart Email Generator
Inputs:
- Audience
- Tone
- Purpose/context
- Key points

Output:
- Professional email draft
- Audience/tone indicators

### 2. Meeting Notes Summarizer
Converts notes into:
- Overview
- Key points
- Decisions
- Action items

### 3. AI Task Planner
Accepts tasks and produces:
- Priority levels
- Suggested work sequence
- Focus blocks
- Time optimization advice

### 4. AI Research Assistant
Produces:
- Executive insight
- Key insights
- Recommendations
- Responsible research note

### 5. AI Chatbot
Provides a conversational workplace assistant for common productivity requests.

## Prompt engineering strategy

The project follows a reusable structured prompt pattern:

**Role → Context → Task → Constraints → Review**

Example:

> Role: Act as a professional workplace communication assistant.  
> Context: The user needs to communicate with a manager about a project deadline.  
> Task: Draft a concise professional email.  
> Constraints: Use a formal tone, include the reason, requested date and next step.  
> Review: The user must validate names, dates and facts before sending.

This structure supports consistent and professional AI outputs.

## Responsible AI

The application includes the required disclaimer:

**“AI-generated content may require human review”**

Users should verify important facts, dates, names, figures and sensitive information. AI-generated content should not automatically be treated as authoritative.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Responsive SaaS dashboard UI
- No framework dependency
- No API key required for the demo

## Important implementation note

This submission is a **functional front-end prototype**. AI responses are simulated locally in JavaScript so the application can be demonstrated safely without placing an API key in a public GitHub repository.

For a production implementation, the front end should call a secure backend service that connects to an approved AI provider. API keys should never be placed directly in client-side JavaScript.

## How to run

1. Download/clone the repository.
2. Open `index.html` in a modern browser.

For the best development experience, open the folder in VS Code and use a local server such as Live Server.

## Suggested GitHub repository name

`AI-Productivity-Assistant`

## Project deliverables covered

- AI solution / prototype
- Functional interface
- Project documentation
- Problem statement
- Solution overview
- Tools used
- Prompt strategy
- Responsible AI considerations
- Presentation-ready UI

## Disclaimer

AI-generated content may require human review.
