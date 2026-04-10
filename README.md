# Tournament Hub
A mobile portal for taking your kids to sport tournaments.

## Project TODO:

### Setup
- [x] Set up project files (index.html, styles.css, script.js)
- [x] Build basic mobile layout (navbar + 4 tabs)
- [x] Add placeholder sections
- [x] Test spacing and scrolling on mobile

### JSON Data
- [x] Create data.json (schedules, transport, equipment, postMatch)
- [x] Fetch JSON in script.js (or index.html)
- [x] Render sections dynamically
- [x] Confirm each tab displays correct data

### Code Structure
- [x] Refactor rendering into reusable function
- [x] Clear content when switching tabs
- [x] Wrap logic in DOMContentLoaded

### UX Improvements
- [x] Add skeleton loaders
- [x] Add error handling for failed fetch
- [x] Improve navbar tap area
- [ ] Add active tab state
- [ ] Add simple animations
- [x] Adjust colours if needed

### Deployment
- [x] Push to GitHub
- [x] Deploy via Netlify
- [x] Test live site on mobile
- [ ] Confirm data.json is accessible

### Data Iteration
- [ ] Refine JSON structure
- [ ] Add IDs and ensure consistency

### Backend (Supabase)
- [ ] Create Supabase project
- [ ] Create tables matching JSON
- [ ] Insert test data
- [ ] Replace JSON fetch with Supabase queries

### Authentication
- [ ] Enable Google OAuth
- [ ] Add login button
- [ ] Handle user session

### Roles & Security
- [ ] Create users table (email + role)
- [ ] Add self as staff
- [ ] Implement RLS policies
- [ ] Test restricted access

### Finalisation
- [ ] Lock down all tables with RLS
- [ ] Add access denied UI
- [ ] Fix bugs / console errors
- [ ] Test full flow end-to-end
