# Overview

This is a Dutch website development service called "WebsiteMaatje" - a full-stack web application that provides website creation services for small businesses and entrepreneurs. The application features a modern React frontend with multiple pages showcasing different website packages (Starter, Plus, Premium), company information, and a contact system. The backend provides API endpoints for handling contact form submissions and managing customer inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme and design tokens
- **Routing**: Wouter for client-side routing with pages for Home, About, Contact, and Package Details
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Layout**: Responsive design with mobile-first approach using CSS Grid and Flexbox

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints under `/api` prefix
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Development Environment
- **Build System**: Vite for frontend development and esbuild for backend production builds
- **Development Server**: Vite dev server with HMR and Express middleware integration
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Module Resolution**: Path aliases for clean imports (@/, @shared/, @assets/)

## Data Schema Design
- **Users**: Basic user model with username/password (prepared for authentication)
- **Contact Submissions**: Form submissions with name, email, message, and optional package type
- **Database Ready**: Drizzle ORM configuration with PostgreSQL dialect prepared for production

## Component Architecture
- **Reusable Components**: Modular UI components following atomic design principles
- **Page Components**: Full-page layouts for different routes (Home, About, Contact, Package Details)
- **Section Components**: Reusable page sections (Hero, Packages, Process, Contact Form)
- **Form Handling**: Dedicated form components with validation and error handling

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives for building the design system
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Icon library providing consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs

## Data and Forms
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript-first schema validation for runtime type safety
- **date-fns**: Date utility library for formatting and manipulation

## Database and ORM
- **Drizzle ORM**: Type-safe ORM with excellent TypeScript support
- **Neon Database**: PostgreSQL-compatible serverless database (configured but not active)
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development Tools
- **Vite**: Fast build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution engine for development
- **Replit Integration**: Custom plugins for Replit development environment