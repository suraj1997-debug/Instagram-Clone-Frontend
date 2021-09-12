import env from 'dotenv';

env.config();

const baseUrl = process.env.REACT_APP_URL


export const urlgenerate = (filename) =>{

    return `${process.env.REACT_APP_IMAGE_URL}/${filename}`
}

export const url = `${baseUrl}/api`


