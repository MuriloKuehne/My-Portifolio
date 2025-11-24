---
title: HabitZen
description: A modern habit tracking application with gamification system, built with Next.js 15 and Supabase. Track your daily and weekly habits, earn XP, level up, and maintain streaks.
status: completed
tags: [Next.js, TypeScript, Supabase, React, Tailwind CSS, Recharts, Zod, Playwright, shadcn/ui, date-fns]
github: https://github.com/MuriloKuehne/HabitZen
link: https://habit-zen-six.vercel.app
---

A modern habit tracking application that helps you create and maintain habits through a gamified system. Complete your daily or weekly habits, earn XP, level up, and maintain your streaks to build a consistent routine.

## Key Features

- **Secure Authentication**: Login and registration system with Supabase Auth
- **Habit Management**: Create and manage daily or weekly habits
- **Gamification System**:  
  - Earn XP by completing habits  
  - Automatic leveling system  
  - Streak counter (current and longest streaks)  
  - Level progress bar
- **Visualizations**:  
  - Calendar heatmap of completed habits  
  - XP progress charts  
  - Completion charts  
  - Detailed statistics
- **Modern Interface**: Responsive design with Tailwind CSS and shadcn/ui
- **E2E Testing**: Automated tests with Playwright

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Validation**: Zod
- **Utilities**: date-fns
- **Testing**: Playwright

## Gamification System

### XP and Levels

- **Daily Habits**: 10 XP per completion
- **Weekly Habits**: 50 XP per completion
- Level is automatically calculated based on total XP
- Formula: `level = floor(sqrt(total_xp / 100)) + 1`

### Streaks

- Maintain your streak by completing daily habits consecutively
- Current streak and longest streak are automatically tracked
- Breaking the streak resets the current counter

## Security

- Authentication managed by Supabase
- Row Level Security (RLS) in the database
- Data validation with Zod
- Authentication middleware for protected routes
- Environment variables for sensitive credentials

