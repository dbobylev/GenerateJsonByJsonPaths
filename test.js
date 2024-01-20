vals = []
vals.push(['client','number','123'])
vals.push(['date','string','01.01.2024'])
vals.push(['car', 'object',''])
vals.push(['car.model', 'string','kia'])
vals.push(['car.vin', 'string','xxxzzzyyy'])
vals.push(['car.risks', 'list',''])
vals.push(['car.risks[0]', 'object',''])
vals.push(['car.risks[0].x', 'number','123'])
vals.push(['car.risks[0].y', 'number','567'])
vals.push(['car.risks[1]', 'object', ''])
vals.push(['car.risks[1].x', 'number','123'])
vals.push(['car.risks[1].y', 'number','567'])
vals.push(['car.conds', 'list',''])
vals.push(['car.conds[0]', 'string','agent'])
vals.push(['car.conds[1]', 'string','owner'])
vals.push(['car.conds[2]', 'object','test1'])
vals.push(['car.conds[2].vak', 'string','test2'])
vals.push(['newfield', 'string','testroot'])
vals.push(['aa', 'list',''])
vals.push(['aa[0]', 'list',''])
vals.push(['aa[0][0]', 'string','xx'])
vals.push(['aa[0][1]', 'string','yy'])
vals.push(['aa[1]', 'object',''])
vals.push(['aa[1].xx', 'object',''])
vals.push(['aa[1].xx.vals', 'number','100'])

obj = {}

function GetObjByPathRecursive(pobj, l=[]){
    //console.log(`Старт getobj ${JSON.stringify(pobj)} ${l}`)
    return l.length === 1 ? pobj : GetObjByPathRecursive(pobj[l.shift()], l)
}

for(let i=0;i<vals.length;i++){

    let path = vals[i][0].split(/\[|\]|\]\[|\]\.|\./).filter(i => i);
    let type = vals[i][1];
    let value = vals[i][2];

    //console.log(`Начинаем обрабатывать ${JSON.stringify(path)} ${type} ${value}`)

    // Бёрем ссылку на предпоследний объект в нашем пути, path при этом обрежется
    refobj = GetObjByPathRecursive(obj, path);

    if (type === 'string'){
        refobj[path] = value;
    } else if (type === 'number'){
        refobj[path] = Number(value);
    } else if (type === 'object'){
        refobj[path] = {};
    } else if (type === 'list'){
        refobj[path] = [];
    } 

    //console.log(`Результат ${JSON.stringify(obj)}`)
}

console.log(JSON.stringify(obj,null,2))
