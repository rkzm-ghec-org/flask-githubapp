const express=require('express');
const app=express();


const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: process.env.GITHUBAPP_URL,
  target: 'http://github-app:5000',
  logger: console
})

const events = smee.start()
