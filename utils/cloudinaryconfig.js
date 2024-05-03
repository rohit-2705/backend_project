const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret_key:process.env.CLOUDINARY_SECRET_KEY
});
module.exports = cloudinary;

exports.uploads = (file) =>{
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) =>{
            resolve({
                url: result.url, id: result.public_id
            })}, 
            {
                resource_type: "auto"
            }
            )})}