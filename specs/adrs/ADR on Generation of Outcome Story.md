# Creating and selecting from 10 prewritten template responses for randomized results

## Context and Problem Statement

We want to generate a story based upon how the relationship will go.

How to generate pseudo-random love story as a result?
Can we get a good enough randomized result everytime without any dependencies like an API?

## Consequences ##

** With generative AI **
Using a chatbot like ChatGPT would make the results reliant on the API, and if the server or API is busy, our webpage would be compromised.
Random problems with ChatGPT could make the stories out of line as well.

** With Multiple Prewritten Responses **
Possibility of duplicate responses given enough tries.
Stories are hard coded, and flexibility is diminished.
User could find the list of stories if they open the dev tools.

## User Experience ##

** With generative AI **
Using ChatGPT would give the most realistic and randomized result as it is using AI Generation.
However, the result is directly reliant on the API, and the experience would be not work if the API is down.

** With Multiple Prewritten Responses **
When users go through the results multiple times, it is possible to get the same story due to having a limited number of prewritten resposnes
However, the results will always be isntantaneous, and since this is a local first approach, there are no dependencies.
The responses will always align to what we want to output because the responses are already written in a controlled manner.
If created properly, we could prevent back-to-back duplicate results, and have a perceived randomness in story generation, which could be a good compromise.

## Considered Options

* Pre-write all variety of results, with name and data as variables
* ChatGPT API to generate actual randomized results

## Decision Outcome

Chosen option: "Prewrite results", because it does not rely on an API which could be overloaded, and we can still randomly select from 10 results,
and offers a good enough perceived randomness.
