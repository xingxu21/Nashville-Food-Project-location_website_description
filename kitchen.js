var kitchen = {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [ -86.81187, 36.112349]
                },
                "properties": {
					"id" : "woodmont-kitchen",
                    "title": "Woodmont Kitchen and Garden",
					"description": [
                        ["<div class=\"marker-title\"> 3605 Hillsboro Pike, Nashville, TN 37215 </div><p> The Nashville Food Project, Inc. </p>"],
                         ["<img src='http://static1.squarespace.com/static/53ecdafde4b07f0225df2a99/54ef47c5e4b0e800334b02ee/54f284c4e4b04ba2593c7c73/1425179845970/oct+2014.jpg?format=300w' class='marker-description' />"]
                    ],
                    "marker-symbol": "Cook"
                }
            } //INSERT NEW CODE LEFT OF THE "//"
/*
            , {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-86.81187, 36.112349]
                },
                "properties": {
                    "id": "woodmont-kitchen",
                    "title": "Woodmont Kitchen and Garden",
                    "description": [
                        ["<div class=\"marker-title\"> 3605 Hillsboro Pike, Nashville, TN 37215 </div><p> The Nashville Food Project, Inc. </p>"],
                         ["<img src='http://static1.squarespace.com/static/53ecdafde4b07f0225df2a99/54ef47c5e4b0e800334b02ee/54f284c4e4b04ba2593c7c73/1425179845970/oct+2014.jpg?format=300w' class='marker-description' />"]
                    ],
                    "marker-symbol": "Cook"
                }
            }
            */

            ]
        },
		cluster: true,
        clusterMaxZoom: 15, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
};
