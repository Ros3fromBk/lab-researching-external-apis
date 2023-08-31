# Researching External APIs Lab

## Getting Started

1. Fork and clone this repository.

1. Answer the questions below by editing this readme. Leave the questions and prompts, and answer in between them. Take the time to read back the work, and edit what you've written so that your answers are clear and anyone reading it can easily understand what you've written.

1. When it is applicable, please add screenshots, photos, and links.

## Instructions

You will be planning a new application to develop that uses a third-party API. The app should be a simple idea, as the goal is to research and determine if an API is appropriate for your API.

Choose one of the following categories and APIs:

- Movies: [OMDB API](https://www.omdbapi.com)
- Sports: [Sports Score](https://rapidapi.com/tipsters/api/sportscore1)
- City Info: [311 Call Aggregator](https://data.cityofnewyork.us/browse?Dataset-Information_Agency=311)
- Art : [Metropolitan Museum of Art ](https://metmuseum.github.io)

Next, describe your application idea. Your application idea should be simple and make use of the data received by the API. It can make use of other data if necessary.

> Your application idea.
Find 4 random songs based on (mood) suggestion.
Write 3 - 5 user stories for your application. Include each below.

> 1. As a user ...

> 1. As a user ...

> 1. As a user ...

What data is needed to complete your application? Describe the data below and provide a link in the documentation showing where to get this data.

> The data I need for my app is ... http://www.omdbapi.com/     
 http://www.omdbapi.com/?apikey=[yourkey]&


Determine the number of free requests you can make to the API. Include a link in the documentation showing where you found this limit, if possible.  

> The number of free requests I can make is... 
http://www.omdbapi.com/ 1,000 Daily

Would the number of free requests you can make to the API be sufficient for you to develop a basic version of the application within a week? Why or why not?

> Your explanation here. Yes

Does working with the API require the use of a credit card? If possible, include a link in the documentation showing where you found this requirement.

> A credit card is... N/A

Write one GET request to your chosen API with Postman. This may involve requesting an API key or other steps. If you requested an API Key, **don't include it.** Instead, replace that part of the URL WITH `<MY API KEY>.`

> Requested URL http://www.omdbapi.com/?apikey=<MY API KEY>

Include a snippet of the data you received from the above request.

```
<!DOCTYPE html>
<html>

<head>
	<title>A potentially dangerous Request.QueryString value was detected from the client
		(apikey=&quot;&lt;yourkey&gt;&quot;).</title>
	<meta name="viewport" content="width=device-width" />
	<style>
		body {
			font-family: "Verdana";
			font-weight: normal;
			font-size: .7em;
			color: black;
		}

		p {
			font-family: "Verdana";
			font-weight: normal;
			color: black;
			margin-top: -5px
		}

```

> **Note**: If you could not get an API key for any reason (like it required a credit card or took too long for an API key to be delivered), just leave a note here and do your best to answer the questions anyway.

What file do you need to store an API key safely?

> The filename is typically ...     
.env

Why do you want to place that file within the `.gitignore` file?

> Your answer here...     
  so it's private
