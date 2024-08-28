import { getServerURL } from "./task1.js";

// Function to format a user object without quotes
function formatUser(user) {
  return `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`;
}

export async function listUsers() {
  // Get the server URL
  const serverURL = getServerURL();

  // Make an HTTP GET request to fetch the list of users
  const response = await fetch(`${serverURL}/users`);

  // Convert the response into an array of users
  const users = await response.json();

  // Format each user as a string without quotes
  const formattedUsers = users.map(formatUser);

  // Combine the formatted user strings into a single string with line breaks
  const output = `[\n${formattedUsers.join(",\n")}\n]`;

  // Print the formatted result to the console
  console.log(output);
}
