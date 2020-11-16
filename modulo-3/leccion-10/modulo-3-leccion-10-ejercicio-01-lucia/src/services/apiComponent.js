const ENDPOINT = "https://randomuser.me/api/?results=50";

const apiComponent = () => fetch(ENDPOINT).then((response) => response.json());

export default apiComponent;
