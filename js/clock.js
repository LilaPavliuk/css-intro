//BOM - Browser Obejct Model
// window(variable)

// DOM Document Object Model Tree
// document(variable)
//document.querySelector('selector css')  //one element
//document.querySelectorAll('selector css')  // array of elements

//IIFE - box with functions https://developer.mozilla.org/en-US/docs/Glossary/IIFE?retiredLocale=uk //

(function () {
    const clock = document.querySelector('.clock');
    function updateClock() {
        clock.innerHTML = new Date().toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
})();







