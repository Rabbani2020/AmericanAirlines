$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AAFlightBooking.feature");
formatter.feature({
  "line": 2,
  "name": "User ability to booking a ticket",
  "description": "",
  "id": "user-ability-to-booking-a-ticket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@americanairlines"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should able to booked a ticket",
  "description": "",
  "id": "user-ability-to-booking-a-ticket;user-should-able-to-booked-a-ticket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Browes American Airlines home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on the Plan Travel menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on the flight option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Put the departing city",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Put the arriving city",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select depart date",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select depart time",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select return date",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select return time",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select passenger number \u003cPassengerNo\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select passenger age",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Search the fare",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select the class",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select the Airlines",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click the search button",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "user-ability-to-booking-a-ticket;user-should-able-to-booked-a-ticket;",
  "rows": [
    {
      "cells": [
        "PassengerNo"
      ],
      "line": 22,
      "id": "user-ability-to-booking-a-ticket;user-should-able-to-booked-a-ticket;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 23,
      "id": "user-ability-to-booking-a-ticket;user-should-able-to-booked-a-ticket;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3555060800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should able to booked a ticket",
  "description": "",
  "id": "user-ability-to-booking-a-ticket;user-should-able-to-booked-a-ticket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@americanairlines"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Browes American Airlines home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on the Plan Travel menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on the flight option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Put the departing city",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Put the arriving city",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select depart date",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select depart time",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select return date",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select return time",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select passenger number 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select passenger age",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Search the fare",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select the class",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select the Airlines",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "AAFlightBookingStepes.browes_American_Airlines_home_page()"
});
formatter.result({
  "duration": 3844415300,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.click_on_the_Plan_Travel_menu()"
});
formatter.result({
  "duration": 206808500,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.click_on_the_flight_option()"
});
formatter.result({
  "duration": 5093551900,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.put_the_departing_city()"
});
formatter.result({
  "duration": 1206637700,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.put_the_arriving_city()"
});
formatter.result({
  "duration": 11400,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.select_depart_date()"
});
formatter.result({
  "duration": 9900,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.select_depart_time()"
});
formatter.result({
  "duration": 8200,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.select_return_date()"
});
formatter.result({
  "duration": 12700,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.select_return_time()"
});
formatter.result({
  "duration": 15600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AAFlightBookingStepes.select_passenger_number(int)"
});
formatter.result({
  "duration": 1191600,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.select_passenger_age()"
});
formatter.result({
  "duration": 13100,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.search_the_fare()"
});
formatter.result({
  "duration": 10800,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.select_the_class()"
});
formatter.result({
  "duration": 9600,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.select_the_Airlines()"
});
formatter.result({
  "duration": 13900,
  "status": "passed"
});
formatter.match({
  "location": "AAFlightBookingStepes.click_the_search_button()"
});
formatter.result({
  "duration": 18000,
  "status": "passed"
});
});