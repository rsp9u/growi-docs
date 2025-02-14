---
pageClass: admin-cookbook-env-vars
---

# Environment Variables

<!-- textlint-disable weseek/use-si-units -->

| Enviroment Variable | Description | Default Value |
| ------------------- | ----------  | ------------- |
| `MONGO_URI` | URI to connect to MongoDB. | `mongodb://localhost/growi` |
| `NO_CDN` | If `true`, system doesn't use CDN, all resources will be downloaded from CDN when building a client, and served by the GROWI Express server. | `false` |
| `ELASTICSEARCH_VERSION` | Elasticsearch major version that system connects to. (`6` or `7` can be specified) | `7` |
| `ELASTICSEARCH_URI` | URI to connect to Elasticsearch. | |
| `ELASTICSEARCH_REQUEST_TIMEOUT` | Max request timeout in milliseconds for each request.(msec) | 8000 |
| `ELASTICSEARCH_REJECT_UNAUTHORIZED` | Turn off certificate verification when connecting with HTTPS schema. | `false` |
| `REDIS_URI` | URI to connect to Redis (use it as a session store instead of MongoDB). | |
| `PASSWORD_SEED` | A password seed used by the password hash generator. | |
| `SECRET_TOKEN` | A secret key for verifying the integrity of signed cookies. | |
| `SESSION_NAME` | The name of the session ID cookie to set in the response by Express. | `connect.sid` |
| `SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | If `true`, the system uses only the value of the environment variable as the value of the SAML option that can be set via the environment variable. | `false` |
| `FORCE_WIKI_MODE` | Forces wiki mode. | `undefined` |
| | : `undefined` Publicity will be configured by the admin security page settings | |
| | : `public` Forces all pages to become public | |
| | : `private` Forces all pages to become private | |
| `FORMAT_NODE_LOG` | If `false`, Output server log as JSON. (Enabled only when `NODE_ENV=production`) | `true` |
| `MATHJAX` | (TBD) | |
| `USER_UPPER_LIMIT` | (TBD) | |
| `DEFAULT_EMAIL_PUBLISHED` | Default setting for publishing new user email addresses. | `true` |
| `S2CMSG_PUBSUB_CONNECTIONS_LIMIT` | Maximum number of connections for all clients that receive push messages. | 5000 |
| `S2CMSG_PUBSUB_CONNECTIONS_LIMIT_FOR_GUEST` | Maximum number of connections for guest clients that receive push messages. | 2000 |
| `S2CMSG_PUBSUB_CONNECTIONS_LIMIT_FOR_ADMIN` | Maximum number of connections for admin users in admin pages.<br>(This is isolated from `S2CMSG_PUBSUB_CONNECTIONS_LIMIT`)  | 100 |
| **Option for file uploading** | | |
| `FILE_UPLOAD` | Attached files storage. | `aws` |
| | : `aws` Amazon Web Service S3 (needs AWS settings on Admin page) | |
| | : `gcs` Google Cloud Storage (needs settings with environment variables) | |
| | : `mongodb` MongoDB GridFS (Setting-less) | |
| | : `local` Server's Local file system (Setting-less) | |
| | : `none` Disable file uploading | |
| `FILE_UPLOAD_DISABLED` | If `true`, file uploading will be disabled. However, the files can be still viewed. | `false` |
| `MAX_FILE_SIZE` | The maximum file size limit for uploads (bytes). | `Infinity` |
| `FILE_UPLOAD_TOTAL_LIMIT` | Total capacity limit for uploads (bytes). | `Infinity` |
| `S3_LIFETIME_SEC_FOR_TEMPORARY_URL` | Time to keep the cache of signed URLs (number of seconds) | 120 |
| `GCS_API_KEY_JSON_PATH` | Path of the JSON file that contains [service account key to authenticate to GCP API](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) | |
| `GCS_BUCKET` | Name of the GCS bucket | |
| `GCS_UPLOAD_NAMESPACE` | Directory name to create in the bucket | |
| `GCS_LIFETIME_SEC_FOR_TEMPORARY_URL` | time to keep the cache of signed URLs (number of seconds)| 120|
| **Option to integrate with external systems** | | |
| `NCHAN_URI` | URI to connect to Nginx [Nchan](https://nchan.io/) server. | |
| `HACKMD_URI` | URI to connect to [HackMD(CodiMD)](https://hackmd.io/) server. | |
| | This server must load the GROWI agent. [Here's how to prepare it](/en/admin-guide/admin-cookbook/integrate-with-hackmd.html). | |
| `HACKMD_URI_FOR_SERVER` | URI to connect to [HackMD(CodiMD)](https://hackmd.io/) server from GROWI Express server. If not set, `HACKMD_URI` will be used. | |
| `PLANTUML_URI` | URI to connect to [PlantUML](https://plantuml.com/en/) server. | |
| `BLOCKDIAG_URI` | URI to connect to [blockdiag](http://blockdiag.com/en/) server. | |
| `DRAWIO_URI` | URI to connect to [diagrams.net(draw.io)](https://www.diagrams.net/) server. | |
| `S2SMSG_PUBSUB_SERVER_TYPE` |  | |
| | : `nchan` Nginx [Nchan](https://nchan.io/) | |
| | : `redis` (Not implemented yet) | |
| `S2SMSG_PUBSUB_NCHAN_PUBLISH_PATH` | Publisher endpoint path for Nchan server | `/pubsub` |
| `S2SMSG_PUBSUB_NCHAN_SUBSCRIBE_PATH` | Subscriber endpoint path for Nchan server | `/pubsub` |
| `S2SMSG_PUBSUB_NCHAN_CHANNEL_ID` | The channel ID to connect to Nchan server | |
| `PROMSTER_ENABLED` | Enable [Promster](https://github.com/tdeekens/promster) server | `false` |
| `PROMSTER_PORT` | The port to launch Promster server | 7788 |
| `SLACKBOT_TYPE` | Type of Slack Bot to use when linking with Slack |  |
| `SLACKBOT_WITHOUT_PROXY_SIGNING_SECRET` | Signing Secret string used for Custom Bot without proxy environment |  |
| `SLACKBOT_WITHOUT_PROXY_BOT_TOKEN` | Bot Token string used for Custom Bot without proxy environment |  |
| `SLACKBOT_WITH_PROXY_PROXY_URI` | URI of slackbot-proxy server used for Custom Bot with proxy environment |  |
| `SLACKBOT_WITH_PROXY_SALT_FOR_GTOP` | Salt (for GROWI to Proxy) when generating tokens for the Official Bot or Custom Bot with proxy environment | `gtop` |
| `SLACKBOT_WITH_PROXY_SALT_FOR_PTOG` | Salt (for GROWI to Proxy) when generating tokens for the Official Bot or Custom Bot with proxy environment | `ptog` |
| **Option (Overwritable in admin page)** | | |
| `APP_SITE_URL` | Site URL. e.g. `https://example.com`, `https://example.com:8080` | |
| `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE` | Prioritize env var over value in DB for File Upload Type | `false` |
| `LOCAL_STRATEGY_ENABLED` | Enable or disable ID/Pass login | |
| `LOCAL_STRATEGY_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | Prioritize env vars over values in DB for some ID/Pass login options | |
| `SAML_ENABLED` | Enable or disable SAML | |
| `SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | Prioritize env vars over values in DB for some SAML options | |
| `SAML_ENTRY_POINT` | IdP entry point | |
| `SAML_ISSUER` | Issuer string to supply to IdP | |
| `SAML_ATTR_MAPPING_ID` | Attribute map for ID | |
| `SAML_ATTR_MAPPING_USERNAME` | Attribute map for username | |
| `SAML_ATTR_MAPPING_MAIL` | Attribute map for email | |
| `SAML_ATTR_MAPPING_FIRST_NAME` | Attribute map for first name | |
| `SAML_ATTR_MAPPING_LAST_NAME` | Attribute map for last name | |
| `SAML_CERT` | PEM-encoded X.509 signing certificate string to validate the response from IdP | |
| `OAUTH_GOOGLE_CLIENT_ID` | Google API client ID for OAuth login. | |
| `OAUTH_GOOGLE_CLIENT_SECRET` | Google API client secret for OAuth login. | |
| `OAUTH_GITHUB_CLIENT_ID` | GitHub API client ID for OAuth login. | |
| `OAUTH_GITHUB_CLIENT_SECRET` | GitHub API client secret for OAuth login. | |
| `OAUTH_TWITTER_CONSUMER_KEY` | Twitter consumer key(API key) for OAuth login. | |
| `OAUTH_TWITTER_CONSUMER_SECRET` | Twitter consumer secret(API secret) for OAuth login. | |

<!-- textlint-enable weseek/sentence-length -->
