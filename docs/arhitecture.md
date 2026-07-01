# World Forge Architecture

## Purpose

This document defines the architectural principles of the World Forge project.

Every new feature should follow these rules to keep the codebase clean, maintainable and scalable.

---

# Architecture Overview

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

# Layer Responsibilities

## Pages

Pages are responsible for:

* Loading data
* Calling services
* Managing page state
* Passing data to feature components

Pages should NOT:

* Call UI components directly for business logic
* Contain business logic
* Communicate directly with the backend

Example:

```
Dashboard

↓

dashboardService

↓

ActiveGameCard

↓

GameStatus

↓

Badge
```

---

## Feature Components

Feature components represent business features.

Examples:

```
GameCard

GameList

GameStatus

RecentActivity

QuickActions

StatCard
```

Feature components may:

* Use Base UI components
* Receive data from Pages
* Emit events to Pages

Feature components should NOT:

* Call APIs
* Import services
* Know where data comes from

---

## Base UI Components

The UI layer is completely domain independent.

Examples:

```
Button

Card

Input

Badge

Progress

Modal

Spinner
```

UI components should NEVER know about:

* Games
* Assets
* Tasks
* Notes
* Dashboard

UI components should be reusable in any project.

---

# Services

Services are responsible for communication with the backend.

Examples:

```
gameService

dashboardService

assetService

taskService
```

Only Pages should call services.

Feature components should never import services.

UI components should never import services.

---

# Data Flow

Correct

```
Page

↓

Service

↓

API

↓

Page

↓

Feature

↓

UI
```

Incorrect

```
Feature

↓

API
```

or

```
Button

↓

API
```

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

    dashboard/

        ActiveGameCard/
        StatsSection/
        RecentActivity/
        QuickActions/

    game/

        GameCard/
        GameList/
        GameStatus/
        GameProgress/

pages/

layouts/

services/

router/

data/

docs/
```

---

# Component Structure

Each component owns everything related to itself.

Example:

```
Button/

    Button.jsx

    Button.constants.js

    Button.styles.js

    Button.config.js

    index.js
```

Never scatter component files across the project.

---

# Component Rules

Every component should have ONE responsibility.

Bad

```
GameCard

↓

Loads API

↓

Calculates data

↓

Displays UI
```

Good

```
GameCard

↓

Displays one game
```

---

# Props

Components should receive data through props.

Good

```
<GameCard
    game={game}
/>
```

Avoid passing many unrelated props.

Bad

```
<GameCard

    title={...}

    progress={...}

    status={...}

    version={...}

    description={...}

/>
```

Prefer

```
<GameCard
    game={game}
/>
```

---

# Reusability

Before creating a new component ask:

1. Can an existing UI component solve this?
2. Is this feature-specific?
3. Is it likely to be reused?

---

# Naming

Use domain language.

Good

```
Game

Asset

Task

Note

Build
```

Avoid generic names when domain names are clearer.

Bad

```
Item

Entity

Object

Data
```

---

# Routing

Routes should be centralized.

```
router/

    AppRouter.jsx

    paths.js
```

Never hardcode routes throughout the project.

---

# Services

Every feature has its own service.

```
gameService

assetService

taskService

dashboardService
```

Services define the application's API contract.

Changing the backend should require changes only inside services.

---

# Design System

Base UI components should expose a consistent API.

Example

```
<Button
    variant={...}
    size={...}
    className="..."
/>

<Input
    label="..."
    error="..."
/># World Forge Architecture

## Purpose

This document defines the architectural principles of the World Forge project.

Every new feature should follow these rules to keep the codebase clean, maintainable and scalable.

---

# Architecture Overview

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

# Layer Responsibilities

## Pages

Pages are responsible for:

* Loading data
* Calling services
* Managing page state
* Passing data to feature components

Pages should NOT:

* Call UI components directly for business logic
* Contain business logic
* Communicate directly with the backend

Example:

```
Dashboard

↓

dashboardService

↓

ActiveGameCard

↓

GameStatus

↓

Badge
```

---

## Feature Components

Feature components represent business features.

Examples:

```
GameCard

GameList

GameStatus

RecentActivity

QuickActions

StatCard
```

Feature components may:

* Use Base UI components
* Receive data from Pages
* Emit events to Pages

Feature components should NOT:

* Call APIs
* Import services
* Know where data comes from

---

## Base UI Components

The UI layer is completely domain independent.

Examples:

```
Button

Card

Input

Badge

Progress

Modal

Spinner
```

UI components should NEVER know about:

* Games
* Assets
* Tasks
* Notes
* Dashboard

UI components should be reusable in any project.

---

# Services

Services are responsible for communication with the backend.

Examples:

```
gameService

dashboardService

assetService

taskService
```

Only Pages should call services.

Feature components should never import services.

UI components should never import services.

---

# Data Flow

Correct

```
Page

↓

Service

↓

API

↓

Page

↓

Feature

↓

UI
```

Incorrect

```
Feature

↓

API
```

or

```
Button

↓

API
```

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

    dashboard/

        ActiveGameCard/
        StatsSection/
        RecentActivity/
        QuickActions/

    game/

        GameCard/
        GameList/
        GameStatus/
        GameProgress/

pages/

layouts/

services/

router/

data/

docs/
```

---

# Component Structure

Each component owns everything related to itself.

Example:

```
Button/

    Button.jsx

    Button.constants.js

    Button.styles.js

    Button.config.js

    index.js
```

Never scatter component files across the project.

---

# Component Rules

Every component should have ONE responsibility.

Bad

```
GameCard

↓

Loads API

↓

Calculates data

↓

Displays UI
```

Good

```
GameCard

↓

Displays one game
```

---

# Props

Components should receive data through props.

Good

```
<GameCard
    game={game}
/>
```

Avoid passing many unrelated props.

Bad

```
<GameCard

    title={...}

    progress={...}

    status={...}

    version={...}

    description={...}

/>
```

Prefer

```
<GameCard
    game={game}
/>
```

---

# Reusability

Before creating a new component ask:

1. Can an existing UI component solve this?
2. Is this feature-specific?
3. Is it likely to be reused?

---

# Naming

Use domain language.

Good

```
Game

Asset

Task

Note

Build
```

Avoid generic names when domain names are clearer.

Bad

```
Item

Entity

Object

Data
```

---

# Routing

Routes should be centralized.

```
router/

    AppRouter.jsx

    paths.js
```

Never hardcode routes throughout the project.

---

# Services

Every feature has its own service.

```
gameService

assetService

taskService

dashboardService
```

Services define the application's API contract.

Changing the backend should require changes only inside services.

---

# Design System

Base UI components should expose a consistent API.

Example

```
<Button
    variant={...}
    size={...}
    className="..."
/>

<Input
    label="..."
    error="..."
/>

<Card
    className="..."
/>
```

Consistency is more important than flexibility.

---

# Development Workflow

When building a new feature:

1. Design the page.
2. Identify reusable UI.
3. Build feature components.
4. Connect services.
5. Improve UI.
6. Polish.

Never start with animations or visual polish.

---

# V1 Philosophy

The goal of V1 is not perfection.

The goal is a stable foundation.

Priority:

```
Architecture

↓

Features

↓

Polish
```

---

# Core Philosophy

If something has to be built more than once,
World Forge should eventually generate it.

Every repeated pattern should become reusable.

Every reusable pattern should become a module.

Every module should help create the next project faster.

World Forge is not a game generator.

World Forge is a game development platform.


<Card
    className="..."
/>
```

Consistency is more important than flexibility.

---

# Development Workflow

When building a new feature:

1. Design the page.
2. Identify reusable UI.
3. Build feature components.
4. Connect services.
5. Improve UI.
6. Polish.

Never start with animations or visual polish.

---

# V1 Philosophy

The goal of V1 is not perfection.

The goal is a stable foundation.

Priority:

```
Architecture

↓

Features

↓

Polish
```

---

# Core Philosophy

If something has to be built more than once,
World Forge should eventually generate it.

Every repeated pattern should become reusable.

Every reusable pattern should become a module.

Every module should help create the next project faster.

World Forge is not a game generator.

World Forge is a game development platform.
