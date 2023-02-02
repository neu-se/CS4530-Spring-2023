---
layout: assignment
title: "Individual Project 2"
permalink: /assignments/ip2
parent: Assignments
nav_order: 2
due_date: "Wednesday February 22, 11:00am ET"
submission_notes: Submit via GradeScope
---

Welcome back! We were pleased to see your thorough implementation of the new PosterSessionArea in the townService of Covey.Town.
At this point, you've implemented the backend of PosterSessionArea, and the REST/socket-io endpoints to process API calls from clients (whose calls we're now going to add).
While you have been working on these backend features, our UX designer Calin has finished the design of the PosterSessionArea feature, and we're now ready to give you the rest of the feature.

In this (final) deliverable for the PosterSessionArea feature, you will create the following components within the frontend application:
* Hooks in the `TownController` to interface between the townService and the front end.
* A `PosterSessionAreaController` and that will maintain data structures and dispatch events to the UI in response to updates from the `TownController`
* A React component for the `PosterViewer` that works with those hooks and controllers, to allow players to create/display/interact with poster session areas.

When you complete this deliverable, you should have a fully-functioning implementation of the PosterSessionArea feature, and a better understanding of the covey.town architecture.

This sequence diagram shows the interaction between the PosterSessionArea high level components to create a new poster session area and synchronize poster star values across multiple frontends (updated by user star/unstar).

[![](https://mermaid.ink/img/pako:eNqlVV1v2jAU_SuWX0ol2gVCqxFNlSAd0h66VoXtYeLFTS5gzbEz24Gxqv9913ECDaEf0yoeavue43vPPTd-pIlKgUbUwK8CZALXnC01y-aS4B8rrJJF9gDar3OmLU94zqQld9PRDWGGjNagtyeG3CljQX_nsAFNjoXH7egpGMOVHGlgsZJWKyGOXTVrQGdqI_fRpDPRuACZnraB4xLoAFPQa54A6YxZ8vN48O3EBcdMcIm31KykM-VZLviCgwN5mFQWiMJ8ShUiMiKFwUWRC8VSQxjJy_KIVSTlJhds2yUbbld4YrkV4Fkc9uzqahZHePFWJiRBHSy0pOlI2PjNLxlbQpfgeuZoqiJYYvkagSWh35rFSDx-i5h07j9PZyRhQlRU4_isymhaJAlGkh0f7vtiqxN_kMKR2_fyuBSey8_lQukMFRKCOFlAG6IWrqBKsl1bGjAkxAYkzGLiTtTSCj60zNmnzLFhGtNhDwK-5SnmdKBcXLbUmpaClWDo0Qib6JA3OBXi_XBE7vTJlT5ExCsmly9lc_rpQX-48uWXrIfRh1eVrvF33cOZRpOijJiU2tRu43JJ7AoamjL08mualsZvaHo7-T9N9zZwTJdnQ6KSpNCeU6IFtmQFuhoGrGLf-3rUF_UQVnUZ4r9GzjPGMlc1W7hBcwvtqlaaaMjUmok6pp2Nl-66KAHPkYXcrVpqozN8_f7iZuOd-yDjtjVhHtIw2fi4U0vW0_fo34xsivy1KQ_h-JPEfQP2Jqi_cG1xnWUMy-BQZceBbcGOgdiN34k5nsKrutaQ28k_KTF7T-TxEW7GNOe0bBae-4EjLyrr49_SFqWkXZqBzhhP8UV9dNtziqJmMKcR_pvCghXCzulcPmGoe12nCKeR1QV0qU-7eoBptGDC4C6k3Cp941_p8rHuUnyvfiiV1UBc0uiR_qZRrzc4D4e9MBiGg14Q9MMu3dIoOA97_YvLfhCEYdgb9PtB-NSlf0qG4Hw4-DgcDMIw6PcuBheDp7_CtbFo?type=png)](https://mermaid.live/edit#pako:eNqlVV1v2jAU_SuWX0ol2gVCqxFNlSAd0h66VoXtYeLFTS5gzbEz24Gxqv9913ECDaEf0yoeavue43vPPTd-pIlKgUbUwK8CZALXnC01y-aS4B8rrJJF9gDar3OmLU94zqQld9PRDWGGjNagtyeG3CljQX_nsAFNjoXH7egpGMOVHGlgsZJWKyGOXTVrQGdqI_fRpDPRuACZnraB4xLoAFPQa54A6YxZ8vN48O3EBcdMcIm31KykM-VZLviCgwN5mFQWiMJ8ShUiMiKFwUWRC8VSQxjJy_KIVSTlJhds2yUbbld4YrkV4Fkc9uzqahZHePFWJiRBHSy0pOlI2PjNLxlbQpfgeuZoqiJYYvkagSWh35rFSDx-i5h07j9PZyRhQlRU4_isymhaJAlGkh0f7vtiqxN_kMKR2_fyuBSey8_lQukMFRKCOFlAG6IWrqBKsl1bGjAkxAYkzGLiTtTSCj60zNmnzLFhGtNhDwK-5SnmdKBcXLbUmpaClWDo0Qib6JA3OBXi_XBE7vTJlT5ExCsmly9lc_rpQX-48uWXrIfRh1eVrvF33cOZRpOijJiU2tRu43JJ7AoamjL08mualsZvaHo7-T9N9zZwTJdnQ6KSpNCeU6IFtmQFuhoGrGLf-3rUF_UQVnUZ4r9GzjPGMlc1W7hBcwvtqlaaaMjUmok6pp2Nl-66KAHPkYXcrVpqozN8_f7iZuOd-yDjtjVhHtIw2fi4U0vW0_fo34xsivy1KQ_h-JPEfQP2Jqi_cG1xnWUMy-BQZceBbcGOgdiN34k5nsKrutaQ28k_KTF7T-TxEW7GNOe0bBae-4EjLyrr49_SFqWkXZqBzhhP8UV9dNtziqJmMKcR_pvCghXCzulcPmGoe12nCKeR1QV0qU-7eoBptGDC4C6k3Cp941_p8rHuUnyvfiiV1UBc0uiR_qZRrzc4D4e9MBiGg14Q9MMu3dIoOA97_YvLfhCEYdgb9PtB-NSlf0qG4Hw4-DgcDMIw6PcuBheDp7_CtbFo)

The sequence beings when a user selects a poster to upload to a `PosterSessionArea` (with an associated title), entering it into the `PosterViewer`:

1. The `PosterSessionAreaPoster` asks the `TownController` to create a new poster session area with the specified poster image and title
2. The `TownController` asks the `townService` to create the new poster session area with the specified poster image and title, making a REST call
3. Assuming that the request was valid, the `townService` returns success
4. Assuming that the request was valid, the `TownController` returns success
5. The `townService` broadcasts an `interactableUpdate` message with the new poster image and title (happening in parallel with 9)
6. The `TownController` receives the `interactableUpdate`, finds the correct `PosterSessionAreaController` and pushes an `updateModel` event to it
7. The `PosterSessionAreaController` updates its model, and emits `posterImageContentsChange` and `posterTitleChange` events to its listeners
8. The `PosterViewer` receives the update, re-renders, and now displays the poster and the associated title
9. The `townService` sends the same `interactableUpdate` to Calin’s frontend, and (6-8) happen in Calin’s frontend
10. When a poster is starred or unstarred, Avery’s `PosterViewer` updates the stars on the `PosterSessionAreaController`
11. In response to the update from the PosterSessionAreaPoster, the PosterSessionAreaController asks the TownController to emit an update to the townService
12. The `TownController` emits the `interactableUpdate` event, notifying the backend of the new number of stars
13. The `townService` relays that `interactableUpdate` to other clients, which will ensure that their displayed number of stars is synchronized
14. In parallel to 10-13, Calin’s client emits `interactableUpdate` updates with their stars
15. The `townService` forwards this update to Avery’s frontend `TownController`
16. Avery’s `TownController` finds the `PosterSessionAreaController` responsible for that poster session area, and calls its `updateModel` method, updating its view of the stars
17. The `PosterSessionAreaController` emits a `posterStarChange` event to its listeners.

## Objectives of this assignment
The objectives of this assignment are to:
* Write new TypeScript code that uses asynchronous operations
* Write test cases that utilize mocks and spies
* Write React components and hooks that make use of state

## Getting started with this assignment

Start by downloading the [starter code]({{site.baseurl}}{%link /Assignments/ip2/ip2-handout.zip %}). Extract the archive and run `npm install` to fetch the dependencies.
Follow the instructions in the  handout's Readme to configure and set up the backend and frontend.

### Installation notes

**Configuring Jest and VSCode**: If you would like to use the built-in Jest test runner for VSCode (where it shows the tests and their status in the sidebar), the easiest way to accomplish this for this project is to open *just* the "frontend" directory or just the "townService" directory in VSCode - not the top-level "ip2-handout" directory. If you have a quick-fix to make it work with the whole project at once, please feel free to share on Piazza and we will incorportate that here.

**NPM install failures**: The libraries used for React require some native binaries to be installed -- code written and compiled for your computer (not JavaScript). If you run into issues with `npm install` not succeeding, please try installing the following libraries using either [Homebrew (if on Mac)](https://brew.sh), apt-get, or your favorite other package manager: `pixman`, `cairo`, `pkgconfig` and `pango`. For example, run `brew install pixman cairo pkgconfig pango`. If you are on a newer Mac with an M1 or M2 chip, you may need to use `arch -arm64 brew install pixman cairo pango`. On Windows: Students have reported seeing the failure `error /bin/bash: node: command not found` upon `npm install` in the `frontend` directory. If you encounter this error, please try to delete the `node_modules` directory and re-run `npm install` in the `frontend` directory from a bash shell instead of a windows command prompt.


<!-- Changelog: -->

## Grading
This submission will be scored out of 200 points, 180 of which will be automatically awarded by the grading script, with the remaining 20 manually awarded by the course staff.

Your code will automatically be evaluated for linter errors and warnings. Submissions that have *any* linter errors will automatically receive a grade of 0. **Do not wait to run the linter until the last minute**. To check for linter errors, run the command `npm run lint` from the terminal. The handout contains the same eslint configuration that is used by our grading script.

Your code will be automatically evaluated for functional correctness by a test suite that expands on the core tests that are distributed in the handout. 
Your tests will be automatically evaluated for functional correctness by a process that will inject bugs into our reference solution: to receive full marks your tests must detect a minimum number of injected bugs. 
You will __not__ receive detailed feedback on which injected bugs you do or do not find.

The autograding script will impose a strict rate limit of 10 submissions per 24 hours.
Submissions that fail to grade will not count against the quota.
This limit exists to encourage you to start early on this assignment: students generally report that assignments like this take between 10-36 hours.
If you start early, you will be able to take full advantage of the resources that we provide to help you succeed: office hours, discussion on Piazza --- and the ability to have a greater total number of submission attempts.

Your code will be manually evaluated for conformance to our course [style guide]({{ site.baseurl }}{% link style.md %}). This manual evaluation will account for 10% of your total grade on this assignment. We will manually evaluate your code for style on the following rubric:

To receive all 20 points:
* All new names (e.g. for local variables, methods, and properties) follow the naming conventions defined in our style guide
* There are no unused local variables
* All public properties and methods (other than getters, setters, and constructors) are documented with JSDoc-style comments that describes what the property/method does, as defined in our style guide
* The code and tests that you write generally follows the design principles discussed in week one. In particular, your design does not have duplicated code that could have been refactored into a shared method.

We will review your code and note each violation of this rubric. We will deduct four points for each violation, up to a maximum of deducting all 20 style points.

## Implementation Tasks
This deliverable has 2 parts; each part will be graded on its own rubric. You should complete the assignment one part at a time, in the order presented here:


### Task 1: Implement and Test Frontend Controllers (65 points total)
Similar to the organization of the backend townService, the frontend application also has controllers that maintain the state of each interactable.

The relevant files for this task are located in the directory `frontend/src/classes/`.

The `TownController` interacts with the `townService`, receiving `ServerToClientEvents` from the backend and emitting `ClientToServerEvents` to the backend.

The `TownController`, in turn, emits `TownEvents` to components in the frontend. These events are the events that the GUI components will observe. Each PosterSessionArea is represented by a `PosterSessionAreaController`, which emits `PosterSessionAreaEvents`. GUI components that display details about each poster sesssion area will subscribe to these events so that they can remain up-to-date with the current state of the interactable.

Your next task is to implement the `PosterSessionAreaController`.
Along with this, you'll also need to implement the event handler for `TownController` to receive `interactableUpdate` messages from the townService, and the hooks for getting the poster image contents and incrementing the number of stars on a given poster session area (`getPosterSessionAreaImageContents` and `incrementPosterSessionAreaStars` respectively).
Each of these classes and functions are stubbed out in the handout.

Our handout does *not* include all of the tests in `PosterSessionAreaController.test.ts`. To receive full marks on task 2, you will *also* need enhance these test suites to check all of the behaviors of the methods that you are implementing.
Testing the behavior of the `PosterSessionAreaController` will require you to use *mocks*. 
The `PosterSessionAreaController.test.ts` file in the handout contains all of the setup code that you will need to write tests to check that the correct listeners are invoked.
The `mockListeners` object (in each test) are *mock* objects, which do not provide any implementation of the listener callbacks, but keep track of when they have been called.
In this way, you can write an assertion that some listener method is called by asserting that the mock listener was called.

To write an assertion that, for example, the `occupantsChange` listener is invoked in `PosterSessionAreaController`, you could use Jest's [toHaveBeenCalled()](https://jestjs.io/docs/expect#tohavebeencalled) matcher, as in:
`expect(mockListeners.occupantsChange).toHaveBeenCalled()`. You might also find it useful to use the [toHaveBeenCalledWith(args..)](https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-) matcher to check the arguments that are passed to the listener.
To assert that a listener was *not* called, chain the [`not` matcher](https://jestjs.io/docs/expect#not), as in `expect(...).not.toHaveBeenCalled()`.

We strongly suggest writing the tests before (or concurrent) with implementing the classes, so that you can use your own tests to help you develop your implementation.

Note: you may find it useful to use the helper method `isPosterSessionArea` defined in `TypeUtils.ts`

To run the tests for this part, run the command `npm test TestName` in the `frontend` directory, where `TestName` is either `PosterSessionAreaController` or `TownController`.
You don't need to add any new tests in `TownController.test.ts`.

{::options parse_block_html="true" /}
<details>
<summary markdown="span">View the specification for these tasks</summary>



PosterSessionAreaController

{% highlight typescript %}
  /**
   * Constructs a new PosterSessionAreaController, initialized with the state of the
   * provided posterSessionAreaModel.
   *
   * @param posterSessionAreaModel The poster session area model that this controller should represent
   */
  constructor(posterSessionAreaModel: PosterSessionAreaModel)

  /**
   * The ID of the poster session area represented by this poster session area controller
   * This property is read-only: once a PosterSessionAreaController is created, it will always be
   * tied to the same poster session area ID.
   */
  public get id(): string 

  /**
   * The title of the poster assigned to this area, or undefined if there is not one.
   */
  public get title(): string | undefined 

  /**
   * The poster title: changing this value will emit a 'posterTitleChange' events to listeners
   * 
   */
  public set title(title: string | undefined)

  /**
   * The image of the poster assigned to this area, or undefined if there is not one.
   */
  public get imageContents(): string | undefined 


  /**
   * The image contents of the poster (string representing the contents of the poster file chosen).
   * Changing this value will emit a 'posterImageContentsChange' event to listeners, and empty the list
   * of players who starred the poster.
   */
  public set imageContents(imageContents: string | undefined) 

  /**
   * The number of stars of the poster assigned to this area.
   */
  public get stars(): number

  /**
   * The number of stars of the poster assigned to this area.
   *
   * Changing this value will emit a ‘posterStarChange' event to listeners
   */
  public set stars(stars: number)

  /**
   * The list of IDs of the players who starred the poster (with its current image)
   */ 
  public get playersWhoStarred(): string[]

  /**
   * Add the specified player ID to the list of players who starred this poster. 
   */
  public addPlayerWhoStarred(playerID: string)

  /**
   * @returns PosterSessionAreaModel that represents the current state of this PosterSessionAreaController
   */
  public posterSessionAreaModel(): PosterSessionAreaModel
{% endhighlight %}

TownController 

{% highlight typescript %}
    /**
     * When an interactable's state changes, push that update into the relevant controller, which is assumed
     * to be either a Viewing Area, a Poster Session Area, or a Conversation Area, and which is assumed to already
     * be represented by a ViewingAreaController, PosterSessionAreaController or ConversationAreaController that this TownController has.
     *
     * If a conversation area transitions from empty to occupied (or occupied to empty), this handler will emit
     * a conversationAreasChagned event to listeners of this TownController.
     *
     * If the update changes properties of the interactable, the interactable is also expected to emit its own
     * events (@see ViewingAreaController and @see ConversationAreaController and @see PosterSessionAreaController)
     */
    this._socket.on('interactableUpdate', interactable => {})


  /**
   * Get the image contents for a specified poster session area (specified via poster session area controller)
   * @param posterSessionArea the poster session area controller
   * @returns a promise wrapping the contents of the poster session area's image (i.e. the string)
   */
  public async getPosterSessionAreaImageContents(
    posterSessionArea: PosterSessionAreaController,
  ): Promise<string> 

  /**
   * Increment the number of stars for a specified poster session area (specified via poster session area controller)
   * @param posterSessionArea the poster session area controller
   * @returns a promise wrapping the new number of stars the poster has
   */
  public async incrementPosterSessionAreaStars(
    posterSessionArea: PosterSessionAreaController,
  )

{% endhighlight %}
</details>

#### Grading for Task 1:
Point break down for each of the implementation tasks:
* Implement PosterSessionAreaController: 10 points
* Implement TownController.interactableUpdate and poster hooks: 10 points

To receive marks for implementing each feature, your implementation must pass all of our tests for it.

Point break down for each of the testing tasks:
* Test PosterSessionAreaController title property: 7 points
* Test PosterSessionAreaController imageContents property: 7 points
* Test PosterSessionAreaController stars property: 7 points
* Test PosterSessionAreaController toPosterSessionAreaModel: 2 points

Partial marks are available for detecting some (but not all) faults. The number of faults detected may not directly correlate with the difficulty of writing the test: there are several faults that are nearly guaranteed to be detected together (writing a test that finds one of them is guaranteed to find both of them), which is why there are different cutoffs for partial and full marks for the tests.

### Task 2: Implement React Hooks (50 points)
As discussed in Module 8, an effective pattern for building React applications is to use hooks within components to access global state. As part of the refactoring to implement the Interactable abstraction throughout Covey.Town, Avery also refactored the entire React-based frontend to use this pattern of hooks. Before implementing the final component that displays and synchronizes video playback in Viewing Areas, your next task will be to implement these hooks - some of which are related to the interactables, and some of which are related to Avery’s overall refactoring to use more hooks.

Some of these hooks may require you to include `useEffect` and/or `useState` hooks within the hook that you are building. For each of the hooks, consider the events that they might need to listen to.
The hooks you'll be implementing are in `PosterSessionAreaController`.

Be sure to follow the [rules of hooks](https://reactjs.org/docs/hooks-rules.html) when implementing your hooks - these will be enforced by the linter, and also by the TAs when grading for style.

{::options parse_block_html="true" /}
<details>
<summary markdown="span">View the specification for these tasks</summary>



PosterSessionAreaController

{% highlight typescript %}
/**
 * A hook that returns the number of stars for the poster session area with the given controller
 */
export function useStars(controller: PosterSessionAreaController): number

/**
 * A hook that returns the image contents for the poster session area with the given controller
 */
export function useImageContents(controller: PosterSessionAreaController): string | undefined

/**
 * A hook that returns the title for the poster session area with the given controller
 */
export function useTitle(controller: PosterSessionAreaController)
{% endhighlight %}
</details>

Grading for Task 2:
You do not need to write any tests for task 2. The handout contains all of the tests that our grading script will use.
To run the tests, run `npm test PosterHooks` in the `frontend` directory.

Point break down for each of the implementation tasks:
* Implement PosterSessionAreaController.ts useStars: 20 points
* Implement PosterSessionAreaController.ts useImageContents: 15 points
* Implement PosterSessionAreaController.ts useTitle: 15 points

To receive marks for implementing each feature, your implementation must pass all of our tests for it.


### Task 3: GUI Components for Poster Session Areas images (65 points)
With the controllers implemented, the last task will be to implement the frontend GUI component to display posters in the PosterSessionAreas. Avery has implemented the skeleton for this component, which also includes a form to set the poster image for a poster session area if it hasn't already been set.

Your task is to implement the creation of the poster with the user-specified information in the `SelectPosterModal` component, and then implement the component `PosterImage`, which renders the poster session area's poster image and synchronizes the number of stars with the `PosterSessionAreaController`. You will find that there is already a skeleton of this component created, which renders a an image component and number of stars inside of a `<Modal>`.

To run the tests for this part, run the command `npm test PosterViewer` in the `frontend` directory.

 The specification for this component is provided in comments in the files `frontend/src/components/Town/interactables/PosterViewer.tsx` and `frontend/src/components/Town/interactables/SelectPosterModal.tsx`, and reproduced below:
{::options parse_block_html="true" /}
<details><summary markdown="span">View the specification for this component</summary>

SelectPosterModal
{% highlight typescript %}
// Create a poster given the title and image specified by the user in this selection.
  // If one of these components of the poster is missing, or if the posterAreaController was not
  // found, then don't create the poster.
  // Toast some errors if the poster could not be created.
  const createPoster = useCallback(async () => {
    // TODO
  }, [
    title,
    posterFileContents,
    setTitle,
    coveyTownController,
    posterSessionAreController,
    closeModal,
    toast,
  ]);
{% endhighlight %}

PosterImage
{% highlight typescript %}
/**
 * The PosterImage component does the following:
 * -- renders the image of a PosterSessionArea (in a modal)
 * -- displays the title of the PosterSessionArea as the header of the modal
 * -- displays the number of stars on the poster
 * Along with the number of stars, there is also a button to increment the number of stars on a poster (i.e.
 * where a player can star a poster). Note that a player cannot star a poster more than once (this is tied to
 * the poster itself, not the PosterSessionArea).
 *
 * @param props: A 'controller', which is the PosterSessionArea corresponding to the
 *               current poster session area.
 *             : A 'isOpen' flag, denoting whether or not the modal should open (it should open if the poster exists)
 *             : A 'close' function, to be called when the modal is closed
 */
export function PosterImage({
  controller,
  isOpen,
  close,
}: {
  controller: PosterSessionAreaController;
  isOpen: boolean;
  close: () => void;
}): JSX.Element
{% endhighlight %}
</details>


#### Grading for Task 3:
You do not need to write any tests for task 3. The handout contains all of the tests that our grading script will use.

Point break down for each of the implementation tasks:
* Implement `createPoster` in SelectPosterModal: 30 points
* Implement PosterImage - sync the imageContents with the townController: 20 points
* Implement PosterImage - increment stars should only be available once per player, per poster image (i.e. can't star more than once): 15 points

To receive marks for implementing each feature, your implementation must pass all of our tests for it.


## Submission Instructions
Submit your assignment in GradeScope. The easiest way to get into GradeScope the first time is to first
[sign into Canvas](https://northeastern.instructure.com/courses/99531) and then click the link on our course for "GradeScope". 
You should then also have the option to create an account on GradeScope (if you don't already have one) so that you can log in to GradeScope directly.
Please contact the instructors immediately if you have difficulty accessing the course on GradeScope.

Submit the following files:
* frontend/src/classes/TownController.ts
* frontend/src/classes/PosterSessionAreaController.ts
* frontend/src/classes/PosterSessionAreaController.test.ts
* frontend/src/components/Town/interactables/PosterViewer.tsx
* frontend/src/components/Town/interactables/SelectPosterModal.tsx

GradeScope will provide you with feedback on your submission, but note that it will *not* include any marks that will be assigned after we manually grade your submission for code style (it will show 0 for this until it is graded). It may take several minutes for the grading script to complete.

GradeScope is configured to only provide feedback on at most 5 submissions per-24-hours per-student (submissions that fail to run or receive a grade of 0 are not counted in that limit). We strongly encourage you to lint and test your submission on your local development machine, and *not* rely on GradeScope for providing grading feedback - relying on GradeScope is a very slow feedback loop.
To check for linter errors, run the command `npm run lint` from the terminal. The handout contains the same eslint configuration that is used by our grading script.