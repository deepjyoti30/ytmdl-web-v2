const defaultSettings = [
  {
    name: "format",
    title: "Format",
    description:
      "Format of the song to be downloaded. mp3 is the older but more popular format. m4a is a also a good format. Takes less space while not compromising on quality.",
    options: ["mp3", "m4a", "opus"],
    default: "mp3"
  },
  {
    name: "auto-search-meta",
    title: "Auto search for metadata",
    description:
      "If enabled, the metadata will be automatically searched using the query entered in the search page. This only works if the metadata page gets the query passed to it.",
    options: ["on", "off"],
    default: "on"
  },
  {
    name: "ask-format-each",
    title: "Ask the format each time",
    description:
      "Ask the user before every download which format they'd like to download the song in. If disabled, the song will be downloaded in the format selected by the user which is by default set to mp3. This setting will have not effect if the default format is not selected.",
    options: ["on", "off"],
    default: "on"
  },
  {
    name: "skip-url-input",
    title: "Skip YouTube URL prompt",
    description:
      "If enabled, the prompt that asks the user to reconfirm if they would like to continue with the entered URL is skipped and the user is directly taken to the next page.",
    options: ["on", "off"],
    default: "off"
  },
  {
    name: "format-confirm",
    title: "Confirm the format each time",
    description:
      "Ask the user each time if they'd like to make the selected format the default one and thus skip the format page next time.",
    options: ["on", "off"],
    default: "on"
  }
];

export default defaultSettings;
