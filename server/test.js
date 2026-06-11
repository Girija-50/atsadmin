try {
  const response = await fetch(
    "https://generativelanguage.googleapis.com"
  );

  console.log("STATUS:", response.status);
} catch (error) {
  console.log(error);
}