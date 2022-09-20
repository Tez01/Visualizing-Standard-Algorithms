document.addEventListener("DOMContentLoaded", function () {
  let inputData = null;
  let cleanedArray = null;
  document.querySelector("#vp-item3-2").onkeyup = function (event) {
    // vp-item3-2 is the input box
    if (event.key === ",") {
      clearDiv(document.querySelector("#vp-item2-2")); // Clear the visualization area
      //visualize the input in the textbox
      const visualizeDiv = createElem(
        "div",
        "vp-item2-2-1",
        [],
        "",
        "visualizeDiv"
      ); // This is dynamically created here,
      // So that previous display is cleared and can start displaying from fresh.
      document.querySelector("#vp-item2-2").append(visualizeDiv);
      inputData = this.value.split(",");
      cleanedArray = cleanArray(inputData); // Clean the input array for any non-real number values.
      displayList(cleanedArray, document.querySelector("#vp-item2-2-1")); // passing an array of data points instead of string
    }
  };
  clearDiv(document.querySelector("#vp-item2-2")); // Clear the visualization area
  //visualize the input in the textbox
  const visualizeDiv = createElem(
    "div",
    "vp-item2-2-1",
    [],
    "",
    "visualizeDiv"
  ); // This is dynamically created here,
  // So that previous display i
  document.querySelector("#vp-item2-2").append(visualizeDiv);
  displayList([], document.querySelector("#vp-item2-2-1")); // passing an array of data points instead of string

  // Visualize on clicking start
  document.querySelector("#vp-item4").onclick = function () {
    // When start button is clicked
    if (document.querySelector("#vp-item1").innerText === "Selection Sort") {
      //        if(inputData !== null){
      disableClick(this);
      // Disable also the textbox to not allow more inputs
      document.querySelector("#vp-item3-2").disabled = "true";
      const algorithm = new SelectionSort(cleanedArray);
      algorithm.visualize();
      //        }
    }
  };
});

/**
 * This function displays the list data passed as argument in a bar format on screen
 *
 * @param {array}  arrayData an array of data for which visualization need to be done.
 * @param {object} DOMElement HTML DOM object of where this visualization need to be displayed
 * This function will check for each value in the array to be a real number. Other data types will be skipped.
 * For simplicity, only integer part of floats will be used to display.
 * Assumes the inputArea parameter is a HTML DOM object, otherwise behaviour is undefined
 * @return  Nothing
 */
function displayList(arrayData, DOMElement) {
  const maxValue = getMaxInArray(arrayData); // Get max value in array
  console.log(`Cleaned array: ${arrayData} , maxValue: ${maxValue}`);
  arrayData.forEach((dataElement) => {
    const element = createElem(
      "div",
      "",
      ["rectangle"],
      `height : ${parseInt(
        (dataElement / maxValue) * 100
      )}%; text-align:center;`
    );
    element.innerHTML = dataElement;
    DOMElement.append(element);
  });
}

/**
 * This function returns maxValue in array
 *
 * @param {array}  arrayData an array of data for which visualization need to be done.
 * Assumes everyelement is a real number in the arrayData
 */
function getMaxInArray(arrayData) {
  return arrayData.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
}

/**
 * This function cleans the input array for any non-real number values and converts negative values to positives.
 *
 * @param {array}  arrayData an array of data for which visualization need to be done.
 * Assumes everyelement is a real number in the arrayData
 */
function cleanArray(arrayData) {
  newArray = [];
  arrayData.forEach((element) => {
    if (!isNaN(parseInt(element))) {
      // If element is not a NaN
      newArray.push(Math.abs(parseInt(element))); // Push the positive int portion to newArray
    }
  });
  return newArray;
}

/**
 * This function removes every child element in the element passed as argument
 *
 * @param {object}  parent parent element from which all childs will be removed
 * Assumes everyelement is a real number in the arrayData
 */
function clearDiv(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/**
 * This function creates a new DOMElement based on the parameter passed
 *
 * @param {string}  typeOfElement type of DOM element to be created. Eg 'div', 'p' etc.
 * @param {string}  id Id to assign to the newly created element.
 * @param {array}   classList An array of string containing all classes to add to element
 * @param {string}  styleString a string representing the style to add to the element *
 * @param {string}  name a string for name of the element.
 * Assumes all parameters are valid, otherwise behaviour is undefined. Example for typeOfElement "z", behaviour is undefined.
 *
 */
function createElem(typeOfElement, id, classList, styleString, name) {
  const element = document.createElement(typeOfElement);
  // Add id
  element.setAttribute("id", id);
  // Add all classes
  classList.forEach((classToAdd) => {
    element.classList.add(classToAdd);
  });
  // add style
  element.style = styleString;
  // add name
  element.setAttribute("name", name);

  return element;
}

class Algorithm {
  constructor(arrayData, algorithmName) {
    this.data = arrayData;
    this.name = algorithmName;
  }
}

class SelectionSort extends Algorithm {
  constructor(arrayData) {
    super(arrayData, "Selection Sort");
  }
  print() {
    console.log(this);
  }

  async visualize() {
    //makeTwoPortions
    const visualizeContainer = document.querySelector("#vp-item2-2");
    document.documentElement.style.setProperty(
      "--visualize-grid-template-row",
      "8fr 2fr"
    ); // Set the grid row template to make shrinking effect

    // create move bar container
    const moveBarContainer = createElem("div", "vp-item2-2-2", [], "", "");

    // Add the moveBarContainer to cascade under visualizing area
    visualizeContainer.append(moveBarContainer);
    await waitForAnimationToComplete(visualizeContainer); // Wait till animation is complete

    // get left position and width of first bar in visualization area
    const positionFromLeft =
      document
        .querySelector("#vp-item2-2-1")
        .childNodes[0].getBoundingClientRect().left -
      document.querySelector("#vp-item2-2-1").getBoundingClientRect().left;
    const widthOfBar =
      document
        .querySelector("#vp-item2-2-1")
        .childNodes[1].getBoundingClientRect().left -
      document
        .querySelector("#vp-item2-2-1")
        .childNodes[0].getBoundingClientRect().left;
    // Create a moving box of that width at that left position
    const movingBox = createElem(
      "div",
      "vp-item2-2-2-1",
      ["rectangle", "redBackground"],
      `position: relative; left: ${positionFromLeft}px; width: ${widthOfBar}px; height: 30px; text-align: center`,
      ""
    );

    moveBarContainer.append(movingBox);
    await waitForAnimationToComplete(movingBox); // Wait till animation is complete

    // Make first bar red
    document
      .querySelector("#vp-item2-2-1")
      .childNodes[0].classList.add("redBackground");
    // Set minimum value inside red box
    movingBox.innerHTML =
      document.querySelector("#vp-item2-2-1").childNodes[0].innerHTML;
    // window.setInterval(()=>{document.querySelector("#vp-item2-2-1").childNodes[0].classList.remove("redBackground")}, 10000);

    // Get parent element of bars, id vp-item2-2-1
    let parent = document.querySelector("#vp-item2-2-1");

    let currentStartIndex = 0;
    while (currentStartIndex < parent.childNodes.length) {
      let currentMinBar =
        document.querySelector("#vp-item2-2-1").childNodes[currentStartIndex];

      // Make current Min Bar Red
      currentMinBar.classList.add("redBackground");
      // Set minimum value inside Min box
      movingBox.innerHTML = currentMinBar.innerHTML;
      moveUnder(movingBox, currentMinBar);
      await delay(50);

      let nextBarIndex = currentStartIndex + 1;
      let nextBar =
        document.querySelector("#vp-item2-2-1").childNodes[nextBarIndex];
      while (nextBar != undefined) {
        // Move under next bar
        moveUnder(movingBox, nextBar);
        await delay(50);

        if (parseInt(nextBar.innerHTML) < parseInt(currentMinBar.innerHTML)) {
          //Remove Min color from previous Min bar
          currentMinBar.classList.remove("redBackground");
          // Make next Bar new min bar and change color to red
          nextBar.classList.add("redBackground");
          currentMinBar = nextBar;
          // Set minimum value inside Min box
          movingBox.innerHTML = currentMinBar.innerHTML;
        }

        nextBar =
          document.querySelector("#vp-item2-2-1").childNodes[++nextBarIndex];
      }
      // Remove red color from currentMin Bar and make it green
      currentMinBar.classList.remove("redBackground");
      currentMinBar.classList.add("greenBackground");

      // Only swap if the current min bar and currentStartIndex are different.
      if (
        currentMinBar !==
        document.querySelector("#vp-item2-2-1").childNodes[currentStartIndex]
      ) {
        console.log(
          await swap(
            currentMinBar,
            document.querySelector("#vp-item2-2-1").childNodes[
              currentStartIndex
            ]
          )
        );
      }

      currentStartIndex++;
    }
  }
}

/**
 * Disable the element's click property
 *
 * @param {object} element Element for which click needs to be disabled
 * @return  Nothing
 */
function disableClick(element) {
  element.onclick = null;
}

/**
 * Move the element passed as argument under the second element in argument
 *
 * @param {object} element1 Element which need to be moved
 * @param {object} element2 Element under which element1 needs to be moved
 * @return  Nothing
 */
function moveUnder(element1, element2) {
  let leftValueElement2 =
    element2.getBoundingClientRect().left -
    document.querySelector("#vp-item2-2-1").getBoundingClientRect().left;
  element1.style.left = leftValueElement2 + "px";
}

/**
 * Swap two html elements. Assumes both elements are not restricted in movement by anything(Eg: by flex or grid conditions).
 *
 * @param {object} element1 DOM element 1
 * @param {object} element2 DOM element 1
 * @return  Nothing
 */

function swapHTML(element1, element2) {
  let element2Copy = element2;
  element2 = element1;
  element1 = element2;
}

/**
 * Resolves only when the animation has been complete
 *
 * @param {object} element Element for which animation needs to be turned on and waited
 * @return Promise
 */

function waitForAnimationToComplete(element) {
  return new Promise((resolve, reject) => {
    element.style.animationPlayState = "running";
    setTimeout(() => {
      resolve("Resolved");
    }, getAnimationTime(element));
  });
}

/**
 * Returns the animation time(in ms) of element passed as argument
 *
 * @param {object} element Element for which animation time needs to be calculated. Assumes animation property
 * exist for the element, otherwise result is undefined
 * @return {string} Animation time in millisecs
 */
function getAnimationTime(element) {
  // parse the float portion from animation duration and multiply by 1000 to make millisecs
  let animationTime =
    parseFloat(window.getComputedStyle(element).animationDuration) * 1000;

  if (!isNaN(animationTime)) {
    return animationTime;
  }
  return "undefined";
}

/**
 * Creates a delay in the code for amount of milliseconds passed as argument.
 * . Assumes delayTime is a valid number otherwise result is undefined.
 *
 * @param {number} delayTime time for delay
 * @return nothing
 */
function delay(delayTime) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(`Done waiting ${delayTime}ms`);
      }, delayTime);
    } catch {
      reject("Some error happened in setTimeOut function");
    }
  });
}

/**
 * Swaps the two elements. This function is specific for this setup only. Only created to make
 * separation of task. Assumes both elements have same parent.
 *
 * @param {object} element1 First DOM element
 * @param {object} element2 Second DOM element
 * @return nothing
 */
async function swap(element1, element2) {
  element1.classList.add("swapTransition");
  element2.classList.add("swapTransition");

  let newElement1X = null;

  let newElement2X = null;

  // Get new X position for both elements which would appear after swapping
  newElement1X =
    element2.getBoundingClientRect().left -
    element1.getBoundingClientRect().left;
  newElement2X =
    element1.getBoundingClientRect().left -
    element2.getBoundingClientRect().left;

  // Translate both elements to new positions
  console.log(
    await translatePositions(element1, element2, newElement1X, newElement2X)
  );

  element1.style.removeProperty(`transform`);
  element2.style.removeProperty(`transform`);

  element1.classList.remove("swapTransition");
  element2.classList.remove("swapTransition");
  // // Translating does not actually change the order of element in parent's childNode list.
  // // So change that using insert before.
  console.log(await changeOrderInNodelist(element1, element2));

  return new Promise((resolve) => {
    resolve("Done swapping");
  });
}

function translatePositions(element1, element2, x1, x2) {
  return new Promise((resolve) => {
    element1.style.transform = `translateX(${x1}px)`;
    element2.style.transform = `translateX(${x2}px)`;
    setTimeout(() => {
      resolve("Done translating position");
    }, getTransitionTime(element1));
  });
}

function changeOrderInNodelist(element1, element2) {
  return new Promise((resolve) => {
    let parent = element1.parentElement;
    let nextToElement1 = element1.nextSibling;
    let nextToElement2 = element2.nextSibling;
    if (nextToElement2 !== element1) {
      //If both elements are not adjacent

      parent.insertBefore(element1, nextToElement2);
      parent.insertBefore(element2, nextToElement1);
    } else {
      //If both elements are adjacent, only one of element need to be inserted before
      parent.insertBefore(element1, element2);
    }

    setTimeout(() => {
      resolve("Done changing Order");
    }, 10);
  });
}

/**
 * Returns the transition time(in ms) of element passed as argument
 *
 * @param {object} element Element for which transition time needs to be calculated. Assumes transition property
 * exist for the element, otherwise result is undefined
 * @return {string} transition time in millisecs
 */
function getTransitionTime(element) {
  // parse the float portion from animation duration and multiply by 1000 to make millisecs
  let transitionTime =
    parseFloat(window.getComputedStyle(element).transitionDuration) * 1000;

  if (!isNaN(transitionTime)) {
    return transitionTime;
  }
  return "undefined";
}
