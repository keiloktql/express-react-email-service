This is my research on the integration of react-email and NodeJS (express). I used mailtrap and nodemailer to mock the sending of email.

## Learning Points

- React email does not work with NodeJS very well and would be better paired with NextJS
- Node does not recognize tsx/jsx by default, so it is not possible to import the react file into the nodejs code directly
- Found a workaround albeit less dynamic i.e. generate output through `email export` command and `readfilesync` the generated html file
- Let's hope there will be a good solution for this soon

## Getting Started

To run this application locally, please follow the steps below:

1. Clone the repository to your local machine:

```bash
  git clone https://github.com/keiloktql/express-react-email-service
```

2. Install the dependencies:

```bash
  npm install
```

3. Create a .env file in your project root and add your Mailtrap API Keys.

```bash
MAILTRAP_AUTH_USER=xxxxxxxxx
MAILTRAP_AUTH_PASS=xxxxxxxxx
```

4. To start the NodeJS development server:

```bash
  npm start
```

5. To start the React Email development server:

```bash
  npm run devEmail
```

## Resources

- [React Email](https://react.email/)
- [NodeJS](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Mailtrap](https://mailtrap.io/)
- [Nodemailer](https://nodemailer.com/about/)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

Cheers!
