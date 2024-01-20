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
vals.push(['client','string','123'])
vals.push(['date','string','01.01.2024'])
vals.push(['car', 'object',''])
vals.push(['car.model', 'string','kia'])
vals.push(['car.vin', 'string','xxxzzzyyy'])
vals.push(['car.risks', 'list',''])
vals.push(['car.risks[0]', 'object',''])
vals.push(['car.risks[0].x', 'string','123'])
vals.push(['car.risks[0].y', 'string','567'])
vals.push(['car.risks[1]', 'object', ''])
vals.push(['car.risks[1].x', 'string','123'])
vals.push(['car.risks[1].y', 'string','567'])
vals.push(['car.conds', 'list',''])
vals.push(['car.conds[0]', 'string','agent'])
vals.push(['newfield', 'string','testroot'])
vals.push(['aa', 'list',''])
vals.push(['aa[0]', 'list',''])
vals.push(['aa[0][0]', 'string','xx'])
vals.push(['aa[0][1]', 'string','yy'])
vals.push(['aa[1]', 'object',''])
vals.push(['aa[1].xx', 'object',''])
vals.push(['aa[1].xx.vals', 'string','100'])

obj = {}

function getobj(pobj, l=[]){

    console.log(`Старт getobj ${JSON.stringify(pobj)} ${l}`)
    if (l.length === 1)
    {
        return pobj;
    }
    else
    {
        firstelement = l.shift();
        tempobj = pobj[firstelement]
        return getobj(tempobj, l)
    }
}

function getlastelement(plist = []){
    lastelement = plist[plist.length - 1]
    lastelementnumber = Number(lastelement)
    return isNaN(lastelementnumber) ? lastelement : lastelement
}

for(let i=0;i<vals.length;i++){

    let path = vals[i][0].split(/\[|\]|\]\[|\]\.|\./).filter(i => i);
    let type = vals[i][1];
    let value = vals[i][2];

    console.log(`Начинаем обрабатывать ${JSON.stringify(path)} ${type} ${value}`)

    if (type === 'string'){
      tempobj = getobj(obj, path);
      index = getlastelement(path);
      tempobj[index] = value;
    }

    if (type === 'object'){
        tempobj = getobj(obj, path);
        index = getlastelement(path);
        tempobj[index] = {};
    }

    if (type === 'list'){
        tempobj = getobj(obj, path);
        index = getlastelement(path);
        tempobj[index] = [];
    }

    console.log('Результат' + JSON.stringify(obj))
}

console.log(JSON.stringify(obj,null,2))
