
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
    // const [email, setEmail] = useState('');
    // console.log("EMAIL"+req.body.email);
    // console.log(await request.json());
    const data=await request.json()
    // console.log("TOKEN"+data.token);
    // const { name, phone, amount, token,email,purpose, date } = await request.json();
    // if(NextRequest.body.email==''){
    //     setEmail('dpesganpatimandir@gmail.com')
    // }
    // else{
    //     setEmail(NextRequest.body.email)
    // }

    try {
        const encodedParams = new URLSearchParams();
        encodedParams.set('allow_repeated_payments', 'false');
        encodedParams.set('send_email', 'true');
        encodedParams.set('amount', data.amount);
        encodedParams.set('purpose', data.purpose);
        encodedParams.set('buyer_name', data.name);
        encodedParams.set('email', data.email);
        encodedParams.set('phone', data.phone);
        // encodedParams.set('redirect_url', `api/check-payment-status?token=${data.token}`);
        if (data.date!=null) {
            
            encodedParams.set('redirect_url', `https://www.dholepatilganpati.com/api/checkPayment?token=${data.token}&date=${data.date}`);
        } else {
            encodedParams.set('redirect_url', `https://www.dholepatilganpati.com/api/checkPayment?token=${data.token}`);
            
        }
        // encodedParams.set('redirect_url', `http://localhost:3000/eseva`);

        const options = {
            method: 'POST',
            // url: 'https://test.instamojo.com/v2/payment_requests/',
            url: 'https://api.instamojo.com/v2/payment_requests/',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${data.token}`,
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: encodedParams,
        };
        const response = await axios.request(options);
        // console.log("RREESSPONSE" + response.data.id);
        const longurl=response.data.longurl
        const id=response.data.id
        // const id = response.data.id;
        // await axios.post('/api/checkPayment', {  token: data.token, id: id });
        // res.status(200).json(response.data.longurl);
        // console.log("status" + response.data.status);
        return NextResponse.json({longurl:longurl},{id:id},{token:data.token}, { status: 200 })
        // return {name: name, email: email, phone: phone, amount: amount, token: token, date: date, id: id}
    } catch (error) {
        // console.error(error);
        // res.status(500).json({ error: 'Internal Server Error' });
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }

}