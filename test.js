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
vals[0] = ['$.client','string','123']
vals[1] = ['$.date','string','01.01.2024']
vals[2] = ['$.car', 'object','']
vals[3] = ['$.car.model', 'string','kia']
vals[4] = ['$.car.vin', 'string','xxxzzzyyy']
vals[5] = ['$.car.risks', 'list','']
vals[6] = ['$.car.risks[0]', 'object','']
vals[7] = ['$.car.risks[0].x', 'string','123']
vals[8] = ['$.car.risks[0].y', 'string','567']
vals[7] = ['$.car.risks[1]', 'object', '']
vals[7] = ['$.car.risks[1].x', 'string','123']
vals[8] = ['$.car.risks[1].y', 'string','567']
vals[9] = ['$.car.conds', 'list','']
vals[10] = ['$.car.conds[0]', 'string','agent']
vals[11] = ['$.car.conds[1]', 'string','lox']

obj = {}



function getobj(l = []){
    if (length(l) === 1 && l[0] === '$')
    
    return 
}

for(let i=0;i<12;i++){

  if (vals[i][1] === 'object'){
    
  }

  console.log(vals[i][0].split('.'))
}
