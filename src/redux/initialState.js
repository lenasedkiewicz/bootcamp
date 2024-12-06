const initialState = {
  lists: [
    {
      id: "1",
      title: "To do soon!",
      description: "Interesting things I want to check out.",
    },
    {
      id: "2",
      title: "Staying Zen list",
      description: "Ways of staying calm.",
    },
  ],
  columns: [
    {
      listId: "1",
      id: "1",
      title: "Books",
      icon: "book",
    },
    {
      listId: "1",
      id: "2",
      title: "Programming",
      icon: "code",
    },
    {
      listId: "1",
      id: "3",
      title: "Handcraft",
      icon: "camera",
    },
    {
      listId: "2",
      id: "4",
      title: "Songs",
      icon: "music",
    },
    {
      listId: "2",
      id: "5",
      title: "Psychological exercises",
      icon: "tasks",
    },
  ],

  cards: [
    {
      id: "1",
      columnId: "1",
      title: "Pomnik Cesarzowej Achai",
      isFavourite: true,
    },
    { id: "2", columnId: "1", title: "Szogun", isFavourite: false },
    { id: "3", columnId: "2", title: "JavaScript", isFavourite: true },
    { id: "4", columnId: "2", title: "Python", isFavourite: false },
    { id: "5", columnId: "3", title: "Skrzynia skarbów", isFavourite: false },
    {
      id: "6",
      columnId: "3",
      title: "Pudełko na kosmetyki do łazienki",
      isFavourite: false,
    },
    { id: "7", columnId: "4", title: "Gregorian", isFavourite: false },
    { id: "8", columnId: "4", title: "Nightwish", isFavourite: false },
  ],

  searchString: "",
};

export default initialState;
