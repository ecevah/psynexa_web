"use client";
import React, { useRef, useState, useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import RecordRTC from "recordrtc";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url) {
  if (typeof window === "undefined") {
    return null;
  }

  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App({ params }) {
  const router = useRouter();
  const roomID = params.slug;
  const myMeetingContainer = useRef();
  const recorderRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const myMeeting = async () => {
      const appID = 441661153;
      const serverSecret = "a19f868ebfb8211bb8a19d30b2107318";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        randomID(5),
        randomID(5)
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: myMeetingContainer.current,
        sharedLinks: [
          {
            name: "Kişisel Bağlantı",
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
        branding: {
          logoURL: "/svg/logo.svg",
        },
        maxUsers: 2,
        showRoomDetailsButton: false,
        showUserList: false,
        autoHideFooter: true,
        showLayoutButton: false,
        showPreJoinView: false,
        showLeavingView: false,
        onLeaveRoom: () => {
          router.push("/dashboard");
        },
      });
    };

    myMeeting();
  }, [roomID, router]);

  if (typeof window === "undefined") {
    return <div>Server tarafında içerik</div>;
  }

  const targetElementRef = useRef(null);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);
  const [capturedCanvas, setCapturedCanvas] = useState(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        const recorder = RecordRTC(stream, { type: "video" });
        recorderRef.current = recorder;
        recorder.startRecording();
      })
      .catch((error) => console.error("Error accessing media devices:", error));
  };

  const stopRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.stopRecording(() => {
        const blob = recorderRef.current.getBlob();
        const videoUrl = URL.createObjectURL(blob);
        setRecordedVideoUrl(videoUrl);

        // Add the download link
        const downloadLink = document.createElement("a");
        downloadLink.href = videoUrl;
        downloadLink.download = "recorded-video.mp4";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
    }
  };

  const captureElement = async () => {
    const targetElement = myMeetingContainer.current;

    try {
      const canvas = await html2canvas(targetElement);
      setCapturedCanvas(canvas.toDataURL()); // Convert canvas to base64 data URL
    } catch (error) {
      console.error("Error capturing element:", error);
    }
  };

  return (
    <>
      <div
        className="myCallContainer"
        ref={myMeetingContainer}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
      <div>
        <div ref={targetElementRef}>
          <p>Hello, this is the content you want to capture.</p>
        </div>

        <button onClick={captureElement}>Capture Element</button>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>

        {recordedVideoUrl && (
          <div>
            <p>Recorded Video:</p>
            <video controls width="300" height="200">
              <source src={recordedVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Add the download link */}
            <a href={recordedVideoUrl} download="recorded-video.mp4">
              Download Recorded Video
            </a>
          </div>
        )}

        {capturedCanvas && (
          <div>
            <p>Captured Element:</p>
            <img src={capturedCanvas} alt="Captured Element" />
          </div>
        )}
      </div>
    </>
  );
}
