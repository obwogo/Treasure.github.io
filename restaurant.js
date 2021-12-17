Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@obwogo 
ElvohB
/
Assignment3
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Assignment3/restaurant.js /
@ElvohB
ElvohB Add files via upload
Latest commit 0de64c2 on Feb 18
 History
 1 contributor
2545 lines (2533 sloc)  82.4 KB
   
var map = L.map('map').setView([-0.215,37.749], 6);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=48q75muHRgW2xeDZPOr5', {
				attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap</a>',
			}).addTo(map);

        //restaurants data
        var restaurants = {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    39.666667,
                    -4.05
                  ]
                },
                "properties": {
                  "address.building": "1",
                  "address.postcode": "10462",
                  "address.street": "Park Ave",
                  "street": "Park Ave",
                  "cuisine": "Bakery",
                  "grades": [
                    {
                      "date": {
                        "$date": 1393804800000
                      },
                      "grade": "A",
                      "score": 2
                    },
                    {
                      "date": {
                        "$date": 1378857600000
                      },
                      "grade": "A",
                      "score": 6
                    },
                    {
                      "date": {
                        "$date": 1358985600000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1322006400000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1299715200000
                      },
                      "grade": "B",
                      "score": 14
                    }
                  ],
                  "name": "Bake Shop",
                  "restaurant_id": "30075445"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    39.460278,
                    -4.174444
                  ]
                },
                "properties": {
                  "address.building": "2",
                  "address.postcode": "11225",
                  "address.street": "Flat Avenue",
                  "street": "Flat Avenue",
                  "cuisine": "Hamburgers",
                  "grades": [
                    {
                      "date": {
                        "$date": 1419897600000
                      },
                      "grade": "A",
                      "score": 8
                    },
                    {
                      "date": {
                        "$date": 1404172800000
                      },
                      "grade": "B",
                      "score": 23
                    },
                    {
                      "date": {
                        "$date": 1367280000000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1336435200000
                      },
                      "grade": "A",
                      "score": 12
                    }
                  ],
                  "name": "Wendy'S",
                  "restaurant_id": "30112340"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    39.85,
                    -3.633333
                  ]
                },
                "properties": {
                  "address.building": "3",
                  "address.postcode": "10019",
                  "address.street": "West 57 Street",
                  "street": "West 57 Street",
                  "cuisine": "Irish",
                  "grades": [
                    {
                      "date": {
                        "$date": 1409961600000
                      },
                      "grade": "A",
                      "score": 2
                    },
                    {
                      "date": {
                        "$date": 1374451200000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1343692800000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1325116800000
                      },
                      "grade": "A",
                      "score": 12
                    }
                  ],
                  "name": "Dj Restaurant",
                  "restaurant_id": "30191841"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    40.033333,
                    -1.5
                  ]
                },
                "properties": {
                  "address.building": "4",
                  "address.postcode": "11224",
                  "address.street": "Stillwell Avenue",
                  "street": "Stillwell Avenue",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1402358400000
                      },
                      "grade": "A",
                      "score": 5
                    },
                    {
                      "date": {
                        "$date": 1370390400000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1334275200000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1318377600000
                      },
                      "grade": "A",
                      "score": 12
                    }
                  ],
                  "name": "Riviera Caterer",
                  "restaurant_id": "40356018"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    40.902222,
                    -2.269444
                  ]
                },
                "properties": {
                  "address.building": "5",
                  "address.postcode": "11374",
                  "address.street": "63 Road",
                  "street": "63 Road",
                  "cuisine": "Jewish/Kosher",
                  "grades": [
                    {
                      "date": {
                        "$date": 1416787200000
                      },
                      "grade": "Z",
                      "score": 20
                    },
                    {
                      "date": {
                        "$date": 1358380800000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1343865600000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1323907200000
                      },
                      "grade": "B",
                      "score": 25
                    }
                  ],
                  "name": "Tov Kosher Kitchen",
                  "restaurant_id": "40356068"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    38.377778,
                    -3.504722
                  ]
                },
                "properties": {
                  "address.building": "6",
                  "address.postcode": "11369",
                  "address.street": "Astoria",
                  "street": "Astoria",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1416009600000
                      },
                      "grade": "Z",
                      "score": 38
                    },
                    {
                      "date": {
                        "$date": 1398988800000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1362182400000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1328832000000
                      },
                      "grade": "A",
                      "score": 13
                    }
                  ],
                  "name": "Brunos On The Boulevard",
                  "restaurant_id": "40356151"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    39.658333,
                    -0.456944
                  ]
                },
                "properties": {
                  "address.building": "7",
                  "address.postcode": "10314",
                  "address.street": "Victory",
                  "street": "Victory",
                  "cuisine": "Jewish/Kosher",
                  "grades": [
                    {
                      "date": {
                        "$date": 1412553600000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1400544000000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1365033600000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1327363200000
                      },
                      "grade": "A",
                      "score": 9
                    }
                  ],
                  "name": "Kosher Island",
                  "restaurant_id": "40356442"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    40.05,
                    1.75
                  ]
                },
                "properties": {
                  "address.building": "8",
                  "address.postcode": "11234",
                  "address.street": "Avenue U",
                  "street": "Avenue U",
                  "cuisine": "Delicatessen",
                  "grades": [
                    {
                      "date": {
                        "$date": 1401321600000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1389657600000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1375488000000
                      },
                      "grade": "A",
                      "score": 8
                    },
                    {
                      "date": {
                        "$date": 1342569600000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1331251200000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1318550400000
                      },
                      "grade": "A",
                      "score": 9
                    }
                  ],
                  "name": "Wilken'S Fine Food",
                  "restaurant_id": "40356483",
                  "grades/5/date/$date": "1.32E+12",
                  "grades/5/grade": "A",
                  "grades/5/score": "9"
                 
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    41.833333,
                    3.916667
                  ]
                },
                "properties": {
                  "address.building": "9",
                  "address.postcode": "11219",
                  "address.street": "11 Avenue",
                  "street": "11 Avenue",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1405641600000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1375142400000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1360713600000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1345075200000
                      },
                      "grade": "A",
                      "score": 2
                    },
                    {
                      "date": {
                        "$date": 1313539200000
                      },
                      "grade": "A",
                      "score": 11
                    }
                  ],
                  "name": "Regina Caterers",
                  "restaurant_id": "40356649"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    37.983333,
                    2.333333
                  ]
                },
                "properties": {
                  "address.building": "10",
                  "address.postcode": "11226",
                  "address.street": "Nostrand Avenue",
                  "street": "Nostrand Avenue",
                  "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
                  "grades": [
                    {
                      "date": {
                        "$date": 1405296000000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1373414400000
                      },
                      "grade": "A",
                      "score": 8
                    },
                    {
                      "date": {
                        "$date": 1341964800000
                      },
                      "grade": "A",
                      "score": 5
                    },
                    {
                      "date": {
                        "$date": 1329955200000
                      },
                      "grade": "A",
                      "score": 8
                    }
                  ],
                  "name": "Taste The Tropics Ice Cream",
                  "restaurant_id": "40356731"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    37.583333,
                    0.35
                  ]
                },
                "properties": {
                  "address.building": "11",
                  "address.postcode": "10460",
                  "address.street": "Southern Blues",
                  "street": "Southern Blues",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1401235200000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1371600000000
                      },
                      "grade": "A",
                      "score": 4
                    },
                    {
                      "date": {
                        "$date": 1339718400000
                      },
                      "grade": "A",
                      "score": 3
                    }
                  ],
                  "name": "Wild Asia",
                  "restaurant_id": "40357217"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    37.65,
                    0.05
                  ]
                },
                "properties": {
                  "address.building": "12",
                  "address.postcode": "11214",
                  "address.street": "18 Avenue",
                  "street": "18 Avenue",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1397606400000
                      },
                      "grade": "A",
                      "score": 5
                    },
                    {
                      "date": {
                        "$date": 1366675200000
                      },
                      "grade": "A",
                      "score": 2
                    },
                    {
                      "date": {
                        "$date": 1335225600000
                      },
                      "grade": "A",
                      "score": 5
                    },
                    {
                      "date": {
                        "$date": 1323993600000
                      },
                      "grade": "A",
                      "score": 2
                    }
                  ],
                  "name": "C & C Catering Service",
                  "restaurant_id": "40357437"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    37.65,
                    -0.333333
                  ]
                },
                "properties": {
                  "address.building": "13",
                  "address.postcode": "11208",
                  "address.street": "Sutter Avenue",
                  "street": "Sutter Avenue",
                  "cuisine": "Chinese",
                  "grades": [
                    {
                      "date": {
                        "$date": 1410825600000
                      },
                      "grade": "B",
                      "score": 21
                    },
                    {
                      "date": {
                        "$date": 1377648000000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1364860800000
                      },
                      "grade": "C",
                      "score": 56
                    },
                    {
                      "date": {
                        "$date": 1344988800000
                      },
                      "grade": "B",
                      "score": 27
                    },
                    {
                      "date": {
                        "$date": 1332892800000
                      },
                      "grade": "B",
                      "score": 27
                    }
                  ],
                  "name": "May May Kitchen",
                  "restaurant_id": "40358429"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    37.45,
                    -0.533333
                  ]
                },
                "properties": {
                  "address.building": "14",
                  "address.postcode": "10065",
                  "address.street": "East 66 Street",
                  "street": "East 66 Street",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1399420800000
                      },
                      "grade": "A",
                      "score": 3
                    },
                    {
                      "date": {
                        "$date": 1367539200000
                      },
                      "grade": "A",
                      "score": 4
                    },
                    {
                      "date": {
                        "$date": 1335744000000
                      },
                      "grade": "A",
                      "score": 6
                    },
                    {
                      "date": {
                        "$date": 1324944000000
                      },
                      "grade": "A",
                      "score": 0
                    }
                  ],
                  "name": "1 East 66Th Street Kitchen",
                  "restaurant_id": "40359480"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    38.016667,
                    -1.366667
                  ]
                },
                "properties": {
                  "address.building": "15",
                  "address.postcode": "11223",
                  "address.street": "Kings Highway",
                  "street": "Kings Highway",
                  "cuisine": "Jewish/Kosher",
                  "grades": [
                    {
                      "date": {
                        "$date": 1415577600000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1381363200000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1349308800000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1337558400000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1325203200000
                      },
                      "grade": "B",
                      "score": 19
                    }
                  ],
                  "name": "Seuda Foods",
                  "restaurant_id": "40360045"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    37.266667,
                    -1.516667
                  ]
                },
                "properties": {
                  "address.building": "16",
                  "address.postcode": "11218",
                  "address.street": "Church Avenue",
                  "street": "Church Avenue",
                  "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
                  "grades": [
                    {
                      "date": {
                        "$date": 1391990400000
                      },
                      "grade": "A",
                      "score": 2
                    },
                    {
                      "date": {
                        "$date": 1357084800000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1326067200000
                      },
                      "grade": "A",
                      "score": 3
                    },
                    {
                      "date": {
                        "$date": 1320624000000
                      },
                      "grade": "P",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1311206400000
                      },
                      "grade": "A",
                      "score": 13
                    }
                  ],
                  "name": "Carvel Ice Cream",
                  "restaurant_id": "40360076"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    37.633333,
                    -1.783333
                  ]
                },
                "properties": {
                  "address.building": "17",
                  "address.postcode": "11004",
                  "address.street": "Hillside Avenue",
                  "street": "Hillside Avenue",
                  "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
                  "grades": [
                    {
                      "date": {
                        "$date": 1414454400000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1379462400000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1348099200000
                      },
                      "grade": "A",
                      "score": 13
                    }
                  ],
                  "name": "Carvel Ice Cream",
                  "restaurant_id": "40361322"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    36.633333,
                    -0.45
                  ]
                },
                "properties": {
                  "address.building": "18",
                  "address.postcode": "11209",
                  "address.street": "3 Avenue",
                  "street": "3 Avenue",
                  "cuisine": "Delicatessen",
                  "grades": [
                    {
                      "date": {
                        "$date": 1408579200000
                      },
                      "grade": "A",
                      "score": 4
                    },
                    {
                      "date": {
                        "$date": 1393977600000
                      },
                      "grade": "A",
                      "score": 3
                    },
                    {
                      "date": {
                        "$date": 1357776000000
                      },
                      "grade": "A",
                      "score": 10
                    }
                  ],
                  "name": "Nordic Delicacies",
                  "restaurant_id": "40361390"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    36.95,
                    -0.416667
                  ]
                },
                "properties": {
                  "address.building": "19",
                  "address.postcode": "10021",
                  "address.street": "East 174 Street",
                  "street": "East 174 Street",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1409616000000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1387411200000
                      },
                      "grade": "B",
                      "score": 16
                    },
                    {
                      "date": {
                        "$date": 1369699200000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1354838400000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1332979200000
                      },
                      "grade": "A",
                      "score": 11
                    }
                  ],
                  "name": "Glorious Food",
                  "restaurant_id": "40361521"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    37.283333,
                    -0.5
                  ]
                },
                "properties": {
                  "address.building": "20",
                  "address.postcode": "11215",
                  "address.street": "1 Park West",
                  "street": "1 Park West",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1416355200000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1384387200000
                      },
                      "grade": "A",
                      "score": 2
                    },
                    {
                      "date": {
                        "$date": 1354665600000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1337212800000
                      },
                      "grade": "A",
                      "score": 11
                    }
                  ],
                  "name": "The Movable Feast",
                  "restaurant_id": "40361606"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    37.15,
                    -0.716667
                  ]
                },
                "properties": {
                  "address.building": "21",
                  "address.postcode": "11356",
                  "address.street": "20 Avenue",
                  "street": "20 Avenue",
                  "cuisine": "Delicatessen",
                  "grades": [
                    {
                      "date": {
                        "$date": 1408147200000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1377561600000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1348099200000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1317254400000
                      },
                      "grade": "A",
                      "score": 10
                    }
                  ],
                  "name": "Sal'S Deli",
                  "restaurant_id": "40361618"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    36.816667,
                    -1.166667
                  ]
                },
                "properties": {
                  "address.building": "22",
                  "address.postcode": "10003",
                  "address.street": "Broadway",
                  "street": "Broadway",
                  "cuisine": "Delicatessen",
                  "grades": [
                    {
                      "date": {
                        "$date": 1390262400000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1357257600000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1339027200000
                      },
                      "grade": "A",
                      "score": 6
                    },
                    {
                      "date": {
                        "$date": 1326758400000
                      },
                      "grade": "A",
                      "score": 8
                    }
                  ],
                  "name": "Bully'S Deli",
                  "restaurant_id": "40361708"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    35.6,
                    3.116667
                  ]
                },
                "properties": {
                  "address.building": "23",
                  "address.postcode": "11106",
                  "address.street": "10 Street",
                  "street": "10 Street",
                  "cuisine": "Delicatessen",
                  "grades": [
                    {
                      "date": {
                        "$date": 1395187200000
                      },
                      "grade": "A",
                      "score": 3
                    },
                    {
                      "date": {
                        "$date": 1363132800000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1332806400000
                      },
                      "grade": "A",
                      "score": 8
                    },
                    {
                      "date": {
                        "$date": 1301961600000
                      },
                      "grade": "A",
                      "score": 7
                    }
                  ],
                  "name": "Steve Chu'S Deli & Grocery",
                  "restaurant_id": "40361998"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    35.116667,
                    1.233333
                  ]
                },
                "properties": {
                  "address.building": "24",
                  "address.postcode": "10024",
                  "address.street": "Ams Avenue",
                  "street": "Ams Avenue",
                  "cuisine": "Chicken",
                  "grades": [
                    {
                      "date": {
                        "$date": 1410739200000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1393891200000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1374105600000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1357689600000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1334016000000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1321315200000
                      },
                      "grade": "A",
                      "score": 7
                    }
                  ],
                  "name": "Harriet'S Kitchen",
                  "restaurant_id": "40362098",
                  "grades/5/date/$date": "1.32E+12",
                  "grades/5/grade": "A",
                  "grades/5/score": "7"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    36.7,
                    1.1
                  ]
                },
                "properties": {
                  "address.building": "25",
                  "address.postcode": "10025",
                  "address.street": "Columbus Avenue",
                  "street": "Columbus Avenue",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1410480000000
                      },
                      "grade": "B",
                      "score": 26
                    },
                    {
                      "date": {
                        "$date": 1377648000000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1364169600000
                      },
                      "grade": "B",
                      "score": 20
                    },
                    {
                      "date": {
                        "$date": 1329177600000
                      },
                      "grade": "A",
                      "score": 12
                    }
                  ],
                  "name": "P & S Deli Grocery",
                  "restaurant_id": "40362264"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    35.283333,
                    0.516667
                  ]
                },
                "properties": {
                  "address.building": "26",
                  "address.postcode": "10012",
                  "address.street": "West 4 Street",
                  "street": "West 4 Street",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1396483200000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1365120000000
                      },
                      "grade": "A",
                      "score": 4
                    },
                    {
                      "date": {
                        "$date": 1332288000000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1303862400000
                      },
                      "grade": "A",
                      "score": 5
                    }
                  ],
                  "name": "Angelika Film Center",
                  "restaurant_id": "40362274"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    35,
                    1.016667
                  ]
                },
                "properties": {
                  "address.building": "27",
                  "address.postcode": "11205",
                  "address.street": "Myrtle Avenue",
                  "street": "Myrtle Avenue",
                  "cuisine": "Hamburgers",
                  "grades": [
                    {
                      "date": {
                        "$date": 1395100800000
                      },
                      "grade": "A",
                      "score": 8
                    },
                    {
                      "date": {
                        "$date": 1363564800000
                      },
                      "grade": "A",
                      "score": 8
                    },
                    {
                      "date": {
                        "$date": 1349827200000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1316649600000
                      },
                      "grade": "A",
                      "score": 2
                    }
                  ],
                  "name": "White Castle",
                  "restaurant_id": "40362344"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    35.508333,
                    0.673056
                  ]
                },
                "properties": {
                  "address.building": "28",
                  "address.postcode": "11368",
                  "address.street": "37 Avenue",
                  "street": "37 Avenue",
                  "cuisine": "Chinese",
                  "grades": [
                    {
                      "date": {
                        "$date": 1398038400000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1384214400000
                      },
                      "grade": "A",
                      "score": 5
                    },
                    {
                      "date": {
                        "$date": 1370304000000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1352851200000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1349913600000
                      },
                      "grade": "P",
                      "score": 0
                    },
                    {
                      "date": {
                        "$date": 1337817600000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1323302400000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1311120000000
                      },
                      "grade": "A",
                      "score": 11
                    }
                  ],
                  "name": "Ho Mei Restaurant",
                  "restaurant_id": "40362432",
                  "grades/5/date/$date": "1.34E+12",
                  "grades/5/grade": "A",
                  "grades/5/score": "13",
                  "grades/6/date/$date": "1.32E+12",
                  "grades/6/grade": "A",
                  "grades/6/score": "12",
                  "grades/7/date/$date": "1.31E+12",
                  "grades/7/grade": "A",
                  "grades/7/score": "11"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    35.166667,
                    0.333333
                  ]
                },
                "properties": {
                  "address.building": "29",
                  "address.postcode": "10005",
                  "address.street": "Wall Street",
                  "street": "Wall Street",
                  "cuisine": "Turkish",
                  "grades": [
                    {
                      "date": {
                        "$date": 1411689600000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1379462400000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1348185600000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1336521600000
                      },
                      "grade": "A",
                      "score": 11
                    }
                  ],
                  "name": "The Country Cafe",
                  "restaurant_id": "40362715"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    35.75,
                    0.5
                  ]
                },
                "properties": {
                  "address.building": "30",
                  "address.postcode": "11203",
                  "address.street": "East   56 Street",
                  "street": "East   56 Street",
                  "cuisine": "Caribbean",
                  "grades": [
                    {
                      "date": {
                        "$date": 1399939200000
                      },
                      "grade": "A",
                      "score": 2
                    },
                    {
                      "date": {
                        "$date": 1367971200000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1348272000000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1307318400000
                      },
                      "grade": "A",
                      "score": 12
                    }
                  ],
                  "name": "Shashemene Int'L Restaura",
                  "restaurant_id": "40362869"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    37.066667,
                    0.016667
                  ]
                },
                "properties": {
                  "address.building": "31",
                  "address.postcode": "10007",
                  "address.street": "Church Street",
                  "street": "Church Street",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1405641600000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1393372800000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1377475200000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1359676800000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1326758400000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1318896000000
                      },
                      "grade": "A",
                      "score": 11
                    }
                  ],
                  "name": "Downtown Deli",
                  "restaurant_id": "40363021",
                  "grades/5/date/$date": "1.32E+12",
                  "grades/5/grade": "A",
                  "grades/5/score": "11"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    36.066667,
                    -0.3
                  ]
                },
                "properties": {
                  "address.building": "32",
                  "address.postcode": "10466",
                  "address.street": "East 233 Street",
                  "street": "East 233 Street",
                  "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
                  "grades": [
                    {
                      "date": {
                        "$date": 1398297600000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1378339200000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1361404800000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1341273600000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1310342400000
                      },
                      "grade": "A",
                      "score": 5
                    }
                  ],
                  "name": "Carvel Ice Cream",
                  "restaurant_id": "40363093"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    35.866667,
                    -1.083333
                  ]
                },
                "properties": {
                  "address.building": "33",
                  "address.postcode": "11201",
                  "address.street": "Court Street",
                  "street": "Court Street",
                  "cuisine": "Donuts",
                  "grades": [
                    {
                      "date": {
                        "$date": 1419897600000
                      },
                      "grade": "A",
                      "score": 8
                    },
                    {
                      "date": {
                        "$date": 1389744000000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1357603200000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1326931200000
                      },
                      "grade": "A",
                      "score": 10
                    }
                  ],
                  "name": "Dunkin' Donuts",
                  "restaurant_id": "40363098"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    36.783333,
                    -1.85
                  ]
                },
                "properties": {
                  "address.building": "34",
                  "address.postcode": "11209",
                  "address.street": "5 Avenue",
                  "street": "5 Avenue",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1417651200000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1382572800000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1366243200000
                      },
                      "grade": "A",
                      "score": 5
                    },
                    {
                      "date": {
                        "$date": 1333584000000
                      },
                      "grade": "A",
                      "score": 13
                    }
                  ],
                  "name": "Mejlander & Mulgannon",
                  "restaurant_id": "40363117"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    35.3,
                    -0.366667
                  ]
                },
                "properties": {
                  "address.building": "35",
                  "address.postcode": "10012",
                  "address.street": "Prince Street",
                  "street": "Prince Street",
                  "cuisine": "Bakery",
                  "grades": [
                    {
                      "date": {
                        "$date": 1413504000000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1379462400000
                      },
                      "grade": "A",
                      "score": 13
                    },
                    {
                      "date": {
                        "$date": 1367280000000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1334880000000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1324252800000
                      },
                      "grade": "A",
                      "score": 3
                    }
                  ],
                  "name": "Olive'S",
                  "restaurant_id": "40363151"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    35.35,
                    -0.783333
                  ]
                },
                "properties": {
                  "address.building": "36",
                  "address.postcode": "10474",
                  "address.street": "238 Ave",
                  "street": "238 Ave",
                  "cuisine": "Chinese",
                  "grades": [
                    {
                      "date": {
                        "$date": 1388361600000
                      },
                      "grade": "A",
                      "score": 8
                    },
                    {
                      "date": {
                        "$date": 1357603200000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1339459200000
                      },
                      "grade": "B",
                      "score": 15
                    }
                  ],
                  "name": "Happy Garden",
                  "restaurant_id": "40363289"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    34.75,
                    0.283333
                  ]
                },
                "properties": {
                  "address.building": "37",
                  "address.postcode": "10018",
                  "address.street": "8 Avenue",
                  "street": "8 Avenue",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1402272000000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1389312000000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1354838400000
                      },
                      "grade": "A",
                      "score": 4
                    },
                    {
                      "date": {
                        "$date": 1323734400000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1315526400000
                      },
                      "grade": "A",
                      "score": 13
                    }
                  ],
                  "name": "Cafe Metro",
                  "restaurant_id": "40363298"
              }
            }, 
            {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    34.725,
                    0.05
                  ]
                },
                "properties": {
                  "address.building": "38",
                  "address.postcode": "11385",
                  "address.street": "Wyckoff Avenue",
                  "street": "Wyckoff Avenue",
                  "cuisine": "Delicatessen",
                  "grades": [
                    {
                      "date": {
                        "$date": 1399507200000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1386806400000
                      },
                      "grade": "A",
                      "score": 8
                    },
                    {
                      "date": {
                        "$date": 1371772800000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1356307200000
                      },
                      "grade": "B",
                      "score": 25
                    },
                    {
                      "date": {
                        "$date": 1318982400000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1308096000000
                      },
                      "grade": "A",
                      "score": 10
                    }
                  ],
                  "name": "Tony'S Deli",
                  "restaurant_id": "40363333",
                  "grades/5/date/$date": "1.31E+12",
                  "grades/5/grade": "A",
                  "grades/5/score": "10"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    34.566667,
                    0.566667
                  ]
                },
                "properties": {
                  "address.building": "39",
                  "address.postcode": "10174",
                  "address.street": "Lexington Avenue",
                  "street": "Lexington Avenue",
                  "cuisine": "Sandwiches/Salads/Mixed Buffet",
                  "grades": [
                    {
                      "date": {
                        "$date": 1392940800000
                      },
                      "grade": "A",
                      "score": 3
                    },
                    {
                      "date": {
                        "$date": 1379030400000
                      },
                      "grade": "A",
                      "score": 3
                    },
                    {
                      "date": {
                        "$date": 1346112000000
                      },
                      "grade": "A",
                      "score": 0
                    },
                    {
                      "date": {
                        "$date": 1315872000000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1304380800000
                      },
                      "grade": "A",
                      "score": 5
                    }
                  ],
                  "name": "Lexler Deli",
                  "restaurant_id": "40363426"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    34.125,
                    0.453056
                  ]
                },
                "properties": {
                  "address.building": "40",
                  "address.postcode": "10314",
                  "address.street": "Victory",
                  "street": "Victory",
                  "cuisine": "Delicatessen",
                  "grades": [
                    {
                      "date": {
                        "$date": 1420761600000
                      },
                      "grade": "A",
                      "score": 3
                    },
                    {
                      "date": {
                        "$date": 1386201600000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1371600000000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1357603200000
                      },
                      "grade": "A",
                      "score": 11
                    }
                  ],
                  "name": "Bagels N Buns",
                  "restaurant_id": "40363427"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    34.283333,
                    0.066667
                  ]
                },
                "properties": {
                  "address.building": "41",
                  "address.postcode": "11379",
                  "address.street": "Metropolitan Avenue",
                  "street": "Metropolitan Avenue",
                  "cuisine": "Bagels/Pretzels",
                  "grades": [
                    {
                      "date": {
                        "$date": 1410912000000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1389830400000
                      },
                      "grade": "B",
                      "score": 23
                    },
                    {
                      "date": {
                        "$date": 1375833600000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1361404800000
                      },
                      "grade": "B",
                      "score": 27
                    },
                    {
                      "date": {
                        "$date": 1340150400000
                      },
                      "grade": "B",
                      "score": 27
                    },
                    {
                      "date": {
                        "$date": 1327968000000
                      },
                      "grade": "B",
                      "score": 18
                    }
                  ],
                  "name": "Hot Bagels",
                  "restaurant_id": "40363565",
                  "grades/5/date/$date": "1.33E+12",
                  "grades/5/grade": "B",
                  "grades/5/score": "18"
              }
            },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    34.75,
                    -0.1
                  ]
                },
                "properties": {
                  "address.building": "42",
                  "address.postcode": "11418",
                  "address.street": "Lefferts",
                  "street": "Lefferts",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1393286400000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1376438400000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1344297600000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1332720000000
                      },
                      "grade": "A",
                      "score": 10
                    },
                    {
                      "date": {
                        "$date": 1320364800000
                      },
                      "grade": "A",
                      "score": 0
                    },
                    {
                      "date": {
                        "$date": 1309305600000
                      },
                      "grade": "A",
                      "score": 4
                    }
                  ],
                  "name": "Snack Time Grill",
                  "restaurant_id": "40363590",
                  "grades/5/date/$date": "1.31E+12"
              }
            },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    34.45,
                    -0.516667
                  ]
                },
                "properties": {
                  "address.building": "43",
                  "address.postcode": "10028",
                  "address.street": "Third Avenue",
                  "street": "Third Avenue",
                  "cuisine": "Continental",
                  "grades": [
                    {
                      "date": {
                        "$date": 1401667200000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1388102400000
                      },
                      "grade": "A",
                      "score": 8
                    },
                    {
                      "date": {
                        "$date": 1363564800000
                      },
                      "grade": "B",
                      "score": 26
                    },
                    {
                      "date": {
                        "$date": 1328054400000
                      },
                      "grade": "A",
                      "score": 7
                    },
                    {
                      "date": {
                        "$date": 1309910400000
                      },
                      "grade": "B",
                      "score": 25
                    }
                  ],
                  "name": "Lorenzo & Maria'S",
                  "restaurant_id": "40363630"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    34.833333,
                    -0.666667
                  ]
                },
                "properties": {
                  "address.building": "44",
                  "address.postcode": "10016",
                  "address.street": "3 Avenue",
                  "street": "3 Avenue",
                  "cuisine": "Pizza",
                  "grades": [
                    {
                      "date": {
                        "$date": 1407196800000
                      },
                      "grade": "A",
                      "score": 3
                    },
                    {
                      "date": {
                        "$date": 1394064000000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1373328000000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1359504000000
                      },
                      "grade": "A",
                      "score": 4
                    },
                    {
                      "date": {
                        "$date": 1325721600000
                      },
                      "grade": "A",
                      "score": 2
                    },
                    {
                      "date": {
                        "$date": 1316995200000
                      },
                      "grade": "A",
                      "score": 0
                    }
                  ],
                  "name": "Domino'S Pizza",
                  "restaurant_id": "40363644",
                  "grades/5/date/$date": "1.32E+12",
                  "grades/5/grade": "A",
                  "grades/5/score": "0"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    34.766667,
                    -0.683333
                  ]
                },
                "properties": {
                  "address.building": "45",
                  "address.postcode": "10022",
                  "address.street": "Madison Avenue",
                  "street": "Madison Avenue",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1401753600000
                      },
                      "grade": "A",
                      "score": 9
                    },
                    {
                      "date": {
                        "$date": 1370563200000
                      },
                      "grade": "A",
                      "score": 5
                    },
                    {
                      "date": {
                        "$date": 1340928000000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1328486400000
                      },
                      "grade": "A",
                      "score": 11
                    },
                    {
                      "date": {
                        "$date": 1308787200000
                      },
                      "grade": "A",
                      "score": 13
                    }
                  ],
                  "name": "Berkely",
                  "restaurant_id": "40363685"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    34.914,
                    -0.521
                  ]
                },
                "properties": {
                  "address.building": "46",
                  "address.postcode": "11236",
                  "address.street": "East 92 Street",
                  "street": "East 92 Street",
                  "cuisine": "American ",
                  "grades": [
                    {
                      "date": {
                        "$date": 1391558400000
                      },
                      "grade": "A",
                      "score": 0
                    },
                    {
                      "date": {
                        "$date": 1359417600000
                      },
                      "grade": "A",
                      "score": 3
                    },
                    {
                      "date": {
                        "$date": 1323302400000
                      },
                      "grade": "A",
                      "score": 10
                    }
                  ],
                  "name": "Sonny'S Heros",
                  "restaurant_id": "40363744"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    36.816667,
                    -1.283333
                  ]
                },
                "properties": {
                  "address.building": "47",
                  "address.postcode": "10305",
                  "address.street": "Hylan",
                  "street": "Hylan",
                  "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
                  "grades": [
                    {
                      "date": {
                        "$date": 1398297600000
                      },
                      "grade": "A",
                      "score": 12
                    },
                    {
                      "date": {
                        "$date": 1361836800000
                      },
                      "grade": "A",
                      "score": 5
                    },
                    {
                      "date": {
                        "$date": 1328140800000
                      },
                      "grade": "A",
                      "score": 2
                    }
                  ],
                  "name": "Carvel Ice Cream",
                  "restaurant_id": "40363834"
                }
              }
            ]
          };
        //Creating Restaurant Icon
        var Icon = L.AwesomeMarkers.icon({
        //prefix: 'fa', //font awesome rather than bootstrap
        markerColor: 'purple', //Possible: red, darkred, orange, green, darkgreen, blue, purple, dark purple
        //icon: 'coffee' //https://fontawesome.com/icons?from=io
});

        //Linking JSON File to points on the map
        function onEachFeature(feature, layer) {
            if (feature.properties.grades) {
              var popupcontent;
              popupcontent = "<span style='font-weight:bold'>Restaurant Name: </span>" + feature.properties.name + "<br>" + "<span style='font-weight:bold'>Cuisine: </span>" + feature.properties.cuisine + "<br>" + "<span style='font-weight:bold'>Street: </span>" + feature.properties.street;
              for (i = 0; i < feature.properties.grades.length; i = i + 1) {
                var dateString = "<br> <span style='font-weight:bold'> Date: </span>" + feature.properties.grades[i].date.$date;
          
                  popupcontent = popupcontent + dateString;
          
              }
              
              layer.bindPopup(popupcontent);
            }
          }
          
          geojson = L.geoJson(restaurants, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: Icon});
        },
            onEachFeature: onEachFeature
                                        }).addTo(map);
          


        
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
