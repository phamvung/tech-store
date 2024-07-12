import { QueryClient } from "@tanstack/react-query";

// export async function fetchEvents({ signal, searchTerm, max }) {
//   let url = 'http://localhost:3000/events';

//   if (searchTerm && max) {
//     url += '?search=' + searchTerm + '&max=' + max;
//   } else if (searchTerm) {
//     url += '?search=' + searchTerm;
//   } else if (max) {
//     url += '?max=' + max
//   }

//   const response = await fetch(url, { signal: signal });

//   if (!response.ok) {
//     const error = new Error('An error occurred while fetching the events');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { events } = await response.json();

//   return events;
// }

// export async function createNewEvent(eventData) {
//   const response = await fetch(`http://localhost:3000/events`, {
//     method: 'POST',
//     body: JSON.stringify(eventData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while creating the event');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { event } = await response.json();

//   return event;
// }

// export async function fetchSelectableImages({ signal }) {
//   const response = await fetch(`http://localhost:3000/events/images`, { signal });

//   if (!response.ok) {
//     const error = new Error('An error occurred while fetching the images');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { images } = await response.json();

//   return images;
// }

// export async function fetchEvent({ id, signal }) {
//   const response = await fetch(`http://localhost:3000/events/${id}`, { signal });

//   if (!response.ok) {
//     const error = new Error('An error occurred while fetching the event');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { event } = await response.json();

//   return event;
// }

// export async function deleteEvent({ id }) {
//   const response = await fetch(`http://localhost:3000/events/${id}`, {
//     method: 'DELETE',
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while deleting the event');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   return response.json();
// }

// export async function updateEvent({ id, event }) {
//   const response = await fetch(`http://localhost:3000/events/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ event }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while updating the event');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   return response.json();
// }

export const queryClient = new QueryClient();

export async function getCoupons() {
  const response = await fetch("http://localhost:3000/coupons");

  if (!response.ok) {
    const error = new Error("Loading data failure.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function getProducts({ signal, search }) {
  let url = "http://localhost:3000/products";

  if (search) {
    url += "?search=" + search;
  }

  const response = await fetch(url, { signal: signal });

  if (!response.ok) {
    const error = new Error("Loading data failure.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function getProductsType({ queryKey }) {
  const [_key, { type }] = queryKey;
  const response = await fetch(`http://localhost:3000/products/${type}`);

  if (!response.ok) {
    const error = new Error("Loading products failure.");
    error.code = response.status;
    error.info = await response.json();

    throw error;
  }

  return response.json();
}

export async function getNewsList() {
  const response = await fetch(`http://localhost:3000/news`);

  if (!response.ok) {
    const error = new Error("Loading products failure.");
    error.code = response.status;
    error.info = await response.json();

    throw error;
  }

  return response.json();
}

export async function getProductDetail({ queryKey }) {
  const [_key, { id }] = queryKey;

  const response = await fetch(`http://localhost:3000/products/detail/${id}`);

  if (!response.ok) {
    const error = new Error("Loading products failure.");
    error.code = response.status;
    error.info = await response.json();

    throw error;
  }

  return response.json();
}
