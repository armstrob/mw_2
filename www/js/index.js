/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

        var mw_c = mwbScanner.getConstants(), settings;
        settings = [
            { 'method': 'MWBsetActiveCodes', 'value': [mw_c.MWB_CODE_MASK_DM] },
            { "method": 'MWBenableZoom', "value": [true] },
            { "method": 'MWBsetZoomLevels', "value": [200, 400, 1] },
            // {"method" : 'MWBsetInterfaceOrientation', "value" : [mw_c.OrientationLandscapeLeft]},
            { "method": 'MWBsetOverlayMode', "value": [mw_c.OverlayModeImage] },
            { "method": 'MWBsetLevel', "value": [3] }, //3 will try to scan harder than the default which is 2
            { "method": 'MWBenableHiRes', 'value': [true] }, //possible setting
            { "method": 'MWBenableFlash', 'value': [true] }, //possible setting
            { "method": 'MWBuse60fps', 'value': [true] }, //possible
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_25, 2, 2, 96, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_39, 2, 2, 96, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_93, 2, 2, 96, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_128, 2, 2, 96, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_AZTEC, 20, 2, 60, 96]},
            { "method": "MWBsetScanningRect", "value": [mw_c.MWB_CODE_MASK_DM, 20, 2, 60, 96] },
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_EANUPC, 2, 2, 96, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_PDF, 2, 2, 96, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_QR, 20, 2, 60, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_RSS, 2, 2, 96, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_CODABAR, 2, 2, 96, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_DOTCODE, 30, 20, 40, 60]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_11, 2, 2, 96, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_MSI, 2, 2, 96, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_MAXICODE, 20, 2, 60, 96]},
            //            {"method" : "MWBsetScanningRect", "value" : [mw_c.MWB_CODE_MASK_POSTAL, 2, 2, 96, 96]},
            //            {"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_25, 5]},
            //            {"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_MSI, 5]},
            //            {"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_39, 5]},
            //            {"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_CODABAR, 5]},
            //            {"method" : "MWBsetMinLength", "value" : [mw_c.MWB_CODE_MASK_11, 5]},
            { "method": 'MWBsetDirection', "value": [MWB_SCANDIRECTION_OMNI] }
        ];

        mwbScanner.loadSettings(settings).then(function (response) {
            alert(response);
        }).catch(function (reason) {
            alert(reason);
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {

        alert('Received Event: ' + id);
    }
};
