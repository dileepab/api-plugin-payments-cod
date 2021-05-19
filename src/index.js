import pkg from "../package.json";
import i18n from "./i18n/index.js";
import schemas from "./schemas/index.js";
import codCapturePayment from "./util/codCapturePayment.js";
import codCreateAuthorizedPayment from "./util/codCreateAuthorizedPayment.js";
import startup from "./startup.js";
import codListRefunds from './util/codListRefunds.js';
import codCreateRefund from './util/codCreateRefund.js';

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "COD Payments",
    name: "payments-COD",
    version: pkg.version,
    i18n,
    graphQL: {
      schemas
    },
    functionsByType: {
      startup: [startup]
    },
    paymentMethods: [{
      name: "cod",
      canRefund: false,
      displayName: "COD (Cash On Delivery)",
      functions: {
        capturePayment: codCapturePayment,
        createAuthorizedPayment: codCreateAuthorizedPayment,
        createRefund: codCreateRefund,
        listRefunds: codListRefunds
      }
    }]
  });
}
