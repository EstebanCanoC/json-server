import { getServerURL } from "./task1.js";

// Function to fetch and list users from the API endpoint
export async function listUsers() {
  // Retrieve the server URL by calling the imported getServerURL function
  const url = getServerURL();

  // Step 1: Make a GET request to fetch the list of users from the API
  const response = await fetch(`${url}/users`);
  // The response is expected to be a JSON array of user objects

  // Step 2: Parse the JSON response to extract user data
  const users = await response.json();

  // Step 3: Format each user object into a specific string representation
  const formattedUsers = users.map(
    (user) => `{
  id: ${user.id},
  first_name: '${user.first_name}',
  last_name: '${user.last_name}',
  email: '${user.email}'
}`
  );
  // The map function transforms each user object into a formatted string with properties
  // The resulting array will contain user strings in the specified format

  // Step 4: Convert the array of formatted user strings into a single string
  // Each formatted user is separated by a comma and newline for readability
  const output = `[\n${formattedUsers.join(",\n")}\n]`;

  // Step 5: Log the final formatted string to the console
  return console.log(output);
}
