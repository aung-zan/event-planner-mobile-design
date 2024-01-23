import { exhibitions } from "../constants/data";

export const getEventsByType = (events) => {
  let result = {
    ongoing: null,
    pending: [],
    complete: [],
  };

  events.map((data) => {
    switch (data.type) {
      case "ongoing":
        result.ongoing = data;
        break;
      case "pending":
        result.pending.push(data);
        break;
      case "complete":
        result.complete.push(data);
        break;
    }
  });

  return result;
}

export const getEventById = (id) => {
  return exhibitions.find(item => item.id === id);
}
