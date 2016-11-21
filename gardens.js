var gardens = {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-86.812917,  36.112427] 
                },
                "properties": {
					"id" : "woodmont-garden",
                    "title": "",
					"description": [
                        ["<div class=\"marker-title\"> 3605 Hillsboro Pike, Nashville, TN 37215 </div><p>  </p>"],
                         ["<img src='http://static1.squarespace.com/static/53ecdafde4b07f0225df2a99/54ef47c5e4b0e800334b02ee/54ef4812e4b0c0516662e49b/1424967701307/photo+%2823%29.JPG?format=100w' class='marker-description' />"]
                    ],
                    "marker-symbol": "Grow"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-86.81817269999999, 36.1827394]
                },
                "properties": {
					"id": "mcgruder-garden",
                    "title": "McGruder Garden",
					"description": [
                        ["<div class=\"marker-title\"> 2013 25th Ave N, Nashville, TN 37208 </div><p>  </p>"],
                         ["<img src='http://static1.squarespace.com/static/53ecdafde4b07f0225df2a99/54ef47c5e4b0e800334b02ee/54ef482be4b098d9755eae18/1424967725984/photo+3+%284%29.JPG?format=100w' class='marker-description' />"]
                    ],
                    "marker-symbol": "Grow"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-86.77022999999997, 36.133156]
                },
                "properties": {
					"id" : "wedgewood-garden",
                    "title": "Wedgewood Urban Garden",
					"description": [
                        ["<div class=\"marker-title\"> 613 Wedgewood Ave Nashville, TN, 37203 </div><p>  </p>"],
                         ["<img src='http://static1.squarespace.com/static/53ecdafde4b07f0225df2a99/54ef47c5e4b0e800334b02ee/54ef4811e4b01b969d31f61d/1424967709284/photo+%2839%29.JPG?format=100w' class='marker-description' />"]
                    ],
                    "marker-symbol": "Grow"
                }
            }  // INSERT NEW CODE LEFT OF "//"
            ]
        },
		cluster: true,
        clusterMaxZoom: 15, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
};
