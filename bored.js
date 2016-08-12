L.mapbox.accessToken = 'pk.eyJ1IjoiaW5uZWo5OSIsImEiOiI2ODcwNTQxYzI3ZThkMzFiZDJiMjIwZmUzMGMyMjllNSJ9.xF_wT_Y37FY6HmGjaTo7eQ';
var map = L.mapbox.map('map', 'mapbox.streets')
  .setView([41.8781136, -87.62979819999998], 10);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
   type: 'FeatureCollection',

	
    // This is an array of Map Point objects
    features: [
	 {
        type: 'Feature',
        properties: {
            title: 'Goodman Theater',
           description: '<a href ="https://www.google.com/aclk?sa=l&ai=DChcSEwjUnYuRhavOAhUEDmkKHQ75DbYYABAA&sig=AOD64_3jXC_Alh4uRTXAA1Y7GILXNXyyEQ&q=&ved=0ahUKEwiqvoaRhavOAhVM34MKHVk8DucQ0QwIGg&adurl="/><img src="data:image/jpeg;base64,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" class="popupimage" width="100" height="200" /> ',
			"shops": false,
        "schools": false,
        "entertainment": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': '',
        },
        geometry: {
            type: 'Point',
            //longitude first!
            coordinates: [-87.629798, 41.878114]
        }
    },
	 {
        type: 'Feature',
        properties: {
            title: 'Lyric Opera Of Chicago',
           description: '<a href ="https://www.lyricopera.org/?gclid=CIPGjciEq84CFQmPaQodnh0OLw"/><img src="http://legacy.skyscrapercenter.com/class-image.php/userpics/10002/?width=1000&height=800&image=/images/albums/userpics/10002/CivicOpera_lookup2_MG.jpg" class="popupimage" width="100" height="200" /> ',
			"shops": false,
        "schools": false,
        "entertainment": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': 'commercial',
        },
        geometry: {
            type: 'Point',
            //longitude first!
            coordinates: [-87.637407, 41.882591]
        }
    },
	
     {
        type: 'Feature',
        properties: {
            title: 'United Center',
           description: '<a href ="http://www.unitedcenter.com/"/><img src="data:image/jpeg;base64,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" class="popupimage" width="100" height="200" /> ',
			"shops": false,
        "schools": false,
        "entertainment": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': 'commercial',
        },
        geometry: {
            type: 'Point',
            //longitude first!
            coordinates: [-87.674604, 41.880716]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Willis Tower',
           description: '<a href ="http://theskydeck.com/"/><img src="http://www3.jjc.edu/ftp/wdc13/rturza/pictures/Sears_Tower.jpg" class="popupimage" width="100" height="200" /> ',
			"shops": false,
        "schools": false,
        "entertainment": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': 'commercial',
        },
        geometry: {
            type: 'Point',
            //longitude first!
            coordinates: [-87.63591500000001, 41.878876]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: "North Avenue Beach",
            description: '<a href ="http://www.chicagoparkdistrict.com/parks/north-avenue-beach/"/a><img src="http://visitclarkstreet.com/filebin/images/merchantimages/CS_V_North_Avenue_Beach.jpg" class="popupimage" /> ',
			 "shops": false,
        "schools": false,
        "entertainment": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': 'swimming',
        },
        geometry: {
            type: 'Point',
            //longitude first!
            coordinates: [-87.62389100000001, 41.913709]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Oak Street Beach',
            description: '<img src="http://www.dk-arch.com/commercial/hospitality/oakstreet/images/oakstreet-1.jpg" class="popupimage"/>',
			"shops": false,
			"schools": false,
			"entertainment": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': 'swimming',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.61930899999999,41.900396]
        }
    },
	
	{
		 type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-87.65533299999998,41.948438]},
    "properties": {
        'title': 'Wrigley Field',
		 "shops": false,
        "schools": false,
        "entertainment": true,
        'marker-color': '#00CC00',
        'marker-symbol': 'baseball',
        'marker-size': 'large',

        // Store the image url and caption in an array.
        'images': [
          ['https://sportspowerweekends.com/wp-content/uploads/2010/12/Wrigley-Field-Getty-Images.jpg','Stadium'],
          ['http://mlb.mlb.com/chc/images/ballpark/480x200_wrigley_field.jpg','Stadium Entrance']
        ]
    }
}, 
{
		 type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-87.60889600000002,41.89165]},
    "properties": {
        'title': 'Navy Pier',
		 "shops": false,
        "schools": false,
        "entertainment": true,
        'marker-color': '#00CC00',
        'marker-symbol': 'lighthouse',
        'marker-size': 'large',

        // Store the image url and caption in an array.
        'images': [
          ['http://www.chicagochildrensmuseum.org/img/gallery/ccm_entrance.jpg','Entrance'],
          ['http://www.smartdestinations.com/blog/wp-content/uploads/2011/08/navy-pier-chicago.jpg','Rides'],
		  ['http://www.conciergepreferred.com/media/k2/items/cache/feb6bd9a40692751100a2ef65ffe3fa8_XL.jpg', 'Fireworks on Wednesday and Saturday Nights']
        ]
    }
}, 
	{
        type: 'Feature',
        properties: {
            title: 'John Hancock Center',
            description: 'The John Hancock Center is a 100-story, 1,127-foot[7] (344 m) tall skyscraper and is the 4th tallest building in Chicago<br>  <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/John_Hancock_Center_viewed_from_Navy_Pier.jpg/240px-John_Hancock_Center_viewed_from_Navy_Pier.jpg" class="popupimage" />',
			"shops": false,
        "schools": false,
        "entertainment": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': 'commercial',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.62291700000003,41.89877]
        }
    },

	{
        type: 'Feature',
        properties: {
            title: 'Lincoln Park Zoo',
            description: '<a href = "http://www.lpzoo.org/"/><img src="http://www.familyholiday.net/wp-content/uploads/2011/03/lincoln-park-zoo-lion.jpg" class="popupimage"/>',
			 "shops": false,
        "schools": false,
        "entertainment": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': 'zoo',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.63291700000002,41.92089]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Bean',
            description: '<a href = "http://www.chicagotraveler.com/cloud-gate-chicago"/><img src="http://www.planetizen.com/files/images/Chicago%2005%20Bean.jpg" class="popupimage" />',
			"shops": false,
        "schools": false,
        "entertainment": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': 'bicycle',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.63291700000002,41.92089]
        }
    },
	
	{
        type: 'Feature',
        properties: {
            title: 'Water Tower',
            description: 'The Water Tower Place is a large urban mixed-use development with a 758,000 sq ft shopping mall.  <br> <img src =  "https://upload.wikimedia.org/wikipedia/commons/0/0b/20120929_Water_Tower_Place.JPG" class="popupimage" />',
			"shops": true,
        "schools": false,
        "entertainment": false,
            'marker-color': '#0099FF',
            'marker-size': 'large',
            'marker-symbol': 'shop',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.62289299999998,41.89793]
        }
    },

	
	]
};

//slideshow
  
myLayer.on('layeradd', function(e) {
    var marker = e.layer;
    var feature = marker.feature;
    var images = feature.properties.images
    var slideshowContent = '';

	if(images != null){
		for(var i = 0; i < images.length; i++) {
			var img = images[i];

			slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
								  '<img src="' + img[0] + '" />' +
								  '<div class="caption">' + img[1] + '</div>' +
								'</div>';
		}

		// Create custom popup content
		var popupContent =  '<div id="' + feature.properties.id + '" class="popup">' +
								'<h2>' + feature.properties.title + '</h2>' +
								'<div class="slideshow">' +
									slideshowContent +
								'</div>' +
								'<div class="cycle">' +
									'<a href="#" class="prev">&laquo; Previous</a>' +
									'<a href="#" class="next">Next &raquo;</a>' +
								'</div>'
							'</div>';

		// http://leafletjs.com/reference.html#popup
		marker.bindPopup(popupContent,{
			closeButton: false,
			minWidth: 320
		});
	}
});

				
myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

$('#map').on('click', '.popup .cycle a', function() {
    var $slideshow = $('.slideshow'),
        $newSlide;

    if ($(this).hasClass('prev')) {
        $newSlide = $slideshow.find('.active').prev();
        if ($newSlide.index() < 0) {
            $newSlide = $('.image').last();
        }
    } else {
        $newSlide = $slideshow.find('.active').next();
        if ($newSlide.index() < 0) {
            $newSlide = $('.image').first();
        }
    }

    $slideshow.find('.active').removeClass('active').hide();
    $newSlide.addClass('active').show();
    return false;
});

$('.menu-ui a').on('click', function() {
    // For each filter link, get the 'data-filter' attribute value.
    var filter = $(this).data('filter');
    $(this).addClass('active').siblings().removeClass('active');
    myLayer.setFilter(function(f) {
        // If the data-filter attribute is set to "all", return
        // all (true). Otherwise, filter on markers that have
        // a value set to true based on the filter name.
        return (filter === 'all') ? true : f.properties[filter] === true;
    });
    return false;
});

				
map.on('ready', function() {
    //featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});
