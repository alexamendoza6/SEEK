L.mapbox.accessToken = 'pk.eyJ1IjoiaW5uZWo5OSIsImEiOiI2ODcwNTQxYzI3ZThkMzFiZDJiMjIwZmUzMGMyMjllNSJ9.xF_wT_Y37FY6HmGjaTo7eQ';
var map = L.mapbox.map('map', 'mapbox.streets')
  .setView([-117.348480, 33.969077], 10);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
   type: 'FeatureCollection',

	
    // This is an array of Map Point objects
    features: [
	
	{
        type: 'Feature',
        properties: {
            title: 'Hubbard Street Dance',
            description: '<a href = "http://www.legacy.artplaceamerica.org/wp-content/uploads/2013/02/Final-facade_untouched_William-Zbaren.jpg"/><img src="http://www.legacy.artplaceamerica.org/wp-content/uploads/2013/02/Final-facade_untouched_William-Zbaren.jpg" class="popupimage"/>',
			 "relax": false,
        "gyms": false,
        "hobbies": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': '',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.629798,41.878114]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: "North Avenue Beach",
            description: '<a href ="http://www.chicagoparkdistrict.com/parks/north-avenue-beach/"/a><img src="http://visitclarkstreet.com/filebin/images/merchantimages/CS_V_North_Avenue_Beach.jpg" class="popupimage" /> ',
			 "relax": false,
        "gyms": false,
        "hobbies": true,
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
            title: "Lake Shore Drive",
            description: '<a href ="http://www.travelchannel.com/content/dam/images/travel/fullset/2011/09/12/af/chicago-lake-shore-drive.rend.tccom.616.462.jpeg"/a><img src="http://www.travelchannel.com/content/dam/images/travel/fullset/2011/09/12/af/chicago-lake-shore-drive.rend.tccom.616.462.jpeg" class="popupimage" /> ',
			 "relax": false,
        "gyms": false,
        "hobbies": true,
            'marker-color': '#00CC00',
            'marker-size': 'large',
            'marker-symbol': '',
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
            coordinates: [-87.61930899999998,41.900396]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Lincoln Park Zoo',
            description: '<a href = "http://www.lpzoo.org/"/><img src="http://www.familyholiday.net/wp-content/uploads/2011/03/lincoln-park-zoo-lion.jpg" class="popupimage"/>',
			 "relax": false,
        "gyms": false,
        "hobbies": true,
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
			"relax": false,
        "gyms": false,
        "hobbies": true,
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
            title: 'LA Fitness',
            description: '<a href = "https://www.lafitness.com/Pages/Default.aspx"/><img src="https://www.lafitness.com/pages/Images/ClubExterior/405.jpg" class="popupimage" />',
			"relax": false,
        "gyms": true,
        "hobbies": false,
            'marker-color': '#FF0022',
            'marker-size': 'large',
            'marker-symbol': '',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.638788,41.867524]
        }
    },
{
        type: 'Feature',
        properties: {
            title: 'UIC Recreation Center',
            description: '<a href = "http://recreation.uic.edu/facilities/facility_sfc/"/><img src="http://recreation.uic.edu/wp-content/uploads/2013/04/FacilitesBanner2.jpg" class="popupimage" />',
			"relax": false,
        "gyms": true,
        "hobbies": false,
            'marker-color': '#FF0022',
            'marker-size': 'large',
            'marker-symbol': '',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.646378,41.872550]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Union Park',
            description: '<a href = "http://www.chicagoparkdistrict.com/parks/Union-Park/"/><img src="http://www.chicagoparkdistrict.com/assets/1/7/SlideShowDimensionMain/ec9deabb0d6a43468e2dcff9d1eeaf161.jpg" class="popupimage" />',
			"relax": true,
        "gyms": false,
        "hobbies": false,
            'marker-color': '#0099FF',
            'marker-size': 'large',
            'marker-symbol': 'park',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.665421,41.884622]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Oxygen Spa Studio',
            description: '<a href = "http://www.oxygenspastudio.com/"/><img src="http://www.oxygenspastudio.com/wp-content/uploads/2015/04/oxy_slide-978x400.jpg" class="popupimage" />',
			"relax": true,
        "gyms": false,
        "hobbies": false,
            'marker-color': '#0099FF',
            'marker-size': 'large',
            'marker-symbol': '',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.629798,41.878114]
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
