const defaultSettings = [
  {
    name: "format",
    title: "Format",
    description:
      "Format is the format in which the song will be downloaded in. mp3 is the older but famous format. m4a is a good format. Takes less space and songs are good quality.",
    options: ["mp3", "m4a", "opus"],
    default: "mp3"
  },
  {
    name: "click-search",
    title: "Click on result to continue",
    description:
      "If enabled, clicking on the search result will mean continue. This makes the flow getting the song ready easier since it removes some extra clicks that the user might have had to do.",
    options: ["on", "off"],
    default: "off"
  },
  {
    name: "ask-format-each",
    title: "Ask for format each time",
    description:
      "Ask the user which format they'd like to download the song in, each time. If disabled, the song will be downloaded in the format selected by the user which is by default set to mp3. This setting will have not effect if the default format is not selected.",
    options: ["on", "off"],
    default: "on"
  },
  {
    name: "skip-url-input",
    title: "Skip YouTube URL prompt",
    description:
      "If enabled, the prompt that asks the user to reconfirm if they would like to continue with the entered URL is skipped and the user is directly taken to the next page",
    options: ["on", "off"],
    default: "off"
  }
];

export default defaultSettings;
