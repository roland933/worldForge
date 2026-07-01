# World Forge

World Forge is a game development management platform designed to speed up the creation of new game projects.

The goal is not to generate complete games, but to generate a stable, reusable development environment that allows development to start immediately.

---

# Vision

The long-term goal of World Forge is to become a personal game development platform capable of generating project skeletons with a consistent architecture.

Future versions may support:

- Project templates
- Modular features
- AI-assisted project generation
- World merging
- Asset management
- Task management

---

# Tech Stack

## Frontend

- React
- React Router
- Tailwind CSS

## Backend

- Laravel

## Database

- MySQL

## Environment

- Docker

---

# Architecture

The application follows a layered architecture.

```
Pages
    ↓
Features
    ↓
Base UI
    ↓
HTML
```

Data always flows from top to bottom.

---

# Folder Structure

```
src/

components/

    ui/
        Button/
        Card/
        Badge/
        Input/
        Progress/

    game/

    dashboard/

pages/

services/

layouts/

router/

data/
```

---

# Base UI Components

UI components are reusable and domain-independent.

Examples:

- Button
- Card
- Badge
- Input
- Progress

UI components should never know anything about:

- Games
- Assets
- Tasks
- Notes

---

# Feature Components

Feature components represent business logic.

Examples:

- ActiveGameCard
- GameCard
- GameStatus
- RecentActivity
- QuickActions

Feature components may use Base UI components.

---

# Pages

Pages are responsible for:

- Loading data
- Calling services
- Passing data to feature components

Pages should not contain business logic.

---

# Services

Services are the only layer responsible for communicating with the backend.

Examples:

- gameService
- dashboardService

Pages call services.

Feature components do not.

---

# Design Rules

- Keep UI components generic.
- Keep components small and focused.
- One component = one responsibility.
- Reuse before creating new components.
- Prefer composition over duplication.

---

# Development Principles

- Build V1 first.
- Polish later.
- Avoid premature optimization.
- Every repeated pattern should become reusable.
- Architecture first, features second, polish last.

---

# Roadmap

## V1

- [x] Layout
- [x] Navigation
- [x] Dashboard
- [x] Games
- [ ] CRUD
- [ ] Backend Integration
- [ ] Authentication

## V2

- Templates
- Modules
- Project Generator

## V3

- AI-assisted generation
- World merging


# Core Philosophy

World Forge is built around one simple idea:

> If I have to build the same thing twice, World Forge should generate it.

The platform exists to eliminate repetitive setup work and allow development to focus on gameplay instead of boilerplate.