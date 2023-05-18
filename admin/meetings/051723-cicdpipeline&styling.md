# CSE 110 Team 28 CI/CD Pipeline & Styling Decision Meeting

---

## Attendance
- [x] Cody
- [x] Jackie
- [x] Brandon
- [x] Jason
- [x] Alvaro
- [x] Steve
- [x] Wesley
- [x] Terry
- [x] Jenny
- [ ] Ishan

Date: 5/17/2023

Time: 2 - 4pm PST

Place: WongAvery Library, Room 109

---

## Agenda
1. Attendance
2. Go over what we discussed in TA meeting
3. Send test question example to professor via slack
4. Review ADRs + agree on style
5. Decide on style enforcement
6. Decide which things we want to have in our CI/CD pipeline
7. Define tasks to complete in the coming week
8. Create GitHub Issues for alpha version
9. Assign tasks
10. Lab 7 groups?
---

## Unfinished Business
- Assigned tasks from last meeting

---

## New Business

### TA Meeting Notes
- Ask if it's too late to submit a question for the midterm
  - might be late; do it anyway
- clarify what the alpha is
  - whatever our first version is
  - they want to see something working (could be very simple; just have something that shows the pipeline and other code style)
- don’t put more than 3 people working on the CI/CD pipeline stuff
  - “if you feel like putting 4 people on a task, put 3”
- run CI/CD pipeline on 8ball app while others are working on features
- if you are developing something, you should also write the tests for it (“end to end ownership”)
- make sure everyone runs the same linter
- run codacy? Looks for errors in code at compile time
- unit tests use something like Jest
- talk about how we will export our app (chrome extension?)
  - use GH pages
- satvik will be in the cse lab for the whole day if we want to go see him in person after the meeting

### CI/CD Pipeline
- People on this task: Brandon, Cody, Ishan
- [Cody] Unit Tests? Yes
  - jasmine, jest
    - might change this later if it sucks
- [Brandon] Linting? Yes
  - JSLint
    - could change this later if we want different functionality
- Auto-compressing images?
  - to manually compress, use tinyjpg.com
  - later
- [Ishan] Git Hooks? Yes
  - pre-commit
- Protected main branch? Yes
  - tell people when you make a PR; request reviews from people who are more likely to understand the code
- How many required reviewers for a pull request? 2 people (can’t be people working on the feature)

### Style Enforcement
- LOOK AT EXAMPLE IN SLACK
- Function header comments?
  - What should we include in these? Flags, author, etc.
  - @param {type} insert-stuff
  - @returns {type} insert-stuff
  - general description of functionality
  - @author
  - use JSDoc format
    - packages all of the comments that we make into a separate html file
- have extra space between functions
- functions should be word functions (not arrows)
- File header comments?
  - date (first created)
  - authors (add to list of working authors)
  - team name
  - general description of file purpose
- File naming convention
  - underscores between words, all lowercase
  - html pages should be named something like “index.html” and “baeometer.html” (note that our actual name for the app is “Bae-O-Meter”)
- Camel case vs. snake case vs. hungarian notation
  - camel case
- General code commenting?
  - use double slash (for inline)
  - comment on the line above
  - in html files, try to comment each significant feature of the page
  - for javascript files, explain things that are complicated (e.g. explain how our score is calculated); use common sense
  - try not to be longer than 100 characters per line
  - “Double” quotes for HTML, ‘single’ quotes for JS and CSS
  - .webp for images

### Starting Implementation Tasks (to be added via GitHub issues)
- We need an "alpha" version of the app with "some" function
1. [Jason & Terry] Title page with start button - should just redirect to app page, HTML structure for app and landing page
2. [Jackie & Wesley] Input birthdays of user and user’s partner, input names of user and user’s partner
3. [Steve & Alvaro] Button when pressed, runs algorithm and outputs result
4. [Jenny] Basic algorithm that takes names and birthdays computes score from 0 to 1 (score will be mapped to a result)

### Other stuff
- We should start doing more standups (especially when we start writing code)
  - keep it at most 15 minutes long (particularly important for the Wednesday meetings since we are now cutting into time)

---

## To Do:
- Continuous Integration (CI/CD assignment) checkpoint 1 due by Sunday 5/21
- ADR assignment checkpoint 1 due by Sunday 5/21
- Start implementing / assigning tasks via GH issues
- [Jason] Push updated wireframes to github
- DM the midterm question to the professor (PDF or Slack Post)
- make the ADRs all the same format
- fill out new lettucemeet for standup availability
---
