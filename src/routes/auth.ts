// https://github.com/discordjs/guide/blob/main/code-samples/oauth/simple-oauth-webserver/index.js
import express from 'express';

import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res, next) => {
    const { code } = req.query as any;

    console.log(code);

    if (code) {
        try {
            const oauthResult = await axios.post(
                'https://discord.com/api/oauth2/token',
                new URLSearchParams({
                    client_id: process.env.DISCORD_APP_CLIENT_ID!,
                    client_secret: process.env.DISCORD_APP_CLIENT_SECRET!,
                    code,
                    grant_type: 'authorization_code',
                    redirect_uri: 'http://localhost:5000/auth',
                    scope: 'identify',
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            const oauthData = oauthResult.data;

            console.log(oauthData);

            const userResult = await axios.get('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${oauthData.token_type} ${oauthData.access_token}`,
                },
            });

            console.log(await userResult.data);
        } catch (error) {
            // NOTE: An unauthorized token will not throw an error;
            // it will return a 401 Unauthorized response in the try block above
            console.error(error);
        }
    }

    return res.send('auth');
});

export default router;
