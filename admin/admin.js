const itemCount = document.getElementById("itemCount");
const reservationCount = document.getElementById("reservationCount");
const topSeller = document.getElementById("topSeller");
const messageCount = document.getElementById("messageCount");
const output = document.querySelector("[data-admin-output]");

const dashboard = {
  itemCount: 18,
  reservationCount: 42,
  topSeller: "Signature Flat White",
  messageCount: 6,
  occupancyRate: 87,
};

if (itemCount && reservationCount && topSeller && messageCount && output) {
  itemCount.textContent = String(dashboard.itemCount);
  reservationCount.textContent = String(dashboard.reservationCount);
  topSeller.textContent = dashboard.topSeller;
  messageCount.textContent = String(dashboard.messageCount);
  output.textContent = `Doluluk orani: %${dashboard.occupancyRate} | Aksam servisinde kapasite artisi onerilir.`;
}