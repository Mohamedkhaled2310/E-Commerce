
const base_url = "https://dummyjson.com/";
 export default async function handleData(endPoint,success,error,startLoading,endLoading){
    const res = await fetch(`${base_url}${endPoint}`);
    startLoading();
    try{    
        if(res.ok){
        const data = await res.json();
            success(data);
        // return data;
        }else{
            throw new Error("Error");
        }
    }catch(e){
        error(e);
    }finally{
        endLoading();
    }

 }