const  express = require('express'); /*used to laod express module in NodeJS*/

const = fileUpload require('express-fileUpload');
const cors =require('cors'); //cors stand for cross-origin-resource sharing
const bodyParser =require('body-parser');
const morgan = require('morgan');
const_ = require('lodash');

const app = express();


//enable files to upload to
app.use(fileUpload({
    createParentPath:true

}));

//add other middleware

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser..urlencoded(urlencoded({extended: true}));
app.use(morgan('dev'));

//start append
const port =process.env.PORT ||3000;
app.listen(port,() =>

console.log('An app is listening on port ${port}.')
);

app.post('/upload-avatar', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('./uploads/' + avatar.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


//
//app.post('/upload-avatar',async (req,res) =>{
//try{
//    if(!req.files){
//        res.send({
//        status:false,
//        message = "No file uploaded"
//
//    })}
//    else{
//        //use name of input filed(i.e. avatart to let
//        let avatar = req.files.avatar;
//        //use mv() method to place the file
//    }
//}})
//}
