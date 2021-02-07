const manualOptions = [
  {
    attrName: "name",
    name: "Title of the song",
    text: "Enter the title of the song",
    default: "N/A",
    example: "She Even Woke Me Up to Say Goodbye",
    skippingAllowed: false
  },
  {
    attrName: "artist",
    name: "Artist of the song",
    text: "Enter the name of the artist",
    default: "N/A",
    example: "Jerry Lee Lewis",
    skippingAllowed: false
  },
  {
    attrName: "album",
    name: "Album of the song",
    text: "Enter the name of the album",
    default: "N/A",
    example: "Killer Country",
    skippingAllowed: false
  },
  {
    attrName: "genre",
    name: "Genre of the song",
    text: "Enter the genre of the song",
    default: "N/A",
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
    default: new Date()
      .toLocaleString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit"
      })
      .replace(/\//g, "-"),
    example: "1995-11-15",
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
