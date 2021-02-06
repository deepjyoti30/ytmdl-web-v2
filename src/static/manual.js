const manualOptions = [
  {
    attrName: "name",
    name: "Title of the song",
    text: "Enter the title of the song",
    default: "",
    example: "She Even Woke Me Up to Say Goodbye",
    skippingAllowed: false
  },
  {
    attrName: "artist",
    name: "Artist of the song",
    text: "Enter the name of the artist",
    default: "",
    example: "Jerry Lee Lewis",
    skippingAllowed: false
  },
  {
    attrName: "album",
    name: "Album of the song",
    text: "Enter the name of the album",
    default: "",
    example: "Killer Country",
    skippingAllowed: false
  },
  {
    attrName: "genre",
    name: "Genre of the song",
    text: "Enter the genre of the song",
    default: "",
    example: "Country",
    skippingAllowed: true
  },
  {
    attrName: "cover",
    name: "Cover image of the song",
    text: "Enter the name of the artist",
    default: "",
    example:
      "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/04/d3/5f/04d35fb8-9660-2053-c0db-7b4359d09400/source/100x100bb.jpg",
    skippingAllowed: true
  },
  {
    attrName: "release_date",
    name: "Date of release of the song",
    text: "Enter the name of the artist",
    default: null,
    example: "1995-11-15T12:00:00Z",
    skippingAllowed: true
  },
  {
    attrName: "number",
    name: "Number of the track in the album",
    text: "Enter the number of the track in the album",
    default: 0,
    example: 7,
    skippingAllowed: true
  }
];

export default manualOptions;
