var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
 'article-one' :
{
    title :' Article one I am muthu webapp',
    heading:'Article One',
    date : 'NOV 12,2016 ',
    content : `
    <P> This is content of my first articleThis is content of my first articleThis is content of my first articleThis is content of my     first article This is content of my first article</P>,
            <P>
                This is content of my first articleThis is content of my first articleThis is content of my first articleThis is content of my first articleThis is content of my first article,
                <P>
                    This is content of my first articleThis is content of my first articleThis is content of my first articleThis is content of my first articleThis is content of my first article,
        
        
                    
                        </P> `
    
    
},
'article-two' :{ 
    title :' Article two I am muthu webapp',
    heading:'Article two',
    date : 'NOV 12,2016 ',
    content : `
    <P> This is content of my second articleThis is content of my second article
        
                  
                        </P> `
     },
'article-three' :{

 title :' Article three I am muthu webapp',
    heading:'Article three',
    date : 'NOV 12,2016 ',
    content : `
    <P> This is content of my third articleThis is content of my thirdarticle
        
               .   
                        </P>  }
};

function createTemplate(data)

{
 var title =data.title;
 var heading =data.heading;
 var date = data.date;
 var content=data.content;
    
var htmltemplate =

   ` <html>
      <head>
        <title>
           ${title}
        </title>
         <meta name ="view port" content ="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
                   </head>
    <body>
        <div class="container">
            
            <div>
                <a href ="/">Home</a>
            </div>
            <hr/>
        <h3>
            ${heading}
        </h3>
        
        <div>
            ${date}
        </div>
        <div>
            ${content}
    .           
        </div>
        </div>
        
                    
        
        </body>
    </html>`
          
    ;
    return htmltemplate;
} 



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  
});

app.get('/:articlename', function (req, res)
{
var articlename =req.params.articlename;
  res.send(createTemplate(articles[articlename]));
 });
 
 app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
 });
 
 app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
 });
 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
