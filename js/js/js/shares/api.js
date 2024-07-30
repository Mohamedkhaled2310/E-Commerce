
const base_url = "https://dummyjson.com/";
 export async function handleData(endPoint,success,error,startLoading,endLoading){
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
// products/categories
 }

 async function fetchData(endpoint) {
  try {
    const res = await fetch(`https://dummyjson.com/${endpoint}`);
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error("Something went Wrong");
    }
  } catch (err) {
    return err;
  }
}

export async function getManyRequests(uiHandellers,requestConfig){
  const {startLoading,errorHandlle,stopLoading} = uiHandellers;

  startLoading();
  try{
   const mappedRequests = requestConfig.map((item, index) =>
      fetchData(item.endPoint)
    );
  const results = await Promise.all(mappedRequests);

  console.log(results);
  results.forEach((element,index) =>{
    if(element instanceof Error){
      throw new Error("somethimg wrong moo");
    }
     
    requestConfig[index].success(element);
  })

  return results;

  }catch(e){
    errorHandlle(e)
  }finally{
    stopLoading();
  }
  
}


