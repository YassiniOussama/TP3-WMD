import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@material-ui/core';
import Peer from 'peerjs';

let peer = null;
let connection = null;

const initPeer = (localID, remoteID) => {
  console.log("Start");

  peer = new Peer(localID, {
    host: 'localhost',
    port: 3000,
    path: '/mypeer'
  });


  peer.on('open', function (localID) { 
    console.log('My peer ID id :', localID);
   });

  connection = peer.connect(remoteID);

  peer.on('connection', function (conn) {
    alert('Connection is open');
      conn.on('data', function (data) {
        alert('Data: ' + data);
    });
  });
 

};

const initConnection = (RID) => {
 // connection = peer.connect(RID);
  
}

const initSend = () => {

}


function DataChat() {

  const [startAvailable, setStart] = useState(true);
  const [callAvailable, setCall] = useState(false);
  const [sendAvailable, setSend] = useState(false);
  const [hangupAvailable, setHangup] = useState(false);
  const [localID, setLocalID] = useState(0);
  const [remoteID, setRemoteID] = useState(0);
  const [message, setMessage] = useState(0);


  const start = () => {
    console.log("start :", localID, remoteID);
    setCall(true);
    setStart(false);
    initPeer(localID, remoteID);
  }

  const call = () => {
    console.log("call :", remoteID);
    setSend(true);
    setHangup(true);
    setCall(false);
    //  initConnection(remoteID);
  }


  const send = () => {

    connection.send(message);
    console.log("message :", message);
    initSend();
  }



  return (
    // TODO rajouter les champs textes correspondants
    // Vous pouvez utiliser des TextField de material-UI
    // Et une Grid plutôt que des div pour la mise en page
    <div>
      <Grid item xs={3}>
        <TextField label="Local ID" onChange={(e) => setLocalID(e.target.value)}></TextField>
        <Button onClick={start} disabled={!startAvailable}>Start</Button>
      </Grid>


      <Grid item xs={3}>
        <TextField label="Remote ID" onChange={(e) => setRemoteID(e.target.value)}></TextField>
        <Button onClick={call} disabled={!callAvailable} >Call</Button>
      </Grid>

      <Grid item xs={3}>
        <TextField label="Message" onChange={(e) => setMessage(e.target.value)}></TextField>
        <Button onClick={send} disabled={!sendAvailable}>Send</Button>
      </Grid>

      <Grid item xs={3}>
        <Button disabled={!hangupAvailable}>Hang Up</Button>
      </Grid>
    </div>
  )
}
export default DataChat
