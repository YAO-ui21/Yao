YAO FITNESS — LOCAL BACKEND SETUP

1. Install Node.js LTS if it is not installed.
2. Open Command Prompt in this folder.
3. Run: npm install
4. Run: npm start
5. Open: http://localhost:3000

EASIEST:
Double-click START-YAO-FITNESS.bat

PUBLIC WEBSITE
The free public website is hosted on GitHub Pages:
https://yao-ui21.github.io/Yao/
Updates publish automatically from the main branch.

BACKEND AND CLOUD ACCOUNTS
The website can use Supabase's free tier for email/password accounts and private
per-user cloud saves:
1. Create a Supabase project at https://supabase.com/dashboard.
2. In the project's SQL Editor, run the contents of supabase/rls.sql.
3. In Project Settings > API, copy the Project URL and public anon/publishable key.
4. Put those two values in supabase-config.js as url and anonKey.
   The anon/publishable key is intended for browser use. Never put a service_role
   or secret key in this file.
5. In Supabase Authentication > URL Configuration, set the Site URL to
   https://yao-ui21.github.io/Yao and allow that URL as a redirect URL.
6. Commit and push supabase-config.js to main. GitHub Pages deploys the update.

Until Supabase is configured, the website saves data in this browser only. Once
cloud accounts are enabled, each signed-in account's workout and nutrition data
is saved separately and can be accessed across devices.

If PowerShell says npm.ps1 is blocked, use Command Prompt (cmd.exe), not PowerShell.

The app includes:
- Monday through Sunday workout days
- Custom muscle targeting
- Six built-in beginner-to-intermediate training programs (2, 3, 4, or 5 days per week)
- Exercise library with primary/secondary muscles
- Form tips, common mistakes and video-search links
- Workout tracking with working sets, load, reps, optional RPE, and volume
- PR detection and PR popup
- Previous performance autofill, training-session counts, streaks, and weekly goal
- Daily food diary organized by meal with calorie, protein, carbohydrate, and fat targets
- Repeatable recent foods and date-based nutrition history
- Local Express backend with JSON persistence
- LocalStorage fallback if the backend is temporarily unavailable
