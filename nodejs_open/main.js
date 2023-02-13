var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');


function templateHTML(title, list, body, control){
    return `
    <!doctype html>
    <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${control}
            <p>${body}</p>
        </body>
    </html>
    `
}

function templateList(filelist){
    var list = `<ul>`;
    for(let i=0; i<filelist.length; ++i) {
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    }
    list = list + `</ul>`;
    return list
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    if (pathname === '/') {
        if (queryData.id === undefined) {
            var title = 'Welcome';
            var description = 'Welcome to sweet home!'
            fs.readdir('./data', (err,filelist)=>{
                var list = templateList(filelist);

                var template = templateHTML(title, list, `<h2>${title}</h2>${description}`
                ,`<a href="/create">create</a>`)
                response.writeHead(200);
                response.end(template);
            });
        } else {
            var title = queryData.id;
            fs.readdir('./data', (err,filelist)=>{
                var list = templateList(filelist);
                fs.readFile(`./data/${queryData.id}`, 'utf-8', (err, description)=>{
                    var template = templateHTML(title, list, `<h2>${title}</h2>${description}`, `
                    <a href="/create">create</a> 
                    <a href="/update?id=${queryData.id}">update</a>
                    <form action="/delete_process" method="post">
                        <input type="hidden" name="id" value="${title}">
                        <input type="submit" value="delete">
                    </form>
                    `)
                    response.writeHead(200);
                    response.end(template);
                });            
            });
        }
        
    } else if (pathname === '/create') {
        var title = 'WEB - create';
        var description = `
                <form action="/create_process" method="post">
                <p><input type="text" name="title" placeholder="..test?"></input></p>
                <p>
                    <textarea name="description" placeholder="..contents?"></textarea>
                </p>
                <p><input type="submit" value="Submit"></p>
            </form>
        `
        fs.readdir('./data', (err,filelist)=>{
            var list = templateList(filelist);
            var template = templateHTML(title, list, description, ``);
            response.writeHead(200);
            response.end(template);
        });
    } else if(pathname === '/create_process') {
        var body = "";
        request.on('data', (data)=>{
            body = body + data;
        });
        request.on('end', ()=>{
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;

            fs.writeFile(`data/${title}`, description, 'utf8', (err)=>{
                response.writeHead(302, {Location:`/?id=${title}`});
                response.end();
            });        
        });
        
        // response.writeHead(200);
        // response.end("success");
    } else if(pathname === '/update'){
        var title = queryData.id;
        fs.readdir('./data', (err,filelist)=>{
            var list = templateList(filelist);
            fs.readFile(`./data/${queryData.id}`, 'utf-8', (err, description)=>{
                console.log(description);
                var template = templateHTML(title, list, 
                    `
                    <form action="/update_process" method="post">
                        <p><input type="hidden" name="id" value=${title}></input></p>
                        <p><input type="text" name="title" value=${title}></input></p>
                        <p>
                            <textarea name="description">${description}></textarea>
                        </p>
                        <p><input type="submit" value="Submit"></p>
                    </form>                    
                    `, 
                    `<a href="/create">create</a> <a href="/update?id=${queryData.id}">update</a>`);
                response.writeHead(200);
                response.end(template);
            });            
        });   
    } else if(pathname === '/update_process') {
        var body = "";
        request.on('data', (data)=>{
            body = body + data;
        });
        request.on('end', ()=>{
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;

            fs.rename(`data/${id}`, `data/${title}`, (err)=>{
                fs.writeFile(`data/${title}`, description, 'utf8', (err)=>{
                    response.writeHead(302, {Location:`/?id=${title}`});
                    response.end();
                }); 
            });               
        });
    } else if(pathname === '/delete_process') {
        var body = "";
        request.on('data', (data)=>{
            body = body + data;
        });
        request.on('end', ()=>{
            var post = qs.parse(body);
            var id = post.id;
            fs.unlink(`data/${id}`, (err)=>{
               response.writeHead(302, {Location:`/`});
               response.end(); 
            });
        });
    } else {
        response.writeHead(404);
        response.end(`Not found`);
    }
   
 
});
app.listen(3000);