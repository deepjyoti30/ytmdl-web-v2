const manualOptions = [
  {
    attrName: "name",
    name: "Title of the song",
    text: "Enter the title of the song",
    default: "",
    skippingAllowed: false
  },
  {
    attrName: "artist",
    name: "Artist of the song",
    text: "Enter the name of the artist",
    default: "",
    skippingAllowed: false
  },
  {
    attrName: "album",
    name: "Album of the song",
    text: "Enter the name of the album",
    default: "",
    skippingAllowed: false
  },
  {
    attrName: "genre",
    name: "Genre of the song",
    text: "Enter the genre of the song",
    default: "",
    skippingAllowed: true
  },
  {
    attrName: "cover",
    name: "Cover image of the song",
    text: "Enter the name of the artist",
    default: "",
    skippingAllowed: true
  },
  {
    attrName: "release_date",
    name: "Date of release of the song",
    text: "Enter the name of the artist",
    default: null,
    skippingAllowed: true
  },
  {
    attrName: "number",
    name: "Number of the track in the album",
    text: "Enter the number of the track in the album",
    default: 0,
    skippingAllowed: true
  }
];

export default manualOptions;
