x =
{
    'client' : 123,
    'date': "01.01.2024",
    'car': {
        "model": "kia",
        "vin": "xxxzzzyyy",
        "risks" : [
            {
                "x": 123,
                "y": 567
            },
            {
                "x": 123,
                "y": 567
            }
        ],
        "conds" : ['agent', 'lox']
    }
}

vals = []
vals[0] = ['client','string','123']
vals[1] = ['date','string','01.01.2024']
vals[2] = ['car', 'object','']
vals[3] = ['car.model', 'string','kia']
vals[4] = ['car.vin', 'string','xxxzzzyyy']
vals[5] = ['car.risks', 'list','']
vals[6] = ['car.risks[0]', 'object','']
vals[7] = ['car.risks[0].x', 'string','123']
vals[8] = ['car.risks[0].y', 'string','567']
vals[7] = ['car.risks[1]', 'object', '']
vals[7] = ['car.risks[1].x', 'string','123']
vals[8] = ['car.risks[1].y', 'string','567']
vals[9] = ['car.conds', 'list','']
vals[10] = ['car.conds[0]', 'string','agent']
vals[11] = ['car.conds[1]', 'string','lox']

obj = {}



function getobj(pobj, l=[]){
    co

    if (l.length === 1)
    {
        return pobj;
    }
    else
    {
        s = l.shift();
        return getobj(pobj[s], l)
    }
}

for(let i=0;i<8;i++){

    let path = vals[i][0].split(/\[|\]\.|\./);
    let type = vals[i][1];
    let value = vals[i][2];

    if (type === 'string'){
      o = getobj(obj, path);
      o[path[path.length-1]] = value;
    }

    if (type === 'object'){
        o = getobj(obj, path);
        o[path[path.length-1]] = {};
    }

    if (type === 'list'){
        o = getobj(obj, path);
        o[path[path.length-1]] = [];
    }
}

console.log(JSON.stringify(obj,null,2))
