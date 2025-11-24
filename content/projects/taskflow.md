---
title: Taskflow
description: A simple full-stack task management application where users can create, edit, and organize tasks in lists, with real-time synchronization and secure login. Built with Next.js 15, TypeScript, Tailwind, Shadcn/UI, Prisma, Supabase PostgreSQL, Supabase Auth, and Supabase Realtime.
status: planned
tags: [Next.js, TypeScript, Tailwind CSS, shadcn/ui, Prisma, Supabase, PostgreSQL, Supabase Auth, Supabase Realtime, Vercel]
---

A simple full-stack task management application that enables users to create, edit, and organize tasks in lists with real-time synchronization and secure authentication. The project leverages modern technologies for a seamless user experience with real-time updates across devices.

## Key Features

- **Task Management**: Create, edit, delete, and organize tasks in customizable lists
- **Real-time Synchronization**: Instant updates across all devices using Supabase Realtime
- **Secure Authentication**: User login and registration with Supabase Auth
- **Task Organization**: Organize tasks into multiple lists for better productivity
- **Modern UI**: Clean and intuitive interface built with shadcn/ui components
- **Responsive Design**: Fully responsive layout that works on all devices
- **Free Hosting**: 100% free stack with deployment on Vercel

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database ORM**: Prisma
- **Database**: Supabase PostgreSQL
- **Authentication**: Supabase Auth
- **Real-time**: Supabase Realtime
- **Deployment**: Vercel

## Architecture

### Frontend
- Next.js 15 with App Router for server-side rendering and routing
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for consistent, accessible UI components

### Backend
- Prisma ORM for type-safe database access
- Supabase PostgreSQL for data persistence
- Supabase Auth for secure user authentication
- Supabase Realtime for live updates across clients

### Deployment
- Vercel for hosting and serverless functions
- All services (Supabase) are free tier compatible

## Planned Features

- User authentication and registration
- Create and manage multiple task lists
- Add, edit, and delete tasks within lists
- Mark tasks as complete/incomplete
- Real-time synchronization when tasks are updated
- Task filtering and sorting
- Responsive mobile-first design
- Dark mode support

## Security

- Authentication managed by Supabase Auth
- Row Level Security (RLS) policies in Supabase
- Secure API routes with authentication middleware
- Environment variables for sensitive credentials
- Type-safe database queries with Prisma

