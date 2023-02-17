import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

// const appId = // Put your App ID here
const token =
  "007eJxTYMjY4vJuWmXuPnnJn97fXivEXtqh2+le8ePxV5MMkyNcd2sUGEzTkpLNLZNMjEwMLEyMzFIszFKMLczMDEwNEy0szBMN9mx7l9wQyMhgd/ULMyMDBIL4LAy5iZl5DAwA0yEhkw==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
