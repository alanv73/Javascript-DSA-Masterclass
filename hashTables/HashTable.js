class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }


    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    mySet(key, val){
        let hashedKey = this._hash(key);
        if(!this.keyMap[hashedKey]){
            this.keyMap[hashedKey] = [[key, val]];
        } else {
            let found = false;
            this.keyMap[hashedKey].forEach((item) => {
                if(item[0] === key) {
                    item[1] = val;
                    found = true;                    
                }
            });
            if(!found) this.keyMap[hashedKey].push([key, val]);
        }
    }

    set(key, val){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, val]);
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
    }

    myGet(key){
        let hashedKey = this._hash(key);
        if(!this.keyMap[hashedKey]) return undefined;
        let val = undefined;
        this.keyMap[hashedKey].forEach((item) => {
            if(item[0] === key) val = item[1];
        });
        return val;
    }

    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    myKeys(){
        let keys = [];
        this.keyMap.forEach((item) => {
            if(item){
                item.forEach((key) => {
                    keys.push(key[0]);
                });
            }
        });
        return keys;
    }

    myValues(){
        let values = [];
        this.keyMap.forEach((item) => {
            if(item){
                item.forEach((value) => {
                    if(!values.includes(value[1])) values.push(value[1]);
                });
            }
        });
        return values;
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000");
ht.set("yellow","#FFFF00");
ht.set("olive","#808000");
ht.set("salmon","#FA8072");
ht.set("lightcoral","#F08080");
ht.set("mediumvioletred","#C71585");
ht.set("plum","#DDA0DD");
ht.set("purple","#DDA0DD");
ht.set("violet","#DDA0DD");

ht.keys().forEach(function(key){
  console.log(ht.get(key));
})