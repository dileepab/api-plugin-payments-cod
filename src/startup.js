/**
 * @summary Called on startup
 * @param {Object} context Startup context
 * @param {Object} context.collections Map of MongoDB collections
 * @returns {undefined}
 */
export default function CODPaymentsStartup(context) {
  context.collections.CODPaymentRefunds = context.app.db.collection("CODPaymentRefunds");
}
