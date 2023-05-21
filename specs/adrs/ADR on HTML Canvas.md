# Adding HTML Canvas To Fortune Telling App

## Context and Problem Statement

So far, the only parameters that the user enters in to receive a fortune result is their birthday and their partner’s birthday. This can be boring to the user as it involves little interactivity and provides little room for creativity.

## Considered Options

* HTML Canvas for drawing functionality: user will draw something random and we will use the pixel values of the drawing as part of our algorithm to determine the result
* Random Keyboard Smash: use keyboard smash values as part of algorithm
* Use external library to add drawing functionality

## Decision Outcome

Chosen option: "{HTML Canvas for drawing functionality}", because
Allows user to have more fun and interact more with the application since it differs from just adding text
Adds more randomness to the fortune-telling process since the user does not know exactly how the drawing will affect the fortune
Does not require external libraries

### Consequences

* Good, because it allows more interactivity and makes it more fun for the user
* Bad, because it requires more effort to implement and make sure it works on all devices

## Pros and Cons of the Options

### Random Keyboard Smash

* Good, because it is easy to implement
* Bad, because it is hard to do a keyboard smash on mobile devices

### Use external library to add drawing functionality

* Good, because allows more interactivity and fun
* Good, because an external library may have more features
* Bad, because it adds an additional dependency to the app

