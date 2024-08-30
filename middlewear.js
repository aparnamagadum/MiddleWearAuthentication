export function Info(req , res , next){
    const date=new Date;
    const method=req.method;
    const url=req.url;
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(date.toLocaleDateString()+" "+date.toLocaleTimeString()+" "+method +" "+url +" "+duration+"ms");
    });
    next();
}