document.addEventListener('DOMContentLoaded', function(){
        let inputData = null;
        let cleanedArray = null;
        document.querySelector('#vp-item3-2').onkeyup = function(event){ // vp-item3-2 is the input box
                if(event.key === ","){        
                        clearDiv(document.querySelector('#vp-item2-2'));    // Clear the visualization area
                        //visualize the input in the textbox
                        const visualizeDiv = createElem("div", "vp-item2-2-1", [], "", "visualizeDiv")  // This is dynamically created here,
                                                                                 // So that previous display is cleared and can start displaying from fresh.
                        document.querySelector('#vp-item2-2').append(visualizeDiv);
                        inputData = this.value.split(",")
                        cleanedArray = cleanArray(inputData) // Clean the input array for any non-real number values.
                        displayList(cleanedArray, document.querySelector('#vp-item2-2-1'));  // passing an array of data points instead of string
                }         
        }

        // Visualize on clicking start
        document.querySelector('#vp-item4').onclick = function(){       // When start button is clicked
                if(document.querySelector('#vp-item1').innerText === "Selection Sort"){ 
                        if(inputData !== null){
                                disableClick(this)
                                const algorithm = new SelectionSort(cleanedArray)
                                algorithm.visualize();
                                console.log(this)
                        }
                }
        }
})


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
function displayList(arrayData, DOMElement){
       
        const maxValue = getMaxInArray(arrayData);// Get max value in array
        console.log(`Cleaned array: ${arrayData} , maxValue: ${maxValue}`);
        arrayData.forEach(dataElement=>{
                const element = createElem('div', "", ["rectangle"], `height : ${parseInt((dataElement/ maxValue) * 100)}%`)
                DOMElement.append(element);
        });

}

/**
 * This function returns maxValue in array 
 * 
 * @param {array}  arrayData an array of data for which visualization need to be done.
 * Assumes everyelement is a real number in the arrayData
 */
function getMaxInArray(arrayData){
        return arrayData.reduce(function(a, b) {  
                        return Math.max(a, b);
        }, -Infinity);
}


/**
 * This function cleans the input array for any non-real number values and converts negative values to positives.
 * 
 * @param {array}  arrayData an array of data for which visualization need to be done.
 * Assumes everyelement is a real number in the arrayData
 */
function cleanArray(arrayData){
        newArray = [];
        arrayData.forEach((element) =>{
                if(!isNaN(parseInt(element))){  // If element is not a NaN
                        newArray.push(Math.abs(parseInt(element)) )// Push the positive int portion to newArray
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
function clearDiv(parent){
        while(parent.firstChild){
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
function createElem(typeOfElement, id, classList, styleString, name){
        const element = document.createElement(typeOfElement);
        // Add id
        element.setAttribute('id', id);
        // Add all classes
        classList.forEach((classToAdd)=>{
                element.classList.add(classToAdd);
        });
        // add style
        element.style = styleString;
        // add name
        element.setAttribute('name', name)

        return element;

}


document.addEventListener('DOMContentLoaded', function(){
        
});

class Algorithm{
        
        constructor(arrayData, algorithmName){
                this.data = arrayData;
                this.name = algorithmName;
        }
        
}

class SelectionSort extends Algorithm{
        constructor(arrayData){
                super(arrayData, "Selection Sort")
        }
        print(){
                console.log(this);
        }

        visualize(){
                //makeTwoPortions
                const visualizeContainer = document.querySelector("#vp-item2-2");
                document.documentElement.style.setProperty('--visualize-grid-template-row', "8fr 2fr");  // Set the grid row template to make shrinking effect
                visualizeContainer.style.setProperty('animation-play-state', 'running') // Start animation for shrinking
                // Appear single box below first box after green and assign it min value
                // Make both red
                // Go to end while checking minimum, if new minimum found make that bar red
                // Make the bar which is red move to after green and make it green
                // repeat step 2 - 5

        }

}


/**
 * Disable the element's click property 
 * 
 * @param {object} element Element for which click needs to be disabled
 * @return  Nothing
 */
 function disableClick(element){
        element.onclick = null;
}
