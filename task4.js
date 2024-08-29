import { getServerURL } from "./task1.js";

// Function to delete a user by their ID and display the remaining users
export async function delUser(id) {
  const url = getServerURL();

  // Perform the DELETE request to remove the user
  await fetch(`${url}/users/${id}`, {
    method: "DELETE",
  });

  // Fetch the updated list of users after deletion
  const response = await fetch(`${url}/users`);
  const users = await response.json();

  // Format the user list in the required format
  const formattedUsers = users.map((user) => ({
    id: parseInt(user.id), // Ensure ID is a number
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  }));

  // Convert the list to a string with the required formatting
  const output = JSON.stringify(formattedUsers, null, 2)
    .replace(/"([^"]+)":/g, "$1:") // Remove quotes from keys
    .replace(/"/g, "'"); // Replace double quotes with single quotes

  // Display the formatted list
  console.log(output);
}
