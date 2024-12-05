import './App.css';
import Cookies from "js-cookie";
const collectBrowserData = () => {
  const browserDetails = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    onlineStatus: navigator.onLine,
  };
  console.log("Browser Details:", browserDetails);
  return browserDetails;
};

// Call the function
collectBrowserData();
const collectIPAddress = async () => {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    console.log("IP Address:", data.ip);
    return data.ip;
  } catch (error) {
    console.error("Error fetching IP Address:", error);
  }
};

// Call the function
collectIPAddress();

const collectData = async () => {
  const cookies = Cookies.get();
  const browserData = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    onlineStatus: navigator.onLine,
  };

  const ipResponse = await fetch("https://api64.ipify.org?format=json");
  const ipData = await ipResponse.json();

  console.log("Collected Data:", { cookies, browserData, ip: ipData });
};
collectData()
// const collectCookiesData = () => {
//   const allCookies = Cookies.get();
//   console.log("all Collected Cookies:", allCookies);
// };

// collectCookiesData();
const collectLocationData = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location Data:", {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error collecting location:", error);
      }
    );
  } else {
    console.log("Geolocation not supported");
  }
};

// Call the function
collectLocationData();


function App() {
  return (
    <div className="App">
      <h3>Welcome</h3>
    </div>
  );
}

export default App;
