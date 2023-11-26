let games = [
  { id: "1", title: "ZTOTK", platform: ["Switch"] },
  { id: "2", title: "FF7RM", platform: ["PS5", "XBOX"] },
  { id: "3", title: "ER", platform: ["PS5", "XBOX", "PC"] },
  { id: "4", title: "MK", platform: ["Switch"] },
  { id: "5", title: "PS", platform: ["PS5", "XBOX", "PC"] },
];

let authors = [
  { id: "1", name: "mario", verified: true },
  { id: "2", name: "yoshi", verified: false },
  { id: "3", name: "peach", verified: true },
];

let reviews = [
  { id: "1", rating: 9, content: "lorem", author_id: "1", game_id: "2" },
  { id: "2", rating: 10, content: "lorem", author_id: "2", game_id: "1" },
  { id: "3", rating: 7, content: "lorem", author_id: "3", game_id: "3" },
  { id: "4", rating: 5, content: "lorem", author_id: "2", game_id: "4" },
  { id: "5", rating: 8, content: "lorem", author_id: "2", game_id: "5" },
  { id: "6", rating: 7, content: "lorem", author_id: "1", game_id: "2" },
  { id: "7", rating: 10, content: "lorem", author_id: "3", game_id: "1" },
];

export default { authors, games, reviews };
