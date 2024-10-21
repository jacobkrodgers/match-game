'use server';

const fs = require('fs');

export async function getCardNames()
{
    return fs.readdirSync("public/assets/cards"); 
}