# Luma — Frontend Challenge 2026

A responsive educational landing page developed as part of the **Buzzvel Frontend Challenge 2026**.

The project implements the provided Figma design using Next.js, React, TypeScript, and Tailwind CSS, with a focus on responsive layouts, reusable components, accessibility, and internationalization.

## Tech Stack

- **Next.js 16** — React framework with App Router
- **React** — Component-based user interface
- **TypeScript** — Static typing
- **Tailwind CSS v4** — Utility-first styling
- **next-intl** — Internationalization
- **React Hook Form** — Form state management and validation
- **Zod** — Schema-based form validation
- **Lucide React** — Icons

## Features

- Responsive layout for desktop, tablet, and mobile
- Reusable and modular React components
- Internationalization with English and European Portuguese (`en` and `pt-PT`)
- Contact form with client-side validation
- Disabled submit button until all form fields are valid
- Feedback after form validation
- Accessible navigation and semantic HTML
- Optimized images using `next/image`
- Custom typography using Google Fonts

**Note:** The contact form is a frontend demonstration. It validates user input and displays feedback but does not send messages to a backend service.

## Getting Started

### Prerequisites

- Node.js 20 or later
- Yarn

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start the development server |
| `yarn build` | Create a production build |
| `yarn start` | Start the production server |
| `yarn lint` | Run ESLint |

## Internationalization

The application supports two languages:

- English (`en`)
- European Portuguese (`pt-PT`)

Translations are managed with `next-intl` and stored in the `messages` directory.

## Project Structure

```text
src/
├── app/
│   └── [locale]/
├── components/
│   ├── sections/
│   └── ui/
├── data/
├── i18n/
└── messages/

public/
├── icons/
└── images/
```

The project separates page sections, reusable UI components, and static data to improve maintainability and readability.

## Design Implementation

The interface was developed based on the Figma design provided for the challenge.

The implementation prioritizes:

- Visual consistency with the original design
- Responsive behavior across different screen sizes
- Reusable components
- Consistent spacing, colors, and typography
- Accessibility and keyboard navigation
- Clean and maintainable code

**Design:** [Buzzvel Frontend Challenge — Figma](https://www.figma.com/design/G0zSf6gyynwzEusOCgm2CM/Buzzvel-FE---Test-2026)

## Development Time

**Approximate time spent:** 16–20 hours.

This includes project setup, component development, responsive styling, internationalization, form validation, testing, and documentation.

## Key Decisions and Known Limitations

- Reusable components were created to improve maintainability and consistency.
- Tailwind CSS was used to closely follow the provided Figma design.
- The contact form includes client-side validation but is not connected to a backend service.
- Some navigation links are placeholders for pages that are outside the scope of this challenge.

## AI Tools Used

ChatGPT (OpenAI) was used to assist with component development, Tailwind CSS styling, code review, debugging, and documentation.

All generated suggestions were reviewed and adapted during implementation.

## Author

Developed by **Guilherme Callegari** as part of the Buzzvel Frontend Challenge 2026.