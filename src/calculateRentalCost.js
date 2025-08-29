/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalAmount = 0;

  for (let i = 0; i < days; i++) {
    totalAmount += 40;
  }

  if (days >= 7) {
    totalAmount -= 50;
  } else if (days >= 3) {
    totalAmount -= 20;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
