<h1>Dynamic Meta Tags in React Apps and NodeJS Server</h1>
<p>
The tutorial "dynamic meta tags to a React app without SSR" has a support repository. a quick and efficient way to inject dynamic meta tags into a React application without using SSR.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
</p>

**The problem**

<p>
It is essential to implement this on the server side if you need to create dynamic meta tags for different URLs inside your project, such as /home, /about, /shopping/7, and /contact. This is due to the fact that while examining a webpage, web crawlers frequently do not run JavaScript code. You must set up your meta tags before the web browser receives the page in order to guarantee that search engines properly scan and index them. However, this operation may become more difficult if your application does not make use of server-side rendering (SSR).
</p>

## The solution

<p>A strong library called React Helmet aids in dynamically updating meta tags on the server. For React single page applications, management and SEO are simple.</p>

<p>The meta tags for a React app are all located in two places: the frontend using React Helmet tags and the backend using an express server.</p>


## Run the project

In the project directory, you can run:

```sh
npm run server
```
Builds the app for production and start the server on port 3000.

You can see how meta tags changes based on the requested URL, e.g. [http://localhost:3000/home](http://localhost:3000/home), [http://localhost:3000/about?](http://localhost:3000/about) 

## Author

👤 **Khushbu Patel**

- Linkedin:   [@Khushbu Patel](https://www.linkedin.com/in/khushideveloper)
- Instagram:  [@JyotDev](https://instagram.com/jyot_dev)

## Show your support

Please ⭐️ this repository if this project helped you!
