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
  }
];

export default defaultSettings;
