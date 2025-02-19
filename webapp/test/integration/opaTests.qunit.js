sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/jnh/travellist/travel/test/integration/FirstJourney',
		'com/jnh/travellist/travel/test/integration/pages/TravelList',
		'com/jnh/travellist/travel/test/integration/pages/TravelObjectPage',
		'com/jnh/travellist/travel/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/jnh/travellist/travel') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);