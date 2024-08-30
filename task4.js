import { getServerURL } from "./task1.js";

// Function to delete a user by their ID and display the remaining users
export async function delUser(id) {
  const url = getServerURL(); // Retrieve the server URL from an external module

  // Perform the DELETE request to remove the user by ID
  await fetch(`${url}/users/${id}`, {
    method: "DELETE", // Specify the HTTP method as DELETE
  });

  // Fetch the updated list of users after deletion to reflect changes
  const response = await fetch(`${url}/users`);
  const users = await response.json(); // Convert the response to a JSON object

  // Format the user list to match the expected output format
  const formattedUsers = users.map((user) => ({
    id: parseInt(user.id), // Ensure the ID is stored as a number
    first_name: user.first_name, // Include the first name
    last_name: user.last_name, // Include the last name
    email: user.email, // Include the email address
  }));

  // Convert the formatted user list to a string with specific formatting:
  // - Pretty-print with two spaces for indentation
  // - Remove quotes around object keys
  // - Replace double quotes with single quotes for consistency
  const output = JSON.stringify(formattedUsers, null, 2)
    .replace(/"([^"]+)":/g, "$1:") // Remove quotes from keys
    .replace(/"/g, "'"); // Replace double quotes with single quotes

  // Display the formatted list of remaining users in the console
  console.log(output);
}
