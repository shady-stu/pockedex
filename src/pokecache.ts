

export type CacheEntry<T>
 = {createdAt: number, val: T};


export class Cache{
#cache: Map<string,CacheEntry<any>>;
#reapIntervalId:NodeJS.Timeout|undefined=undefined;
#interval:number

constructor(interval:number){
    this.#cache = new Map();
    this.#interval=interval
    this.#reapIntervalId = undefined
    this.#startReapLoop()
}
add<T>(key:string,val:T){
 return this.#cache.set(key, {createdAt: Date.now(),val})

}
get<T>(key: string): T | undefined {
    const entry = this.#cache.get(key);

    if (!entry) {
      return undefined;
    }

    return entry.val as T;
  }
#reap(){
 const expirationTime = Date.now() - this.#interval
  for (const[key,val] of this.#cache.entries()){
    if(val.createdAt<expirationTime){this.#cache.delete(key)}  }  
  
}
#startReapLoop(){
 this.#reapIntervalId =setInterval(()=>{
    this.#reap()
}, this.#interval)}

stopReapLoop(){
 clearInterval(this.#reapIntervalId)
 this.#reapIntervalId=undefined
}

}
 