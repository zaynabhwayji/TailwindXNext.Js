# 🚀 UI Design Challenges — Next.js + Tailwind CSS

A collection of modern, responsive user interfaces built from scratch using **Next.js** and **Tailwind CSS**.

This project focuses on recreating real-world UI designs with clean component architecture, responsive layouts, reusable components, and modern Tailwind utilities.

---

## 🖥️ Project Overview

The project contains multiple UI sections and pages:

* 🏠 Landing Page (Navbar + Hero Section)
* 🛍️ Products / Pricing Cards
* 👤 Profile Card Component
* 🔐 Sign In Form
* 📊 Admin Dashboard

Every interface is built using pure Tailwind CSS without external UI libraries.

---

# 🛠️ Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS

### Development Concepts

* Responsive Design
* Component Reusability
* Flexbox & CSS Grid
* Tailwind Utility Classes
* Modern UI Patterns

---

# ⚙️ Installation

Clone the project:

```bash
git clone <repository-url>
```

Go to the project folder:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📂 Project Structure

```text
📂 src
│
├── 📂 app
│   │
│   ├── 📄 page.js
│   │   └── Home Page
│   │
│   ├── 📂 product
│   │   └── 📄 page.js
│   │       └── Products Cards Page
│   │
│   ├── 📂 profile
│   │   └── 📄 page.js
│   │       └── Profile Page
│   │
│   ├── 📂 signin
│   │   └── 📄 page.js
│   │       └── Sign In Page
│   │
│   └── 📂 dashboard
│       └── 📄 page.js
│           └── Admin Dashboard
│
├── 📂 components
│   │
│   ├── 📄 ProductCard.jsx
│   │   └── Product pricing card component
│   │
│   └── 📄 StatCard.jsx
│       └── Dashboard statistics card component
│
└── 📄 globals.css
```


---

# ✨ Features

## 🏠 Home Page

A modern landing page containing:

* Responsive navigation bar
* Brand logo
* Navigation links
* Call-to-action buttons
* Hero section with centered content

Implemented using:

* Flexbox layout
* Typography utilities
* Button styling
* Hover effects

---

## 🛍️ Products Page

Responsive product/pricing card section.

Features:

* Three pricing cards
* Different color themes
* Responsive grid layout
* Hover animations
* Shadow effects

Concepts:

* CSS Grid
* Cards
* Responsive breakpoints
* Reusable components

---

## 👤 Profile Card

A reusable user profile component.

Includes:

* Avatar
* User information
* Role badge
* Statistics section
* Follow button

Concepts:

* Flexbox alignment
* Rounded components
* Component design
* UI hierarchy

---

## 🔐 Sign In Page

Modern authentication interface.

Includes:

* Email input
* Password input
* Remember me option
* Forgot password link
* Google sign-in button
* Input focus states

Concepts:

* Form styling
* Input states
* Responsive layouts
* User experience design

---

## 📊 Admin Dashboard

Complete dashboard layout.

Includes:

* Sidebar navigation
* Active menu states
* Top navigation bar
* Statistics cards
* Revenue chart section

Concepts:

* Dashboard layouts
* Grid systems
* Responsive sidebar
* Data visualization placeholders

---

# 📱 Responsive Design

All pages are optimized for:

* Mobile devices
* Tablets
* Desktop screens

Using Tailwind breakpoints:

```
sm → 640px+
md → 768px+
lg → 1024px+
xl → 1280px+
```

---

# 🎨 Tailwind CSS Highlights

Examples of utilities used:

### Layout

```css
flex
grid
items-center
justify-between
```

### Spacing

```css
p-4
px-6
py-3
gap-6
```

### Styling

```css
rounded-xl
shadow-lg
border
bg-indigo-600
```

### Responsive

```css
sm:flex
md:grid-cols-3
lg:w-1/4
```

### Interactive States

```css
hover:bg-indigo-700
hover:scale-105
transition
```

---

# 🏆 UI Goals

This project demonstrates the ability to:

✅ Build interfaces from scratch
✅ Convert designs into responsive pages
✅ Create reusable React components
✅ Use Tailwind CSS efficiently
✅ Structure a scalable Next.js project

---

