# CSE 110 Team 28 Pitch Revision & Implementation Start Meeting

---

## Attendance
- [x] Cody
- [x] Jackie
- [x] Brandon
- [x] Jason
- [x] Alvaro
- [ ] Steve
- [x] Wesley
- [x] Terry
- [x] Jenny
- [x] Ishan

Date: 5/10/2023

Time: 2 - 4pm PST

Place: WongAvery Library, Room 201

---

## Agenda
1. Attendance
2. Go over what we discussed in TA meeting
3. Decide on 1-3 more features
4. Update pitch
5. Update diagrams
6. Define tasks to complete in the coming week
7. Assign tasks
8. Lab 6 groups?

---

## Unfinished Business
- None!

---

## New Business

### TA Meeting Notes
- Need more features in pitch
- Use GitHub Actions for CI/CD
- More “flavor” (?)

### Revising the pitch
- New feature ideas:
  - Keyboard smash
  - Name & Partner’s Name
  - “How much do you like your partner?”; user taps a heart some number of times

- Features to add to pitch / final “vision”:
  - Keep the birthday input
  - Output should include a “story”: pick one from a set of pre-generated stories (could incorporate the names into the final story)
  - Choosing a card
  - Name & Partner’s name
  - Keyboard smash: “Palm reading” or “Fingerprint Scan”
  - Drawing on some canvas

### More website brainstorming
- We want everything on a single page so that we can add animations
- The user will first see a “start” page with a button to start and brief instructions
- Then there will be animations to see each screen
- The start page could be an independent page, while the inputs should be 

### Calculating the backend output number
- Each input will have a calculated number
- Each input will have a “weight” that will affect the final output more heavily
- The numbers are multiplied by the corresponding weights and added together (like a dot product)

---

## To Do:
- Continuous Integration (CI/CD assignment) by Sunday ??
- ADR assignment checkpoint 1 due by Sunday
  - [Terry] answer: why we decided to have a hybrid multi-page and single page with animations
  - [Jenny] answer: why we decided to use a javascript/html canvas (no APIs, more interactivity for the user instead of typing something in)
  - [Wesley] answer: why we decided to pre-generate our output stories (don’t want to rely on API; also improves security with no chance of prompt injection attacks)
- [Cody] Finish in-class packet by tomorrow
- [Jason] Finish wireframes
- [Alvaro] Update pitch file with features that we talked about

---