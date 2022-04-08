
export function visualizeHandler(){

        document.querySelector('#vp-item3-2').onkeyup = function(event){ // vp-item3-2 is the input box
                if(event.key === ","){        
                        clearDiv(document.querySelector('#vp-item2-2'));    // Clear the visualization area
                        //visualize the input in the textbox
                        const visualizeDiv = createElem("div", "vp-item2-2-1", [], "")
                        document.querySelector('#vp-item2-2').append(visualizeDiv);
                        displayList(this.value.split(","), document.querySelector('#vp-item2-2-1'));  // passing an array of data points instead of string
                }
                
                
        }


        // Visualize on clicking start
        document.querySelector('#vp-item4').onclick = function(){       // When start button is clicked
                if(document.querySelector('#vp-item1').innerText === "Selection Sort"){  
                        const inputData = document.querySelector('#vp-item3-2').value
                        console.log(inputData)
                        if(inputData !== []){
                                const algorithm = new SelectionSort(inputData)
                        }
                }
                console.log(document.querySelector('#vp-item1').innerText)
        }
}


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
export function displayList(arrayData, DOMElement){
        const cleanedArray = cleanArray(arrayData) // Clean the input array for any non-real number values.
        const maxValue = getMaxInArray(cleanedArray);// Get max value in array
        console.log(`Cleaned array: ${cleanedArray} , maxValue: ${maxValue}`);
        cleanedArray.forEach(dataElement=>{
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
export function getMaxInArray(arrayData){
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
export function cleanArray(arrayData){
        newArray = [];
        arrayData.forEach((element) =>{
                if(!isNaN(parseInt(element))){  // If element is not a NaN
                        newArray.push(Math.abs(parseInt(element)) )// Push the positive int portion to newArray
                }
                console.log(typeof NaN)
        });
        return newArray;
}


/**
 * This function removes every child element in the element passed as argument
 * 
 * @param {object}  parent parent element from which all childs will be removed
 * Assumes everyelement is a real number in the arrayData
 */
export function clearDiv(parent){
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
 * @param {string}  styleString a string representing the style to add to the element
 * Assumes all parameters are valid, otherwise behaviour is undefined. Example for typeOfElement "z", behaviour is undefined.
 * 
 */
export function createElem(typeOfElement, id, classList, styleString){
        const element = document.createElement(typeOfElement);
        // Add id
        element.setAttribute('id', id);
        // Add all classes
        classList.forEach((classToAdd)=>{
                element.classList.add(classToAdd);
        });
        // add style
        element.style = styleString;

        return element;

}
