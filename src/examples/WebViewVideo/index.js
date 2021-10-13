import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const html = `
<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <video
      id="video"
      style="width: 100%; height: auto"
      controls
      src="https://playertest.longtailvideo.com/adaptive/oceans/oceans.m3u8"
    ></video>
    <h1>Click here to pip</h1>
    <button
      id="pipButton"
      style="width: 100%; height: 78px; background-color: aquamarine"
    >
     Hola
    </button>

    <script>
      // Hide button if Picture-in-Picture is not supported.
      pipButton.hidden = !document.pictureInPictureEnabled;

      pipButton.addEventListener('click', function () {
        // If there is no element in Picture-in-Picture yet, let's request Picture
        // In Picture for the video, otherwise leave it.
        if (!document.pictureInPictureElement) {
          video.requestPictureInPicture().catch(error => {
            // Video failed to enter Picture-in-Picture mode.
            alert('error 1');
          });
        } else {
          document.exitPictureInPicture().catch(error => {
            // Video failed to leave Picture-in-Picture mode.
            alert('error 2');
          });
        }
      });
      // See whether resize is small enough to be PiP. It's a hack, but it'll
      // work for now.
      window.addEventListener('resize', function () {
        if (!document.fullscreenElement) {
          return;
        }

        var minimumScreenSize = 0.33;
        var screenArea = screen.width * screen.height;
        var windowArea = window.outerHeight * window.outerWidth;

        // If the size of the window relative to the screen is less than a third,
        // let's assume we're in PiP and exit fullscreen to prevent Auto PiP.
        if (windowArea / screenArea < minimumScreenSize) {
          document.exitFullscreen();
        }
      });
    </script>
  </body>
</html>
`;
const WebViewVideo = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        style={{backgroundColor: 'gray'}}
        originWhitelist={['*']}
        source={{html: html}}
        javaScriptEnabled
        setSupportMultipleWindows={false}
      />
    </SafeAreaView>
  );
};

export default WebViewVideo;
