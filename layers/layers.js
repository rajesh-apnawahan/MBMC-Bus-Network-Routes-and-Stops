var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MBMCStatsRev1_1 = new ol.format.GeoJSON();
var features_MBMCStatsRev1_1 = format_MBMCStatsRev1_1.readFeatures(json_MBMCStatsRev1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStatsRev1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStatsRev1_1.addFeatures(features_MBMCStatsRev1_1);
var lyr_MBMCStatsRev1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStatsRev1_1, 
                style: style_MBMCStatsRev1_1,
                popuplayertitle: "MBMC Stats Rev1",
                interactive: true,
                title: '<img src="styles/legend/MBMCStatsRev1_1.png" /> MBMC Stats Rev1'
            });
var format_MBMCRoutesStats_2 = new ol.format.GeoJSON();
var features_MBMCRoutesStats_2 = format_MBMCRoutesStats_2.readFeatures(json_MBMCRoutesStats_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRoutesStats_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRoutesStats_2.addFeatures(features_MBMCRoutesStats_2);
var lyr_MBMCRoutesStats_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCRoutesStats_2, 
                style: style_MBMCRoutesStats_2,
                popuplayertitle: "MBMC Routes Stats",
                interactive: true,
    title: 'MBMC Routes Stats<br />\
    <img src="styles/legend/MBMCRoutesStats_2_0.png" /> Route 1<br />\
    <img src="styles/legend/MBMCRoutesStats_2_1.png" /> Route 10<br />\
    <img src="styles/legend/MBMCRoutesStats_2_2.png" /> Route 10 AC<br />\
    <img src="styles/legend/MBMCRoutesStats_2_3.png" /> Route 12<br />\
    <img src="styles/legend/MBMCRoutesStats_2_4.png" /> Route 14<br />\
    <img src="styles/legend/MBMCRoutesStats_2_5.png" /> Route 15<br />\
    <img src="styles/legend/MBMCRoutesStats_2_6.png" /> Route 16<br />\
    <img src="styles/legend/MBMCRoutesStats_2_7.png" /> Route 17<br />\
    <img src="styles/legend/MBMCRoutesStats_2_8.png" /> Route 18<br />\
    <img src="styles/legend/MBMCRoutesStats_2_9.png" /> Route 19<br />\
    <img src="styles/legend/MBMCRoutesStats_2_10.png" /> Route 2<br />\
    <img src="styles/legend/MBMCRoutesStats_2_11.png" /> Route 20<br />\
    <img src="styles/legend/MBMCRoutesStats_2_12.png" /> Route 21<br />\
    <img src="styles/legend/MBMCRoutesStats_2_13.png" /> Route 22<br />\
    <img src="styles/legend/MBMCRoutesStats_2_14.png" /> Route 23<br />\
    <img src="styles/legend/MBMCRoutesStats_2_15.png" /> Route 24<br />\
    <img src="styles/legend/MBMCRoutesStats_2_16.png" /> Route 25<br />\
    <img src="styles/legend/MBMCRoutesStats_2_17.png" /> Route 28<br />\
    <img src="styles/legend/MBMCRoutesStats_2_18.png" /> Route 29<br />\
    <img src="styles/legend/MBMCRoutesStats_2_19.png" /> Route 29 AC<br />\
    <img src="styles/legend/MBMCRoutesStats_2_20.png" /> Route 4<br />\
    <img src="styles/legend/MBMCRoutesStats_2_21.png" /> Route 5<br />\
    <img src="styles/legend/MBMCRoutesStats_2_22.png" /> Route 6<br />\
    <img src="styles/legend/MBMCRoutesStats_2_23.png" /> <br />'
        });
var format_MBMCTerminals_3 = new ol.format.GeoJSON();
var features_MBMCTerminals_3 = format_MBMCTerminals_3.readFeatures(json_MBMCTerminals_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCTerminals_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCTerminals_3.addFeatures(features_MBMCTerminals_3);
var lyr_MBMCTerminals_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCTerminals_3, 
                style: style_MBMCTerminals_3,
                popuplayertitle: "MBMC Terminals",
                interactive: true,
    title: 'MBMC Terminals<br />\
    <img src="styles/legend/MBMCTerminals_3_0.png" /> Adani Power House<br />\
    <img src="styles/legend/MBMCTerminals_3_1.png" /> Bhayandar Station East<br />\
    <img src="styles/legend/MBMCTerminals_3_2.png" /> Bhayandar Station West<br />\
    <img src="styles/legend/MBMCTerminals_3_3.png" /> Borivali National Park<br />\
    <img src="styles/legend/MBMCTerminals_3_4.png" /> Borivali Railway Station<br />\
    <img src="styles/legend/MBMCTerminals_3_5.png" /> Chimaji Appa Chouk<br />\
    <img src="styles/legend/MBMCTerminals_3_6.png" /> GCC School<br />\
    <img src="styles/legend/MBMCTerminals_3_7.png" /> GHARTAN PADA<br />\
    <img src="styles/legend/MBMCTerminals_3_8.png" /> Ghodbunder Depot<br />\
    <img src="styles/legend/MBMCTerminals_3_9.png" /> Golden Nest<br />\
    <img src="styles/legend/MBMCTerminals_3_10.png" /> Jain Mandir 2<br />\
    <img src="styles/legend/MBMCTerminals_3_11.png" /> Jogeshwari station West<br />\
    <img src="styles/legend/MBMCTerminals_3_12.png" /> JP Infra<br />\
    <img src="styles/legend/MBMCTerminals_3_13.png" /> Kashimira<br />\
    <img src="styles/legend/MBMCTerminals_3_14.png" /> KD Empire<br />\
    <img src="styles/legend/MBMCTerminals_3_15.png" /> Manori Tar<br />\
    <img src="styles/legend/MBMCTerminals_3_16.png" /> Mira Road Station<br />\
    <img src="styles/legend/MBMCTerminals_3_17.png" /> Modern Company<br />\
    <img src="styles/legend/MBMCTerminals_3_18.png" /> Morva Bhat<br />\
    <img src="styles/legend/MBMCTerminals_3_19.png" /> MTNL Office<br />\
    <img src="styles/legend/MBMCTerminals_3_20.png" /> Nagar Bhavan Mandi talav<br />\
    <img src="styles/legend/MBMCTerminals_3_21.png" /> Pagoda<br />\
    <img src="styles/legend/MBMCTerminals_3_22.png" /> POONAM SAGAR<br />\
    <img src="styles/legend/MBMCTerminals_3_23.png" /> Prakshal<br />\
    <img src="styles/legend/MBMCTerminals_3_24.png" /> RAM NAGAR<br />\
    <img src="styles/legend/MBMCTerminals_3_25.png" /> RASHMI COMPLEX<br />\
    <img src="styles/legend/MBMCTerminals_3_26.png" /> S.K STONE POLICE STATION<br />\
    <img src="styles/legend/MBMCTerminals_3_27.png" /> Salasar Nagar<br />\
    <img src="styles/legend/MBMCTerminals_3_28.png" /> Shantiwan<br />\
    <img src="styles/legend/MBMCTerminals_3_29.png" /> Silver Park<br />\
    <img src="styles/legend/MBMCTerminals_3_30.png" /> Swa Praful Patil Chowk Indralok Naka<br />\
    <img src="styles/legend/MBMCTerminals_3_31.png" /> Thane Station East Kopri<br />\
    <img src="styles/legend/MBMCTerminals_3_32.png" /> Tiwari College<br />\
    <img src="styles/legend/MBMCTerminals_3_33.png" /> Tunga Hospital<br />\
    <img src="styles/legend/MBMCTerminals_3_34.png" /> Uttan Naka<br />\
    <img src="styles/legend/MBMCTerminals_3_35.png" /> Vinay Nagar<br />\
    <img src="styles/legend/MBMCTerminals_3_36.png" /> Western Park E.<br />\
    <img src="styles/legend/MBMCTerminals_3_37.png" /> <br />'
        });
var format_MBMCStopsMapped_4 = new ol.format.GeoJSON();
var features_MBMCStopsMapped_4 = format_MBMCStopsMapped_4.readFeatures(json_MBMCStopsMapped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStopsMapped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStopsMapped_4.addFeatures(features_MBMCStopsMapped_4);
var lyr_MBMCStopsMapped_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStopsMapped_4, 
                style: style_MBMCStopsMapped_4,
                popuplayertitle: "MBMC Stops Mapped",
                interactive: true,
    title: 'MBMC Stops Mapped<br />\
    <img src="styles/legend/MBMCStopsMapped_4_0.png" /> Route 1<br />\
    <img src="styles/legend/MBMCStopsMapped_4_1.png" /> Route 10<br />\
    <img src="styles/legend/MBMCStopsMapped_4_2.png" /> Route 10 AC<br />\
    <img src="styles/legend/MBMCStopsMapped_4_3.png" /> Route 12<br />\
    <img src="styles/legend/MBMCStopsMapped_4_4.png" /> Route 14<br />\
    <img src="styles/legend/MBMCStopsMapped_4_5.png" /> Route 15<br />\
    <img src="styles/legend/MBMCStopsMapped_4_6.png" /> Route 16<br />\
    <img src="styles/legend/MBMCStopsMapped_4_7.png" /> Route 17<br />\
    <img src="styles/legend/MBMCStopsMapped_4_8.png" /> Route 18<br />\
    <img src="styles/legend/MBMCStopsMapped_4_9.png" /> Route 19<br />\
    <img src="styles/legend/MBMCStopsMapped_4_10.png" /> Route 2<br />\
    <img src="styles/legend/MBMCStopsMapped_4_11.png" /> Route 20<br />\
    <img src="styles/legend/MBMCStopsMapped_4_12.png" /> Route 21<br />\
    <img src="styles/legend/MBMCStopsMapped_4_13.png" /> Route 22<br />\
    <img src="styles/legend/MBMCStopsMapped_4_14.png" /> Route 23<br />\
    <img src="styles/legend/MBMCStopsMapped_4_15.png" /> Route 24<br />\
    <img src="styles/legend/MBMCStopsMapped_4_16.png" /> Route 25<br />\
    <img src="styles/legend/MBMCStopsMapped_4_17.png" /> Route 28<br />\
    <img src="styles/legend/MBMCStopsMapped_4_18.png" /> Route 29<br />\
    <img src="styles/legend/MBMCStopsMapped_4_19.png" /> Route 29 AC<br />\
    <img src="styles/legend/MBMCStopsMapped_4_20.png" /> Route 4<br />\
    <img src="styles/legend/MBMCStopsMapped_4_21.png" /> Route 5<br />\
    <img src="styles/legend/MBMCStopsMapped_4_22.png" /> Route 6<br />\
    <img src="styles/legend/MBMCStopsMapped_4_23.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_MBMCStatsRev1_1.setVisible(true);lyr_MBMCRoutesStats_2.setVisible(true);lyr_MBMCTerminals_3.setVisible(true);lyr_MBMCStopsMapped_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MBMCStatsRev1_1,lyr_MBMCRoutesStats_2,lyr_MBMCTerminals_3,lyr_MBMCStopsMapped_4];
lyr_MBMCStatsRev1_1.set('fieldAliases', {'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_MBMCRoutesStats_2.set('fieldAliases', {'Name': 'Name', 'Length Km': 'Length Km', });
lyr_MBMCTerminals_3.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_MBMCStopsMapped_4.set('fieldAliases', {'Name': 'Name', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Name_2': 'Name_2', 'Length Km': 'Length Km', });
lyr_MBMCStatsRev1_1.set('fieldImages', {'shapeName': '', 'Area KM': '', 'Perimeter': '', 'Pop': '', 'Pop/Km2': '', });
lyr_MBMCRoutesStats_2.set('fieldImages', {'Name': 'TextEdit', 'Length Km': '', });
lyr_MBMCTerminals_3.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', });
lyr_MBMCStopsMapped_4.set('fieldImages', {'Name': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Name_2': 'TextEdit', 'Length Km': 'TextEdit', });
lyr_MBMCStatsRev1_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_MBMCRoutesStats_2.set('fieldLabels', {'Name': 'header label - visible with data', 'Length Km': 'inline label - always visible', });
lyr_MBMCTerminals_3.set('fieldLabels', {'Name': 'header label - visible with data', 'layer': 'inline label - always visible', });
lyr_MBMCStopsMapped_4.set('fieldLabels', {'Name': 'header label - visible with data', 'Sr__No_': 'inline label - always visible', 'Depot_Name': 'inline label - always visible', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'Name_2': 'inline label - always visible', 'Length Km': 'inline label - always visible', });
lyr_MBMCStopsMapped_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});