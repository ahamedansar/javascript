const now = new Date();

// Convert to IST using toLocaleString
const options = {
  timeZone: "Asia/Kolkata", // IST timezone
  hour12: false,            // 24-hour format (set true for AM/PM)
};

const istTime = now.toLocaleString("en-IN", options);
console.log("Current IST Time:", istTime);
