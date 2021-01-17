/*
 *  Copyright (c) 2014 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
.drop-down {
  font-size: 10px;
  white-space: nowrap;
  width: 65%;
}

.constraints {
  display: none;
  height: auto;
  overflow: scroll;
  position: absolute;
  width: 75%;
}

.float-left {
  float: left;
  width: 100%;
}

.float-clear-left {
  clear: left;
  float: left;
  width: 100%;
}

.top-border {
  border-top: 4px solid grey;
}

.bottom-border {
  border-bottom: 4px solid grey;
}

#messages {
  font-size: 0.7em;
  white-space: pre-wrap;
  word-wrap: break-word;
}

#audio-source {
  float: left;
  width: 50%;
}

#video-source {
  margin-left: 50%;
  width: 50%;
}

#video-res {
  width: 30%;
}

#signal-server {
  float: left;
  width: 60%;
}

#pc-server {
  margin-left: 0.1em;
  margin-top: 0.1em;
  width: 98%;
}

#peer-id-container {
  height: 1.5em;
  margin-left: 60%;
}

#peer-id {
  margin-top: 0.1em;
  width: 7em;
}

#pc-server-label {
  width: 15%;
}

#pc-server-container {
  height: 1.5em;
  margin: 0 0 0 12%;
  overflow: hidden;
  position: absolute;
  width: 40%;
}

#pc-constraints-left {
  margin: 0.7em 0 0 0;
  width: 60%;
}

#call {
  float: left;
  margin: 0.7em 0 0 0;
}

.float-left {
  float: left;
  width: 100%;
}

.float-clear-left {
  clear: left;
  float: left;
  width: 100%;
}

.small-input {
  width: 3em;
}

.medium-input {
  width: 6em;
}

#screencapture-info {
  margin: 1% auto; /* 15% from the top and centered */
  width: 100%; /* Could be more or less, depending on screen size */
}

a {
  color: lightBlue;
  font-weight: 300;
  text-decoration: none;
}

a:hover {
  color: blue;
  text-decoration: underline;
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 1em;
  word-wrap: break-word;
}

button {
  background-color: grey;
  border: none;
  border-radius: 1px;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 0.8em;
  margin: 0 0 1em 0;
  padding: 0.2em;
}

button:hover {
  background-color: darkGrey;
}

button.green {
  background: darkGreen;
  color: white;
}

button.green:hover {
  background: forestGreen;
  color: white;
}

button.red {
  background: darkRed;
  color: white;
}

button.red:hover {
  background: fireBrick;
}

button.pressed {
background-color: black;
}

div#container {
  margin: 0 auto 0 auto;
  max-width: 40em;
  padding: 0 1.5em 1.3em 1.5em;
  position: relative;
  z-index: 2;
}

h2 {
  color: black;
  font-size: 1em;
  font-weight: 700;
  line-height: 1.2em;
  margin: 0 0 0.8em 0;
}

table, td, th {
    border: 1px solid black;
}

table {
    border-collapse: collapse;
    width: 100%;
}

td {
    height: 50px;
    vertical-align: bottom;
}

div {
  background: white;
}

html {
  /* avoid annoying page width change
  when moving from the home page.*/
  overflow-y: scroll;
}

select {
  margin: 0 1em 1em 0;
  position: relative;
  top: -1px;
}

video {
  background: black;
  width: 100%;
}

#log {
  float: left;
  left: 0;
  overflow: auto;
  padding: 16px;
  position: fixed;
  top: 0;
  width: 20%;
  word-wrap: break-word;
  z-index: 1;
}

@media screen and (max-width: 1200px) {
  div#log {
    float: none;
    padding: 0;
    position: inherit;
    width: 100%;
  }
  button {
    padding: 0.7em;
  }
  button:active {
    background: black;
  }
  #pc-server-label {
    margin-top: 5px;
  }
  #pc-server-container {
    margin-top: 5px;
  }
}