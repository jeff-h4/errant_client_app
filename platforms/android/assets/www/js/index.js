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
    initialize: function() {
        console.log("app.initialize() called");
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        console.log("BINDING deviceready");
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("EVENT: onDeviceReady received!");
        //app.receivedEvent('deviceready');
        app.startErrant('deviceready');
    },
    //// Update DOM on a Received Event
    //receivedEvent: function(id) {
    //    console.log('======================================');
    //    console.log('Starting receivedEvent()');
    //    console.log("I'm not supposed to be in receivedEvent");
    //    var parentElement = document.getElementById(id);
    //    var listeningElement = parentElement.querySelector('.listening');
    //    var receivedElement = parentElement.querySelector('.received');
    //    var myReactElement = parentElement.querySelector('#reacttesting');

    //    listeningElement.setAttribute('style', 'display:none;');
    //    receivedElement.setAttribute('style', 'display:block;');
    //    React.render(React.createElement(Box, null),document.getElementById("reacttesting"));
    //    console.log('Received Event: ' + id);
    //    console.log('Leaving receivedEvent()');
    //},
    startErrant: function(id) {
        var WEB_SERVER_BASE = "http://e9ad9e2e.ngrok.io"; 
        console.log('======================================');
        console.log('Entering startErrant()');
        React.render(React.createElement(App, {webServerBase: WEB_SERVER_BASE}),document.getElementById("main"));
        //React.render(React.createElement(Box, null),document.getElementById("reacttesting"));
        console.log('Leaving startErrant()');
        console.log('======================================');
    }
};
