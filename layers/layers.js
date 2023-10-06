var wms_layers = [];

var format_Academic_structure_0 = new ol.format.GeoJSON();
var features_Academic_structure_0 = format_Academic_structure_0.readFeatures(json_Academic_structure_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Academic_structure_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Academic_structure_0.addFeatures(features_Academic_structure_0);
var lyr_Academic_structure_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Academic_structure_0, 
                style: style_Academic_structure_0,
                interactive: true,
                title: '<img src="styles/legend/Academic_structure_0.png" /> Academic_structure'
            });
var format_Health_facility_1 = new ol.format.GeoJSON();
var features_Health_facility_1 = format_Health_facility_1.readFeatures(json_Health_facility_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Health_facility_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Health_facility_1.addFeatures(features_Health_facility_1);
var lyr_Health_facility_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Health_facility_1, 
                style: style_Health_facility_1,
                interactive: true,
                title: '<img src="styles/legend/Health_facility_1.png" /> Health_facility'
            });
var format_Hotels_2 = new ol.format.GeoJSON();
var features_Hotels_2 = format_Hotels_2.readFeatures(json_Hotels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotels_2.addFeatures(features_Hotels_2);
var lyr_Hotels_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hotels_2, 
                style: style_Hotels_2,
                interactive: true,
                title: '<img src="styles/legend/Hotels_2.png" /> Hotels'
            });
var format_Highway_3 = new ol.format.GeoJSON();
var features_Highway_3 = format_Highway_3.readFeatures(json_Highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highway_3.addFeatures(features_Highway_3);
var lyr_Highway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Highway_3, 
                style: style_Highway_3,
                interactive: true,
                title: '<img src="styles/legend/Highway_3.png" /> Highway'
            });
var format_Minor_road_4 = new ol.format.GeoJSON();
var features_Minor_road_4 = format_Minor_road_4.readFeatures(json_Minor_road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minor_road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minor_road_4.addFeatures(features_Minor_road_4);
var lyr_Minor_road_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Minor_road_4, 
                style: style_Minor_road_4,
                interactive: true,
                title: '<img src="styles/legend/Minor_road_4.png" /> Minor_road'
            });
var format_Mosque_5 = new ol.format.GeoJSON();
var features_Mosque_5 = format_Mosque_5.readFeatures(json_Mosque_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_5.addFeatures(features_Mosque_5);
var lyr_Mosque_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mosque_5, 
                style: style_Mosque_5,
                interactive: true,
                title: '<img src="styles/legend/Mosque_5.png" /> Mosque'
            });
var format_other_government_facilities_6 = new ol.format.GeoJSON();
var features_other_government_facilities_6 = format_other_government_facilities_6.readFeatures(json_other_government_facilities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_other_government_facilities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_other_government_facilities_6.addFeatures(features_other_government_facilities_6);
var lyr_other_government_facilities_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_other_government_facilities_6, 
                style: style_other_government_facilities_6,
                interactive: true,
                title: '<img src="styles/legend/other_government_facilities_6.png" /> other_government_facilities'
            });
var format_BOUNDARY1_7 = new ol.format.GeoJSON();
var features_BOUNDARY1_7 = format_BOUNDARY1_7.readFeatures(json_BOUNDARY1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY1_7.addFeatures(features_BOUNDARY1_7);
var lyr_BOUNDARY1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUNDARY1_7, 
                style: style_BOUNDARY1_7,
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY1_7.png" /> BOUNDARY 1'
            });
var format_Other_prominent_features_8 = new ol.format.GeoJSON();
var features_Other_prominent_features_8 = format_Other_prominent_features_8.readFeatures(json_Other_prominent_features_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_prominent_features_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_prominent_features_8.addFeatures(features_Other_prominent_features_8);
var lyr_Other_prominent_features_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Other_prominent_features_8, 
                style: style_Other_prominent_features_8,
                interactive: true,
                title: '<img src="styles/legend/Other_prominent_features_8.png" /> Other_prominent_features'
            });
var format_petroleum_station_9 = new ol.format.GeoJSON();
var features_petroleum_station_9 = format_petroleum_station_9.readFeatures(json_petroleum_station_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_petroleum_station_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_petroleum_station_9.addFeatures(features_petroleum_station_9);
var lyr_petroleum_station_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_petroleum_station_9, 
                style: style_petroleum_station_9,
                interactive: true,
                title: '<img src="styles/legend/petroleum_station_9.png" /> petroleum_station'
            });
var format_Recreational_facility_10 = new ol.format.GeoJSON();
var features_Recreational_facility_10 = format_Recreational_facility_10.readFeatures(json_Recreational_facility_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recreational_facility_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recreational_facility_10.addFeatures(features_Recreational_facility_10);
var lyr_Recreational_facility_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recreational_facility_10, 
                style: style_Recreational_facility_10,
                interactive: true,
                title: '<img src="styles/legend/Recreational_facility_10.png" /> Recreational_facility'
            });
var format_Restaurants_11 = new ol.format.GeoJSON();
var features_Restaurants_11 = format_Restaurants_11.readFeatures(json_Restaurants_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurants_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurants_11.addFeatures(features_Restaurants_11);
var lyr_Restaurants_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Restaurants_11, 
                style: style_Restaurants_11,
                interactive: true,
                title: '<img src="styles/legend/Restaurants_11.png" /> Restaurants'
            });
var format_Roundabout_12 = new ol.format.GeoJSON();
var features_Roundabout_12 = format_Roundabout_12.readFeatures(json_Roundabout_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roundabout_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roundabout_12.addFeatures(features_Roundabout_12);
var lyr_Roundabout_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roundabout_12, 
                style: style_Roundabout_12,
                interactive: true,
                title: '<img src="styles/legend/Roundabout_12.png" /> Roundabout'
            });
var format_Street_13 = new ol.format.GeoJSON();
var features_Street_13 = format_Street_13.readFeatures(json_Street_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Street_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Street_13.addFeatures(features_Street_13);
var lyr_Street_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Street_13, 
                style: style_Street_13,
                interactive: true,
                title: '<img src="styles/legend/Street_13.png" /> Street'
            });

lyr_Academic_structure_0.setVisible(true);lyr_Health_facility_1.setVisible(true);lyr_Hotels_2.setVisible(true);lyr_Highway_3.setVisible(true);lyr_Minor_road_4.setVisible(true);lyr_Mosque_5.setVisible(true);lyr_other_government_facilities_6.setVisible(true);lyr_BOUNDARY1_7.setVisible(true);lyr_Other_prominent_features_8.setVisible(true);lyr_petroleum_station_9.setVisible(true);lyr_Recreational_facility_10.setVisible(true);lyr_Restaurants_11.setVisible(true);lyr_Roundabout_12.setVisible(true);lyr_Street_13.setVisible(true);
var layersList = [lyr_Academic_structure_0,lyr_Health_facility_1,lyr_Hotels_2,lyr_Highway_3,lyr_Minor_road_4,lyr_Mosque_5,lyr_other_government_facilities_6,lyr_BOUNDARY1_7,lyr_Other_prominent_features_8,lyr_petroleum_station_9,lyr_Recreational_facility_10,lyr_Restaurants_11,lyr_Roundabout_12,lyr_Street_13];
lyr_Academic_structure_0.set('fieldAliases', {'Id': 'Id', 'Academic_s': 'Academic_s', });
lyr_Health_facility_1.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Health_f': 'Health_f', 'Health_fac': 'Health_fac', });
lyr_Hotels_2.set('fieldAliases', {'Id': 'Id', 'Hotels': 'Hotels', });
lyr_Highway_3.set('fieldAliases', {'Id': 'Id', 'Highway': 'Highway', });
lyr_Minor_road_4.set('fieldAliases', {'Id': 'Id', 'Minor_road': 'Minor_road', });
lyr_Mosque_5.set('fieldAliases', {'Id': 'Id', 'Mosque': 'Mosque', });
lyr_other_government_facilities_6.set('fieldAliases', {'Id': 'Id', 'others': 'others', });
lyr_BOUNDARY1_7.set('fieldAliases', {'Id': 'Id', });
lyr_Other_prominent_features_8.set('fieldAliases', {'Id': 'Id', 'o_promnt_f': 'o_promnt_f', });
lyr_petroleum_station_9.set('fieldAliases', {'Id': 'Id', 'Petroleum_': 'Petroleum_', });
lyr_Recreational_facility_10.set('fieldAliases', {'Id': 'Id', 'Recrationa': 'Recrationa', });
lyr_Restaurants_11.set('fieldAliases', {'Id': 'Id', 'Restaurant': 'Restaurant', });
lyr_Roundabout_12.set('fieldAliases', {'Id': 'Id', 'Roundabout': 'Roundabout', });
lyr_Street_13.set('fieldAliases', {'Id': 'Id', 'Street': 'Street', });
lyr_Academic_structure_0.set('fieldImages', {'Id': 'Range', 'Academic_s': 'TextEdit', });
lyr_Health_facility_1.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'Health_f': 'TextEdit', 'Health_fac': 'TextEdit', });
lyr_Hotels_2.set('fieldImages', {'Id': 'Range', 'Hotels': 'TextEdit', });
lyr_Highway_3.set('fieldImages', {'Id': 'Range', 'Highway': 'TextEdit', });
lyr_Minor_road_4.set('fieldImages', {'Id': 'Range', 'Minor_road': 'TextEdit', });
lyr_Mosque_5.set('fieldImages', {'Id': 'Range', 'Mosque': 'TextEdit', });
lyr_other_government_facilities_6.set('fieldImages', {'Id': 'Range', 'others': 'TextEdit', });
lyr_BOUNDARY1_7.set('fieldImages', {'Id': 'Range', });
lyr_Other_prominent_features_8.set('fieldImages', {'Id': 'Range', 'o_promnt_f': 'TextEdit', });
lyr_petroleum_station_9.set('fieldImages', {'Id': 'Range', 'Petroleum_': 'TextEdit', });
lyr_Recreational_facility_10.set('fieldImages', {'Id': 'Range', 'Recrationa': 'TextEdit', });
lyr_Restaurants_11.set('fieldImages', {'Id': 'Range', 'Restaurant': 'TextEdit', });
lyr_Roundabout_12.set('fieldImages', {'Id': 'Range', 'Roundabout': 'TextEdit', });
lyr_Street_13.set('fieldImages', {'Id': '', 'Street': '', });
lyr_Academic_structure_0.set('fieldLabels', {'Id': 'no label', 'Academic_s': 'header label', });
lyr_Health_facility_1.set('fieldLabels', {'Id': 'no label', 'Name': 'header label', 'Health_f': 'header label', 'Health_fac': 'header label', });
lyr_Hotels_2.set('fieldLabels', {'Id': 'no label', 'Hotels': 'header label', });
lyr_Highway_3.set('fieldLabels', {'Id': 'no label', 'Highway': 'header label', });
lyr_Minor_road_4.set('fieldLabels', {'Id': 'no label', 'Minor_road': 'header label', });
lyr_Mosque_5.set('fieldLabels', {'Id': 'no label', 'Mosque': 'header label', });
lyr_other_government_facilities_6.set('fieldLabels', {'Id': 'no label', 'others': 'header label', });
lyr_BOUNDARY1_7.set('fieldLabels', {'Id': 'no label', });
lyr_Other_prominent_features_8.set('fieldLabels', {'Id': 'no label', 'o_promnt_f': 'header label', });
lyr_petroleum_station_9.set('fieldLabels', {'Id': 'no label', 'Petroleum_': 'header label', });
lyr_Recreational_facility_10.set('fieldLabels', {'Id': 'no label', 'Recrationa': 'header label', });
lyr_Restaurants_11.set('fieldLabels', {'Id': 'no label', 'Restaurant': 'header label', });
lyr_Roundabout_12.set('fieldLabels', {'Id': 'no label', 'Roundabout': 'header label', });
lyr_Street_13.set('fieldLabels', {'Id': 'no label', 'Street': 'header label', });
lyr_Street_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});