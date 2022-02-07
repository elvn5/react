function get<T>(url:string, params?:Record<string, string>):Promise<T>{
  const urlObject = new URL(url);
  if(params){
    Object.keys(params).forEach(key => urlObject.searchParams.append(key, params[key]));
  }
  return fetch(urlObject.toString()).then(res=>res.json());
}

export {
  get
};
