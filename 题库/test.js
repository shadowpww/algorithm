

Promise.prototype.reject = function(err){
    return new Promise((resolve,reject)=>{
        reject(err);
    })
}

Promise.prototype.resolve = function(value){
    return new Promise((resolve,reject)=>{
        resolve(value);
    })
}

Promise.prototype.catch = function(OnReject){
    return this.then(null,OnReject);
}

Promise.prototype.all = function(promises){
    return new Promise((resolve,reject)=>{
        let res = [];
        let count = 0;
        function processData(index,data){
            res[index] = data;
            count++;
            if(count === promises.length){
               resolve(res);
            }
        }
        for(let i=0;i<promises.length;i++){
            promises[i].then(data=>{
                processData(i,data);
            },reject)
        }
    })
   
} 



Promise.prototype.race = function(promises){
    return new Promise((resolve,reject)=>{
        for(let p of promises){
            p.then(resolve,reject)
        }
    })
}