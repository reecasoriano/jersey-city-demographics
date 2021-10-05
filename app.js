let neighborhoodData; // global variable to be used in p5 sketch

window.addEventListener('load', function () {
    // make sure HTML is loaded
    console.log('page is loaded');

    // select button
    let themeButton = document.getElementById("theme");

    /* NOTE: NEED TO FIX TOGGLE BUTTON: add an inital state, output as blank so that the button works on the first click */

    //  listen to event on click
    themeButton.addEventListener('click', function () {
        // if background is dark, change background to white and text to black
        if (document.body.style.background == "rgb(21, 21, 21)") {
            document.body.style.background = "white";
            document.body.style.color = "black";
            // otherwise make background dark and text white
        } else {
            document.body.style.background = "rgb(21, 21, 21)";
            document.body.style.color = "white";
        }
    });

    let dropdown = document.getElementById("neighborhood_select"); // select dropdown menu

    dropdown.addEventListener("change", function () { // listen to event change in dropdown menu
        // access value of selected option
        let selectedNeighborhood = dropdown.options[dropdown.selectedIndex].value;

        // fetch data from local json
        fetch("jerseycity_neighborhood_data.json")
            .then(response => response.json())
            .then(data => {
                // store neighborhood info in array
                let neighborhoodArray = data.neighborhoods;

                // create elements
                let headingElement = document.getElementById("n-name");
                let totalPopElement = document.getElementById("n-pop");
                let hispanicPopElement = document.getElementById("n-hisp-pop");
                let asianPopElement = document.getElementById("n-asian-pop");
                let blackPopElement = document.getElementById("n-black-pop");
                let whitePopElement = document.getElementById("n-white-pop");
                let amerIndPopElement = document.getElementById("n-amerind-pop");
                let otherMixPopElement = document.getElementById("n-other-pop");

                // populate info based on index of user selection
                for (i = 0; i < neighborhoodArray.length; i++) {
                    if (dropdown.selectedIndex == i + 1) {
                        headingElement.innerHTML = neighborhoodArray[i].name;
                        totalPopElement.innerHTML = "Total population: <br>" + neighborhoodArray[i].total_pop;
                        hispanicPopElement.innerHTML = "Hispanic population: <br>" + neighborhoodArray[i].total_hisp_pop;
                        asianPopElement.innerHTML = "Asian, Hawaiian & Pacific Islander population: <br>" + neighborhoodArray[i].total_asian_pop;
                        blackPopElement.innerHTML = "Black population: <br>" + neighborhoodArray[i].total_black_pop;
                        whitePopElement.innerHTML = "White population: <br>" + neighborhoodArray[i].total_white_pop;
                        amerIndPopElement.innerHTML = "American Indian population: <br>" + neighborhoodArray[i].total_amerind_pop;
                        otherMixPopElement.innerHTML = "Other / two or more races: <br>" + neighborhoodArray[i].total_other_pop;
                    }
                }

            })



    });

})
