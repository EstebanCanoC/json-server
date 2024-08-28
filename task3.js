import { getServerURL } from "./task1.js";

// Function to add a new user
export async function addUser(first_name, last_name, email) {
  // Get the server URL
  const url = getServerURL();

  // Make a GET request to retrieve the list of users
  const response = await fetch(url + "/users");

  // Convert the response into an array of users
  const users = await response.json();

  // Find the current highest ID in the list of users
  // Convert IDs to numbers before comparing
  const maxId = users.reduce((max, user) => Math.max(max, Number(user.id)), 0);

  // Calculate the new ID (the current highest ID + 1)
  const newId = maxId + 1;

  // Create an object with the new user, including the new ID
  const newUser = {
    id: newId, // Keep ID as a number
    first_name,
    last_name,
    email,
  };

  // Make a POST request to add the new user
  const postResponse = await fetch(url + "/users", {
    method: "POST", // POST method to create a new resource
    headers: {
      "Content-Type": "application/json", // Indicate that the content is JSON
    },
    body: JSON.stringify(newUser), // Convert the new user to JSON format for sending
  });

  // Convert the response to the added user's object
  const addedUser = await postResponse.json();
  const endUser = JSON.parse(JSON.stringify(addedUser, null, 2)); // Format the user object for display

  return console.log(endUser);
}
