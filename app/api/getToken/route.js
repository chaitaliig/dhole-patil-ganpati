import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST() {
    try {
        const encodedParams = new URLSearchParams();
        encodedParams.set('grant_type', 'client_credentials');
        // encodedParams.set('client_id', 'R8ni4LTK4fk0TdtA7wACIlNZxoBxdDJmiX8MXs7y');
        encodedParams.set('client_id', 'rRl89SUVBj88dUR7GgTGd3lM8PsubEwCsNSz7PZZ');
        // encodedParams.set('client_secret', '4PEotnNNqU41zA0R08NGaD2Fea42dZsY40ptzxLmOq1cAkEsdpfAWUWrsojnHXtO0JRT4xF5QMWLE4isoNfI7B8FtPi4V828MkBQBIbePCdS6KtXEyQDXZmppTF1Rpsv');
        encodedParams.set('client_secret', 'efWIWfuwEzD4n3qg9RuxLD4EQHuNESWtpp9XpC8yvjWqCEOBz2k8hcU1nKGd7Pmh1DC3exWmDHJbjJZTkmsoEOGUmJumt23BgWTduNPVysHoCJW1JAFBbjwgRB5DC5EW');

        const options = {
          method: 'POST',
          // url: 'https://test.instamojo.com/oauth2/token/',
          url: 'https://api.instamojo.com/oauth2/token/',
          headers: {
            accept: 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: encodedParams,
        };

        const response = await axios.request(options);
        // res.status(200).json(response.data.access_token );
        return NextResponse.json(response.data.access_token, { status: 200 })
        // console.log('TTTOOOKKKEEENNNNN:'+response.data);
      } catch (error) {
        // console.error(error);
        // res.status(500).json({ error: 'Internal Server Error' });
        return Response.json( { error: 'Internal Server Error' } )
      }
}