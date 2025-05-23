/*
 * Copyright 2018, 2019, 2020 Dooboolab.
 * Copyright 2021, 2022, 2023, 2024 Canardoux.
 *
 * This file is part of Flutter-Sound.
 *
 * Flutter-Sound is free software: you can redistribute it and/or modify
 * it under the terms of the Mozilla Public License version 2 (MPL-2.0),
 * as published by the Mozilla organization.
 *
 * Flutter-Sound is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * MPL General Public License for more details.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const RECORDER_VERSION = '9.25.4'

const IS_RECORDER_PAUSED = 1;
const IS_RECORDER_RECORDING = 2;
const IS_RECORDER_STOPPED = 0;

function newRecorderInstance(aCallback, callbackTable) { return new FlutterSoundRecorder(aCallback, callbackTable); }


const CB_updateRecorderProgress = 0;
//const CB_recordingData = 1;
const CB_startRecorderCompleted = 1;
const CB_pauseRecorderCompleted = 2;
const CB_resumeRecorderCompleted = 3;
const CB_stopRecorderCompleted = 4;
const CB_openRecorderCompleted = 5;
const CB_recorder_log = 6;

class FlutterSoundRecorder {
        static newInstance(aCallback, callbackTable) { return new FlutterSoundRecorder(aCallback, callbackTable); }

        constructor(aCallback, callbackTable) {
                this.callback = aCallback;
                this.callbackTable = callbackTable;
                this.subscriptionDuration = 0;
                this.timerId = null;
                this.deltaTime = 0;
                this.currentRecordPath = '';
                this.localObjects = [];
                this.instanceNo = instanceNumber;
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'Instance Number : ' + this.instanceNo.toString())
                ++instanceNumber;
        }



        initializeFlautoRecorder(focus, category, mode, audioFlags, device) {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'initializeFlautoRecorder');
                this.callbackTable[CB_openRecorderCompleted](this.callback, IS_RECORDER_STOPPED, true);

        }


        deleteObjects() {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'JS:---> deleteObjects ');
                for (var url in this.localObjects) {
                        this.callbackTable[CB_recorder_log](this.callback, DBG, 'deleteRecord : ' + url);
                        this.deleteRecord(url);
                }
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'JS:<--- deleteObjects ');
        }


        releaseFlautoRecorder() {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'JS:---> releaseFlautoRecorder');
                this.stop();
                this.deleteObjects();
                this.localObjects = [];

                this.callbackTable[CB_recorder_log](this.callback, DBG, 'JS:<--- releaseFlautoRecorder');
        }


        setAudioFocus(focus, category, mode, audioFlags, device) {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'setAudioFocus');
        }


        isEncoderSupported(codec,) {
                return true; // TODO
        }

        setSubscriptionDuration(duration) {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'setSubscriptionDuration');
                this.subscriptionDuration = duration;
                if (this.mediaRecorder != null)
                        this.startTimer();
        }


        _deleteRecord(aPath,) {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'deleteRecord: ' + aPath);
                if ((aPath == null) || (aPath == '')) {
                        path = lasturl;
                } else {
                        var path = aPath;
                }
                var myStorage;
                if (path.substring(0, 1) == '/') {
                        myStorage = window.localStorage;
                        this.callbackTable[CB_recorder_log](this.callback, DBG, 'localStorage');
                } else {
                        myStorage = window.sessionStorage;
                        this.callbackTable[CB_recorder_log](this.callback, DBG, 'sessionStorage');
                }
                var oldUrl = myStorage.getItem(path);
                if (oldUrl != null && oldUrl != '') {
                        this.callbackTable[CB_recorder_log](this.callback, DBG, 'Deleting object  : ' + oldUrl.toString());
                        URL.revokeObjectURL(oldUrl);
                        return true;
                }

                return false;
        }



        deleteRecord(path) {
                this._deleteRecord(path);

                var found = this.localObjects.findIndex(element => element == path);
                if (found != null && found >= 0) {
                        this.callbackTable[CB_recorder_log](this.callback, DBG, "Found : " + found);
                        this.localObjects[found] = null;
                }

        }

        setRecordURL(aPath, newUrl) {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'setRecordUrl: ' + aPath + ' <- ' + newUrl);
                var path = aPath;
                var myStorage;
                if ((path == null) || (path == '')) {
                        return null;
                }
                if (path.substring(0, 1) == '/') {
                        myStorage = window.localStorage;
                        this.callbackTable[CB_recorder_log](this.callback, DBG, 'localStorage');
                } else {
                        myStorage = window.sessionStorage;
                        this.callbackTable[CB_recorder_log](this.callback, DBG, 'sessionStorage');
                }
                var oldUrl = myStorage.getItem(path);
                if (oldUrl != null && oldUrl != '') {
                        this.callbackTable[CB_recorder_log](this.callback, DBG, 'Deleting object ' + ' : ' + oldUrl.toString());
                        URL.revokeObjectURL(oldUrl);
                } else {

                }

                lastUrl = aPath;

                myStorage.setItem(path, newUrl);
                this.callbackTable[CB_recorder_log](this.callback, DBG, '<--- setRecordURL ( ' + path + ' ) : ' + newUrl);

        }

        getRecordURL(aPath,) {
                this.callbackTable[CB_recorder_log](this.callback, DBG, '---> getRecordURL : ' + aPath);
                var r = getRecordURL(aPath);
                if (r == null)
                        r = ''; // stopRecorder does not like a null
                this.callbackTable[CB_recorder_log](this.callback, DBG, '<--- getRecordURL :' + r);
                return r;
        }


        async startRecorder(path, sampleRate, numChannels, bitRate, bufferSize, enableVoiceProcessing ,codec, toStream, audioSource) {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'startRecorder');
                var me = this;
                this.currentRecordPath = path;
                var chunks = [];
                var mediaStream;
                mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
                me.mediaStream = mediaStream;

                this.audioContext = new AudioContext();
                const _audioSource = this.audioContext.createMediaStreamSource(mediaStream);
                const analyser = this.audioContext.createAnalyser();
                // todo: review if this values are right (set to mimic a behaviour closest to that of Android)
                analyser.fftSize = 512;
                analyser.minDecibels = -110;
                analyser.maxDecibels = 0;
                analyser.smoothingTimeConstant = 0.4;
                _audioSource.connect(analyser);
                const volumes = new Uint8Array(analyser.frequencyBinCount);

                this.getVolumeLevel = () => {
                        analyser.getByteFrequencyData(volumes);
                        let volumeSum = 0;
                        for (const volume of volumes)
                                volumeSum += volume;
                        return volumeSum / volumes.length;
                }


                // ===========================================================================

                var options =
                {
                        audioBitsPerSecond: bitRate,
                        mimeType: mime_types[codec]
                }
                try
                {
                        var mediaRecorder = new MediaRecorder(mediaStream, options);
                        me.mediaRecorder = mediaRecorder;
                        if (toStream) // not yet implemented !
                                mediaRecorder.start(30); // 30 milliseconds for a chunk
                        else
                                mediaRecorder.start();
                        me.callbackTable[CB_recorder_log](me.callback, DBG, "recorder started : " + mediaRecorder.state);

                        mediaRecorder.ondataavailable = function (e)
                        {
                                if (e.data)
                                {
                                        if (toStream) // not yet implemented !
                                        {
                                                //me.callbackTable[CB_recordingData](me.callback, e.data);

                                        }
                                        if (path != null && path != '') {
                                                me.callbackTable[CB_recorder_log](me.callback, DBG, 'On data available : ' + e.data.constructor.name);
                                                chunks.push(e.data);
                                        }
                                }

                        }

                        mediaRecorder.onstart = function (e)
                        {
                                try
                                {

                                        me.callbackTable[CB_recorder_log](me.callback, DBG, '---> mediaRecorder OnStart');
                                        me.deltaTime = 0;
                                        me.startTimer();
                                        me.callbackTable[CB_recorder_log](me.callback, DBG, '<---mediaRecorder OnStart : ' + me.mediaRecorder.state);
                                        me.callbackTable[CB_startRecorderCompleted](me.callback, IS_RECORDER_RECORDING, true);
                               } catch (error)
                               {
                                        me.callbackTable[CB_recorder_log](me.callback, ERROR, error.toString());
                                        me.callbackTable[CB_startRecorderCompleted](me.callback, IS_RECORDER_RECORDING, false);
                               }

                        }

                        mediaRecorder.onerror = function (e) {
                                me.callbackTable[CB_recorder_log](me.callback, DBG, "mediaRecorder OnError : " + e.error);
                                me.stopRecorder()
                        }

                        mediaRecorder.onpause = function (e) {
                                me.callbackTable[CB_recorder_log](me.callback, DBG, '---> mediaRecorder onpause');
                                me.callbackTable[CB_pauseRecorderCompleted](me.callback, IS_RECORDER_PAUSED, true);
                                me.callbackTable[CB_recorder_log](me.callback, DBG, '<--- mediaRecorder onpause');
                        }

                        mediaRecorder.onresume = function (e) {
                                me.callbackTable[CB_recorder_log](me.callback, DBG, '---> mediaRecorder onresume');
                                me.callbackTable[CB_resumeRecorderCompleted](me.callback, IS_RECORDER_RECORDING, true);
                                me.callbackTable[CB_recorder_log](me.callback, DBG, '<--- mediaRecorder onresume');
                        }

                        mediaRecorder.onstop = function (e) {

                                me.callbackTable[CB_recorder_log](me.callback, DBG, '---> mediaRecorder onstop');
                                var blob = new Blob(chunks, { 'type': mime_types[codec] });
                                var url = URL.createObjectURL(blob);
                                me.callbackTable[CB_recorder_log](me.callback, DBG, 'Instance Number : ' + me.instanceNo.toString())

                                me.setRecordURL(path, url);

                                var found = me.localObjects.findIndex(element => element == path);
                                if (found != null && found >= 0) {
                                        me.callbackTable[CB_recorder_log](me.callback, DBG, "Found : " + found);
                                        me.localObjects[found] = path;
                                } else {
                                        me.callbackTable[CB_recorder_log](me.callback, DBG, "NOT FOUND! : " + path);
                                        me.localObjects.push(path);
                                }



                                chunks = null;///[];
                                me.callbackTable[CB_recorder_log](me.callback, DBG, 'recorder stopped');
                                me.mediaRecorder = null;
                                me.callbackTable[CB_stopRecorderCompleted](me.callback, IS_RECORDER_STOPPED, true, me.getRecordURL(path));

                                me.callbackTable[CB_recorder_log](me.callback, DBG, '<--- mediaRecorder onstop');
                        }


                } catch (error)
                {
                        me.callbackTable[CB_recorder_log](me.callback, ERROR, error.toString());
                        me.callbackTable[CB_startRecorderCompleted](me.callback, IS_RECORDER_RECORDING, false);
                }
        }

        stop() {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'JS:---> stop()');
                this.stopTimer();
                if (this.mediaRecorder != null) {
                        this.mediaRecorder.stop();
                        this.mediaRecorder = null;
                }
                if (this.mediaStream != null) {
                        this.mediaStream.getTracks().forEach(track => track.stop());
                        this.mediaStream = null;
                }
                  // Close the audioContext if it exists
                if (this.audioContext != null) {
                        this.audioContext.close();
                        this.audioContext = null;
                }
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'JS:<--- stop()');
        }

        stopRecorder() {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'JS:---> stopRecorder');
                this.stopTimer();
                if (this.mediaRecorder != null) {
                        this.mediaRecorder.stop();
                } else {
                        this.callbackTable[CB_stopRecorderCompleted](this.callback, IS_RECORDER_STOPPED, /*false*/true, this.getRecordURL(this.currentRecordPath));
                }
                this.mediaRecorder = null;

                if (this.mediaStream != null) {
                        this.mediaStream.getTracks().forEach(track => track.stop());
                        this.mediaStream = null;
                }
                  // Close the audioContext if it exists
                if (this.audioContext != null) {
                        this.audioContext.close();
                        this.audioContext = null;
                }
                this.callbackTable[CB_recorder_log](this.callback, DBG, "JS:<--- stopRecorder");
        }


        pauseRecorder() {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'pauseRecorder');
                this.mediaRecorder.pause();
                this.stopTimer();
                this.callbackTable[CB_recorder_log](this.callback, DBG, "recorder paused : " + this.mediaRecorder.state);

        }


        resumeRecorder() {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'resumeRecorder');
                this.mediaRecorder.resume();
                this.startTimer();
                this.callbackTable[CB_recorder_log](this.callback, DBG, "recorder resumed : " + this.mediaRecorder.state);
        }

        startTimer() {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'startTimer()');
                this.stopTimer();
                var me = this;

                if (this.subscriptionDuration > 0) {
                        this.countDownDate = new Date().getTime();
                        this.timerId = setInterval
                                (
                                        function () {
                                                var volumeLevel = me.getVolumeLevel();
                                                var now = new Date().getTime();
                                                var distance = now - me.countDownDate;
                                                me.callbackTable[CB_updateRecorderProgress](me.callback, me.deltaTime + distance, volumeLevel);

                                        },
                                        this.subscriptionDuration
                                );
                }
        }

        stopTimer() {
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'JS:---> stopTimer()');
                if (this.timerId != null) {
                        clearInterval(this.timerId);
                        var now = new Date().getTime();
                        var distance = now - this.countDownDate;
                        this.deltaTime += distance;
                        this.timerId = null;
                }
                this.callbackTable[CB_recorder_log](this.callback, DBG, 'JS:<--- stopTimer()');
        }

}

