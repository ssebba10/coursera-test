// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//

(function(window){

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var a=0; a<=names.length; a++) {
        
    var firstLetter = String(names[a]).charAt(0).toLowerCase(); 
      if (firstLetter==='j') {
        byeSpeaker.speak(names[a]);
      } else {
        helloSpeaker.speak(names[a]);
      }
    };

})(window);
