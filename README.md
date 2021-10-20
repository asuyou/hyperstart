# HyperStart

A simple start page for the browser

Very heavily inspired by [vimstart](https://github.com/okitavera/vimstart)

Essentially it does the same thing but is a little more customizable

## Installation

1. Clone this repo
2. `$ yarn`
3. `$ yarn build`

## Hosting

You can host on your local machine or on a cdn like cloudflare pages or github pages

## Customizing

All config is in [`config.json`](config.json)

`background_images` : A random image is chosen as the background, leave empty to use color defined above

`cse` : Adds a custom search engine to the site. E.g, `:st` takes you to steam, `:st game` will send you to steam search page with `game` as the query

The others should make sense, but if they don't, feel free to drop a pr or send me a message
