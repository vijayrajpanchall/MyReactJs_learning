export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/vijayrajpanchall");
  return response.json();
};
