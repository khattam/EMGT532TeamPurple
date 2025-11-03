# Custom Analytics System

## Overview
Simple, self-hosted analytics that tracks:
- Unique visitors (persistent user IDs)
- Page views
- Click tracking (what elements users interact with)
- Session duration
- Active users (last 5 minutes)
- Daily traffic trends

## How It Works

### Client-Side Tracking
- `lib/analytics.ts` - Tracks user interactions automatically
- Generates unique user ID (stored in localStorage)
- Creates session ID for each visit
- Tracks clicks, page views, and session duration
- Sends data to `/api/track` endpoint

### Server-Side Storage
- `lib/db.ts` - Simple JSON file storage in `/data/analytics.json`
- Processes and aggregates analytics data
- Calculates metrics on-demand

### API Endpoints
- `POST /api/track` - Receives tracking events
- `GET /api/analytics` - Returns aggregated analytics data

### Dashboard
- `/metrics` - Password-protected analytics dashboard
- Password: `stayawake2024`
- Shows real-time and historical data

## What's Tracked

1. **Unique Users** - Total unique visitors (all time)
2. **Page Views** - Total page views (all time)
3. **Active Now** - Users active in last 5 minutes
4. **Avg Session Duration** - Average time spent on site
5. **Top Pages** - Most visited pages
6. **Top Clicks** - Most clicked elements
7. **Daily Traffic** - User and page view trends (last 30 days)

## Data Storage
All data is stored in `/data/analytics.json` (gitignored)
- Lightweight and portable
- No database required
- Easy to backup or migrate

## Privacy
- No cookies
- No third-party tracking
- Data stored locally on your server
- User IDs are random, not personally identifiable
