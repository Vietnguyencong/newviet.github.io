//
// format for the my_locations array is:
//   
//  var my_locations =[ 
//  ["first text string for the tooltip",
//   "2nd text string for the descriptions below the map", 
//    marker lat, marker long, "marker letter" , "marker color string in hex"],
//  [ ... same six items as the previous row for the 2nd location ...],
//  [ ... same six items as the previous row for the 3rd location ...],
//  .
//  .
//  [ ... same six items as the previous row for the last location ...]
//  ]; 
//
var my_locations =[
    ["1148 Quang Trung Street 2000 - September 2015",
     "this is place where I was born and lived for 15 years",
     15.100836, 108.815496,"A","aaffaa"],
    ["Chanh Lo primary school  2003-2008",
    "where I went to shcool form grade 1 to 5, a lot of nice memory happend just happen right here ",
    15.112436, 108.802586,"K","888888"],
    ["Chanh Lo secondary shcool 2009-2012",
      'The shcool I went to from grade 6 to 9. this is where I grow up with my felows',
     15.110968, 108.805505,"S","00ffff"],
    ["My Khe Beach",
  "Place where I can relax and enjoy my time with family in the weekend. It was reall good when bathing in the beach and eat the best seafood after that(<a target='_blank' href='https://www.google.com/search?biw=1396&bih=657&tbm=isch&sxsrf=ACYBGNSB70IrePX7SeJjo5ymE9cPZ1WbdA%3A1571866738973&sa=1&ei=csiwXbSAO4yqsgWVzp6IDQ&q=my+khe+beach++quang+ngai&oq=my+khe+beach++quang+ngai&gs_l=img.3..0.7558.14799..15050...4.0..0.200.3517.3j21j1......0....1..gws-wiz-img.....10..35i362i39j35i39j0i67.XdSgDGaoQjk&ved=0ahUKEwi0gfH0q7PlAhUMlawKHRWnB9EQ4dUDCAc&uact=5'>see more</a>)",
  15.183869, 108.895513,"D","ffffff"],
    ["Tran Quoc Tuan high shcool 2012-2015",'Where I went to shcool from grade 10 to 12. This was the best shcool ever. I only can learn alot but also having alot of friends here',
     15.120246, 108.806266,"C","ff0000"],
    ["Ta Nang, Phan Dung October 2018",
  "fearturing by wide range of mountain and the most beatiful sightseeing in Vietnam (personally), really fun if you choose to go with few best friends and sleep there for couple night(<a target='_blank'href='https://www.google.com/search?q=ta+nang+phan+dung&sxsrf=ACYBGNRidsq_U50jrx7kR58CHRVpVSFmUg:1571866845302&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjU7sqnrLPlAhUCcq0KHSIfBnQQ_AUIEigB&biw=1396&bih=657'>see more</a>)",   
  11.608722, 108.491088,"G","00ff00"],
    ["International University-Vietnamese National University 2015-2017",
     "One of the best university in Ho Chi Minh city where I, for first time discover the world. My eyes have been widen after spending 2 years here",
     10.877416, 106.801748,"Q","ff00ff"],
    ["Land Mark 81, Ho Chi Minh city December 2018",
  "The highest buuilding in Vietnam, <a target='_blank' href='https://vi.wikipedia.org/wiki/The_Landmark_81'>see more</a> ",   10.795663, 106.719260,"E","8888ff"],
  ["Dalat city July 2019", "I had very good time with my family at this place in the last summer. This is also a place where I want to live or spend my honey moon with my future wife in the future <a target='_blank' href='https://www.google.com/search?q=dalat+city&sxsrf=ACYBGNRXFHVxsC1eXTmCLfbNjywYyJWf7A:1571866897419&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiv8LfArLPlAhUOZKwKHTTzDZUQ_AUIEigB&biw=1396&bih=657'>see more</a>",
  11.901510, 108.429832,"W","34495e"]
  ];  
  var image_array= new Array();
  function initialize() {
  // make a table for the text below the map
    os="<table style='font-size:14px' border='0'><tr><td colspan='2'><center><b>Places which are closed to me where I had some memorable experience(<a target='_blank'href='https://vietnguyencong.github.io/newviet.github.io/'>see more</a>)</td></tr>";
  // create the map
    var map = new google.maps.Map(document.getElementById("map_canvas"));  
  // create the bounds objects (to hold all the lat and lng values to find the extent of the map  
    var bounds = new google.maps.LatLngBounds();
  // loop through all the locations in the b_locations array   
    for (i=0; i  < my_locations.length; i++)                               
         {
          // create the lat lng object for this location
             var thisLatLng = new google.maps.LatLng(my_locations[i][2], my_locations[i][3]); 
          // add the lat/lng for this location to the list of bounds             
             bounds.extend(thisLatLng);  
          // create an image array object in the ith location of the image_array            
             image_array [i]= new Image(); 
          // specify the marker letter and the color of this location and store the image in an array           
             image_array[i].src = 'http://www.googlemapsmarkers.com/v1/'+my_locations[i][4]+"/"+my_locations[i][5]+'/'; 
          // create the marker           /
             createMarker(i,thisLatLng,map);       
          // add the data to the table
          os=os+"<tr><td valign='top'><img src='"+image_array[i].src+"'></td><td><b>"+my_locations[i][0]+"</b><br>"+my_locations[i][1]+"</td></tr>"; 
         }
  // fit the map to the bounds data
    map.fitBounds(bounds);
  // end the table and display it in the DIV block with id="sol"
    sol.innerHTML=os+"</table>";  
  }
  function createMarker(k,theLatLng,map) 
  {
  // this functions gets: k is the index (row) of the location, lat/lng, map object 
  //
  //  *** we use this function so that each marker has its own listener
  //  *** see this: http://stackoverflow.com/questions/15774011/googlemaps-the-addlistener-is-only-working-for-the-last-marker?rq=1
  //
    var marker = new google.maps.Marker({
              position: theLatLng,             // sets the lat/lng of the marker
              map: map,                        // sets the map object
              icon: image_array[k].src,        // sets the marker image 
              title: my_locations[k][0]        // gets the tooltip text
              });
  //
  // *** when the marker is clicked we zoom in and reset the center of the map to the marker co-ordinates
  //
    google.maps.event.addListener(marker, 'click', function() {  // what to do when the used clicks the marker
              map.setZoom(16);                                   // zoom to level 16
              map.setCenter(theLatLng);                          // set the center of the map to the marker location 
              });
  }