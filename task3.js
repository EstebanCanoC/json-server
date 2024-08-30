import { getServerURL } from "./task1.js";

// Function to add a new user
export async function addUser(first_name, last_name, email) {
  // Retrieve the base URL for the API from an external module
  const url = getServerURL();

  // Step 1: Fetch the existing users to determine the last used ID
  const response = await fetch(url + "/users"); // Send a GET request to the "/users" endpoint
  const users = await response.json(); // Parse the JSON response to get the list of users

  // Step 2: Determine the maximum ID from the existing users
  const maxId = users.reduce((max, user) => Math.max(max, user.id), 0);
  // Iterate over the users array, finding the highest user ID using the reduce function

  // Step 3: Increment the maximum ID by 1 to assign a new unique ID for the new user
  const newUserId = maxId + 1;

  // Step 4: Create the new user object with the dynamically assigned ID
  const newUser = {
    id: newUserId.toString(), // Convert the ID to a string (assuming the API expects string IDs)
    first_name, // Assign the first name provided as a parameter
    last_name, // Assign the last name provided as a parameter
    email, // Assign the email provided as a parameter
  };

  // Step 5: Make a POST request to add the new user to the database
  const postResponse = await fetch(url + "/users", {
    method: "POST", // Specify the HTTP method as POST to create a new resource
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON since we are sending JSON data
    },
    body: JSON.stringify(newUser), // Convert the newUser object to a JSON string for the request body
  });

  // Step 6: Convert the response to the added user's object
  const addedUser = await postResponse.json();
  // Parse the JSON response to get the added user's data, confirming the user was successfully created

  // Step 7: Format and print the user object in a specific format
  // Line 46: Ensure the ID is printed as a number
  // Line 47: Display the first name with single quotes
  // Line 48: Display the last name with single quotes
  // Line 49: Display the email with single quotes
  const output = `{
  id: ${Number(addedUser.id)},
  first_name: '${addedUser.first_name}',
  last_name: '${addedUser.last_name}',
  email: '${addedUser.email}'
}`;

  console.log(output); // Output the formatted user information to the console
}
