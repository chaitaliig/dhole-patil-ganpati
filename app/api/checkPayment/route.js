import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
const email1 = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function GET(request) {
  // Extract token, payment_id, and payment_status from the query parameters
  const searchParams = new URLSearchParams(request.nextUrl.search);
  const token = searchParams.get('token');
  const payment_id = searchParams.get('payment_id');
  const date = searchParams.get('date');
  // console.log("DATE " + date);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const response = await fetch(`https://api.instamojo.com/v2/payments/${payment_id}/`, options);
    const responseData = await response.json();
    // console.log(responseData);
    const title = responseData.title;
    const name = responseData.name;
    const email = responseData.email;

    if (responseData.status == true) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: 'smtpro.zoho.in',
        // port: 465,
        secure: true,
        auth: {
          user: email1,
          pass: pass,
        }
      })

      if (title == 'Daily Abhishek') {
        const mailOption = {
          from: email1,
          to: email,
          subject: `${title} :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .main {
                  background-image: url('https://www.dholepatilganpati.com/ganpati-images/ganpati-image10.jpg');
                  height: 100vh;
                  background-repeat: no-repeat;
                  background-position: center;
              }
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div class="main">
          </div>
          <div class="container ">
              <h1 class="my-3 title">${title}</h1>
              <h3>Dear ${name}, Thanks for using E-Seva Facility of Dhole Patil Ganpati</h3>
              <h4>Pooja Details </h4>
              <p class="fs-4"><span class="fw-bolder">Date:</span> ${date}</p>
              <p class="fs-4"><span class="fw-bolder">Time:</span> Sharp 7 AM</p>
              <h4>Note : Pooja Samagri you need to carry on the given date and time</h4>
              <ol class="list-group-numbered">
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Durwa</li>
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Prasad</li>
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Panchamrut</li>
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Flowers</li>
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Betel Leaves</li>
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Any 5 Fruits</li>
              </ol>
              <h4>Note (Mandatory) : Mens have to wear Traditional Clothes (Dhoti) and Womens have to wear Saree</h4>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption)

        const mailOption1 = {
          from: email1,
          to: email1,
          subject: `${title} Booking :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div>
              <h1 class="my-3 title">${title} Booking</h1>
              <p ><strong>Name:</strong> ${name}</p>
              <p ><strong>Date:</strong> ${date}</p>
              <p ><strong>Time:</strong> Sharp 7 AM</p>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption1)
      }

      else if (title == 'Sankashti Chaturthi Abhishek') {
        const mailOption = {
          from: email1,
          to: email,
          subject: `${title} :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .main {
                  background-image: url('https://www.dholepatilganpati.com/ganpati-images/ganpati-image10.jpg');
                  height: 100vh;
                  background-repeat: no-repeat;
                  background-position: center;
              }
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div class="main">
          </div>
          <div class="container ">
              <h1 class="my-3 title">${title}</h1>
              <h3 class="">Dear ${name}, Thanks for using E-Seva Facility of Dhole Patil Ganpati</h3>
              <h4>Pooja Details </h4>
              <p class="fs-4"><span class="fw-bolder">Date:</span> Upcoming Sankashti Chaturthi</p>
              <p class="fs-4"><span class="fw-bolder">Time:</span> Sharp 7 AM</p>
              <h4>Note : Pooja Samagri you need to carry on the given date and time</h4>
              <ol class="list-group-numbered">
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Durwa</li>
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Prasad</li>
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Panchamrut</li>
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Flowers</li>
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Betel Leaves</li>
                  <li class="list-group-item fs-4 d-flex jusitfy-left">Any 5 Fruits</li>
              </ol>
              <h4>Note (Mandatory) : Mens have to wear Traditional Clothes(Dhoti) and Womens have to wear Saree</h4>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption)

        const mailOption1 = {
          from: email1,
          to: email1,
          subject: `${title} Booking :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div>
              <h1 class="my-3 title">${title} Booking</h1>
              <p ><strong>Name:</strong> ${name}</p>
              <p ><strong>Date:</strong> ${date}</p>
              <p ><strong>Time:</strong> Sharp 7 AM</p>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption1)
      }

      else if (title == 'Poshakh: Sankashti And Vinayaki Chaturthi') {
        const mailOption = {
          from: email1,
          to: email,
          subject: `${title} :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .main {
                  background-image: url('https://www.dholepatilganpati.com/ganpati-images/ganpati-image10.jpg');
                  height: 100vh;
                  background-repeat: no-repeat;
                  background-position: center;
              }
              .title{
                text-align: center;
            }
          </style>
      </head>
      <body>
          <div class="main">
          </div>
          <div class="container ">
              <h1 class="my-3 title">${title}</h1>
              <h3 class="">Dear ${name}, Thanks for using E-Seva Facility of Dhole Patil Ganpati</h3>
              <p class="fs-4"><span class="fw-bolder">Date:</span>Upcoming Sankashti Chaturthi</p>
              <h4>The daily attire of the deity(Poshakh) will be given on your behalf</h4>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption)

        const mailOption1 = {
          from: email1,
          to: email1,
          subject: `${title} Booking :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div>
              <h1 class="my-3 title">${title} Booking</h1>
              <p ><strong>Name:</strong> ${name}</p>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption1)
      }

      else if (title == 'Chaturthi Mahaprasad') {
        const mailOption = {
          from: email1,
          to: email,
          subject: `${title} :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .main {
                  background-image: url('https://www.dholepatilganpati.com/ganpati-images/ganpati-image10.jpg');
                  height: 100vh;
                  background-repeat: no-repeat;
                  background-position: center;
              }
              .title{
                text-align: center;
            }
          </style>
      </head>
      <body>
          <div class="main">
          </div>
          <div class="container ">
              <h1 class="my-3 title">${title}</h1>
              <h3 class="">Dear ${name}, Thanks for using E-Seva Facility of Dhole Patil Ganpati</h3>
              <p class="fs-4"><span class="fw-bolder">Date:</span> Upcoming Sankashti Chaturthi</p>
              <h4>Mahaprasad will be given on your behalf on Upcoming Sankashti Chaturthi</h4>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption)

        const mailOption1 = {
          from: email1,
          to: email1,
          subject: `${title} Booking :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div>
              <h1 class="my-3 title">${title} Booking</h1>
              <p ><strong>Name:</strong> ${name}</p>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption1)
      }

      else if (title == 'Flower Decoration Service') {
        const mailOption = {
          from: email1,
          to: email,
          subject: `${title} :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .main {
                  background-image: url('https://www.dholepatilganpati.com/ganpati-images/ganpati-image10.jpg');
                  height: 100vh;
                  background-repeat: no-repeat;
                  background-position: center;
              }
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div class="main">
          </div>
          <div class="container ">
              <h1 class="my-3 title">${title}</h1>
              <h3 class="">Dear ${name}, Thanks for using E-Seva Facility of Dhole Patil Ganpati</h3>
              <p class="fs-4"><span class="fw-bolder">Date:</span> Upcoming Sankashti Chaturthi</p>
              <h4>Floral Decoration at the temple will be done under your name and on your behalf</h4>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption)

        const mailOption1 = {
          from: email1,
          to: email1,
          subject: `${title} Booking :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div>
              <h1 class="my-3 title">${title} Booking</h1>
              <p ><strong>Name:</strong> ${name}</p>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption1)
      }

      else if (title == 'Fruit Offering Service') {
        const mailOption = {
          from: email1,
          to: email,
          subject: `${title} :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .main {
                  background-image: url('https://www.dholepatilganpati.com/ganpati-images/ganpati-image10.jpg');
                  height: 100vh;
                  background-repeat: no-repeat;
                  background-position: center;
              }
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div class="main">
          </div>
          <div class="container ">
              <h1 class="my-3 title">${title}</h1>
              <h3 class="">Dear ${name}, Thanks for using E-Seva Facility of Dhole Patil Ganpati</h3>
              <p class="fs-4"><span class="fw-bolder">Date:</span> Upcoming Sankashti Chaturthi</p>
              <h4>Fruits will be offered to the deity on your name and on your behalf</h4>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption)

        const mailOption1 = {
          from: email1,
          to: email1,
          subject: `${title} Booking :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div>
              <h1 class="my-3 title">${title} Booking</h1>
              <p ><strong>Name:</strong> ${name}</p>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption1)
      }

      else if (title == 'Mandir Dhwaj (Flag) Service') {
        const mailOption = {
          from: email1,
          to: email,
          subject: `${title} :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .main {
                  background-image: url('https://www.dholepatilganpati.com/ganpati-images/ganpati-image10.jpg');
                  height: 100vh;
                  background-repeat: no-repeat;
                  background-position: center;
              }
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div class="main">
          </div>
          <div class="container ">
              <h1 class="my-3 title">${title}</h1>
              <h3 class="">Dear ${name}, Thanks for using E-Seva Facility of Dhole Patil Ganpati</h3>
              <h4>The Flag on top of the temple will be raised on your name and behalf</h4>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption)

        const mailOption1 = {
          from: email1,
          to: email1,
          subject: `${title} Booking :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div>
              <h1 class="my-3 title">${title} Booking</h1>
              <p ><strong>Name:</strong> ${name}</p>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption1)
      }

      else if(title == 'E-Donation'){
        const mailOption = {
          from: email1,
          to: email,
          subject: `${title} :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .main {
                  background-image: url('https://www.dholepatilganpati.com/ganpati-images/ganpati-image10.jpg');
                  height: 100vh;
                  background-repeat: no-repeat;
                  background-position: center;
              }
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div class="main">
          </div>
          <div class="container ">
              <h1 class="my-3 title">${title}</h1>
              <h3 class="">Dear ${name}, Thanks for using E-Donation Facility of Dhole Patil Ganpati</h3>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption)

        const mailOption1 = {
          from: email1,
          to: email1,
          subject: `${title} :- Dhole Patil Ganpati`,
          html: `
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
              .title{
                text-align: center;
            }
          </style>
      </head>
      
      <body>
          <div>
              <h1 class="my-3 title">${title}</h1>
              <p ><strong>Name:</strong> ${name}</p>
          </div>
      </body>
      `
        }
        await transporter.sendMail(mailOption1)
      }


      return NextResponse.redirect(new URL('/eseva', request.url));
    } else {
      // Handle the case where the payment status is not true
      return NextResponse.redirect(new URL('/eseva', request.url));
    }
  } catch (err) {
    // console.error(err);
    return NextResponse.error();
  }
}
