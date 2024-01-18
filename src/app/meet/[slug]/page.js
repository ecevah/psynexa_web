"use client";
import { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const myMeeting = async () => {
      // Kit Token üret
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
  }, [roomID]);

  if (typeof window === "undefined") {
    return <div>Server tarafında içerik</div>;
  }

  return (
    <div
      className="myCallContainer"
      ref={myMeetingContainer}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
