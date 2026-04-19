# PropX - Property Management Platform

A modern property management web application built with React, TypeScript, and TanStack technologies. This platform provides authentication, user profiles, and account management features for property agencies and individual users.

## Features

- **User Authentication**: Secure login and registration with form validation
- **User Profiles**: View and manage account settings with profile image upload
- **Responsive Design**: Mobile-first responsive UI built with Tailwind CSS
- **Form Validation**: Robust form handling with React Hook Form and Zod schemas
- **State Management**: Context API for authentication state management
- **Modern Routing**: File-based routing with TanStack Router
- **Data Fetching**: TanStack Query for efficient server state management

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Routing**: TanStack Router (file-based routing)
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **State**: TanStack Query, React Context
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Project Structure

```
educase-india/
├── src/
│   ├── components/     # Reusable UI components (Button, Input, etc.)
│   ├── contexts/       # React contexts (AuthContext)
│   ├── routes/         # File-based routes
│   │   ├── (auth)/     # Authentication routes (login, register)
│   │   ├── _app/       # Authenticated app routes
│   │   ├── __root.tsx  # Root layout
│   │   └── index.tsx   # Landing page
│   ├── lib/           # Utility libraries (validation schemas)
│   └── integrations/   # Third-party integrations
├── public/            # Static assets
└── package.json       # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Create a production build:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests with Vitest
- `pnpm lint` - Run ESLint
- `pnpm format` - Check code formatting with Prettier
- `pnpm check` - Format and fix linting issues

## Key Components

### Authentication
- **AuthContext**: Manages user authentication state with login, register, and logout functionality
- **Login/Register Forms**: Validated forms with Zod schemas for secure user authentication

### UI Components
- **Button**: Customizable button component with primary/secondary variants
- **Input**: Form input component with validation error display
- **Header/Footer**: Layout components for consistent UI

### Pages
- **Landing Page**: Welcome screen with call-to-action buttons
- **Login/Register**: Authentication pages with form validation
- **Account Settings**: User profile management page

## Form Validation

The application uses Zod for schema validation with React Hook Form integration:

```typescript
// Example validation schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  remember: z.boolean().optional(),
})
```

## Styling

This project uses Tailwind CSS for styling with custom configuration:
- Custom color palette matching the design system
- Responsive breakpoints for mobile-first design
- Custom font configurations

## Routing

The application uses TanStack Router with file-based routing:
- Routes are automatically generated from files in `src/routes/`
- Nested layouts for authenticated vs public routes
- Type-safe route parameters and navigation

## Development Notes

- The project includes React DevTools and TanStack DevTools for development
- ESLint and Prettier are configured for code quality
- TypeScript strict mode is enabled for type safety

## Learn More

- [TanStack Router Documentation](https://tanstack.com/router)
- [TanStack Query Documentation](https://tanstack.com/query)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
