const initialState = {
  posts: [
    {
      id: "1",
      title: "Article title",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("01-02-2022"),
      author: "John Doe",
    },
    {
      id: "2",
      title: "Another Article title",
      shortDescription: "Short description is short, because...",
      content: "Main article of the content",
      publishedDate: new Date("02-02-2022"),
      author: "Jane Doe",
    },
    {
      id: "3",
      title: "Yet Another Article title",
      shortDescription: "Short description of the short article!",
      content: "Main content of the content",
      publishedDate: new Date("03-02-2022"),
      author: "Jamie Doe",
    },
    {
      id: "4",
      title: "And Another Article title",
      shortDescription: "Short article with short description.",
      content: "Main article of the article",
      publishedDate: new Date("04-02-2022"),
      author: "Janett Doe",
    },
  ],
};

export default initialState;
