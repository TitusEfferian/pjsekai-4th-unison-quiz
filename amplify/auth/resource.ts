import { defineAuth, secret } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  name: 'pjsekai-4th-unison',
  loginWith: {
    email: true,
    externalProviders: {
      oidc: [
        {
          issuerUrl: "https://testing-amplify.jp.auth0.com",
          clientId: secret("client_id"),
          clientSecret: secret("client_secret"),
          name: "auth0-unison",
          scopes: ["openid", "profile", "email", "name"],
        },
      ],
      logoutUrls: ["http://localhost:3000"],
      callbackUrls: ["http://localhost:3000"],
    },
  },
});
