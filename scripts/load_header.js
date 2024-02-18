$(document).ready(async function () {
  try {
    // Fetch the content of header.html
    const response = await fetch("header.html");
    if (!response.ok) {
      throw new Error("Failed to fetch header: " + response.status);
    }
    const data = await response.text();

    // Append the fetched content to the existing content inside #header-container
    $("body").prepend(data);
  } catch (error) {
    console.error("Error fetching header:", error);
  }
});
