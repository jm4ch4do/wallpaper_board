# Page Wireframe

Visual map of `src/pages/index.astro` and the components it renders. `x N` means the component is rendered once per item in its data file.

```text
+-- BaseLayout + index.astro <main> -------------------------------------------------------------------------------------------------------------------------------------------+
| +-- section: MY CRM  (left panel) -------------------------------------------------------+  +-- TailwindRoadmapPanel ----------------+  +-- LongList2Panel ----------------+ |
| | <Header>   MY CRM                                                                      |  | TAILWIND COURSE ROADMAP                |  | AMERICAN ACCENT MASTERY          | |
| |            DEVELOPER JOURNEY  />                                                       |  | data: roadmapSteps.ts                  |  | data: longList2Steps.ts          | |
| |            Learn. Build. Grow                                                          |  |                                        |  |                                  | |
| |            Create beautiful user interfaces.                                           |  |  1. Introduction                       |  |  1. Mumbling, Articulators       | |
| |            tailwindcss  |  UTILITY-FIRST CSS FRAMEWORK                                 |  |     [green] ■■■■■■■■■■                 |  |     ■■■■■■■■■■■■                 | |
| |                                                                                        |  |                                        |  |                                  | |
| | +-- CurrentMission ------------------------------------------------------------------+ |  |  2. Fundamentals Part 1                |  |  2. Classifications of Sounds    | |
| | | [T]  CURRENT MISSION                                                               | |  |     [cyan] ■■■■■■■■■■                  |  |     ■■■■■■■■■■■■                 | |
| | | TAILWIND CSS FROM SCRATCH                                                          | |  |                                        |  |                                  | |
| | | 11 LECTURES   ~12h 30m                                                             | |  |  3. Fundamentals Part 2                |  |  3. IPA Chart and Passive S.     | |
| | | Learn the core utility classes that power every Tailwind project.                  | |  |     [purple] ■■■■■■■■■■                |  |     ■■■■■■■■■■■■                 | |
| | |                                                                                    | |  |                                        |  |                                  | |
| | | <LectureColumn> 1-5                       <LectureColumn> 6-11                     | |  |  4. Development Environment            |  |  4. Monophthon and Diph. Sounds  | |
| | | ●  1  Introduction                        ○  6  P1 - Clipboard Website             | |  |     [purple] ■■■■■■■■■■                |  |     ■ □□□□□□□□□□□                | |
| | | ●  2  Fundamentals P1                     ○  7  P2 - Loopstudios Website           | |  |                                        |  |                                  | |
| | | ●  3  Fundamentals P2                     ○  8  P3 - Shortly Website               | |  |  5. Mini Project                       |  |  5. Long and Short Vowel S.      | |
| | | ●  4  Dev Environment                     ○  9  P4 - Testimonial Grid Project      | |  |     [purple] ■■■■□□□□□□                |  |     ■ □□□□□□□□□□□                | |
| | | ○  5  Mini-Projects                       ○ 10  P5 - Fylo Website + Color Picker   | |  |                                        |  |                                  | |
| | |                                           ○ 11  P5 - Bookmark Manager Website      | |  |  6. Clipboard Website                  |  |  6. Main Different S. of A       | |
| | |                                                                                    | |  |     [purple] ■■■■■■■■■■                |  |     ■ □□□□□□□□□□□                | |
| | | ● active: true    ○ active: false    (<LectureBullet>)                             | |  |                                        |  |                                  | |
| | | <ProgressRing>  starts at 4 / 11 active    data: lectures.ts                       | |  |  7. Loopstudios Website                |  |  7. Past tense ending            | |
| | +------------------------------------------------------------------------------------+ |  |     [purple] ■■■■■■■■■■                |  |     ■ □□□□□□□□□□□                | |
| |                                                                                        |  |                                        |  |                                  | |
| | +-- CardsRow  (projectCards) --------------------------------------------------------+ |  |  8. Shortly Website                    |  |  8. Consonant Blends             | |
| | | +-- ProjectCardItem #1 --+ +-- ProjectCardItem #2 --+ +-- ProjectCardItem #3 --+   | |  |     [purple] ■■■■■■■■■■                |  |     ■ □□□□□□□□□□□                | |
| | | | accent: cyan           | | accent: cyan           | | accent: purple         |   | |  |                                        |  |                                  | |
| | | | TAILWIND WALLPAPER     | | VISIT LIBRARY & POOL   | | DESIGN VMPLATFORMS     |   | |  |  9. Testimonial Grid Website           |  |  9. US Professional Accent       | |
| | | | 9 COMMITS  ~10 hours   | | 9 VISITS               | | 20 commits             |   | |  |     [purple] ■■■■■■■■■■                |  |     ■ □□□□□□□□□□□                | |
| | | |                        | |                        | |                        |   | |  |                                        |  |                                  | |
| | | | Start putting your     | | Easy peacy             | | Health should be       |   | |  | 10. Design of VMPlatforms              |  | 10. Content Words and Structure  | |
| | | | knowledge to practice  | |                        | | always your main       |   | |  |     [slate] □□□□□□□□□□                 |  |     ■ □□□□□□□□□□□                | |
| | | | with these tailwindcss | | ■■■■ □□□□□             | | concern.               |   | |  |                                        |  |                                  | |
| | | | mini-projects          | | highlighted: true      | |                        |   | |  |                                        |  | 11. Word Stress for Meanings     | |
| | | |                        | |                        | | □□□□□□□□□□             |   | |  |                                        |  |     ■ □□□□□□□□□□□                | |
| | | | ■■□□□□□□□              | |                        | |                        |   | |  |                                        |  |                                  | |
| | | +------------------------+ +------------------------+ +------------------------+   | |  |                                        |  | <LongList2Item> x 11             | |
| | +------------------------------------------------------------------------------------+ |  |                                        |  | Sections 12-15 to follow ...     | |
| |                                                                                        |  |                                        |  |                                  | |
| | +-- CardsRow  (extraCards) ----------------------------------------------------------+ |  |                                        |  |                                  | |
| | | +-- ProjectCardItem #4 --+ +-- ProjectCardItem #5 --+ +-- ProjectCardItem #6 --+   | |  |                                        |  |                                  | |
| | | | accent: purple         | | accent: cyan           | | accent: gray           |   | |  |                                        |  |                                  | |
| | | | ENGLISH EVERY DAY      | | GOAL NOT SET           | | GOAL NOT SET           |   | |  |                                        |  |                                  | |
| | | | 11 SECTIONS  ~10h      | | 5 TASKS  ~3 hours      | | COMING SOON            |   | |  |                                        |  |                                  | |
| | | |                        | |                        | |                        |   | |  |                                        |  |                                  | |
| | | | Don't miss a single    | | Track and organize     | | Not active yet - Get   |   | |  |                                        |  |                                  | |
| | | | day without practicing | | code tasks efficiently | | comfortable with the   |   | |  |                                        |  |                                  | |
| | | | english pronunciation  | |                        | | Composition API and    |   | |  |                                        |  |                                  | |
| | | |                        | | ■■■■ □□□□□□            | | reactivity             |   | |  |                                        |  |                                  | |
| | | | ■■■■ □□□□□□            | | active: false          | |                        |   | |  |                                        |  |                                  | |
| | | |                        | |                        | | □□□□□□                 |   | |  |                                        |  |                                  | |
| | | |                        | |                        | | active: false          |   | |  |                                        |  |                                  | |
| | | +------------------------+ +------------------------+ +------------------------+   | |  |                                        |  |                                  | |
| | +------------------------------------------------------------------------------------+ |  |                                        |  |                                  | |
| +----------------------------------------------------------------------------------------+  +----------------------------------------+  |                                  | |
| +-- FooterStats ---------------------------------------------------------------------------------------------------------------------+  |                                  | |
| | <FooterStats>   data: footerStats.ts                                                                                               |  |                                  | |
| | SECTIONS 9 / 10   |   PROJECTS 5 / 6   |   LECTURES 84   |   LEARNING TIME ~12h 30m                                                |  |                                  | |
| | "One more step. Every day."                                                                                                        |  |                                  | |
| +------------------------------------------------------------------------------------------------------------------------------------+  +----------------------------------+ |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

## Notes

- The layout matches the real page: the CRM panel and roadmap sit side by side, the footer runs under them, and the accent panel is on the far right at full height.
- Code names: `LongList2Panel` and `LongList2Item` (data in `longList2Steps.ts`). `AccentStepItem.astro` and `data/accentSteps.ts` exist but are not used.
