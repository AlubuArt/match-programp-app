# Match program app 

### Use the app for displaying upcoming matches in your football/sports club. 
The app displays the next upcoming matches, and matches allready held.


## Information to be displayed

- Upcoming matches
- Completed matches

MatchProgram: 
- Matches: Match[]
- Round: number

Matches:
- HomeTeam: string
- AwayTeam: string
- LeagueName: string
- Match Date: Date ISO 8601 
- Kickoff: Time | string 
- HomeTeamCurrentPosition (optional): string
- AwayTeamCurrentPosition (optional): string
- HomeTeamScore: string
- AwayTeam Score: string


## Tech Stack
- NextJS
- Tailwind CSS
- GraphCMS
- TypeScript


## Resources
- [Figma design](https://www.figma.com/file/CkO0rXcCreKeu1Btwf439o/match_program_app?node-id=0%3A1) 

- [Github](https://github.com/AlubuArt/match-programp-app)

## Product Backlog (time estimate in parens)

- [x] Setup environment (1) - (0.5)
- [X] Graph CMS schema (.5) - (0.5)
- [x] Modelling types in TypeScript (1) - (0.5)
- [X] Simpel Mockups of UI (.5) - (.5)
- [X] UI Design in Figma (2) - (2)
- [x] Implementing UI with TypeScript/nextjs and Tailwind CSS (3) 
- [x] Calls to GraphCMS (1) - (2)
- [ ] make UI responsive (2)
- [ ] Setting up user and permission in GraphCMS (1)
- [ ] Writing tests (2)
- [ ] Writing documentation (2)


Total estimate: 17 hours

Actual time used: 9