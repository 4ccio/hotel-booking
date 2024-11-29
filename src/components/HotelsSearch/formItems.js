export const formItems = [
  {
    id: "destination",
    label: "Место назначения",
    type: "text",
    placeholder: "Город или страна",
    gridClass: "col-span-6 xl:col-span-3",
  },
  {
    id: "checkin",
    label: "Заезд",
    type: "date",
    gridClass: "col-span-3 xl:col-span-2",
  },
  {
    id: "checkout",
    label: "Выезд",
    type: "date",
    gridClass: "col-span-3 xl:col-span-2",
  },
  {
    id: "adults",
    label: "Гости",
    type: "number",
    placeholder: "Взрослые",
    gridClass: "col-span-3 xl:col-span-2",
    min: "1",
    max: "10",
  },
  {
    id: "children",
    label: "Гости",
    type: "number",
    placeholder: "Дети",
    gridClass: "col-span-3 xl:col-span-2",
    min: "0",
    max: "9",
  },
];
