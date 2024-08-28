import { getServerURL } from "./task1.js";
import { listUsers } from "./task2.js";

// Function to delete a user by their ID without prior verification
export async function delUser(id) {
  // Get the server URL
  const url = getServerURL();
  // Ensure the ID is a number
  const userId = Number(id);

  // Perform the DELETE request to remove the user
  await fetch(`${url}/users/${userId}`, {
    method: "DELETE",
  });

  // Fetch the updated list of users after the deletion
  const response = await fetch(`${url}/users`);
  const users = await response.json();

  // Format the updated user list as a JSON string with indentation
  const output = JSON.stringify(users, null, 4);

  // Pass the formatted user list to the listUsers function for display
  listUsers(output);
}
