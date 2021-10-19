import { HasteClient } from "@hastearcade/web";

let client;

export async function run() {
  try {
    client = await HasteClient.build("wOSGChzXXs2i7SvWDijCeOEMABnZ5iCh");
    const token = await client.getTokenDetails();

    console.log(token);
    if (token.isAuthenticated) {
      document.getElementById("panelAuthTrue").classList.remove("hidePanel");
      document.getElementById("logout").classList.remove("hidePanel");

      document.getElementById("panelAuthTrue").classList.add("showPanel");
      document.getElementById("logout").classList.add("showPanel");
    } else {
      document.getElementById("panelAuthFalse").classList.remove("hidePanel");
      document.getElementById("login").classList.remove("hidePanel");

      document.getElementById("panelAuthFalse").classList.add("showPanel");
      document.getElementById("login").classList.add("showPanel");
    }
  } catch (err) {
    console.error(err);
  }
}

export async function login() {
  client.login();
}

export async function logout() {
  client.logout();
}
